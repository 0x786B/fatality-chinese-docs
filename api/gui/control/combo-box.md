# 📦combo_box

此类型表示一个组合框控件。

> 此类型继承自 [`control_container`](/api/gui/container/control-container "此类型表示一个带有容器的抽象控件。") 类型。其所有基础方法和字段在此类型中同样可用。

> `add` 方法需要一个 [`selectable`](/api/gui/control/selectable "此类型表示一个可选择的控件。") 的实例。传递其他控件类型将不会将它们添加到列表中。

> 值位按照可选项的顺序切换。这意味着如果第一个元素被切换，那么第一个位也会被切换，以此类推。

_________________

### __call

[![构造函数][这是此类型的构造函数定义。]rw]

构造组合框。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `id` | [`control_id`](/api/gui/common-types/control-id "此类型表示一个控件ID。") | ID。 |

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| `combo_box` | 组合框实例。 |

**示例**

```lua
local cb = gui.combo_box(gui.control_id('my_id'));
```

### allow_multiple

[![字段][这是一个普通字段，必须使用点(.)来访问。]rw]

类型: `bool`

如果设置为 `true`，复选框将能够切换多个可选项。

**示例**

```lua
local cb = gui.combo_box(gui.control_id('my_id'));
cb.allow_multiple = true --设置为多选框默认为单选框
```

### get_value

[![方法][这是一个必须使用冒号(:)调用的方法。]rw]

返回组合框的值。

**参数**

无。

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| [`value_param<bits>`](/api/gui/control/value-param "此类型表示某些控件类型使用的值数据。") | 值数据。 |

**示例**

```lua
local val = cb:get_value():get();
```