# 💣cs2_grenade_projectile

此类型表示一个手榴弹投射物。

> 此类型继承自 [`base_entity`](/api/entities/base-entity "此类型表示一个基础游戏实体。") 类型。其所有基础方法和字段在此类型中同样可用。

_________________

### get_abs_origin

[![方法][此字段是一个方法，必须使用冒号(:)调用。]rw]

返回绝对原点位置（用于渲染的位置）。

**参数**

无。

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| [`vector`](/api/common-types/vector "此类型是一个常见的3D向量 (x, y, z)。") | 原点位置。 |

**示例**

```lua
local org = wep:get_abs_origin();
```

### get_grenade_type

[![方法][此字段是一个方法，必须使用冒号(:)调用。]rw]

返回手榴弹类型。

**参数**

无。

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| `int` | 手榴弹类型。 |

**示例**

```lua
local type = gren:get_grenade_type();
``` 