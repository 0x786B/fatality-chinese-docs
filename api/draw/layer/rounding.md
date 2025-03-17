# rounding

此枚举用于确定圆角形状的圆角。

_________________

## tl

[![字段][此字段是一个普通字段，必须使用点(.)来访问。]rw]

圆角左上角。

## tr

[![字段][此字段是一个普通字段，必须使用点(.)来访问。]rw]

圆角右上角。

## bl

[![字段][此字段是一个普通字段，必须使用点(.)来访问。]rw]

圆角左下角。

## br

[![字段][此字段是一个普通字段，必须使用点(.)来访问。]rw]

圆角右下角。

## t

[![字段][此字段是一个普通字段，必须使用点(.)来访问。]rw]

圆角两个顶部角。这会产生与使用 `bit.bor(draw.rounding.tl, draw.rounding.tr)` 相同的结果。

## l

[![字段][此字段是一个普通字段，必须使用点(.)来访问。]rw]

圆角两个左侧角。这会产生与使用 `bit.bor(draw.rounding.tl, draw.rounding.bl)` 相同的结果。

## r

[![字段][此字段是一个普通字段，必须使用点(.)来访问。]rw]

圆角两个右侧角。这会产生与使用 `bit.bor(draw.rounding.tr, draw.rounding.br)` 相同的结果。

## b

[![字段][此字段是一个普通字段，必须使用点(.)来访问。]rw]

圆角两个底部角。这会产生与使用 `bit.bor(draw.rounding.bl, draw.rounding.br)` 相同的结果。

## all

[![字段][此字段是一个普通字段，必须使用点(.)来访问。]rw]

圆角所有角。这会产生与使用 `bit.bor(draw.rounding.tl, draw.rounding.tr, draw.rounding.bl, draw.rounding.br)` 相同的结果。