# 🎮 ccsgo_input

用法：`game.input.{field_or_method}`

此类型代表游戏的命令输入系统。

_________________
### in_third_person

[![字段][此字段是一个普通字段，必须使用点(.)来访问。]rw]
[![只读][此字段是只读字段，你不能更改其值。这不适用于子字段（如果有的话）。]r]

类型：`bool`

如果当前处于第三人称视角则为 `true`。

### get_view_angles

[![方法][此字段是一个方法，必须使用冒号(:)来调用。]rw]

返回当前相机视角。

**参数**

无

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| [`vector`](/api/common-types/vector "这是一个常见的3D向量类型 (x, y, z)。") | 视角。 |

**示例**

```lua
local ang = game.input:get_view_angles();
```

## set_view_angles

[![方法][此字段是一个方法，必须使用冒号(:)来调用。]rw]

设置新的相机视角。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `ang` | [`vector`](/api/common-types/vector "这是一个常见的3D向量类型 (x, y, z)。") | 视角。 |

**返回值**

无。

**示例**

```lua
game.input:set_view_angles(math.vec3(0, 0, 0));
```