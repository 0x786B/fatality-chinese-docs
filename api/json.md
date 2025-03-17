# 📦 JSON 模块

> ⚠️ **注意**：JSON功能并非引擎原生支持，而是通过纯Lua代码实现的。您可以直接复制下方源码到您的项目中使用。

JSON（JavaScript Object Notation）是一种轻量级的数据交换格式。本模块提供了JSON字符串的解析和序列化功能，使您能够在Lua中方便地处理JSON数据。

## &lt;/&gt;源代码

<details>
<summary>
<h3 style="display: inline-block; margin: 0; cursor: pointer;">
<span style="color: #0066cc;">📄 点击此处查看完整源代码</span> <span style="color: #666;">(可直接复制使用)</span>
</h3>
</summary>

```lua
local json = {}
local space_chars = { [' '] = true, ['\t'] = true, ['\r'] = true, ['\n'] = true }
local digit_chars = {
    ['0'] = true,
    ['1'] = true,
    ['2'] = true,
    ['3'] = true,
    ['4'] = true,
    ['5'] = true,
    ['6'] = true,
    ['7'] = true,
    ['8'] = true,
    ['9'] = true
}
local hex_chars = {
    ['0'] = true,
    ['1'] = true,
    ['2'] = true,
    ['3'] = true,
    ['4'] = true,
    ['5'] = true,
    ['6'] = true,
    ['7'] = true,
    ['8'] = true,
    ['9'] = true,
    ['a'] = true,
    ['b'] = true,
    ['c'] = true,
    ['d'] = true,
    ['e'] = true,
    ['f'] = true,
    ['A'] = true,
    ['B'] = true,
    ['C'] = true,
    ['D'] = true,
    ['E'] = true,
    ['F'] = true
}
local escape_chars = {
    ['\\'] = '\\',
    ['/'] = '/',
    ['"'] = '"',
    ['b'] = '\b',
    ['f'] = '\f',
    ['n'] = '\n',
    ['r'] = '\r',
    ['t'] = '\t'
}
local literals = {
    ['true'] = true,
    ['false'] = false,
    ['null'] = nil
}

local function decode_error(str, pos, msg)
    local line_count = 1
    local col_count = 1
    for i = 1, pos do
        col_count = col_count + 1
        if str:sub(i, i) == '\n' then
            line_count = line_count + 1
            col_count = 1
        end
    end
    error(string.format("JSON解析错误：%s，位置 %d（行 %d, 列 %d）", msg, pos, line_count, col_count))
end

local function skip_whitespace(str, pos)
    while pos <= #str and space_chars[str:sub(pos, pos)] do
        pos = pos + 1
    end
    return pos
end

local function parse_string(str, pos)
    pos = pos + 1
    local result = ""
    local escape = false
    local i = pos

    while i <= #str do
        local c = str:sub(i, i)
        if escape then
            if escape_chars[c] then
                result = result .. escape_chars[c]
            elseif c == 'u' then
                if i + 4 > #str then
                    decode_error(str, i, "不完整的Unicode转义序列")
                end
                local hex = str:sub(i + 1, i + 4)
                for j = 1, 4 do
                    if not hex_chars[hex:sub(j, j)] then
                        decode_error(str, i + j, "无效的Unicode转义序列")
                    end
                end
                local code = tonumber(hex, 16)
                local bytes

                if code < 0x80 then
                    bytes = string.char(code)
                elseif code < 0x800 then
                    bytes = string.char(
                        0xC0 + math.floor(code / 0x40),
                        0x80 + (code % 0x40)
                    )
                else
                    bytes = string.char(
                        0xE0 + math.floor(code / 0x1000),
                        0x80 + (math.floor(code / 0x40) % 0x40),
                        0x80 + (code % 0x40)
                    )
                end
                result = result .. bytes
                i = i + 4
            else
                decode_error(str, i, "无效的转义序列 \\" .. c)
            end
            escape = false
        elseif c == '\\' then
            escape = true
        elseif c == '"' then
            return result, i + 1
        else
            result = result .. c
        end
        i = i + 1
    end
    decode_error(str, pos, "未闭合的字符串")
end

local function parse_number(str, pos)
    local start_pos = pos
    local is_negative = false

    if str:sub(pos, pos) == '-' then
        is_negative = true
        pos = pos + 1
    end

    if str:sub(pos, pos) == '0' then
        pos = pos + 1
    elseif digit_chars[str:sub(pos, pos)] then
        pos = pos + 1
        while pos <= #str and digit_chars[str:sub(pos, pos)] do
            pos = pos + 1
        end
    else
        decode_error(str, pos, "无效的数值")
    end

    if pos <= #str and str:sub(pos, pos) == '.' then
        pos = pos + 1
        if not digit_chars[str:sub(pos, pos)] then
            decode_error(str, pos, "小数点后必须有数字")
        end
        while pos <= #str and digit_chars[str:sub(pos, pos)] do
            pos = pos + 1
        end
    end

    if pos <= #str and (str:sub(pos, pos) == 'e' or str:sub(pos, pos) == 'E') then
        pos = pos + 1
        if str:sub(pos, pos) == '+' or str:sub(pos, pos) == '-' then
            pos = pos + 1
        end
        if not digit_chars[str:sub(pos, pos)] then
            decode_error(str, pos, "指数必须有数字")
        end
        while pos <= #str and digit_chars[str:sub(pos, pos)] do
            pos = pos + 1
        end
    end

    local num_str = str:sub(start_pos, pos - 1)
    local num = tonumber(num_str)

    if not num then
        decode_error(str, start_pos, "无效的数值")
    end
    return num, pos
end

local function look_ahead(str, pos, target)
    for i = 1, #target do
        if pos + i - 1 > #str or str:sub(pos + i - 1, pos + i - 1) ~= target:sub(i, i) then
            return false
        end
    end
    return true
end

local function parse_literal(str, pos)
    for name, value in pairs(literals) do
        if look_ahead(str, pos, name) then
            return value, pos + #name
        end
    end
    decode_error(str, pos, "无效的字面值")
end

local parse_object, parse_array, parse_value

parse_value = function(str, pos)
    pos = skip_whitespace(str, pos)
    local c = str:sub(pos, pos)

    if c == '"' then
        return parse_string(str, pos)
    elseif c == '{' then
        return parse_object(str, pos)
    elseif c == '[' then
        return parse_array(str, pos)
    elseif c == '-' or digit_chars[c] then
        return parse_number(str, pos)
    elseif c == 't' or c == 'f' or c == 'n' then
        return parse_literal(str, pos)
    else
        decode_error(str, pos, "无法识别的值")
    end
end

parse_object = function(str, pos)
    pos = pos + 1
    local obj = {}
    local isempty = true

    pos = skip_whitespace(str, pos)
    if str:sub(pos, pos) == '}' then
        return obj, pos + 1
    end

    while true do
        pos = skip_whitespace(str, pos)

        if str:sub(pos, pos) ~= '"' then
            decode_error(str, pos, "对象键必须是字符串")
        end

        local key
        key, pos = parse_string(str, pos)

        pos = skip_whitespace(str, pos)

        if str:sub(pos, pos) ~= ':' then
            decode_error(str, pos, "对象键值对之间缺少冒号")
        end
        pos = pos + 1

        local val
        val, pos = parse_value(str, pos)

        obj[key] = val
        isempty = false

        pos = skip_whitespace(str, pos)

        if str:sub(pos, pos) == '}' then
            return obj, pos + 1
        elseif str:sub(pos, pos) == ',' then
            pos = pos + 1
        else
            decode_error(str, pos, "对象格式不正确")
        end
    end
end

parse_array = function(str, pos)
    pos = pos + 1
    local arr = {}
    local index = 1

    pos = skip_whitespace(str, pos)
    if str:sub(pos, pos) == ']' then
        return arr, pos + 1
    end

    while true do
        local val
        val, pos = parse_value(str, pos)

        arr[index] = val
        index = index + 1

        pos = skip_whitespace(str, pos)

        if str:sub(pos, pos) == ']' then
            return arr, pos + 1
        elseif str:sub(pos, pos) == ',' then
            pos = pos + 1
        else
            decode_error(str, pos, "数组格式不正确")
        end
    end
end

function json.parse(str)
    if type(str) ~= "string" then
        error("json.parse需要一个字符串参数")
    end

    local pos = skip_whitespace(str, 1)
    local val, next_pos = parse_value(str, pos)

    next_pos = skip_whitespace(str, next_pos)
    if next_pos <= #str then
        decode_error(str, next_pos, "JSON字符串尾部有多余内容")
    end

    return val
end

local function kind_of(obj)
    if type(obj) ~= 'table' then return type(obj) end
    local i = 1
    for _ in pairs(obj) do
        if obj[i] ~= nil then i = i + 1 else return 'table' end
    end
    if i == 1 then return 'table' else return 'array' end
end

local function escape_str(s)
    local result = s:gsub('[%z\1-\31\\"]', function(c)
        local special = escape_chars[c]
        if special then
            return '\\' .. special
        end
        return string.format('\\u00%02x', string.byte(c))
    end)
    return result
end

local function encode(val, stack)
    local t = type(val)

    if t == 'string' then
        return '"' .. escape_str(val) .. '"'
    elseif t == 'number' then
        if val ~= val or val >= math.huge or val <= -math.huge then
            error("无法序列化'" .. tostring(val) .. "'到JSON，JSON不支持Infinity/NaN")
        end
        return tostring(val)
    elseif t == 'boolean' then
        return tostring(val)
    elseif t == 'nil' then
        return 'null'
    elseif t == 'table' then
        if stack and stack[val] then error("循环引用") end
        if not stack then stack = {} end
        stack[val] = true

        local result
        local kind = kind_of(val)

        if kind == 'array' then
            result = {}
            for i, v in ipairs(val) do
                result[i] = encode(v, stack)
            end
            result = '[' .. table.concat(result, ',') .. ']'
        else
            result = {}
            for k, v in pairs(val) do
                if type(k) ~= 'string' then
                    error("JSON对象的键必须是字符串")
                end
                table.insert(result, '"' .. escape_str(k) .. '":' .. encode(v, stack))
            end
            result = '{' .. table.concat(result, ',') .. '}'
        end

        stack[val] = nil
        return result
    else
        error("无法序列化'" .. type(val) .. "'类型到JSON")
    end
end

function json.stringify(val)
    local error_handler = function(err)
        return "JSON序列化错误: " .. err
    end
    
    local success, result = xpcall(function() return encode(val) end, error_handler)
    if success then
        return result
    else
        error(result)
    end
end

return json
```

