# 📦layer

图层是一种用于存储渲染命令以及顶点和索引数据的类型。这是推送形状和控制渲染状态的唯一方式。

_________________

### g

[![字段][这是一个常规字段，必须使用点(.)访问。]rw]
[![只读][这是只读字段，不能更改其值。这不适用于子字段（如果有）。]r]

类型：[`command`](/api/draw/layer/command "此类型用于更改渲染命令参数。")

将被推送到队列的下一个渲染命令。这是你想要更改的对象，例如，设置纹理或更改渲染模式。

### font

[![字段][这是一个常规字段，必须使用点(.)访问。]rw]

类型：[`font_base`](/api/draw/managed/font-base "此类型表示字体类型的基类。你不能创建此类型的实例。相反，请使用子类型。")

用于`add_text`的字体。如果没有设置，则不会渲染任何文本。

### tex_sz

[![字段][这是一个常规字段，必须使用点(.)访问。]rw]

类型：[`vec2?`](/api/draw/types/vec2 "此类型是渲染系统中使用的2D向量。")

纹理尺寸。仅当你尝试使用纹理渲染圆角形状时才需要此值，以便渲染系统能够正确地将UV坐标映射到你正在渲染的任何形状上。

### skip_dpi

[![字段][这是一个常规字段，必须使用点(.)访问。]rw]

类型：`bool`

如果设置为`true`，将跳过全局DPI缩放。默认为`true`。

### add_triangle_filled

[![方法][此字段是一个方法，必须使用冒号(:)调用。]rw]

添加一个单色填充三角形。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `a` | [`vec2`](/api/draw/types/vec2 "此类型是渲染系统中使用的2D向量。") | A点。 |
| `b` | [`vec2`](/api/draw/types/vec2 "此类型是渲染系统中使用的2D向量。") | B点。 |
| `c` | [`vec2`](/api/draw/types/vec2 "此类型是渲染系统中使用的2D向量。") | C点。 |
| `col` | [`color`](/api/draw/types/color "此类型是渲染系统中使用的颜色。") | 形状颜色。 |

**返回值**

无。

**示例**

```lua
layer:add_triangle_filled(
    draw.vec2(50, 50), draw.vec2(25, 75),
    draw.vec2(75, 75), draw.color(255, 255, 255));
```

### add_quad_filled

[![方法][此字段是一个方法，必须使用冒号(:)调用。]rw]

添加一个单色填充四边形。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `tl` | [`vec2`](/api/draw/types/vec2 "此类型是渲染系统中使用的2D向量。") | 左上角点。 |
| `tr` | [`vec2`](/api/draw/types/vec2 "此类型是渲染系统中使用的2D向量。") | 右上角点。 |
| `br` | [`vec2`](/api/draw/types/vec2 "此类型是渲染系统中使用的2D向量。") | 右下角点。 |
| `bl` | [`vec2`](/api/draw/types/vec2 "此类型是渲染系统中使用的2D向量。") | 左下角点。 |
| `col` | [`color`](/api/draw/types/color "此类型是渲染系统中使用的颜色。") | 形状颜色。 |

**返回值**

无。

**示例**

```lua
layer:add_quad_filled(
    draw.vec2(50, 50), draw.vec2(100, 60),
    draw.vec2(100, 100), draw.vec2(30, 70),
    draw.color(255, 255, 255));
```

### add_rect_filled

[![方法][此字段是一个方法，必须使用冒号(:)调用。]rw]

添加一个单色填充矩形。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `r` | [`rect`](/api/draw/types/rect "此类型是渲染系统中使用的矩形。") | 矩形。 |
| `col` | [`color`](/api/draw/types/color "此类型是渲染系统中使用的颜色。") | 形状颜色。 |

**返回值**

无。

**示例**

```lua
layer:add_rect_filled(draw.rect(50, 50, 150, 150), draw.color(255, 255, 255));
```

### add_circle_filled

[![方法][此字段是一个方法，必须使用冒号(:)调用。]rw]

添加一个单色填充圆形。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `center` | [`vec2`](/api/draw/types/vec2 "此类型是渲染系统中使用的2D向量。") | 中心点。 |
| `radius` | `float` | 圆的半径。 |
| `c` | [`color`](/api/draw/types/color "此类型是渲染系统中使用的颜色。") | 形状颜色。 |
| `segments` | `int` | 圆的分段数。如果设置为`0`，将尝试自动推断分段数。默认为`0`。 |
| `fill` | `float` | 填充量（顺时针，`0`到`1`）。默认为`1`。 |

