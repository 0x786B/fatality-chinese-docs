# 🔍entities类示例

这里提供了一些常用的实体类操作实例
_________________

### 🆕获取各种信息

说明: `这里展示了如何获取玩家实体的各种信息`

```lua
local lp = entities.get_local_pawn()
--获取你自己 (C_BaseEntity,C_CSPlayerPawnBase,C_CSPlayerPawn)
if lp == nil then return end
--防止nil导致崩溃
local m_iHealth = lp.m_iHealth:get()
print(m_iHealth)
-- 血量值0-100
local m_bPrevHelmet = lp.m_bPrevHelmet:get()
print(m_bPrevHelmet)
-- 是否带头甲 true or false 可以理解为全甲还是半甲
local m_ArmorValue = lp.m_ArmorValue:get()
print(m_ArmorValue)
-- 护甲值0-100
local m_bIsScoped = lp.m_bIsScoped:get()
print(m_bIsScoped)
-- 是否开镜 true or false
local m_iTeamNum = lp.m_iTeamNum:get()
print(m_iTeamNum)
-- 阵营2=T 3=CT
local m_fFlags = lp.m_fFlags:get()
print(m_fFlags)
--65664跳跃
--但是最好理解为在空中因为不仅仅只有跳跃的时候再空中
--例如你从高出下落的时候也算在空中
--65665站着
--65666跳蹲
--65667蹲下
local velocity = lp:get_abs_velocity()
--获取自身的velocity也就是所谓的移动速度向量
if velocity:length() > 0.1 then
    print("移动")
end
--通过velocity的length来判断是否移动
local slowwalk = gui.ctx:find("misc>movement>slowwalk")
if velocity:length() > 0.1 then
    if slowwalk:get_value():get() then
        print("静步/慢走/假走?")
    else
        print("正常移动")
    end
end
--通过判断slowwalk开关来判断移动的类型
```
### 🤪获取角色状态
[![自定义函数][这是一个自定义函数]rw]

说明: `封装一个get_player_state()可以快速获取状态`

```lua
local function get_player_state()
    local lp = entities.get_local_pawn()
    if lp == nil then return end
    local m_fFlags = lp['m_fFlags']:get()
    local velocity = lp:get_abs_velocity()
    local slowwalk = gui.ctx:find("misc>movement>slowwalk")
    if m_fFlags == 65664 then
        return "in air"--在空中,也能当在跳跃
    elseif m_fFlags == 65666 then
        return "in air duck"--在空中蹲下,可以理解为跳蹲
    elseif m_fFlags == 65667 then
        return velocity:length() > 0.1 and "in duck moving" or "in duck" --蹲下移动和蹲下不动
    elseif velocity:length() > 0.1 then
        return slowwalk:get_value():get() and "in slowwalk" or "in moving" --慢走和正常移动
    else
        return "in standing"--站着不动
    end
end
```
**用法示例**
```lua
events.present_queue:add(function()
    local d = draw.surface;
    d.font = draw.fonts['gui_main'];
    local me_state = get_player_state()
    local x, y = 20, 320
    d:add_text(draw.vec2(x, y),
        "player state:" .. me_state,
        draw.color.white()
    );
end)
```

### 🤪获取玩家列表

[![自定义函数][这是一个自定义函数]rw]

说明: `获取当前对局中的所有玩家，并返回一个包含所有玩家的表`

```lua
function entities.get_players(enemy)
    local players = {}
    entities.players:for_each(function(entry)
        if entry.handle:valid() then
            local player = entry.handle:get()
            if enemy then
                if player:is_enemy() then
                    table.insert(players, player)
                end
            else
                table.insert(players, player)
            end
        end
    end)
    return players
end
```

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `enemy` | `boolean` | （可选）如果为 true，则只返回敌人。 |

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| [`table[cs2_player_pawn]`](/api/entities/base-entity/cs2-player-pawn) | 包含玩家实体的表|

**用法示例**

```lua
-- 获取所有玩家
local all_players = entities.get_players()

-- 只获取敌人
local enemies = entities.get_players(true)

-- 遍历玩家
for _, player in ipairs(all_players) do
    -- 对每个玩家进行操作
    print(player:get_name())
end
```

### 🔪自动反背刺功能

[![自定义函数][这是一个自定义函数]rw]

说明: 通过`entities.get_players`来实现全自动化的防止背刺功能