</details>

## 🔧 实现细节

该JSON模块是纯Lua实现的，不依赖外部库。它通过递归下降解析器实现JSON解析，并使用递归方法实现序列化。错误处理机制提供了详细的错误信息，有助于调试。

## 🚀 快速开始

将上述代码复制到您的项目中，并在需要使用的地方直接调用：

```lua
-- 假设您已将代码保存为全局变量 json
-- 解析JSON字符串
local data = json.parse('{"name":"张三","age":30}')

-- 序列化Lua表为JSON
local jsonStr = json.stringify({name="李四", age=25})
```

## 功能概述

该模块实现了两个主要功能：
- `json.parse()`: 将JSON字符串解析为Lua表
- `json.stringify()`: 将Lua表序列化为JSON字符串

## API 参考

### parse

[![函数][这是一个必须使用点(.)调用的函数]rw]

将JSON字符串解析为Lua数据结构。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `str` | `string` | 要解析的JSON字符串。 |

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| `table/number/string/boolean/nil` | 解析后的Lua数据。 |

**错误处理**

- 如果输入不是字符串，抛出错误
- 如果JSON格式不正确，抛出详细的解析错误，包括错误位置（行号和列号）

**示例**

```lua
local jsonString = [[{"name":"张三","age":30,"isStudent":false,"scores":[95,82,78]}]]
local data = json.parse(jsonString)

print("姓名:", data.name)           -- 输出: 姓名: 张三
print("年龄:", data.age)            -- 输出: 年龄: 30
print("是否是学生:", data.isStudent) -- 输出: 是否是学生: false
print("第一门课成绩:", data.scores[1]) -- 输出: 第一门课成绩: 95
```

