# 🖥️gui类示例
本页面将介绍如何使用一部分gui类中的控件,如有不足之处请见谅。

_________________

### ☑️如何创建一个单选框

这里展示了如何创建一个fatality的AA中的Pitch同款选择框

```lua
local lua_a = gui.ctx:find("lua>elements a")
local list = { "None", "Down", "Up", "Zoro", "Custom" }
local pitch_id = "my_pitch"
local pitch = gui.combo_box(gui.control_id(pitch_id))
local make_pitch = gui.make_control("Pitch",pitch)
for _, select in ipairs(list) do
    local selectable = gui.selectable(gui.control_id(pitch_id..">"..select), select)
    pitch:add(selectable)
end
lua_a:add(make_pitch)
lua_a:reset();
```
### ☑️☑️如何创建一个多选框

这里展示了如何创建一个fatality的RAGE中的Hitboxes的同款多选框

```lua
local lua_a = gui.ctx:find("lua>elements a")
local hitbox = { "Head", "Chest", "Stomach", "Arms", "Legs", "Feet" }
local hitboxes_id = "my_hitboxes"
local hitboxes = gui.combo_box(gui.control_id(hitboxes_id))
hitboxes.allow_multiple = true --启用多选模式,默认为单选
local make_hitbox = gui.make_control("Hitboxes",hitboxes)
for _, select in ipairs(hitbox) do
    local selectable = gui.selectable(gui.control_id(hitboxes_id .. ">" .. select), select)
    hitboxes:add(selectable)
end
lua_a:add(make_hitbox)
lua_a:reset();
```
### ℹ️如何操作选择框(combo_box)

#### ☑️单选框

我们这里直接使用AA中的Pitch的单选框来展示如何读取或是设置一个单选框

```lua
local pitch = gui.ctx:find("rage>anti-aim>angles>pitch")
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

set_combox_value(pitch, 1)--选中第一个,也就是None,以此类推2选中Down,3选中Up,4选中Zoro,5选中Custom

```
#### ☑️☑️多选框

由于一些原因，不得不使用这种奇怪的方式来设置多选框的值,如果您有更好的方法可以联系我

```lua
local hitboxes = gui.ctx:find("rage>weapon>general>weapon>hitboxes")

local hitbox_values = {

    none = 2, 

    head = 1,
    chest = 4,
    stomach = 8,
    legs = 16,
    feet = 32,
    arms = 64,
    
    head_chest = 7,
    head_chest_stomach = 15,
    head_chest_stomach_legs = 31,
    head_chest_stomach_legs_feet = 63,
    all = 127
}

-- 设置预定义的选项
function set_hitbox_preset(preset_name)
    local value = hitbox_values[preset_name]
    if value then
        local value_param = hitboxes:get_value()
        local bits = value_param:get()
        bits:set_raw(value)
        value_param:set(bits)
        return true
    end
    return false
end
```

### ➡️如何创建一个滑块条

这里展示了如何创建一个fatality的RAGE中的HS scale DMG的同款滑块条,并且使用了另一种方式来管理UI组件


```lua
local lua_a = gui.ctx:find("lua>elements a")
local my_menu = {
    id = {},
    menu = {},
}
my_menu.id = {
    Hit_Chance = gui.slider(gui.control_id("my_hc"), -1, 100, {
    {min = 1, add = 0, format = '%.0f%%' },
    {min = -1, format = 'Auto'}}),

    Pointscale = gui.slider(gui.control_id("my_mp"), 0, 100, { "%.0f%%" }),

    Min_damage = gui.slider(gui.control_id("my_dmg"), 0, 125, {
    {min = 101, add = -100, format = 'HP+%.0f' },
    {min = 1, add = 0, format = '%.0fhp' },
    {min = 0, format = 'Lethal' } }),
}
my_menu.menu = {
    Hit_Chance = gui.make_control('Hit chance', my_menu.id.Hit_Chance),
    Pointscale = gui.make_control('Pointscale', my_menu.id.Pointscale),
    Min_damage = gui.make_control('Min damage', my_menu.id.Min_damage),
}
lua_a:add(my_menu.menu.Hit_Chance)
lua_a:add(my_menu.menu.Pointscale)
lua_a:add(my_menu.menu.Min_damage)
lua_a:reset(); --在添加多个组件之后一定要调用一次reset()来避免组件堆叠
```
