# 🔘checkbox

此类型表示一个复选框控件。

> 此类型继承自 [`control`](/api/gui/control "此类型表示一个抽象的GUI控件。") 类型。其所有基础方法和字段在此类型中同样可用。

_________________

### __call

[![构造函数][这是此类型的构造函数定义。]rw]

构造复选框。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `id` | [`control_id`](/api/gui/common-types/control-id "此类型表示一个控件ID。") | ID。 |

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| `checkbox` | 复选框实例。 |

**示例**

```lua
local cb = gui.checkbox(gui.control_id('my_id'));
```

### get_value

[![方法][这是一个必须使用冒号(:)调用的方法。]rw]

返回复选框的值。

**参数**

无。

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| [`value_param<bool>`](/api/gui/control/value-param "此类型表示某些控件类型使用的值数据。") | 值数据。 |

**示例**

```lua
local val = cb:get_value():get();
```

## set_value

[![方法][这是一个必须使用冒号(:)调用的方法。]rw]

设置复选框的值。

> 建议使用此方法而不是 [`value_param`](/api/gui/control/value-param "此类型表示某些控件类型使用的值数据。") 的 [`set`](/api/gui/control/value-param?id=set "设置值。") 方法。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `val` | `bool` | 新值。 |

**返回值**

无。

**示例**

```lua
cb:set_value(true);
```