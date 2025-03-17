#    🔘selectable

此类型表示一个可选择控件。

> 此类型继承自 [`control`](/api/gui/control "此类型表示一个抽象的GUI控件。") 类型。其所有基础方法和字段在此类型中也可用。

_________________

### __call

[![构造函数][这是此类型的构造函数定义。]rw]

构造可选择控件。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `id` | [`control_id`](/api/gui/common-types/control-id "此类型表示一个控件ID。") | 控件ID。 |
| `str` | `string` | 文本字符串。 |

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| `selectable` | 可选择对象。 |

**示例**

```lua
local sel = gui.selectable(id, 'Hello!');
```