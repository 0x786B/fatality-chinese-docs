# 🔎schema_ptr_accessor_t

此类型表示引用实体对象中指针字段的特殊结构。

> 你可以使用 `type()` 函数检查返回的类型。
> 切勿在事件作用域之外的任何地方存储此类型的实例，因为实体可能会被移除。

_________________

### get

[![方法][这是一个函数，必须使用点(:)来调用。]rw]

尝试返回指针的schema类以供进一步使用，失败时返回nil。（仅适用于client. dll中指向schema类的指针）

**参数**

无。

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| [`schema_class_t`](/api/entities/base-entity/schema-class-t) | 指针的schema类。 |

**示例**

```lua
local movement_services = player.m_pMovementServices:get();
```

### get_as

[![方法][这是一个函数，必须使用点(:)来调用。]rw]

尝试返回指向指定schema类的指针的schema类，失败时为nil。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `module_name` | `string` | 模块名称。 |
| `class_name` | `string` | 类名称。 |

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| [`schema_class_t`](/api/entities/base-entity/schema-class-t) | 指向指定schema类的指针。 |

**示例**

```lua
local movement_services = player.m_pMovementServices:get_as('client.dll', 'CCSPlayer_MovementServices');
```

### get_class_id




