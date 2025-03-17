# 📦 文件系统模块

> ⚠️ **注意**：文件系统功能通过FFI调用Windows API实现，提供了基本的文件和目录操作功能。

文件系统模块提供了在Lua中进行文件和目录操作的功能，包括文件的读写、目录的创建删除、文件校验等功能。

## &lt;/&gt;源代码

<details>
<summary>
<h3 style="display: inline-block; margin: 0; cursor: pointer;">
<span style="color: #0066cc;">📄 点击此处查看完整源代码</span> <span style="color: #666;">(可直接复制使用)</span>
</h3>
</summary>

```lua
ffi.cdef[[
    typedef unsigned long DWORD;
    typedef int BOOL;
    typedef const char* LPCSTR;
    typedef void* HANDLE;
    typedef unsigned short WORD;
    typedef unsigned char BYTE;
    typedef char* LPSTR;
    typedef wchar_t* LPWSTR;
    typedef const wchar_t* LPCWSTR;
    typedef struct _SECURITY_ATTRIBUTES {
        DWORD nLength;
        void* lpSecurityDescriptor;
        BOOL bInheritHandle;
    } SECURITY_ATTRIBUTES, *LPSECURITY_ATTRIBUTES;
    BOOL CreateDirectoryA(LPCSTR lpPathName, LPSECURITY_ATTRIBUTES lpSecurityAttributes);   
    HANDLE CreateFileA(
        LPCSTR lpFileName,
        DWORD dwDesiredAccess,
        DWORD dwShareMode,
        LPSECURITY_ATTRIBUTES lpSecurityAttributes,
        DWORD dwCreationDisposition,
        DWORD dwFlagsAndAttributes,
        HANDLE hTemplateFile
    );
    BOOL ReadFile(
        HANDLE hFile,
        void* lpBuffer,
        DWORD nNumberOfBytesToRead,
        DWORD* lpNumberOfBytesRead,
        void* lpOverlapped
    );
    BOOL WriteFile(
        HANDLE hFile,
        const void* lpBuffer,
        DWORD nNumberOfBytesToWrite,
        DWORD* lpNumberOfBytesWritten,
        void* lpOverlapped
    );
    BOOL CloseHandle(HANDLE hObject);
    DWORD GetFileSize(HANDLE hFile, DWORD* lpFileSizeHigh);
    BOOL GetFileAttributesExA(
        LPCSTR lpFileName,
        int fInfoLevelId,
        void* lpFileInformation
    );
    BOOL DeleteFileA(LPCSTR lpFileName);
    DWORD GetLastError();
    DWORD GetModuleFileNameA(HANDLE hModule, LPSTR lpFilename, DWORD nSize);
    HANDLE GetModuleHandleA(LPCSTR lpModuleName);
    HANDLE FindFirstFileA(LPCSTR lpFileName, void* lpFindFileData);
    BOOL FindNextFileA(HANDLE hFindFile, void* lpFindFileData);
    BOOL FindClose(HANDLE hFindFile);
    HANDLE CreateToolhelp32Snapshot(DWORD dwFlags, DWORD th32ProcessID);
    BOOL Process32First(HANDLE hSnapshot, void* lppe);
    BOOL Process32Next(HANDLE hSnapshot, void* lppe);
    HANDLE OpenProcess(DWORD dwDesiredAccess, BOOL bInheritHandle, DWORD dwProcessId);
    DWORD GetProcessImageFileNameA(HANDLE hProcess, LPSTR lpImageFileName, DWORD nSize);
    DWORD GetFileAttributesA(LPCSTR lpFileName);
    BOOL RemoveDirectoryA(LPCSTR lpPathName);
]]
local GENERIC_READ = 0x80000000
local GENERIC_WRITE = 0x40000000
local FILE_SHARE_READ = 0x00000001
local FILE_SHARE_WRITE = 0x00000002
local OPEN_EXISTING = 3
local CREATE_ALWAYS = 2
local FILE_ATTRIBUTE_NORMAL = 0x80
local INVALID_HANDLE_VALUE = ffi.cast("void*", -1)
local MAX_PATH = 260
local FILE_ATTRIBUTE_DIRECTORY = 0x10
local INVALID_FILE_ATTRIBUTES = 0xFFFFFFFF
local get_module_handle_addr = utils.find_export("kernel32.dll", "GetModuleHandleA")
if get_module_handle_addr == 0 then
    error("无法获取GetModuleHandleA函数")
end
local CreateDirectoryA = utils.find_export("kernel32.dll", "CreateDirectoryA")
local CreateFileA = utils.find_export("kernel32.dll", "CreateFileA")
local ReadFile = utils.find_export("kernel32.dll", "ReadFile")
local WriteFile = utils.find_export("kernel32.dll", "WriteFile")
local CloseHandle = utils.find_export("kernel32.dll", "CloseHandle")
local GetFileSize = utils.find_export("kernel32.dll", "GetFileSize")
local DeleteFileA = utils.find_export("kernel32.dll", "DeleteFileA")
local GetModuleFileNameA = utils.find_export("kernel32.dll", "GetModuleFileNameA")
local GetFileAttributesA = utils.find_export("kernel32.dll", "GetFileAttributesA")
local RemoveDirectoryA = utils.find_export("kernel32.dll", "RemoveDirectoryA")
local CRC32_TABLE = {}
local function init_crc32_table()
    for i = 0, 255 do
        local crc = i
        for j = 0, 7 do
            if bit.band(crc, 1) ~= 0 then
                crc = bit.bxor(bit.rshift(crc, 1), 0xEDB88320)
            else
                crc = bit.rshift(crc, 1)
            end
        end
        CRC32_TABLE[i] = crc
    end
end
init_crc32_table()
--文件系统
local files = {}
-- 创建文件夹
function files.create_folder(path)
    local create_dir_fn = ffi.cast("BOOL(__stdcall*)(LPCSTR, LPSECURITY_ATTRIBUTES)", CreateDirectoryA)
    local result = create_dir_fn(path, nil)
    return result ~= 0
end
-- 读取文件
function files.read(path)
    local create_file_fn = ffi.cast("HANDLE(__stdcall*)(LPCSTR, DWORD, DWORD, LPSECURITY_ATTRIBUTES, DWORD, DWORD, HANDLE)", CreateFileA)
    local read_file_fn = ffi.cast("BOOL(__stdcall*)(HANDLE, void*, DWORD, DWORD*, void*)", ReadFile)
    local get_file_size_fn = ffi.cast("DWORD(__stdcall*)(HANDLE, DWORD*)", GetFileSize)
    local close_handle_fn = ffi.cast("BOOL(__stdcall*)(HANDLE)", CloseHandle)
    local handle = create_file_fn(path, GENERIC_READ, FILE_SHARE_READ, nil, OPEN_EXISTING, FILE_ATTRIBUTE_NORMAL, nil)
    if handle == INVALID_HANDLE_VALUE then
        return nil
    end
    local size = get_file_size_fn(handle, nil)
    if size == 0xFFFFFFFF then
        close_handle_fn(handle)
        return nil
    end
    local buffer = ffi.new("uint8_t[?]", size + 1)
    local bytes_read = ffi.new("DWORD[1]")
    local success = read_file_fn(handle, buffer, size, bytes_read, nil)
    close_handle_fn(handle)
    if not success or bytes_read[0] ~= size then
        return nil
    end
    buffer[size] = 0
    return ffi.string(buffer, size)
end

-- 写入文件
function files.write(path, data)
    local create_file_fn = ffi.cast("HANDLE(__stdcall*)(LPCSTR, DWORD, DWORD, LPSECURITY_ATTRIBUTES, DWORD, DWORD, HANDLE)", CreateFileA)
    local write_file_fn = ffi.cast("BOOL(__stdcall*)(HANDLE, const void*, DWORD, DWORD*, void*)", WriteFile)
    local close_handle_fn = ffi.cast("BOOL(__stdcall*)(HANDLE)", CloseHandle)
    local handle = create_file_fn(path, GENERIC_WRITE, FILE_SHARE_WRITE, nil, CREATE_ALWAYS, FILE_ATTRIBUTE_NORMAL, nil)
    if handle == INVALID_HANDLE_VALUE then
        return false
    end
    local bytes_written = ffi.new("DWORD[1]")
    local success = write_file_fn(handle, data, #data, bytes_written, nil)
    close_handle_fn(handle)
    return success ~= 0 and bytes_written[0] == #data
end

-- 获取文件CRC32校验和
function files.get_crc32(data)
    local crc = 0xFFFFFFFF
    for i = 1, #data do
        local byte = string.byte(data, i)
        crc = bit.bxor(bit.rshift(crc, 8), CRC32_TABLE[bit.band(bit.bxor(crc, byte), 0xFF)])
    end
    return bit.bxor(crc, 0xFFFFFFFF)
end

-- 判断文件是否存在
function files.file_exists(path)
    local get_attributes_fn = ffi.cast("DWORD(__stdcall*)(LPCSTR)", GetFileAttributesA)
    local attrs = get_attributes_fn(path) 
    if attrs == INVALID_FILE_ATTRIBUTES then
        return false
    end
    return bit.band(attrs, FILE_ATTRIBUTE_DIRECTORY) == 0
end

-- 判断文件夹是否存在
function files.folder_exists(path)
    local get_attributes_fn = ffi.cast("DWORD(__stdcall*)(LPCSTR)", GetFileAttributesA)
    local attrs = get_attributes_fn(path)
    if attrs == INVALID_FILE_ATTRIBUTES then
        return false
    end
    return bit.band(attrs, FILE_ATTRIBUTE_DIRECTORY) ~= 0
end

-- 删除文件
function files.delete_file(path)
    local delete_file_fn = ffi.cast("BOOL(__stdcall*)(LPCSTR)", DeleteFileA)
    local result = delete_file_fn(path)
    return result ~= 0
end

-- 删除文件夹
function files.delete_folder(path)
    local remove_dir_fn = ffi.cast("BOOL(__stdcall*)(LPCSTR)", RemoveDirectoryA)
    local result = remove_dir_fn(path)
    return result ~= 0
end

--获取当前运行目录/cs2.exe的运行目录
function files.get_current_directory()
    local get_module_filename_fn = ffi.cast("DWORD(__stdcall*)(HANDLE, LPSTR, DWORD)", GetModuleFileNameA)
    local buffer = ffi.new("char[?]", MAX_PATH)
    local length = get_module_filename_fn(nil, buffer, MAX_PATH)
    if length == 0 then
        return nil
    end
    local path = ffi.string(buffer, length)
    local last_slash = string.find(path, "\\[^\\]*$")
    if last_slash then
        return string.sub(path, 1, last_slash)
    end
    return path
end

--获取脚本目录
function files.get_script_directory()
    local current_dir = files.get_current_directory()
    if not current_dir then
        return nil
    end
    local base_path = current_dir
    local pos = string.find(base_path:lower(), "game\\bin\\win64")
    if pos then
        local game_pos = string.find(base_path:lower(), "game", pos)
        if game_pos then
            local base_game_path = string.sub(base_path, 1, game_pos + 3) -- +3是"game"的长度
            return base_game_path .. "\\csgo\\fatality\\scripts\\"
        end
    end
    return current_dir
end

return files
```