**返回值**

无。

**示例**

```lua
layer:add_circle_filled(draw.vec2(50, 50), 10, draw.color(255, 255, 255));
```

### add_triangle_filled_multicolor

[![方法][此字段是一个方法，必须使用冒号(:)调用。]rw]

添加一个多色填充三角形。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `a` | [`vec2`](/api/draw/types/vec2 "此类型是渲染系统中使用的2D向量。") | A点。 |
| `b` | [`vec2`](/api/draw/types/vec2 "此类型是渲染系统中使用的2D向量。") | B点。 |
| `c` | [`vec2`](/api/draw/types/vec2 "此类型是渲染系统中使用的2D向量。") | C点。 |
| `cols` | `table[color, color, color]` | 每个点的颜色。颜色的顺序与参数列表相同。 |

**返回值**

无。

**示例**

```lua
layer:add_triangle_filled_multicolor(
     draw.vec2(50, 50), draw.vec2(25, 75),
     draw.vec2(75, 75), {
        draw.color(255, 0, 0),
        draw.color(0, 255, 0),
        draw.color(0, 0, 255)
     });
```

### add_rect_filled_multicolor

[![方法][此字段是一个方法，必须使用冒号(:)调用。]rw]

添加一个多色填充矩形。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `r` | [`rect`](/api/draw/types/rect "此类型是渲染系统中使用的矩形。") | 矩形。 |
| `cols` | `table[color, color, color, color]` | 矩形每个角的颜色，从左上角开始按顺时针顺序排列。 |

**返回值**

无。

**示例**

```lua
layer:add_rect_filled_multicolor(
    draw.rect(50, 50, 150, 150), {
        draw.color(255, 0, 0),
        draw.color(0, 255, 0),
        draw.color(0, 0, 255),
        draw.color(255, 255, 0)
    });
```

### add_circle_filled_multicolor

[![方法][此字段是一个方法，必须使用冒号(:)调用。]rw]

添加一个多色填充圆形。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `center` | [`vec2`](/api/draw/types/vec2 "此类型是渲染系统中使用的2D向量。") | 中心点。 |
| `radius` | `float` | 圆的半径。 |
| `cols` | `table[color, color]` | 渐变的颜色，从内部开始到外部结束。 |
| `segments` | `int` | 近似圆形的分段数。默认为`36`。 |
| `fill` | `float` | 要填充的圆形部分，其中1.0表示完整的圆。默认为`1.0`。 |

**返回值**

无。

**示例**

```lua
layer:add_circle_filled_multicolor(
    draw.vec2(100, 100), 50, {
        draw.color(255, 0, 0),
        draw.color(0, 0, 255)
    }, 36, 1.0);
```

### add_quad_filled_multicolor

[![方法][此字段是一个方法，必须使用冒号(:)调用。]rw]

添加一个多色填充四边形。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `tl` | [`vec2`](/api/draw/types/vec2 "此类型是渲染系统中使用的2D向量。") | 左上角点。 |
| `tr` | [`vec2`](/api/draw/types/vec2 "此类型是渲染系统中使用的2D向量。") | 右上角点。 |
| `br` | [`vec2`](/api/draw/types/vec2 "此类型是渲染系统中使用的2D向量。") | 右下角点。 |
| `bl` | [`vec2`](/api/draw/types/vec2 "此类型是渲染系统中使用的2D向量。") | 左下角点。 |
| `cols` | `table[color, color]` | 渐变的颜色，从底部到顶部应用。 |

**返回值**

无。

**示例**

```lua
layer:add_quad_filled_multicolor(
    draw.vec2(50, 50), draw.vec2(150, 50),
    draw.vec2(150, 150), draw.vec2(50, 150), {
        draw.color(255, 0, 0),
        draw.color(0, 0, 255)
    });
```

### add_pill_multicolor

[![方法][此字段是一个方法，必须使用冒号(:)调用。]rw]

