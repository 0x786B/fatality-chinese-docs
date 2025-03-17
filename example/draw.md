# 🎨绘图类示例

本页面将介绍如何使用绘图类中的函数,如有不足之处请见谅。

_________________


### 创建字体
创建了一个16号字体，并启用了抗锯齿和禁用了DPI缩放
```lua
local layer = draw.surface
local flags = bit.bor(draw.font_flags.no_dpi, draw.font_flags.anti_alias)
local verdana = draw.font("Verdana.ttf", 16, flags)
verdana:create()
local function on_present_queue()
    local d = draw.surface;
    d.font = verdana
    d:add_text(draw.vec2(50, 50),
        'hello world',
         draw.color.white()
    );
end
events.present_queue:add(on_present_queue);
```