</details>

## 🔧 实现细节

该文件系统模块通过FFI调用Windows API实现，提供了基本的文件和目录操作功能。模块还包含CRC32校验和计算功能，用于文件完整性验证。所有函数都经过错误处理，确保在操作失败时返回适当的值。

## 🚀 快速开始

将上述代码复制到您的项目中，并在需要使用的地方直接调用：

```lua
-- 假设您已将代码保存为全局变量 files
-- 读取文件内容
local content = files.read("C:\\example.txt")

-- 写入文件
files.write("C:\\example.txt", "Hello, World!")

-- 检查文件是否存在
if files.file_exists("C:\\example.txt") then
    print("文件存在")
end
```

## 功能概述

该模块实现了以下主要功能：
- 文件读写操作
- 目录创建和删除
- 文件和目录存在性检查
- 文件CRC32校验和计算
- 获取当前运行目录和脚本目录

## API 参考

### create_folder

[![函数][这是一个必须使用点(.)调用的函数]rw]

创建一个新文件夹。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `path` | `string` | 要创建的文件夹路径。 |

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| `boolean` | 如果成功创建文件夹则返回true，否则返回false。 |

**示例**

```lua
local success = files.create_folder("C:\\MyFolder")
if success then
    print("文件夹创建成功")
else
    print("文件夹创建失败")
end
```

