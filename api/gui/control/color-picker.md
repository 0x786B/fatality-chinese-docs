# 🎨color_picker

此类型表示一个颜色选择器控件。

> 此类型继承自 [`control`](/api/gui/control "此类型表示一个抽象的GUI控件。") 类型。其所有基础方法和字段在此类型中同样可用。

_________________

### __call

[![构造函数][这是此类型的构造函数定义。]rw]

构造颜色选择器。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `id` | [`control_id`](/api/gui/common-types/control-id "此类型表示一个控件ID。") | 控件ID。 |
| `allow_alpha` | `bool` | 是否启用透明通道。默认为 `true`。 |

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| `color_picker` | 颜色选择器对象。 |

**示例**

```lua
local picker = gui.color_picker(id);
```

### get_value

[![方法][这是一个必须使用冒号(:)调用的方法。]rw]

返回颜色选择器的值。

**参数**

无。

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| [`value_param<color>`](/api/gui/control/value-param "此类型表示某些控件类型使用的值数据。") | 值数据。 |

**示例**

```lua
local val = picker:get_value():get();
```