### stringify

[![函数][这是一个必须使用点(.)调用的函数]rw]

将Lua数据结构序列化为JSON字符串。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `val` | `table/number/string/boolean/nil` | 要序列化的Lua数据。 |

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| `string` | 序列化后的JSON字符串。 |

**错误处理**

- 如果数据包含循环引用，抛出错误
- 如果数据包含无法序列化的类型（如函数），抛出错误
- 如果表的键不是字符串，抛出错误
- 如果数字是NaN或Infinity，抛出错误

**示例**

```lua
local person = {
    name = "李四",
    age = 25,
    address = {
        city = "上海",
        street = "南京路"
    },
    hobbies = { "读书", "游泳", "编程" }
}

local serialized = json.stringify(person)
print("序列化结果:", serialized)
-- 输出: {"age":25,"hobbies":["读书","游泳","编程"],"name":"李四","address":{"city":"上海","street":"南京路"}}
```

## 📊 数据类型映射

JSON和Lua之间的数据类型映射关系如下：

| JSON类型 | Lua类型 |
| -------- | ------- |
| 对象 | 表 (table) |
| 数组 | 表 (table)，带有连续的数字索引 |
| 字符串 | 字符串 (string) |
| 数字 | 数字 (number) |
| 布尔值 | 布尔值 (boolean) |
| null | nil |

## ⚠️ 注意事项

1. **数组和对象的区别**：
   - 如果一个表的键是连续的数字（从1开始），它将被视为JSON数组
   - 其他情况下，表将被视为JSON对象

2. **特殊字符处理**：
   - 字符串中的特殊字符（如引号、反斜杠、控制字符）会被适当转义
   - Unicode字符支持通过`\uXXXX`转义序列

3. **数字限制**：
   - JSON不支持NaN和Infinity值
   - 非常大或非常小的数字可能在不同平台上有精度差异

4. **性能考虑**：
   - 对于非常大的JSON数据，解析和序列化可能需要较长时间
   - 如果遇到循环引用，序列化将失败