添加一个多色药丸形状。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `mins` | [`vec2`](/api/draw/types/vec2 "此类型是渲染系统中使用的2D向量。") | 药丸的左上角点。 |
| `maxs` | [`vec2`](/api/draw/types/vec2 "此类型是渲染系统中使用的2D向量。") | 药丸的右下角点。 |
| `radius_min` | `float` | 药丸圆角边缘的最小半径。 |
| `radius_max` | `float` | 药丸圆角边缘的最大半径。 |
| `cols` | `table[color, color]` | 渐变的颜色，从底部到顶部应用。 |
| `segments` | `int` | 近似圆角边缘的分段数。默认为`16`。 |

**返回值**

无。

**示例**

```lua
layer:add_pill_multicolor(
    draw.vec2(50, 50), draw.vec2(150, 100),
    10, 20, {
        draw.color(255, 0, 0),
        draw.color(0, 0, 255)
    }, 16);
```

### add_shadow_line

[![方法][此字段是一个方法，必须使用冒号(:)调用。]rw]

添加一条阴影线。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `r` | [`rect`](/api/draw/types/rect "此类型是渲染系统中使用的矩形。") | 阴影线的边界框。 |
| `dir` | [`shadow_dir`](/api/draw/layer/shadow-dir "此枚举用于确定add_shadow_line方法的阴影方向。") | 阴影方向。 |
| `a` | `float` | 最大不透明度。默认为`0.25`。 |

**返回值**

无。

**示例**

```lua
layer:add_shadow_line(
    draw.rect(50, 50, 150, 150), draw.shadow_dir.down, 0.25);
```

### add_shadow_rect

[![方法][此字段是一个方法，必须使用冒号(:)调用。]rw]

添加一个带阴影的矩形。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `r` | [`rect`](/api/draw/types/rect "此类型是渲染系统中使用的矩形。") | 矩形。 |
| `radius` | `float` | 阴影向外扩展的距离（以像素为单位）。 |
| `bg` | `bool` | 是否为矩形绘制背景。默认为`true`。 |
| `a` | `float` | 阴影的最大不透明度。默认为`0.25`。 |

**返回值**

无。

**示例**

```lua
layer:add_shadow_rect(
    draw.rect(50, 50, 150, 150), 15, true, 0.25);
```

### add_glow

[![方法][此字段是一个方法，必须使用冒号(:)调用。]rw]

添加一个发光框。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `r` | [`rect`](/api/draw/types/rect "此类型是渲染系统中使用的矩形。") | 框矩形。 |
| `radius` | `float` | 发光向外扩展的距离（以像素为单位）。 |
| `c` | [`color`](/api/draw/types/color "此类型是渲染系统中使用的颜色。") | 发光颜色。 |
| `parts` | [`glow_parts`](/api/draw/layer/glow-parts "此枚举用于确定应该渲染形状周围哪些部分的发光。") | 启用发光的部分。默认为`all`。 |

**返回值**

无。

**示例**

```lua
layer:add_glow(draw.rect(50, 50, 150, 150), 15, draw.color(255, 0, 0));
```

### add_rect_filled_rounded

[![方法][此字段是一个方法，必须使用冒号(:)调用。]rw]

添加一个填充的圆角矩形。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `r` | [`rect`](/api/draw/types/rect "此类型是渲染系统中使用的矩形。") | 矩形。 |
| `c` | [`color`](/api/draw/types/color "此类型是渲染系统中使用的颜色。") | 填充颜色。 |
| `amount` | `float` | 圆角量。 |
| `rnd` | [`rounding`](/api/draw/layer/rounding "此枚举用于确定圆角形状的圆角。") | 圆角模式。默认为`all`。 |

**返回值**

无。

**示例**

```lua
layer:add_rect_filled_rounded(
    draw.rect(50, 50, 150, 150),
    draw.color(255, 0, 0),
    10,
    draw.rounding.all
);
```

### add_rect_filled_rounded_multicolor

[![方法][此字段是一个方法，必须使用冒号(:)调用。]rw]

添加一个填充的多色圆角矩形。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `r` | [`rect`](/api/draw/types/rect "此类型是渲染系统中使用的矩形。") | 矩形。 |
| `c` | `table[color, color, color, color]` | 填充颜色。从左上角开始按顺时针顺序使用。 |
| `amount` | `float` | 圆角量。 |
| `rnd` | [`rounding`](/api/draw/layer/rounding "此枚举用于确定圆角形状的圆角。") | 圆角模式。默认为`all`。 |

