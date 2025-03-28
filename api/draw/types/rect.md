# 🔲rect

此类型是渲染系统中使用的矩形。

_________________

### __call

[![构造函数][这是此类型的构造函数定义。]rw]

创建一个新的矩形。

**参数**

*1. 默认矩形（位置为 0,0；大小为 0,0）*

无。

*2. 单个值*

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `value` | `float` | 最小 XY 和最大 XY 值。 |

*3. 单个向量*

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `value` | [`vec2`](/api/draw/common-types/vec2 "这是渲染系统中使用的2D向量。") | 最小向量和最大向量。 |

*4. 双值*

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `x` | `float` | 最小/最大 X 坐标。 |
| `y` | `float` | 最小/最大 Y 坐标。 |

*5. 双向量*

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `mins` | [`vec2`](/api/draw/common-types/vec2 "这是渲染系统中使用的2D向量。") | 最小向量。 |
| `maxs` | [`vec2`](/api/draw/common-types/vec2 "这是渲染系统中使用的2D向量。") | 最大向量。 |

*6. 四个值*

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `x0` | `float` | 最小 X 坐标。 |
| `y0` | `float` | 最小 Y 坐标。 |
| `x1` | `float` | 最大 X 坐标。 |
| `y1` | `float` | 最大 Y 坐标。 |

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| `rect` | 新矩形。 |

**示例**

```lua
local my_rect = draw.rect(50, 50, 150, 150);
```

### mins

[![字段][这是一个必须使用点 (.) 访问的常规字段。]rw]

类型：[`vec2`](/api/draw/common-types/vec2 "这是渲染系统中使用的2D向量。")

最小（左上角）向量。

### maxs

[![字段][这是一个必须使用点 (.) 访问的常规字段。]rw]

类型：[`vec2`](/api/draw/common-types/vec2 "这是渲染系统中使用的2D向量。")

最大（右下角）向量。

### width

[![方法][这是一个必须使用冒号 (:) 调用的方法。]rw]

返回矩形的宽度或设置新的宽度。

**参数**

*1. 获取宽度*

无。

*2. 设置宽度*

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `value` | `float` | 新宽度。 |

**返回值**

*1. 获取宽度*

| 类型 | 描述 |
| ---- | ----------- |
| `float` | 宽度。 |

*2. 设置宽度*

| 类型 | 描述 |
| ---- | ----------- |
| `rect` | 具有更改后宽度的新矩形。 |

**示例**

```lua
local half_width = rect:width(rect:width() * 0.5);
```

### height

[![方法][这是一个必须使用冒号 (:) 调用的方法。]rw]

返回矩形的高度或设置新的高度。

**参数**

*1. 获取高度*

无。

*2. 设置高度*

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `value` | `float` | 新高度。 |

**返回值**

*1. 获取高度*

| 类型 | 描述 |
| ---- | ----------- |
| `float` | 高度。 |

*2. 设置高度*

| 类型 | 描述 |
| ---- | ----------- |
| `rect` | 具有更改后高度的新矩形。 |

**示例**

```lua
local half_height = rect:height(rect:height() * 0.5);
```

### size

[![方法][这是一个必须使用冒号 (:) 调用的方法。]rw]

返回矩形的大小或设置新的大小。

**参数**

*1. 获取大小*

无。

*2. 设置大小*

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `value` | [`vec2`](/api/draw/common-types/vec2 "这是渲染系统中使用的2D向量。") | 新大小。 |

**返回值**

*1. 获取大小*

| 类型 | 描述 |
| ---- | ----------- |
| [`vec2`](/api/draw/common-types/vec2 "这是渲染系统中使用的2D向量。") | 大小。 |

*2. 设置大小*

| 类型 | 描述 |
| ---- | ----------- |
| `rect` | 具有更改后大小的新矩形。 |

**示例**

```lua
local half_size = rect:size(rect:size() * draw.vec2(0.5, 0.5));
```

### explode

[![方法][这是一个必须使用冒号 (:) 调用的方法。]rw]

通过给定向量扩展矩形（从中心向所有方向按向量坐标增加大小）。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `value` | [`vec2`](/api/draw/common-types/vec2 "这是渲染系统中使用的2D向量。") | 扩展大小。 |

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| `rect` | 扩展后的矩形。 |

**示例**

```lua
local exp = rect:explode(draw.vec2(6, 6)); -- 将从最小值减去 -3,-3，并向最大值加上 3,3
```

