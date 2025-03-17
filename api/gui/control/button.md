# 🔘button

此类型表示一个按钮控件。

> 此类型继承自 [`control`](/api/gui/control "此类型表示一个抽象的GUI控件。") 类型。其所有基础方法和字段在此类型中同样可用。

_________________

### __call

[![构造函数][这是此类型的构造函数定义。]rw]

构造按钮。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `id` | [`control_id`](/api/gui/common-types/control-id "此类型表示一个控件ID。") | 控件ID。 |
| `str` | `string` | 文本字符串。 |

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| `button` | 按钮对象。 |

**示例**

```lua
local btn = gui.button(id, 'Hello!');
```