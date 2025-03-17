# 🔫cs2_weapon_base_gun

此类型表示一个 `CCSWeaponBaseGun` 类。

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

### get_max_speed

[![方法][此字段是一个方法，必须使用冒号(:)调用。]rw]

返回持有此武器时的最大玩家速度。

**参数**

无。

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| `float` | 最大速度，单位为 UPS。 |

**示例**

```lua
local spd = wep:get_max_speed();
```

### get_inaccuracy

[![方法][此字段是一个方法，必须使用冒号(:)调用。]rw]

返回当前的不准确度值。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `mode` | [`csweapon_mode`](/api/entities/csweapon-mode "此枚举表示武器的射击模式。") | 武器模式。 |

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| `float` | 不准确度值。 |

**示例**

```lua
local inacc = wep:get_inaccuracy(csweapon_mode.primary_mode);
```

### get_spread

[![方法][此字段是一个方法，必须使用冒号(:)调用。]rw]

返回当前的扩散值。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `mode` | [`csweapon_mode`](/api/entities/csweapon-mode "此枚举表示武器的射击模式。") | 武器模式。 |

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| `float` | 扩散值。 |

**示例**

```lua
local spread = wep:get_spread(csweapon_mode.primary_mode);
```

### get_id

[![方法][此字段是一个方法，必须使用冒号(:)调用。]rw]

返回武器ID。

**参数**

无。

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| [`weapon_id`](/api/entities/weapon-id "此枚举表示游戏中各种武器的唯一标识符。") | 武器ID。 |

**示例**

```lua
local wep_id = wep:get_id();
```

### get_type

[![方法][此字段是一个方法，必须使用冒号(:)调用。]rw]

返回武器类型。

**参数**

无。

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| [`csweapon_type`](/api/entities/csweapon-type "此枚举表示游戏中的武器类型。") | 武器类型。 |

**示例**

```lua
local type = wep:get_type();
```

### get_data

[![方法][此字段是一个方法，必须使用冒号(:)调用。]rw]

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

### is_gun

[![方法][此字段是一个方法，必须使用冒号(:)调用。]rw]

如果此武器是**枪械**，则返回 `true`。

**参数**

无。

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| `bool` | 如果是枪械则为 `true`。 |

**示例**

```lua
if wep:is_gun() then
    -- ...
end
```

### is_attackable

[![方法][此字段是一个方法，必须使用冒号(:)调用。]rw]

如果你可以用此武器攻击，则返回 `true`。

**参数**

无。

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| `bool` | 如果可以攻击则为 `true`。 |

**示例**

```lua
if wep:is_attackable() then
    -- ...
end
```

### has_secondary_attack

[![方法][此字段是一个方法，必须使用冒号(:)调用。]rw]

如果此武器有次要攻击模式，则返回 `true`。

**参数**

无。

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| `bool` | 如果有次要攻击模式则为 `true`。 |

**示例**

```lua
if wep:has_secondary_attack() then
    -- ...
end
```

### has_spread

[![方法][此字段是一个方法，必须使用冒号(:)调用。]rw]

如果此武器有扩散（例如，刀没有任何扩散），则返回 `true`。

**参数**

无。

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| `bool` | 如果有扩散则为 `true`。 |

**示例**

```lua
if wep:has_spread() then
    -- ...
end
``` 