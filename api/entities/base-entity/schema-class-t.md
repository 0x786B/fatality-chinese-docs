# 🔎schema_class_t

此类型表示引用实体对象中某个字段的特殊结构。

> 你可以使用 `type()` 函数检查返回的类型。
> 切勿在事件作用域之外的任何地方存储此类型的实例，因为实体可能会被移除。

_________________

### _index

[![函数][这是一个函数，必须使用点(.)来调用。]rw]

返回值。

尝试在此类中搜索字段。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `name` | `string` | 字段名称。 |

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| [`schema_accessor_t`](/api/entities/base-entity/schema-accessor-t) | 访问器实例。 |

**示例**

```lua
local stamina = player.m_pMovementServices:get().m_flStamina;
local stamina = player['m_pMovementServices']:get()['m_flStamina']; -- this also works
```


