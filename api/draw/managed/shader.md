# shader

此类型代表一个着色器。[`HLSL文档`](https://learn.microsoft.com/en-us/windows/win32/direct3dhlsl/dx-graphics-hlsl-reference)

> 此类型继承自 [`managed`](/api/draw/managed "此类型代表一个托管对象。你不能直接创建此类型的实例。") 类型。其所有基础方法和字段在此类型中也可用。

> 仅支持片段着色器（又称像素着色器）。

> 渲染系统使用着色器版本4（ps_4_0）。

_________________

### HLSL结构
常量缓冲区字段如下：

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `mvp` | `float4x4` | 投影矩阵。 |
| `tex` | `float2` | 纹理尺寸。 |
| `time` | `float` | 渲染时间（**不是**帧时间）。 |
| `alpha` | `float` | 全局不透明度覆盖。 |

输入字段如下：

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `pos` | `float4` | 屏幕上的顶点位置（x,y,z除以w）。寄存器：`SV_POSITION`。 |
| `col` | `float4` | 顶点颜色色调（r, g, b, a）。寄存器：`COLOR0`。 |
| `uv` | `float2` | UV坐标（u, v）。寄存器：`TEXCOORD0`。 |

绑定的对象如下：

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `sampler0` | `sampler` | 纹理采样器。 |
| `texture0` | `Texture2D` | 纹理对象。 |

模板：

```shader
cbuffer cb : register(b0) {
    float4x4 mvp;
    float2 tex;
    float time;
    float alpha;
};

struct PS_INPUT {
    float4 pos : SV_POSITION;
    float4 col : COLOR0;
    float2 uv : TEXCOORD0;
};

sampler sampler0;
Texture2D texture0;
```

### __call

[![构造函数][这是此类型的构造函数定义。]rw]

构造一个着色器。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `src` | `string` | 着色器源代码。 |

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| `shader` | 着色器对象。 |

**示例**

```lua
local blur = draw.shader([[

// 定义常量缓冲区。
cbuffer cb : register(b0) {
    float4x4 mvp;
    float2 tex;
    float time;
    float alpha;
};

// 定义输入。
struct PS_INPUT {
    float4 pos : SV_POSITION;
    float4 col : COLOR0;
    float2 uv : TEXCOORD0;
};

// 使用纹理采样器和纹理。
sampler sampler0;
Texture2D texture0;

float4 main(PS_INPUT inp) : SV_Target {
    float radius = 2.0; // 模糊半径
    float2 inv_size = 1.0 / tex.xy; // 纹理的反尺寸
    float weight = 0.0; // 总权重
    float4 color = 0.0; // 总颜色

    // 执行高斯模糊
    for (float x = -radius; x <= radius; x += 1.0)
    {
        for (float y = -radius; y <= radius; y += 1.0)
        {
            float2 coord = inp.uv + float2(x, y) * inv_size;
            color += texture0.Sample(sampler0, coord) * exp(-((x * x + y * y) / (2.0 * radius * radius)));
            weight += exp(-((x * x + y * y) / (2.0 * radius * radius)));
        }
    }

    // 平均颜色
    color /= weight;
    color.a *= inp.col.a; // 应用alpha调制
    return color;
}
]]);