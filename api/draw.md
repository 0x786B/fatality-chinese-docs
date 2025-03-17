# ✏️ draw

用法: `draw.{func_or_field}`

此表描述了软件的渲染系统。

> 子章节中描述的所有类型和枚举**必须**以`draw.`为前缀。这样做是为了避免特定类型与其他类型混淆，比如在渲染和游戏中存在的不同的`color`类型。

_________________
### adapter

[![字段][这是一个常规字段，必须使用点(.)来访问。]rw]
[![只读][这是一个只读字段，你不能更改它的值。这不适用于子字段(如果有的话)。]r]

类型: `adapter`

渲染适配器。

### frame_time

[![字段][这是一个常规字段，必须使用点(.)来访问。]rw]
[![只读][这是一个只读字段，你不能更改它的值。这不适用于子字段(如果有的话)。]r]

类型: `float`

渲染帧时间。是[`global_vars_t.frame_time`](/api/game/global-vars-t?id=frame_time "类型: float")的别名。

### time

[![字段][这是一个常规字段，必须使用点(.)来访问。]rw]
[![只读][这是一个只读字段，你不能更改它的值。这不适用于子字段(如果有的话)。]r]

类型: `float`

时间，以秒为单位。是[`global_vars_t.real_time`](/api/game/global-vars-t?id=real_time "类型: float")的别名。

### scale

[![字段][这是一个常规字段，必须使用点(.)来访问。]rw]
[![只读][这是一个只读字段，你不能更改它的值。这不适用于子字段(如果有的话)。]r]

类型: `float`

全局DPI缩放。

### display

[![字段][这是一个常规字段，必须使用点(.)来访问。]rw]
[![只读][这是一个只读字段，你不能更改它的值。这不适用于子字段(如果有的话)。]r]

类型: [`vec2`](/api/draw/common-types/vec2 "这是渲染系统中使用的2D向量类型。")

显示区域大小（视口尺寸）。[`cengine_client:get_screen_size`](/api/game/cengine-client?id=get_screen_size "返回客户端窗口屏幕大小。")将返回完全相同的值。覆盖此向量的任何值都将导致未定义的行为。

### textures

[![字段][这是一个常规字段，必须使用点(.)来访问。]rw]
[![只读][这是一个只读字段，你不能更改它的值。这不适用于子字段(如果有的话)。]r]

类型: [`accessor<texture>`](/api/draw/common-types/accessor "这种类型代表了一种安全访问映射的方式。")

一个字符串到[`texture`](/api/draw/managed/texture "这种类型代表一个纹理对象。")的映射，包含所有托管纹理。你可以使用自定义ID查询和推送纹理。当你将纹理添加到此映射时，它会在需要时自动销毁和重新创建（例如当DX11设备丢失时）。

> 内置纹理:
> * `gui_loading`: 加载旋转器
> * `gui_user_avatar`: 当前用户的头像。如果你没有设置头像可能为nil
> * `gui_icon_up`: 向上箭头
> * `gui_icon_down`: 向下箭头
> * `gui_icon_copy`: 复制图标
> * `gui_icon_paste`: 粘贴图标
> * `gui_icon_add`: 添加图标
> * `gui_icon_search`: 搜索图标
> * `gui_icon_settings`: 设置图标（齿轮）
> * `gui_icon_bug`: 错误图标
> * `gui_icon_key`.N: 键盘/鼠标按键图标。将N替换为所需按钮的字符代码
> * `icon_rage`: RAGE标签图标
> * `icon_legit`: LEGIT标签图标
> * `icon_visuals`: VISUALS标签图标
> * `icon_misc`: MISC标签图标
> * `icon_scripts`: LUA标签图标
> * `icon_skins`: SKINS标签图标
> * `icon_cloud`: 云图标
> * `icon_file`: 文件图标
> * `icon_refresh`: 刷新图标
> * `icon_save`: 保存图标
> * `icon_configs`: "配置"弹窗图标
> * `icon_keys`: 键盘图标
> * `icon_info`: "关于"弹窗图标
> * `icon_close`: 关闭图标（叉号）
> * `icon_load`: 加载图标
> * `icon_import`: 导入图标
> * `icon_export`: 导出图标
> * `icon_delete`: 删除图标
> * `icon_autoload`: "自动加载"图标
> * `icon_allow_insecure`: "允许不安全"图标
> * `icon_cloud_upd`: 云更新图标
> * `player_texture`: 玩家预览纹理

### fonts

[![字段][这是一个常规字段，必须使用点(.)来访问。]rw]
[![只读][这是一个只读字段，你不能更改它的值。这不适用于子字段(如果有的话)。]r]

类型: [`accessor<font_base>`](/api/draw/common-types/accessor "这种类型代表了一种安全访问映射的方式。")

一个字符串到[`font_base`](/api/draw/managed/font-base "这种类型代表字体类型的基类。你不能创建此类型的实例。请使用子类型。")的映射，包含所有托管字体。你可以使用自定义ID查询和推送字体。当你将字体添加到此映射时，它会在需要时自动销毁和重新创建（例如当DX11设备丢失时）。

> 内置字体:
> * `gui_debug`: Verdana, 13px
> * `gui_title`: Figtree ExtraBold, 23px
> * `gui_main`: Figtree Medium, 14px
> * `gui_main_shadow`: Figree Medium, 14px, 带阴影
> * `gui_main_fb`: Segoe UI Semibold, 14px
> * `gui_bold`: Figtree ExtraBold, 14px
> * `gui_bold_fb`: Segoe UI Black, 14px
> * `gui_semi_bold`: Figtree SemiBold, 14px
> * `gui_semi_bold_fb`: Segoe UI Bold, 14px

### shaders

[![字段][这是一个常规字段，必须使用点(.)来访问。]rw]
[![只读][这是一个只读字段，你不能更改它的值。这不适用于子字段(如果有的话)。]r]

类型: [`accessor<shader>`](/api/draw/common-types/accessor "这种类型代表了一种安全访问映射的方式。")

一个字符串到[`shader`](/api/draw/managed/shader "这种类型代表一个着色器。HLSL文档")的映射，包含所有托管着色器。你可以使用自定义ID查询和推送着色器。当你将着色器添加到此映射时，它会在需要时自动销毁和重新创建（例如当DX11设备丢失时）。

> 内置着色器:
> * `blur_f`: 高斯模糊着色器

### surface

[![字段][这是一个常规字段，必须使用点(.)来访问。]rw]
[![只读][这是一个只读字段，你不能更改它的值。这不适用于子字段(如果有的话)。]r]

类型: [`layer`](/api/draw/layer "图层是用于存储渲染命令以及顶点和索引数据的类型。这是推送形状和控制渲染状态的唯一方式。")

你可以在其上进行渲染的图层。