### half_width

[![方法][这是一个必须使用冒号 (:) 调用的方法。]rw]

返回一个宽度为此矩形一半的矩形。

**参数**

无。

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| `rect` | 宽度减半的矩形。 |

**示例**

```lua
local half = rect:half_width();
```

### translate

[![方法][这是一个必须使用冒号 (:) 调用的方法。]rw]

通过向量坐标平移（移动）此矩形。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `value` | [`vec2`](/api/draw/common-types/vec2 "这是渲染系统中使用的2D向量。") | 平移量。 |

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| `rect` | 平移后的矩形。 |

**示例**

```lua
local rect = draw.rect(50, 50, 150, 150);
local translated = rect:translate(draw.vec2(5, 5)); -- 最小值/最大值将变为 55,55 和 155,155
```

### margin_left

[![方法][这是一个必须使用冒号 (:) 调用的方法。]rw]

从左侧按给定量移动矩形。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `value` | `float` | 边距量。 |

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| `rect` | 移动后的矩形。 |

**示例**

```lua
local new = rect:margin_left(5); -- 向右移动 5 像素
```

### margin_right

[![方法][这是一个必须使用冒号 (:) 调用的方法。]rw]

从右侧按给定量移动矩形。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `value` | `float` | 边距量。 |

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| `rect` | 移动后的矩形。 |

**示例**

```lua
local new = rect:margin_right(5); -- 向左移动 5 像素
```

### margin_top

[![方法][这是一个必须使用冒号 (:) 调用的方法。]rw]

从顶部按给定量移动矩形。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `value` | `float` | 边距量。 |

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| `rect` | 移动后的矩形。 |

**示例**

```lua
local new = rect:margin_top(5); -- 向下移动 5 像素
```

### margin_bottom

[![方法][这是一个必须使用冒号 (:) 调用的方法。]rw]

从底部按给定量移动矩形。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `value` | `float` | 边距量。 |

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| `rect` | 移动后的矩形。 |

**示例**

```lua
local new = rect:margin_bottom(5); -- 向上移动 5 像素
```

### padding_left

[![方法][这是一个必须使用冒号 (:) 调用的方法。]rw]

向矩形的左侧添加值。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `value` | `float` | 内边距量。 |

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| `rect` | 调整大小后的矩形。 |

**示例**

```lua
local new = rect:padding_left(5); -- 向最小值的 x 坐标添加 5
```

### padding_right

[![方法][这是一个必须使用冒号 (:) 调用的方法。]rw]

向矩形的右侧添加值。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `value` | `float` | 内边距量。 |

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| `rect` | 调整大小后的矩形。 |

**示例**

```lua
local new = rect:padding_right(5); -- 向最大值的 x 坐标添加 5
```

### padding_top

[![方法][这是一个必须使用冒号 (:) 调用的方法。]rw]

向矩形的顶部添加值。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `value` | `float` | 内边距量。 |

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| `rect` | 调整大小后的矩形。 |

**示例**

```lua
local new = rect:padding_top(5); -- 向最小值的 y 坐标添加 5
```

### padding_bottom

[![方法][这是一个必须使用冒号 (:) 调用的方法。]rw]

向矩形的底部添加值。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `value` | `float` | 内边距量。 |

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| `rect` | 调整大小后的矩形。 |

**示例**

```lua
local new = rect:padding_bottom(5); -- 向最大值的 y 坐标添加 5
```

### shrink

[![方法][这是一个必须使用冒号 (:) 调用的方法。]rw]

按给定量缩小（内收）矩形。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `value` | `float` | 缩小值。 |

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| `rect` | 调整大小后的矩形。 |

**示例**

```lua
local shrinked = rect:shrink(5); -- 向最小值添加 5,5，从最大值减去 5,5
```

### expand

[![方法][这是一个必须使用冒号 (:) 调用的方法。]rw]

按给定量扩展（外扩）矩形。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `value` | `float` | 扩展值。 |

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| `rect` | 调整大小后的矩形。 |

**示例**

```lua
local expanded = rect:expand(5); -- 从最小值减去 5,5，向最大值添加 5,5
```

### contains

[![方法][这是一个必须使用冒号 (:) 调用的方法。]rw]

如果此矩形包含向量或另一个矩形，则返回 `true`。

> 矩形重载**仅**在另一个矩形完全在此矩形的边界内时返回 `true`。