### read

[![函数][这是一个必须使用点(.)调用的函数]rw]

读取文件内容。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `path` | `string` | 要读取的文件路径。 |

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| `string` 或 `nil` | 如果成功读取文件则返回文件内容字符串，否则返回nil。 |

**示例**

```lua
local content = files.read("C:\\example.txt")
if content then
    print("文件内容:", content)
else
    print("无法读取文件")
end
```

### write

[![函数][这是一个必须使用点(.)调用的函数]rw]

写入内容到文件。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `path` | `string` | 要写入的文件路径。 |
| `data` | `string` | 要写入的内容。 |

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| `boolean` | 如果成功写入文件则返回true，否则返回false。 |

**示例**

```lua
local success = files.write("C:\\example.txt", "Hello, World!")
if success then
    print("文件写入成功")
else
    print("文件写入失败")
end
```

### get_crc32

[![函数][这是一个必须使用点(.)调用的函数]rw]

计算数据的CRC32校验和。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `data` | `string` | 要计算校验和的数据。 |

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| `number` | 计算得到的CRC32校验和。 |

**示例**

```lua
local content = files.read("C:\\example.txt")
if content then
    local checksum = files.get_crc32(content)
    print("文件CRC32校验和:", string.format("0x%08X", checksum))
end
```

### file_exists