**返回值**

无。

**示例**

```lua
layer:add_rect_filled_rounded_multicolor(
    draw.rect(50, 50, 150, 150), {
        draw.color(255, 0, 0),
        draw.color(0, 255, 0),
        draw.color(0, 0, 255),
        draw.color(255, 255, 0)
    },
    10,
    draw.rounding.all
);
```

### add_triangle

[![方法][此字段是一个方法，必须使用冒号(:)调用。]rw]

添加一个描边三角形。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `a` | [`vec2`](/api/draw/types/vec2 "此类型是渲染系统中使用的2D向量。") | A点。 |
| `b` | [`vec2`](/api/draw/types/vec2 "此类型是渲染系统中使用的2D向量。") | B点。 |
| `c` | [`vec2`](/api/draw/types/vec2 "此类型是渲染系统中使用的2D向量。") | C点。 |
| `col` | [`color`](/api/draw/types/color "此类型是渲染系统中使用的颜色。") | 线条颜色。 |
| `thickness` | `float` | 线条粗细。默认为`1.0`。 |
| `mode` | [`outline_mode`](/api/draw/layer/outline-mode "此枚举用于确定轮廓形状的轮廓模式。") | 轮廓模式。默认为`inset`。 |

**返回值**

无。

**示例**

```lua
layer:add_triangle(
    draw.vec2(50, 50),
    draw.vec2(25, 75),
    draw.vec2(75, 75),
    draw.color(255, 0, 0),
    1.0,
    draw.outline_mode.inset
);
```

### add_quad

[![方法][此字段是一个方法，必须使用冒号(:)调用。]rw]

添加一个描边四边形。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `tl` | [`vec2`](/api/draw/types/vec2 "此类型是渲染系统中使用的2D向量。") | 左上角点。 |
| `tr` | [`vec2`](/api/draw/types/vec2 "此类型是渲染系统中使用的2D向量。") | 右上角点。 |
| `br` | [`vec2`](/api/draw/types/vec2 "此类型是渲染系统中使用的2D向量。") | 右下角点。 |
| `bl` | [`vec2`](/api/draw/types/vec2 "此类型是渲染系统中使用的2D向量。") | 左下角点。 |
| `c` | [`color`](/api/draw/types/color "此类型是渲染系统中使用的颜色。") | 线条颜色。 |
| `thickness` | `float` | 线条粗细。默认为`1.0`。 |
| `mode` | [`outline_mode`](/api/draw/layer/outline-mode "此枚举用于确定轮廓形状的轮廓模式。") | 轮廓模式。默认为`inset`。 |

**返回值**

无。

**示例**

```lua
layer:add_quad(
    draw.vec2(50, 50),
    draw.vec2(150, 50),
    draw.vec2(150, 150),
    draw.vec2(50, 150),
    draw.color(255, 0, 0),
    1.0,
    draw.outline_mode.inset
);
```

### add_rect

[![方法][此字段是一个方法，必须使用冒号(:)调用。]rw]

添加一个描边矩形。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `r` | [`rect`](/api/draw/types/rect "此类型是渲染系统中使用的矩形。") | 矩形。 |
| `c` | [`color`](/api/draw/types/color "此类型是渲染系统中使用的颜色。") | 线条颜色。 |
| `thickness` | `float` | 线条粗细。默认为`1.0`。 |
| `mode` | [`outline_mode`](/api/draw/layer/outline-mode "此枚举用于确定轮廓形状的轮廓模式。") | 轮廓模式。默认为`inset`。 |

**返回值**

无。

**示例**

```lua
layer:add_rect(
    draw.rect(50, 50, 150, 150),
    draw.color(255, 0, 0),
    1.0,
    draw.outline_mode.inset
);
```

### add_circle

[![方法][此字段是一个方法，必须使用冒号(:)调用。]rw]

