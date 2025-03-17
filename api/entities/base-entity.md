# 📦 base_entity

`base_entity` 类型表示一个基础游戏实体。

> 此类型可能会被返回给任何其他抽象实体类，但在内部会指向正确的类型。

_________________

### __index

[![函数][这是一个函数，必须使用点(.)来调用。]rw]

尝试在此类中搜索字段。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `name` | `string` | 字段名称。 |

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| [`schema_accessor_t`](/api/entities/base-entity/schema-accessor-t "此类型表示一个特殊的结构，它引用实体对象中的某个字段。") | 访问器实例。 |

**示例**

```lua
local health = player.m_iHealth;
local health = player['m_iHealth']; -- 这种方式也可以
```

### get_class_name

[![方法][这是一个函数，必须使用点(:)来调用。]rw]

获取实体的类名。

**参数**

无。

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| `string` | 实体的类名。 |

**示例**

```lua
local name = entity:get_class_name()
```

### to_weapon_base_gun

[![方法][这是一个函数，必须使用点(:)来调用。]rw]

安全地将实体转换为cs2_weapon_base_gun，如果不是weapon_base_gun则返回nil。

**参数**

无。

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| [`cs2_weapon_base_gun?`](/api/entities/base-entity/cs2-weapon-base-gun) | 转换后的实体。 |

**示例**

```lua
local gun = entity:to_weapon_base_gun()
```

### to_weapon_base

[![方法][这是一个函数，必须使用点(:)来调用。]rw]

安全地将实体转换为cs2_weapon_base，如果不是weapon_base则返回nil。

**参数**

无。

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| [`cs2_weapon_base?`](/api/entities/base-entity/cs2-weapon-base) | 转换后的实体。 |

**示例**

```lua
local wpn = entity:to_weapon_base()
```

### to_player_pawn

[![方法][这是一个函数，必须使用点(:)来调用。]rw]

安全地将实体转换为cs2_player_pawn，如果不是player_pawn则返回nil。

**参数**

无。

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| [`cs2_player_pawn?`](/api/entities/base-entity/cs2-player-pawn) | 转换后的实体。 |

**示例**

```lua
local pawn = entity:to_player_pawn()
```

### to_player_controller

[![方法][这是一个函数，必须使用点(:)来调用。]rw]

安全地将实体转换为cs2_player_controller，如果不是player_controller则返回nil。

**参数**

无。

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| [`cs2_player_controller?`](/api/entities/base-entity/cs2-player-controller) | 转换后的实体。 |    

**示例**

```lua
local controller = entity:to_player_controller()
```