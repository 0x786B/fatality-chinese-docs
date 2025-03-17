# 🎮cinput_system

用法：`game.input_system:{method}`

此类型代表游戏的控制输入系统。

_________________
### vk_to_button_code

[![方法][此字段是一个方法，必须使用冒号(:)来调用。]rw]

将虚拟键转换为按钮代码。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `vk` | `int` | 虚拟键。 |

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| `int` | 按钮代码。 |

**示例**

```lua
local button = game.input_system:vk_to_button_code(0x41); -- 'A'
```