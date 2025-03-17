# 📦spacer

此类型表示一个间隔控件。

> 此类型继承自 [`control`](/api/gui/control "此类型表示一个抽象的GUI控件。") 类型。其所有基础方法和字段在此类型中也可用。

_________________

### __call

[![构造函数][这是此类型的构造函数定义。]rw]

构造间隔控件。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `id` | [`control_id`](/api/gui/common-types/control-id "此类型表示一个控件ID。") | ID。 |

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| `spacer` | 间隔实例。 |

**示例**

```lua
local sp = gui.spacer(gui.control_id('my_id'));
```