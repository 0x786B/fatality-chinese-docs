# 🎮 cuser_cmd

`cuser_cmd` 是用户命令类型。
_________________

### command_number

[![字段][这是一个常规字段，必须使用点 (.) 访问。]rw]
[![只读][此字段是只读的，不能修改。]r]

类型: `int`

当前命令编号。

### get_button

[![方法][此字段是一个方法，必须使用冒号(:)来调用。]rw]

返回指定按钮的状态。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `button` | [`input_bit_mask`](/api/enums/input-bit-mask) | 要检查的按钮。 |

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| `bool` | 如果按钮被按下，返回 `true`，否则返回 `false`。 |

**示例**

```lua
if cmd:get_button(input_bit_mask.in_use) then
    -- ...
end
```

### set_button

[![方法][这是一个方法，必须使用冒号 (:) 调用。]rw]

设置指定按钮的状态。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `button` | [`input_bit_mask`](/api/enums/input-bit-mask) | 按钮。 |

**示例**

```lua
cmd:set_button(input_bit_mask.in_use)
```

### remove_button

[![方法][这是一个方法，必须使用冒号 (:) 调用。]rw]

移除指定按钮。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `button` | [`input_bit_mask`](/api/enums/input-bit-mask) | 按钮。 |

**示例**    

```lua
cmd:remove_button(input_bit_mask.in_attack)
```

### get_viewangles

[![方法][这是一个方法，必须使用冒号 (:) 调用。]rw]

返回当前命令的视角角度。

**参数**

无。

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| [`vector`](/api/types/vector "这是一个通用的3D向量类型(x, y, z)。") | 当前命令的视角角度。 |

**示例**

```lua
local ang = cmd:get_viewangles();
```

### set_viewangles

[![方法][这是一个方法，必须使用冒号 (:) 调用。]rw]

设置当前命令的视角角度。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `angles` | [`vector`](/api/types/vector "这是一个通用的3D向量类型(x, y, z)。") | 新的视角角度。 |

**示例**

```lua
local target_angles = vector(0, 0, 0)
cmd:set_viewangles(target_angles)
```

### lock_angles

[![方法][这是一个方法，必须使用冒号 (:) 调用。]rw]

锁定当前命令的视角角度。

**参数**

无。

**示例**

```lua
local target_angles = vector(0, 0, 0)
cmd:set_viewangles(target_angles)
cmd:lock_angles()
```

### get_forwardmove

[![方法][这是一个方法，必须使用冒号 (:) 调用。]rw]

返回命令的前进移动量。(0.0 - 1.0)

**参数**

无。

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| `float` | 当前命令的前进移动量。 |

**示例**

```lua
local fmove = cmd:get_forwardmove();
```

### get_leftmove

[![方法][这是一个方法，必须使用冒号 (:) 调用。]rw]

返回命令的左侧移动量。 (0.0 - 1.0)

**参数**

无。

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| `float` | 当前命令的左侧移动量。 |

**示例**

```lua
local lmove = cmd:get_leftmove();
```

### set_forwardmove

[![方法][这是一个方法，必须使用冒号 (:) 调用。]rw]

设置命令的前进移动量。 (0.0 - 1.0)

**参数**    

| 类型 | 描述 | 
| ---- | ----------- |
| `float` | 新的前进移动量。 |

**示例**

```lua  
cmd:set_forwardmove(1.0);
```

### set_leftmove

[![方法][这是一个方法，必须使用冒号 (:) 调用。]rw]

设置命令的左侧移动量。 (0.0 - 1.0)

**参数**

| 类型 | 描述 | 
| ---- | ----------- |
| `float` | 新的左侧移动量。 |

**示例**

```lua
cmd:set_leftmove(1.0);
```

### rotate_movement

[![方法][这是一个方法，必须使用冒号 (:) 调用。]rw]

旋转命令的移动量。

**参数**    

| 类型 | 描述 | 
| ---- | ----------- |
| `float` | 旋转角度。 |

**示例**

```lua
cmd:set_leftmove(0.0);
cmd:set_forwardmove(1.0);
cmd:rotate_movement(target_yaw);
```