添加一个描边圆形。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `center` | [`vec2`](/api/draw/types/vec2 "此类型是渲染系统中使用的2D向量。") | 中心点。 |
| `radius` | `float` | 圆的半径。 |
| `c` | [`color`](/api/draw/types/color "此类型是渲染系统中使用的颜色。") | 线条颜色。 |
| `segments` | `int` | 圆的分段数。默认为`36`。 |
| `fill` | `float` | 填充量。默认为`1.0`。 |
| `thickness` | `float` | 线条粗细。默认为`1.0`。 |
| `mode` | [`outline_mode`](/api/draw/layer/outline-mode "此枚举用于确定轮廓形状的轮廓模式。") | 轮廓模式。默认为`inset`。 |

**返回值**

无。

**示例**

```lua
layer:add_circle(
    draw.vec2(100, 100),
    50,
    draw.color(255, 0, 0),
    36,
    1.0,
    1.0,
    draw.outline_mode.inset
);
```

### add_line

[![方法][此字段是一个方法，必须使用冒号(:)调用。]rw]

添加一条线。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `a` | [`vec2`](/api/draw/types/vec2 "此类型是渲染系统中使用的2D向量。") | 起点。 |
| `b` | [`vec2`](/api/draw/types/vec2 "此类型是渲染系统中使用的2D向量。") | 终点。 |
| `c` | [`color`](/api/draw/types/color "此类型是渲染系统中使用的颜色。") | 线条颜色。 |
| `thickness` | `float` | 线条粗细。默认为`1.0` |

**返回值**

无。

**示例**

```lua
layer:add_line(
    draw.vec2(50, 50),
    draw.vec2(150, 150),
    draw.color(255, 0, 0)
);
```

### add_line_multicolor

[![方法][此字段是一个方法，必须使用冒号(:)调用。]rw]

添加一条多色线。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `a` | [`vec2`](/api/draw/types/vec2 "此类型是渲染系统中使用的2D向量。") | 起点。 |
| `b` | [`vec2`](/api/draw/types/vec2 "此类型是渲染系统中使用的2D向量。") | 终点。 |
| `c` | [`color`](/api/draw/types/color "此类型是渲染系统中使用的颜色。") | 起点颜色。 |
| `c2` | [`color`](/api/draw/types/color "此类型是渲染系统中使用的颜色。") | 终点颜色。 |
| `thickness` | `float` | 线条粗细。默认为`1.0`。 |

**返回值**

无。

**示例**

```lua
layer:add_line_multicolor(
    draw.vec2(50, 50),
    draw.vec2(150, 150),
    draw.color(255, 0, 0),
    draw.color(0, 0, 255),
    2.0
);
```
### add_rect_rounded

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `amount` | `float` | 圆角量。 |
| `rnd` | [`rounding`](/api/draw/layer/rounding "此枚举用于确定圆角形状的圆角。") | 圆角模式。默认为`all`。 |
| `thickness` | `float` | 线条粗细。默认为`1.0`。 |
| `mode` | [`outline_mode`](/api/draw/layer/outline-mode "此枚举用于确定轮廓形状的轮廓模式。") | 轮廓模式。默认为`inset`。 |

**返回值**

无。

**示例**

```lua
layer:add_rect_rounded(draw.rect(50, 50, 150, 150),
    draw.color(255, 255, 255), 14);
```

### add_text

[![方法][此字段是一个方法，必须使用冒号(:)调用。]rw]

添加文本。

> 如果未设置字体，此函数将不执行任何操作。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `p` | [`vec2`](/api/draw/types/vec2 "此类型是渲染系统中使用的2D向量。") | 文本原点。 |
| `text` | `string` | 文本。 |
| `c` | [`color`](/api/draw/types/color "此类型是渲染系统中使用的颜色。") | 文本颜色。 |
| `params` | [`text_params?`](/api/draw/layer/text-params "此类型用于确定文本对齐方式。") | 文本对齐参数。默认为`nil`。 |

**返回值**

无。

**示例**

```lua
layer:add_text(draw.vec2(50, 50), 'Hello world!', draw.color(255, 255, 255));
```

### override_clip_rect

[![方法][此字段是一个方法，必须使用冒号(:)调用。]rw]

重写剪切矩形，支持交集。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `r` | [`rect?`](/api/draw/types/rect "此类型是渲染系统中使用的矩形。") | 新的剪切矩形。 |
| `intersect` | `bool` | 是否应该将此函数与新矩形相交。默认为`true`。 |

**返回值**

无。

**示例**

```lua
layer:override_clip_rect(draw.rect(50, 50, 150, 150));
```