# 🗳️ Events

用法：`events.{event_name}`

Fatality 在 API 中提供了许多事件供使用 - 从各种钩子到游戏内事件。每个事件条目都是 [`event_t`](/api/events/event-t "事件用户类型。此类型的实例可以在 events 中找到。") 类型的对象。本表记录了您的脚本可以使用的事件。

> 当您的脚本卸载时，不需要手动移除事件。API 引擎会自动完成这个操作。

_________________
### present_queue

[![字段][这是一个必须使用点(.)访问的常规字段。]rw]

在游戏每次将帧排队进行渲染时调用。这是唯一允许在屏幕上绘制的位置。

**参数**

无。

**示例**

```lua
events.present_queue:add(function()
  print('present_queue')
end)
```

### create_move

[![字段][这是一个必须使用点(.)访问的常规字段。]rw]

在游戏每次创建移动时调用。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `cmd` | [`cuser_cmd`](api/types/cuser-cmd.md) | 用户命令。 |

**示例**

```lua
events.create_move:add(function(cmd)
  --
end)
```

### frame_stage_notify

[![字段][这是一个必须使用点(.)访问的常规字段。]rw]

在游戏每次进入新的帧阶段时调用。此事件在游戏处理新帧阶段之前调用。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `stage` | [`client_frame_stage`](/api/common-enums/client-frame-stage "包含各种帧渲染阶段的键。") | 当前帧阶段。 |

**示例**

```lua
events.frame_stage_notify:add(function(stage)
  print('New frame stage:', stage)
end)
```

### render_start_pre

[![字段][这是一个必须使用点(.)访问的常规字段。]rw]

在游戏每次开始场景渲染过程时调用。此事件在游戏函数运行之前调用。

**参数**

无。

**示例**

```lua
events.render_start_pre:add(function()
  print('Rendering started')
end)
```

### render_start_post

[![字段][这是一个必须使用点(.)访问的常规字段。]rw]

在游戏每次开始场景渲染过程时调用。此事件在游戏函数运行之后调用。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `setup` | [`cview_setup`](/api/common-types/cview-setup "描述视图设置参数。") | 视图设置信息。 |

**示例**

```lua
events.render_start_post:add(function(setup)
  print('Rendering completed with setup:', setup)
end)
```

### setup_view_pre

[![字段][这是一个必须使用点(.)访问的常规字段。]rw]

在游戏每次设置视图时调用。此事件在游戏函数运行**之前**调用。

**参数**

无。

**示例**

```lua
events.setup_view_pre:add(function()
  print('View setup started')
end)
```

### setup_view_post

[![字段][这是一个必须使用点(.)访问的常规字段。]rw]

在游戏每次设置视图信息时调用。此事件在游戏函数运行**之后**调用。

> 您可以从 `game.view_render` 服务中获取视图信息。

**参数**

无。

**示例**

```lua
events.setup_view_post:add(function()
  print('View setup completed')
end)
```

### override_view

[![字段][这是一个必须使用点(.)访问的常规字段。]rw]

在游戏每次内部覆盖视图信息时调用。您可以自由更改提供的视图设置中的任何内容。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `setup` | [`cview_setup`](/api/common-types/cview-setup "描述视图设置参数。") | 视图设置信息。 |

**示例**

```lua
events.override_view:add(function(setup)
  setup.fov = 90
  print('View overridden with new FOV:', setup.fov)
end)
```

### event

[![字段][这是一个必须使用点(.)访问的常规字段。]rw]

在每次游戏事件触发时调用。

> 我们并不监听游戏中存在的每个事件。如果您需要我们没有监听的事件，请使用 [`mods.events`](/api/events/event-t "此模块允许您管理自定义游戏内事件监听器。")

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `event` | [`game_event_t`](/api/common-types/game-event-t "描述游戏事件。") | 游戏事件。 |

**示例**

```lua
events.event:add(function(event)
  print('Game event triggered:', event.name)
end)
```

### handle_input

[![字段][这是一个必须使用点(.)访问的常规字段。]rw]

每次游戏处理鼠标/控制器输入时调用。如果需要，这是改变鼠标移动的好地方。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `type` | [`input_type_t`](/api/enums/input-bit-mask.md) | 输入类型。 |
| `value` | [`ref_holder_t<float>`](/api/types/ref-holder-t.md) | 输入状态。 |

**示例**

```lua
events.handle_input:add(function(type, value)
  --
end)
```

### input

[![字段][这是一个必须使用点(.)访问的常规字段。]rw]

在 GUI 每次处理输入时调用。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `msg` | `int` | 系统消息。[文档](https://learn.microsoft.com/en-us/windows/win32/winmsg/about-messages-and-message-queues#system-defined-messages) |
| `w` | `int` | WPARAM。 |
| `l` | `int` | LPARAM。 |

**示例**

```lua
events.input:add(function(msg, w, l)
  print('Input received:', msg, w, l)
end)
```