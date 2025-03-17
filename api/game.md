# 🎮game

用法：`game.{interface_or_function}`

此表公开了 Fatality 使用的各种内部服务和全局对象，并提供了一种获取您需要的任何其他服务的方法。

_________________

### global_vars

[![字段][这是一个必须使用点(.)访问的常规字段。]rw]

类型：[`global_vars_t`](/api/game/global-vars-t "此类型的实例提供了一种读取游戏使用的几个全局变量的方法。不支持且永远不会支持更改任何值。")

此服务公开了游戏使用的全局变量，如帧时间或当前服务器时间。

### engine

[![字段][这是一个必须使用点(.)访问的常规字段。]rw]

类型：[`cengine_client`](/api/game/cengine-client "此类型的实例提供了一种与 Source 2 的引擎到客户端服务交互的方法。")

此服务公开了引擎客户端，其中包括常用的引擎相关函数。

### input

[![字段][这是一个必须使用点(.)访问的常规字段。]rw]

类型：[`ccsgo_input`](/api/game/ccsgo-input "此类型表示游戏的命令输入系统。")

此服务公开了命令输入系统。

### input_system

[![字段][这是一个必须使用点(.)访问的常规字段。]rw]

类型：[`cinput_system`](/api/game/cinput-system "此类型表示游戏的控制输入系统。")

此服务公开了控制输入系统。

### game_ui_funcs

[![字段][这是一个必须使用点(.)访问的常规字段。]rw]

类型：[`cgame_ui_funcs`](/api/game/cgame-ui-funcs "此类型表示游戏的 UI 函数。")

此服务公开了游戏的 UI 函数。