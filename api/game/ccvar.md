# 🎮 ccvar

用法：`game.cvar:{method}`

此类型表示游戏的cvar系统。
_________________

### find

[![方法][此字段是一个方法，必须使用冒号(:)来调用。]rw]

以这个名字获取游戏的cvar。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `name` | `string` | 要查找的cvar的名称。 |

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| [`convar`](/api/game/ccvar/convar.md) | 找到的cvar，如果找不到则返回nil。 |

**示例**

```lua
local sv_quantize_movement_input = game.cvar:find('sv_quantize_movement_input')
if not sv_quantize_movement_input then
    error('sv_quantize_movement_input not found')
end
```