[![函数][这是一个必须使用点(.)调用的函数]rw]

检查文件是否存在。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `path` | `string` | 要检查的文件路径。 |

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| `boolean` | 如果文件存在则返回true，否则返回false。 |

**示例**

```lua
if files.file_exists("C:\\example.txt") then
    print("文件存在")
else
    print("文件不存在")
end
```

### folder_exists

[![函数][这是一个必须使用点(.)调用的函数]rw]

检查文件夹是否存在。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `path` | `string` | 要检查的文件夹路径。 |

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| `boolean` | 如果文件夹存在则返回true，否则返回false。 |

**示例**

```lua
if files.folder_exists("C:\\MyFolder") then
    print("文件夹存在")
else
    print("文件夹不存在")
end
```

### delete_file

[![函数][这是一个必须使用点(.)调用的函数]rw]

删除文件。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `path` | `string` | 要删除的文件路径。 |

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| `boolean` | 如果成功删除文件则返回true，否则返回false。 |

**示例**

```lua
local success = files.delete_file("C:\\example.txt")
if success then
    print("文件删除成功")
else
    print("文件删除失败")
end
```

### delete_folder

[![函数][这是一个必须使用点(.)调用的函数]rw]

删除文件夹。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `path` | `string` | 要删除的文件夹路径。 |

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| `boolean` | 如果成功删除文件夹则返回true，否则返回false。 |

**注意**：此函数只能删除空文件夹。

**示例**

```lua
local success = files.delete_folder("C:\\MyFolder")
if success then
    print("文件夹删除成功")
else
    print("文件夹删除失败")
end
```

### get_current_directory

[![函数][这是一个必须使用点(.)调用的函数]rw]

获取当前运行目录。

**参数**

无

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| `string` 或 `nil` | 如果成功获取则返回当前运行目录路径，否则返回nil。 |

**示例**

```lua
local current_dir = files.get_current_directory()
if current_dir then
    print("当前运行目录:", current_dir)
else
    print("无法获取当前运行目录")
end
```

### get_script_directory

[![函数][这是一个必须使用点(.)调用的函数]rw]

获取脚本目录。

**参数**

无

**返回值**

| 类型 | 描述 |
| ---- | ----------- |
| `string` 或 `nil` | 如果成功获取则返回脚本目录路径，否则返回nil。 |

**示例**

```lua
local script_dir = files.get_script_directory()
if script_dir then
    print("脚本目录:", script_dir)
else
    print("无法获取脚本目录")
end
```

## ⚠️ 注意事项

1. **路径格式**：
   - 所有路径应使用Windows格式，使用反斜杠（`\`）作为分隔符
   - 在Lua字符串中，反斜杠需要转义，所以应使用双反斜杠（`\\`）或原始字符串（`[[C:\path]]`）

2. **权限问题**：
   - 操作系统可能限制某些目录的访问权限
   - 尝试在受保护的目录（如Windows系统目录）进行写入操作可能会失败

3. **文件夹删除限制**：
   - `delete_folder`函数只能删除空文件夹
   - 如需删除非空文件夹，需要先递归删除其中的所有文件和子文件夹

4. **错误处理**：
   - 所有函数在操作失败时都会返回适当的错误值（false或nil）
   - 建议在使用这些函数时进行错误检查

5. **性能考虑**：
   - 对于大文件的读写操作可能会消耗较多内存和时间
   - 如果需要处理非常大的文件，考虑分块读写