当敌人拿着刀跳过来的时候你将会自动面向他防止被背刺一刀捅死

**完整实现**
```lua
--需要用到的控件
local menu_aa = {
    Pitch = gui.ctx:find("rage>anti-aim>angles>pitch"),       -- 获取俯仰角控件
    Yaw = gui.ctx:find("rage>anti-aim>angles>yaw"),           -- 获取偏航角控件
    Yaw_base = gui.ctx:find("rage>anti-aim>angles>yaw base"), -- 获取偏航基准控件
}

-- 将索引转换为位值（用于设置下拉框的值）
-- 例如：索引1转换为2^0=1，索引2转换为2^1=2，索引3转换为2^2=4，以此类推
local function toraw(index)
    return 2 ^ (index - 1)
end

-- 设置下拉框的值的辅助函数
-- @param combobox 要设置的下拉框控件
-- @param value 要设置的值的索引
local set_combox_value = function(combobox, value)
    local bits = combobox:get_value():get()  -- 获取当前值
    bits:reset()                             -- 重置当前值
    bits:set_raw(toraw(value))               -- 设置新值
    combobox:get_value():set(bits)           -- 应用新值到控件
end

-- 获取游戏中的玩家列表
-- @param enemy 如果为true，则只返回敌人；否则返回所有玩家
-- @return 玩家对象的表
function entities.get_players(enemy)
    local players = {}
    entities.players:for_each(function(entry)
        if entry.handle:valid() then                 -- 检查玩家句柄是否有效
            local player = entry.handle:get()
            if enemy then                            -- 如果只需要敌人
                if player:is_enemy() then            -- 检查玩家是否是敌人
                    table.insert(players, player)    -- 将敌人添加到列表
                end
            else
                table.insert(players, player)        -- 将所有玩家添加到列表
            end
        end
    end)
    return players
end

-- 计算两个玩家之间的距离
-- @param p1 第一个玩家
-- @param p2 第二个玩家
-- @return 两个玩家之间的距离（单位：游戏单位）
local function get_player_distance(p1, p2)
    return math.floor(p1:get_abs_origin():dist(p2:get_abs_origin()) + 0.5)
end

-- 检测是否有敌人可能进行背刺（拿刀并且距离很近）
-- @param lp 本地玩家对象
-- @return 如果有敌人可能进行背刺则返回true，否则返回false
local function is_backstab(lp)
    for _, player in ipairs(entities.get_players(true)) do    -- 遍历所有敌人
        local weapon = player:get_active_weapon()             -- 获取敌人当前武器
        if weapon == nil then return false end                -- 如果无法获取武器，返回false
        if weapon:get_type() == 0 then                        -- 如果武器类型是0（刀）
            if get_player_distance(lp, player) < 200 then     -- 如果距离小于200单位
                return true                                    -- 可能会被背刺
            end
        end
    end
    return false                                              -- 没有背刺威胁
end

-- 反背刺功能实现
-- @param lp 本地玩家对象
local function anti_backstab(lp)
    -- 设置默认的反自瞄角度
    set_combox_value(menu_aa.Pitch, 2)      -- 默认Down低头
    set_combox_value(menu_aa.Yaw, 2)        -- 默认Backwards背身
    set_combox_value(menu_aa.Yaw_base, 1)   -- 默认Viewangles根据鼠标视角
    
    -- 如果检测到可能的背刺威胁，改变角度设置
    if is_backstab(lp) then
        set_combox_value(menu_aa.Pitch, 1)   -- 反背刺模式下抬头None
        set_combox_value(menu_aa.Yaw, 1)     -- 反背刺模式下向前None
        set_combox_value(menu_aa.Yaw_base, 2) -- 反背刺模式下自动面向敌人
    end
    
    -- 重置所有菜单控件（应用更改）
    for _, menu in pairs(menu_aa) do
        menu:reset()
    end
end

-- 注册移动事件回调，每次移动时检查并应用反背刺功能
events.create_move:add(function(cmd)
    local lp = entities.get_local_pawn();    -- 获取本地玩家
    
    -- 检查游戏状态，如果不在游戏中或未连接，则不执行
    if lp == nil or not game.engine:in_game() or not game.engine:is_connected() then
        return
    end
    
    -- 执行反背刺功能
    anti_backstab(lp)
end)

```