# 📦value_param

此类型表示某些控件类型使用的值数据。

> 注意，这部分：`<type>` 用于指定此类型实例持有的确切类型。例如，当它显示为 `value_param<bool>` 时，表示 `get` 将返回一个 `bool` 值，并且 `set` 只接受 `bool` 类型作为其 `val` 参数。

_________________

### get

[![方法][此字段是一个方法，必须使用冒号 (:) 调用。]rw]

返回值。

**参数**

无。

**返回值**

| 名称 | 描述 |
| ---- | ----------- |
| `<type>` | 值。 |

**示例**

```lua
ctrl:get_value():get();
```

### get_direct

[![方法][此字段是一个方法，必须使用冒号 (:) 调用。]rw]

返回显示任何活动键绑定的值。

**返回值**

| 名称 | 描述 |
| ---- | ----------- |
| `<type>` | 值。 |

**示例**

```lua
ctrl:get_value():get_direct();
```

### set

[![方法][此字段是一个方法，必须使用冒号 (:) 调用。]rw]

设置值。

> 建议使用控件的 `set_value` 方法（如果有）。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `val` | `<type>` | 值。 |

**返回值**

无。

**示例**

```lua
ctrl:get_value():set(123);
```

### get_hotkey_state

[![方法][此字段是一个方法，必须使用冒号 (:) 调用。]rw]

如果有任何活动的热键，则返回 `true`。

**参数**

无。

**返回值**

| 名称 | 描述 |
| ---- | ----------- |
| `bool` | 如果有任何热键处于活动状态，则为 `true`。 |

**示例**

```lua
if ctrl:get_value():get_hotkey_state() then
    -- ...
end
```

### disable_hotkeys

[![方法][此字段是一个方法，必须使用冒号 (:) 调用。]rw]

禁用所有活动的热键。这允许您覆盖值。

**参数**

无。

**返回值**

无。

**示例**

```lua
ctrl:get_value():disable_hotkeys();
```