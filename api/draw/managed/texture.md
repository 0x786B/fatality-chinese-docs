# texture

此类型代表一个纹理对象。

> 此类型继承自 [`managed`](/api/draw/managed "此类型代表一个托管对象。你不能直接创建此类型的实例。") 类型。其所有基础方法和字段在此类型中也可用。

> 支持的纹理格式有：
> * JPEG (.jpg, .jpeg) - 不支持12 bpc/算术编码
> * PNG (.png)
> * TGA (.tga) 
> * BMP (.bmp) - 不支持1 bpp和RLE变体
> * PSD (.psd) - 仅支持合成视图，无额外通道，8/16 bpc
> * GIF (.gif) - 仅支持第一帧，对于动画gif请使用 [`animated_texture`](/api/draw/managed/texture/animated-texture "此类型是一个动画纹理。此纹理类型仅支持GIF类型，不支持APNG。")
> * HDR (.hdr)
> * PIC (.pic)
> * PNM (.pnm, .ppm, .pgm) - PPM和PGM仅支持二进制格式

_________________

### __call

[![构造函数][这是此类型的构造函数定义。]rw]

构造此类型的实例。

> 传递无效指针，或小于大小的内存区域将导致**崩溃**。

**参数**

*1. 从文件加载：*

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `path` | `string` | 有效纹理文件的路径。 |

*2. 从内存加载：*

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `data` | [`ptr`](/api/common-types/ptr "此类型是一个字面指针。") | 指向内存中纹理**文件**数据的指针。 |
| `sz` | `int` | 纹理**文件**数据的大小。 |

*3. 从RGBA数据加载：*

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `data` | [`ptr`](/api/common-types/ptr "此类型是一个字面指针。") | 指向内存中**RGBA**数据的指针。 |
| `w` | `int` | 宽度。 |
| `h` | `int` | 高度（行数）。 |
| `p` | `int` | 行距（行宽度）。这是每行的**字节**数。 |

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| `texture` | 纹理对象。 |

**示例**

```lua
local tex = draw.texture('funny_meme.png');
```

### is_animated

[![Field][此字段是一个普通字段，必须使用点(.)来访问。]rw]
[![Read Only][此字段是只读字段，你不能更改其值。这不适用于子字段（如果有的话）。]r]

类型：`bool`

如果这是 [`animated_texture`](/api/draw/managed/texture/animated-texture "此类型是一个动画纹理。此纹理类型仅支持GIF类型，不支持APNG。") 的实例，则设置为 `true`。

### get_size

[![方法][此字段是一个方法，必须使用冒号(:)来调用。]rw]

返回此纹理的大小。

**参数**

无。

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| [`vec2`](/api/draw/common-types/vec2 "此类型是渲染系统中使用的2D向量。") | 纹理尺寸。 |

**示例**

```lua
local sz = tex:get_size();
```