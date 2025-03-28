# 🎮 game_event_t

`game_event_t` 是描述游戏事件的类型。
_________________


### get_name

[![方法][这是一个方法，必须使用冒号 (:) 调用。]rw]

返回事件名称。

**参数**

无

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| `string` | 事件名称。 |

**示例**

```lua
if event:get_name() == 'player_hurt' then
    -- ...
end
```

### get_bool

[![方法][这是一个方法，必须使用冒号 (:) 调用。]rw]

通过键返回布尔值。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `key` | `string` | 条目键。 |

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| `bool` | 条目值。如果未找到该键，则返回 `false`。 |

**示例**

```lua
event:get_bool('some_key');
```

### get_int

[![方法][这是一个方法，必须使用冒号 (:) 调用。]rw]

通过键返回整数值。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `key` | `string` | 条目键。 |

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| `int` | 条目值。如果未找到该键，则返回 `0`。 |

**示例**

```lua
event:get_int('some_key');
```

### get_float

[![方法][这是一个方法，必须使用冒号 (:) 调用。]rw]

通过键返回浮点值。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `key` | `string` | 条目键。 |

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| `float` | 条目值。如果未找到该键，则返回 `0.0`。 |

**示例**

```lua
event:get_float('some_key');
```

### get_string

[![方法][这是一个方法，必须使用冒号 (:) 调用。]rw]

通过键返回字符串值。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `key` | `string` | 条目键。 |

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| `string` | 条目值。如果未找到该键，则返回 `''`。 |

**示例**

```lua
event:get_string('some_key');
```

### get_controller

[![方法][这是一个方法，必须使用冒号 (:) 调用。]rw]

通过键返回控制器。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `key` | `string` | 条目键。 |

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| [`cs2_player_controller`](/api/entities/base-entity/cs2-player-controller "此类型表示 CCSPlayerController 类。") | 控制器。 |

**示例**

```lua
event:get_controller('userid');
```

### get_pawn_from_id

[![方法][这是一个方法，必须使用冒号 (:) 调用。]rw]

通过键返回棋子。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `key` | `string` | 条目键。 |

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| [`cs2_player_pawn`](/api/entities/base-entity/cs2-player-pawn "此类型表示 C_CSPlayerPawn 类。") | 棋子。 |

**示例**

```lua
event:get_pawn_from_id('userid');
```