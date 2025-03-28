# 🔫cs2_weapon_base

此类型表示一个 `CCSWeaponBase` 实体。

> 此类型继承自 [`base_entity`](/api/entities/base-entity "此类型表示一个基础游戏实体。") 类型。其所有基础方法和字段也可在此类型中使用。

_________________

### get_abs_origin

[![方法][此字段是一个方法，必须使用冒号(:)来调用。]rw]

返回绝对坐标（用于渲染的坐标）。

**参数**

无。

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| [`vector`](/api/common-types/vector "此类型是一个常见的3D向量 (x, y, z)。") | 坐标。 |

**示例**

```lua
local org = wep:get_abs_origin();
```

### get_id

[![方法][此字段是一个方法，必须使用冒号(:)来调用。]rw]

返回武器ID。

**参数**

无。

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| [`weapon_id`](/api/entities/weapon-id) | 武器ID。 |

**示例**

```lua
local wep_id = wep:get_id();
```

### get_type

[![方法][此字段是一个方法，必须使用冒号(:)来调用。]rw]

返回武器类型。

**参数**

无。

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| [`csweapon_type`](/api/entities/csweapon-type) | 武器类型。 |

**示例**

```lua
local type = wep:get_type();
```

### get_data

[![方法][此字段是一个方法，必须使用冒号(:)来调用。]rw]

返回武器的静态数据。

**参数**

无。

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| [`ccsweapon_base_vdata`](/api/entities/base-entity/ccsweapon_base_vdata) | 武器数据。 |

**示例**

```lua
local data = wep:get_data();
```