# 🖥️gui

用法：`gui.{func_or_field}`

此表公开了软件的 GUI 系统。

> 子部分中描述的所有类型和枚举必须以 `gui.` 为前缀。

_________________

### ctx

[![字段][这是一个必须使用点(.)访问的常规字段。]rw]

类型：[`context`](/api/gui/context "此类型表示 GUI 上下文。")

GUI 上下文。

### notify

[![字段][这是一个必须使用点(.)访问的常规字段。]rw]

类型：[`notification_system`](/api/gui/notification-system "此类型表示通知系统。")

通知系统。

### input

[![字段][这是一个必须使用点(.)访问的常规字段。]rw]

类型：[`context_input`](/api/gui/context-input "此类型表示 GUI 输入上下文。")

输入上下文。

### make_control

[![函数][这是一个必须使用点(.)调用的函数]rw]

将控件包装到由标签和该特定控件组成的布局中。如果您希望控件显示得美观，应该将**这个**新控件添加到分组框中。此外，您可以向返回的控件添加任何额外的控件 - 这些控件将堆叠在初始控件的左侧。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `text` | `string` | 标签值。 |
| `c` | [`control`](/api/gui/control "此类型表示抽象 GUI 控件。") | 控件对象。 |

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| [`layout`](/api/gui/container/control-container/layout "此类型表示布局控件。") | 布局对象。 |

**示例**

```lua
local row = gui.make_control('Hello checkbox!', my_cb);
```