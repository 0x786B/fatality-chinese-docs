# 🔫ccsweapon_base_vdata

此类型表示武器的静态数据。

> 此类型继承自 [`base_entity`](/api/entities/base-entity "此类型表示一个基础游戏实体。") 类型。其所有基础方法和字段在此类型中同样可用。

_________________

### _inedx

[![方法][此字段是一个方法，必须使用冒号(:)来调用。]rw]

尝试在此类中搜索字段。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `name` | `string` | 要搜索的字段名称。 |

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| [`schema_accessor_t`](/api/entities/schema-accessor-t "此类型表示一个模式访问器。") | 字段访问器。 |

**示例**

```lua
local price = wpn_data.m_nPrice;
local price = wpn_data['m_nPrice']; -- this also works
```
