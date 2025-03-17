# 📢notification

此类型表示一个通知项。

_________________

### __call

[![构造函数][这是此类型的构造函数定义。]rw]

构造通知。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `hdr` | `string` | 标题。 |
| `txt` | `string` | 正文。 |
| `ico` | [`texture?`](/api/draw/managed/texture "此类型表示一个纹理对象。") | 图标。默认为 `nil`。 |

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| `notification` | 通知对象。 |

**示例**

```lua
local notif = gui.notification('Hello', 'Lua is running!');
```