# 🎮 cengine_client

用法：`game.engine.{method}`

此类型的实例提供了一个与Source 2引擎到客户端服务的接口。

_________________
### get_last_timestamp

[![方法][此字段是一个方法，必须使用冒号(:)来调用。]rw]

返回最后一次时间戳，以秒为单位。

**参数**

无。

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| `float` | 时间戳，以秒为单位。 |

**示例**

```lua
local last_time = game.engine:get_last_timestamp();
```

### get_last_server_tick

[![方法][此字段是一个方法，必须使用冒号(:)来调用。]rw]

返回最后一次服务器tick数。

**参数**

无。

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| `int` | 服务器tick数。 |

**示例**

```lua
local server_tick = game.engine:get_last_server_tick();
```

### in_game

[![方法][此字段是一个方法，必须使用冒号(:)来调用。]rw]

返回客户端当前是否在游戏中。

**参数**

无。

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| `bool` | 游戏状态。 |

**示例**

```lua
if game.engine:in_game() then
    print("我在游戏中！");
end
```

### is_connected

[![Method][此字段是一个方法，必须使用冒号(:)来调用。]rw]

返回客户端当前是否已连接到游戏服务器。

**参数**

无。

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| `bool` | 如果已连接则返回 `true`。 |

**示例**

```lua
if game.engine:is_connected() then
    print("已连接！");
end
```

### get_netchan

[![Method][此字段是一个方法，必须使用冒号(:)来调用。]rw]

返回用于网络通信的网络通道。

**参数**

无。

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| [`cnet_chan`](/api/game/cengine-client/cnet-chan "提供了一个与网络通道类进行交互的接口") | 网络通道，如果不存在则返回 `nil`。 |

**示例**

```lua
local chan = game.engine:get_netchan();
```

### client_cmd

[![Method][此字段是一个方法，必须使用冒号(:)来调用。]rw]

执行客户端控制台命令。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `cmd` | `string` | 要执行的命令。 |
| `bool` | `unrestricted` | 执行是否应保留任何限制。默认为 `false`。 |

**返回值**

无。

**示例**

```lua
game.engine:client_cmd('say 你好！');
```

### get_screen_size

[![Method][此字段是一个方法，必须使用冒号(:)来调用。]rw]

返回客户端窗口屏幕大小。

**参数**

无。

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| `int` | 宽度。 |
| `int` | 高度。 |

**示例**

```lua
local w, h = game.engine:get_screen_size();
```