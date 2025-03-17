# text_params

此类型用于确定文本对齐方式。

> 行对齐仅在文本有多行时才有意义。默认情况下，所有后续行都将从文本的左侧开始。你可以通过使用接受 `line` 参数的函数之一来改变这个行为。例如，如果你将 `right` 传递给行对齐，所有后续行都将从右侧开始。文本对齐将保持由 `v` 和 `h` 参数指定的方式。

_________________

### with_v

[![函数][此字段是一个函数，必须使用点(.)来调用。]rw]

创建带有垂直对齐的 `text_params` 实例。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `v` | [`text_alignment`](/api/draw/layer/text-params/text-alignment "此枚举决定了绘制文本时如何对齐。") | 垂直对齐。 |

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| `text_params` | 创建的文本参数。 |

**示例**

```lua
local align_top = draw.text_params.with_v(draw.text_alignment.top);
```

### with_h

[![函数][此字段是一个函数，必须使用点(.)来调用。]rw]

创建带有水平对齐的 text_params 实例。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `h` | [`text_alignment`](/api/draw/layer/text-params/text-alignment "此枚举决定了绘制文本时如何对齐。") | 水平对齐。 |

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| `text_params` | 创建的文本参数。 |

**示例**

```lua
local align_right = draw.text_params.with_h(draw.text_alignment.right);
```

### with_line

[![函数][此字段是一个函数，必须使用点(.)来调用。]rw]

创建带有行对齐的 text_params 实例。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `line` | [`text_alignment`](/api/draw/layer/text-params/text-alignment "此枚举决定了绘制文本时如何对齐。") | 行对齐。 |

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| `text_params` | 创建的文本参数。 |

**示例**

```lua
local lines_center = draw.text_params.with_line(draw.text_alignment.center);
```

### with_vh

[![函数][此字段是一个函数，必须使用点(.)来调用。]rw]

创建带有垂直和水平对齐的 text_params 实例。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `v` | [`text_alignment`](/api/draw/layer/text-params/text-alignment "此枚举决定了绘制文本时如何对齐。") | 垂直对齐。 |
| `h` | [`text_alignment`](/api/draw/layer/text-params/text-alignment "此枚举决定了绘制文本时如何对齐。") | 水平对齐。 |

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| `text_params` | 创建的文本参数。 |

**示例**

```lua
local align_bottom_right = draw.text_params.with_vh(draw.text_alignment.bottom, draw.text_alignment.right);
```

### with_vline

[![函数][此字段是一个函数，必须使用点(.)来调用。]rw]

创建带有垂直对齐和行对齐的 text_params 实例。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `v` | [`text_alignment`](/api/draw/layer/text-params/text-alignment "此枚举决定了绘制文本时如何对齐。") | 垂直对齐。 |
| `line` | [`text_alignment`](/api/draw/layer/text-params/text-alignment "此枚举决定了绘制文本时如何对齐。") | 行对齐。 |

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| `text_params` | 创建的文本参数。 |

**示例**

```lua
local align = draw.text_params.with_vline(draw.text_alignment.bottom, draw.text_alignment.center);
```

### with_hline

[![函数][此字段是一个函数，必须使用点(.)来调用。]rw]

创建带有水平对齐和行对齐的 text_params 实例。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `h` | [`text_alignment`](/api/draw/layer/text-params/text-alignment "此枚举决定了绘制文本时如何对齐。") | 水平对齐。 |
| `line` | [`text_alignment`](/api/draw/layer/text-params/text-alignment "此枚举决定了绘制文本时如何对齐。") | 行对齐。 |

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| `text_params` | 创建的文本参数。 |

**示例**

```lua
local align = draw.text_params.with_hline(draw.text_alignment.center, draw.text_alignment.center);
```

### with_vhline

[![函数][此字段是一个函数，必须使用点(.)来调用。]rw]

创建带有垂直、水平和行对齐的 text_params 实例。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `v` | [`text_alignment`](/api/draw/layer/text-params/text-alignment "此枚举决定了绘制文本时如何对齐。") | 垂直对齐。 |
| `h` | [`text_alignment`](/api/draw/layer/text-params/text-alignment "此枚举决定了绘制文本时如何对齐。") | 水平对齐。 |
| `line` | [`text_alignment`](/api/draw/layer/text-params/text-alignment "此枚举决定了绘制文本时如何对齐。") | 行对齐。 |

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| `text_params` | 创建的文本参数。 |

**示例**

```lua
local align = draw.text_params.with_vhline(draw.text_alignment.center, draw.text_alignment.center);
```