# ⚙️ptr

`ptr` 是一个字面量指针。

为了保持与 C++ 的互操作性，一些函数返回 `void*` 作为类型，这些类型随后会被转换为 `light_userdata`。由于你不能直接将 FFI 类型转换为 `light_userdata`，我们引入了一个专门的类型来帮助进行这种转换。

在将你的指针转换为 API 支持的指针之前，你**需要**将其转换为 `uintptr_t`。这可以通过以下方式完成：

```lua
local ptr_num = ffi.cast('uintptr_t', ptr_cdata);
```

然后，你可以在此类型的构造函数中使用转换后的值。
_________________


### __call
[![构造函数][这是此类型的构造函数定义。]rw]

将数字转换为指针。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `num` | `int` | 作为数字的指针。 |

**返回值**

| 名称 | 描述 |
| ---- | ----------- |
| `ptr` | 作为 `light_userdata` 的指针。 |

**示例**

```lua
-- 首先转换为数字
local ptr_num = ffi.cast('uintptr_t', ptr_cdata);

-- 然后转换为 light_userdata
local ptr_ld = ptr(ptr_num);
```