**参数**

*1. 向量变体*

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `other` | [`vec2`](/api/draw/common-types/vec2 "这是渲染系统中使用的2D向量。") | 要检查的向量。 |

*2. 矩形变体*

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `other` | `rect` | 要检查的矩形。 |

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| `bool` | 如果其他对象在此矩形的边界内则返回 `true`。 |

**示例**

```lua
if rect:contains(cursor_pos) then
    -- ...
end
```

### overlaps

[![方法][这是一个必须使用冒号 (:) 调用的方法。]rw]

如果另一个矩形与此矩形重叠，则返回 `true`。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `other` | `rect` | 要检查的矩形。 |

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| `bool` | 如果另一个矩形与此矩形重叠则返回 `true`。 |

**示例**

```lua
if rect:overlaps(another_rect) then
    -- ...
end
```

### intersect

[![方法][这是一个必须使用冒号 (:) 调用的方法。]rw]

将此矩形与另一个矩形相交。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `other` | `rect` | 要相交的矩形。 |

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| `rect` | 相交后的矩形。 |

**示例**

```lua
local intersected = rect:intersect(another_rect);
```

### tl

[![方法][这是一个必须使用冒号 (:) 调用的方法。]rw]

返回左上角向量。

**参数**

无。

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| [`vec2`](/api/draw/common-types/vec2 "这是渲染系统中使用的2D向量。") | 左上角向量。 |

**示例**

```lua
local tl = rect:tl();
```

### tr

[![方法][这是一个必须使用冒号 (:) 调用的方法。]rw]

返回右上角向量。

**参数**

无。

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| [`vec2`](/api/draw/common-types/vec2 "这是渲染系统中使用的2D向量。") | 右上角向量。 |

**示例**

```lua
local tr = rect:tr();
```

### br

[![方法][这是一个必须使用冒号 (:) 调用的方法。]rw]

返回右下角向量。

**参数**

无。

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| [`vec2`](/api/draw/common-types/vec2 "这是渲染系统中使用的2D向量。") | 右下角向量。 |

**示例**

```lua
local br = rect:br();
```

### bl

[![方法][这是一个必须使用冒号 (:) 调用的方法。]rw]

返回左下角向量。

**参数**

无。

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| [`vec2`](/api/draw/common-types/vec2 "这是渲染系统中使用的2D向量。") | 左下角向量。 |

**示例**

```lua
local bl = rect:bl();
```

### center

[![方法][这是一个必须使用冒号 (:) 调用的方法。]rw]

返回此矩形的中心点。

**参数**

无。

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| [`vec2`](/api/draw/common-types/vec2 "这是渲染系统中使用的2D向量。") | 中心点。 |

**示例**

```lua
local center = rect:center();
```

### circle

[![方法][这是一个必须使用冒号 (:) 调用的方法。]rw]

将此矩形视为椭圆并返回其上的点。注意，这个"椭圆"将是完美的，没有修改的曲率（基本上如果这个矩形是一个盒子 - 你将得到一个完美圆上的点）。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `r` | `float` | 弧度值。 |

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| [`vec2`](/api/draw/common-types/vec2 "这是渲染系统中使用的2D向量。") | 椭圆上的点。 |

**示例**

```lua
local point = rect:circle(rad(250)); -- 返回 250 度上的点
```

### floor

[![方法][这是一个必须使用冒号 (:) 调用的方法。]rw]

返回向下取整的矩形。

**参数**

无。

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| `rect` | 向下取整的矩形。 |

**示例**

```lua
local floored = rect:floor();
```

### ceil

[![方法][这是一个必须使用冒号 (:) 调用的方法。]rw]

返回向上取整的矩形。

**参数**

无。

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| `rect` | 向上取整的矩形。 |

**示例**

```lua
local ceiled = rect:ceil();
```

### round

[![方法][这是一个必须使用冒号 (:) 调用的方法。]rw]

返回四舍五入的矩形。

**参数**

无。

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| `rect` | 四舍五入的矩形。 |

**示例**

```lua
local rounded = rect:round();
```

### is_zero

[![方法][这是一个必须使用冒号 (:) 调用的方法。]rw]

如果最小值和最大值都等于 0，则返回 `true`。

**参数**

无。

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| `bool` | 如果这是一个零矩形则返回 `true`。 |

**示例**

```lua
if rect:is_zero() then
    -- ...
end
```