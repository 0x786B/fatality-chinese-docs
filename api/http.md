# 📦 HTTP 模块

> ⚠️ **注意**：HTTP功能并非引擎原生支持，而是通过纯Lua代码实现的。这些实现由社区提供，可能不完全稳定。

HTTP模块提供了发送HTTP请求的功能，使您能够与Web服务进行交互。目前有两种实现方式：基础HTTP和Steam HTTP。

## ⚠️ 安全警告

**重要提示**：基础HTTP模块**不支持HTTPS**，这意味着所有通信都是未加密的，存在严重的安全风险。请勿使用它传输敏感信息（如密码、个人数据等）。如需安全通信，请考虑使用Steam HTTP实现或其他安全方法。

## &lt;/&gt;源代码

### 基础HTTP实现

<details>
<summary>
<h3 style="display: inline-block; margin: 0; cursor: pointer;">
<span style="color: #0066cc;">📄 点击此处查看基础HTTP源代码</span> <span style="color: #666;">(可直接复制使用)</span>
</h3>
</summary>

```lua
ffi.cdef[[
typedef unsigned int SOCKET;
typedef uint16_t WORD;
typedef uint32_t DWORD;
typedef int BOOL;
typedef uint16_t u_short;
typedef struct WSAData {
    WORD wVersion;
    WORD wHighVersion;
    char szDescription[257];
    char szSystemStatus[129];
    unsigned short iMaxSockets;
    unsigned short iMaxUdpDg;
    char *lpVendorInfo;
} WSADATA;

typedef struct sockaddr {
    u_short sa_family;
    char sa_data[14];
} sockaddr;

typedef struct in_addr {
    uint32_t s_addr;
} in_addr;

typedef struct sockaddr_in {
    short sin_family;
    u_short sin_port;
    struct in_addr sin_addr;
    char sin_zero[8];
} sockaddr_in;
]]

local ws2_32 = "ws2_32.dll"
local WSAStartup = ffi.cast("int (__stdcall*)(WORD, WSADATA*)", utils.find_export(ws2_32, "WSAStartup"))
local WSACleanup = ffi.cast("int (__stdcall*)()", utils.find_export(ws2_32, "WSACleanup"))
local socket = ffi.cast("SOCKET (__stdcall*)(int, int, int)", utils.find_export(ws2_32, "socket"))
local connect = ffi.cast("int (__stdcall*)(SOCKET, const sockaddr*, int)", utils.find_export(ws2_32, "connect"))
local closesocket = ffi.cast("int (__stdcall*)(SOCKET)", utils.find_export(ws2_32, "closesocket"))
local send = ffi.cast("int (__stdcall*)(SOCKET, const char*, int, int)", utils.find_export(ws2_32, "send"))
local recv = ffi.cast("int (__stdcall*)(SOCKET, char*, int, int)", utils.find_export(ws2_32, "recv"))
local htons = ffi.cast("uint16_t (__stdcall*)(uint16_t)", utils.find_export(ws2_32, "htons"))
local inet_addr = ffi.cast("uint32_t (__stdcall*)(const char*)", utils.find_export(ws2_32, "inet_addr"))

local wsaData = ffi.new("WSADATA")
if WSAStartup(0x202, wsaData) ~= 0 then
    error("WSAStartup failed")
end

local AF_INET = 2
local SOCK_STREAM = 1
local IPPROTO_TCP = 6
local sock = socket(AF_INET, SOCK_STREAM, IPPROTO_TCP)
if sock == ffi.cast("SOCKET", -1) then
    error("Socket creation failed")
end

local addr = ffi.new("sockaddr_in")
addr.sin_family = AF_INET
addr.sin_port = htons(80)
addr.sin_addr.s_addr = inet_addr("96.7.128.175")

if connect(sock, ffi.cast("sockaddr*", addr), ffi.sizeof(addr)) ~= 0 then
    error("Connection failed")
end

local request = "GET / HTTP/1.1\r\nHost: example.com\r\nConnection: close\r\n\r\n"
if send(sock, request, #request, 0) == -1 then
    error("Send failed")
end

local buffer = ffi.new("char[4096]")
local received = recv(sock, buffer, 4096, 0)

if received > 0 then
    print(ffi.string(buffer, received))
else
    error("Failed to receive response")
end

closesocket(sock)
WSACleanup()

```

</details>

> 原帖地址: [Discord - 基础HTTP实现](https://discord.com/channels/987624505604194374/1341333264840921109/1341333298013667400)

### Steam HTTP实现

<details>
<summary>
<h3 style="display: inline-block; margin: 0; cursor: pointer;">
<span style="color: #0066cc;">📄 点击此处查看Steam HTTP源代码</span> <span style="color: #666;">(可直接复制使用)</span>
</h3>
</summary>

```lua
--
-- dependencies
--

if not ffi then
    return error("Turn on unsafe scripts")
end

local json = (function()
    local JSON = {}

    -- Function to escape special characters in JSON strings
    local function escape_string(str)
        str = str:gsub('"', '\\"')      -- Escape double quotes
        str = str:gsub("\n", "\\n")     -- Escape newlines
        str = str:gsub("\r", "\\r")     -- Escape carriage returns
        str = str:gsub("\t", "\\t")     -- Escape tabs
        str = str:gsub("\b", "\\b")     -- Escape backspaces
        str = str:gsub("\f", "\\f")     -- Escape formfeeds
        return '"' .. str .. '"'
    end
    
    -- Function to encode a Lua value to JSON
    function JSON.stringify(value)
        if type(value) == "string" then
            return escape_string(value)
        elseif type(value) == "number" or type(value) == "boolean" then
            return tostring(value)
        elseif type(value) == "table" then
            local elements = {}
            for key, val in pairs(value) do
                local encoded_key = (type(key) == "string" and key:match("^[%w_]+$")) and key or escape_string(tostring(key))
                local encoded_value = JSON.stringify(val)
                table.insert(elements, encoded_key .. ":" .. encoded_value)
            end
            return "{" .. table.concat(elements, ",") .. "}"
        elseif value == nil then
            return "null"
        else
            return "null"
        end
    end
    
    -- Function to decode a JSON string to a Lua value
    function JSON.parse(json)
        local function parse_value(str, index)
            local char = str:sub(index, index)
            
            if char == '"' then  -- String
                local end_pos = str:find('"', index + 1)
                local value = str:sub(index + 1, end_pos - 1)
                return value, end_pos + 1
            elseif char == '{' then  -- Object
                local obj = {}
                local key, value
                index = index + 1  -- Skip '{'
                while true do
                    local next_char = str:sub(index, index)
                    if next_char == '}' then
                        return obj, index + 1
                    elseif next_char == '"' then
                        key, index = parse_value(str, index)
                        index = index + 1  -- Skip ':'
                        value, index = parse_value(str, index)
                        obj[key] = value
                    end
                    if str:sub(index, index) == "," then
                        index = index + 1  -- Skip comma
                    end
                end
            elseif char == '[' then  -- Array
                local arr = {}
                index = index + 1  -- Skip '['
                while true do
                    local next_char = str:sub(index, index)
                    if next_char == ']' then
                        return arr, index + 1
                    else
                        local value
                        value, index = parse_value(str, index)
                        table.insert(arr, value)
                    end
                    if str:sub(index, index) == "," then
                        index = index + 1  -- Skip comma
                    end
                end
            elseif str:sub(index, index + 3) == "true" then  -- Boolean True
                return true, index + 4
            elseif str:sub(index, index + 4) == "false" then  -- Boolean False
                return false, index + 5
            elseif str:sub(index, index + 3) == "null" then  -- Null
                return nil, index + 4
            else  -- Number
                local num_str = str:match("^-?%d+%.?%d*", index)
                return tonumber(num_str), index + #num_str
            end
        end
        
        return parse_value(json, 1)
    end
    return JSON
end)()

local GetModuleHandleA = ffi.cast('uint64_t(__stdcall*)(const char*)', utils.find_export('kernel32.dll', 'GetModuleHandleA'));
local GetProcAddress   = ffi.cast('uint64_t(__stdcall*)(uint64_t, const char*)', utils.find_export('kernel32.dll', 'GetProcAddress'));
local steam_api = GetModuleHandleA('steam_api64.dll');

local SteamClient = ffi.cast("void*(__thiscall*)()", GetProcAddress(steam_api, 'SteamClient'))
local SteamAPI_GetHSteamPipe = ffi.cast("int(__stdcall*)()", GetProcAddress(steam_api, 'SteamAPI_GetHSteamPipe'))
local SteamAPI_GetHSteamUser = ffi.cast("int(__stdcall*)()", GetProcAddress(steam_api, 'SteamAPI_GetHSteamPipe'))
local SteamAPI_ISteamClient_GetISteamUtils = ffi.cast("void*(__thiscall*)(void*, int, const char*)", GetProcAddress(steam_api, 'SteamAPI_ISteamClient_GetISteamUtils'))
local SteamAPI_ISteamClient_GetISteamHTTP = ffi.cast("uint64_t(__thiscall*)(void*, int, int, const char*)", GetProcAddress(steam_api, 'SteamAPI_ISteamClient_GetISteamHTTP'));

local steamHttp = SteamAPI_ISteamClient_GetISteamHTTP(SteamClient(), SteamAPI_GetHSteamPipe(), SteamAPI_GetHSteamUser(), "STEAMHTTP_INTERFACE_VERSION003")
local steamUtils = SteamAPI_ISteamClient_GetISteamUtils(SteamClient(), SteamAPI_GetHSteamPipe(), "SteamUtils009")

local assert, pcall, xpcall, error, setmetatable, tostring, tonumber, type, pairs, ipairs = assert, pcall, xpcall, error, setmetatable, tostring, tonumber, type, pairs, ipairs
local string_format = string.format
local typeof, sizeof, cast, cdef, ffi_string, ffi_gc = ffi.typeof, ffi.sizeof, ffi.cast, ffi.cdef, ffi.string, ffi.gc
local string_lower, string_len, string_find = string.lower, string.len, string.find
local base64_encode = utils.base64_encode

--
-- steam api
--

local register_call_result, register_callback
do
    --	if not pcall(ffi.sizeof, "SteamAPICall_t") then
	ffi.cdef([[
		typedef uint64_t SteamAPICall_t;
		struct SteamAPI_callback_base_vtbl {
			void(__thiscall *run1)(struct SteamAPI_callback_base *, void *, bool, uint64_t);
			void(__thiscall *run2)(struct SteamAPI_callback_base *, void *);
			int(__thiscall *get_size)(struct SteamAPI_callback_base *);
		};
		struct SteamAPI_callback_base {
			struct SteamAPI_callback_base_vtbl *vtbl;
			uint8_t flags;
			int id;
			uint64_t api_call_handle;
			struct SteamAPI_callback_base_vtbl vtbl_storage[1];
		};
	]])

	local ESteamAPICallFailure = {
		[-1] = "No failure",
		[0]  = "Steam gone",
		[1]  = "Network failure",
		[2]  = "Invalid handle",
		[3]  = "Mismatched callback"
	}

	local SteamAPI_RegisterCallResult, SteamAPI_UnregisterCallResult
	local SteamAPI_RegisterCallback, SteamAPI_UnregisterCallback
	local GetAPICallFailureReason

	local callback_base        = typeof("struct SteamAPI_callback_base")
	local sizeof_callback_base = sizeof(callback_base)
	local callback_base_array  = typeof("struct SteamAPI_callback_base[1]")
	local callback_base_ptr    = typeof("struct SteamAPI_callback_base*")
	local uintptr_t            = typeof("uintptr_t")
	local api_call_handlers    = {}
	local pending_call_results = {}
	local registered_callbacks = {}

	local function pointer_key(p)
		return tostring(tonumber(cast(uintptr_t, p)))
	end

	local function callback_base_run_common(self, param, io_failure)
		if io_failure then
			io_failure = ESteamAPICallFailure[GetAPICallFailureReason(self.api_call_handle)] or "Unknown error"
		end

		-- prevent SteamAPI_UnregisterCallResult from being called for this callresult
		self.api_call_handle = 0

		xpcall(function()
			local key = pointer_key(self)
			local handler = api_call_handlers[key]
			if handler ~= nil then
				xpcall(handler, error, param, io_failure)
			end

			if pending_call_results[key] ~= nil then
				api_call_handlers[key] = nil
				pending_call_results[key] = nil
			end
		end, error)
	end

	local function callback_base_run1(self, param, io_failure, api_call_handle)
		if api_call_handle == self.api_call_handle then
			callback_base_run_common(self, param, io_failure)
		end
	end

	local function callback_base_run2(self, param)
		callback_base_run_common(self, param, false)
	end

	local function callback_base_get_size(self)
		return sizeof_callback_base
	end

	local function call_result_cancel(self)
		if self.api_call_handle ~= 0 then
			SteamAPI_UnregisterCallResult(self, self.api_call_handle)
			self.api_call_handle = 0

			local key = pointer_key(self)
			api_call_handlers[key] = nil
			pending_call_results[key] = nil
		end
	end

	pcall(ffi.metatype, callback_base, {
		__gc = call_result_cancel,
		__index = {
			cancel = call_result_cancel
		}
	})

	local callback_base_run1_ct = cast("void(__thiscall *)(struct SteamAPI_callback_base *, void *, bool, uint64_t)", callback_base_run1)
	local callback_base_run2_ct = cast("void(__thiscall *)(struct SteamAPI_callback_base *, void *)", callback_base_run2)
	local callback_base_get_size_ct = cast("int(__thiscall *)(struct SteamAPI_callback_base *)", callback_base_get_size)

	function register_call_result(api_call_handle, handler, id)
		assert(api_call_handle ~= 0)
		local instance_storage = callback_base_array()
		local instance = cast(callback_base_ptr, instance_storage)

		instance.vtbl_storage[0].run1 = callback_base_run1_ct
		instance.vtbl_storage[0].run2 = callback_base_run2_ct
		instance.vtbl_storage[0].get_size = callback_base_get_size_ct
		instance.vtbl = instance.vtbl_storage
		instance.api_call_handle = api_call_handle
		instance.id = id

		local key = pointer_key(instance)
		api_call_handlers[key] = handler
		pending_call_results[key] = instance_storage

		SteamAPI_RegisterCallResult(instance, api_call_handle)

		return instance
	end

	function register_callback(id, handler)
		assert(registered_callbacks[id] == nil)

		local instance_storage = callback_base_array()
		local instance = cast(callback_base_ptr, instance_storage)

		instance.vtbl_storage[0].run1 = callback_base_run1_ct
		instance.vtbl_storage[0].run2 = callback_base_run2_ct
		instance.vtbl_storage[0].get_size = callback_base_get_size_ct
		instance.vtbl = instance.vtbl_storage
		instance.api_call_handle = 0
		instance.id = id

		local key = pointer_key(instance)
		api_call_handlers[key] = handler
		registered_callbacks[id] = instance_storage

		SteamAPI_RegisterCallback(instance, id)
	end

	local function vtable_entry(instance, index, type)
		return cast(type, (cast("void***", instance)[0])[index])
	end

    SteamAPI_RegisterCallResult = ffi.cast("void(__cdecl*)(struct SteamAPI_callback_base *, uint64_t)", GetProcAddress(steam_api, 'SteamAPI_RegisterCallResult'));
    SteamAPI_UnregisterCallResult = ffi.cast("void(__cdecl*)(struct SteamAPI_callback_base *, uint64_t)", GetProcAddress(steam_api, 'SteamAPI_UnregisterCallResult'));

    SteamAPI_RegisterCallback = ffi.cast("void(__cdecl*)(struct SteamAPI_callback_base *, int)", GetProcAddress(steam_api, 'SteamAPI_RegisterCallback'));
    SteamAPI_UnregisterCallback = ffi.cast("void(__cdecl*)(struct SteamAPI_callback_base *)", GetProcAddress(steam_api, 'SteamAPI_UnregisterCallback'));

    local SteamAPI_ISteamUtils_GetAPICallFailureReason = ffi.cast("int(__thiscall*)(void*, SteamAPICall_t)", GetProcAddress(steam_api, 'SteamAPI_ISteamUtils_GetAPICallFailureReason'));
    function GetAPICallFailureReason(handle)
        return SteamAPI_ISteamUtils_GetAPICallFailureReason(steamUtils, handle)
    end

    --[[ TODO; on shutdown call
	client.set_event_callback("shutdown", function()
		for key, value in pairs(pending_call_results) do
			local instance = cast(callback_base_ptr, value)
			call_result_cancel(instance)
		end

		for key, value in pairs(registered_callbacks) do
			local instance = cast(callback_base_ptr, value)
			SteamAPI_UnregisterCallback(instance)
		end
	end)--
    ]]
end

--
-- ffi definitions
--
--if not pcall(sizeof, "http_HTTPRequestHandle") then
ffi.cdef([[
	typedef uint32_t http_HTTPRequestHandle;
	typedef uint32_t http_HTTPCookieContainerHandle;
	enum http_EHTTPMethod {
		k_EHTTPMethodInvalid,
		k_EHTTPMethodGET,
		k_EHTTPMethodHEAD,
		k_EHTTPMethodPOST,
		k_EHTTPMethodPUT,
		k_EHTTPMethodDELETE,
		k_EHTTPMethodOPTIONS,
		k_EHTTPMethodPATCH,
	};
	struct http_ISteamHTTPVtbl {
		http_HTTPRequestHandle(__thiscall *CreateHTTPRequest)(uintptr_t, enum http_EHTTPMethod, const char *);
		bool(__thiscall *SetHTTPRequestContextValue)(uintptr_t, http_HTTPRequestHandle, uint64_t);
		bool(__thiscall *SetHTTPRequestNetworkActivityTimeout)(uintptr_t, http_HTTPRequestHandle, uint32_t);
		bool(__thiscall *SetHTTPRequestHeaderValue)(uintptr_t, http_HTTPRequestHandle, const char *, const char *);
		bool(__thiscall *SetHTTPRequestGetOrPostParameter)(uintptr_t, http_HTTPRequestHandle, const char *, const char *);
		bool(__thiscall *SendHTTPRequest)(uintptr_t, http_HTTPRequestHandle, SteamAPICall_t *);
		bool(__thiscall *SendHTTPRequestAndStreamResponse)(uintptr_t, http_HTTPRequestHandle, SteamAPICall_t *);
		bool(__thiscall *DeferHTTPRequest)(uintptr_t, http_HTTPRequestHandle);
		bool(__thiscall *PrioritizeHTTPRequest)(uintptr_t, http_HTTPRequestHandle);
		bool(__thiscall *GetHTTPResponseHeaderSize)(uintptr_t, http_HTTPRequestHandle, const char *, uint32_t *);
		bool(__thiscall *GetHTTPResponseHeaderValue)(uintptr_t, http_HTTPRequestHandle, const char *, uint8_t *, uint32_t);
		bool(__thiscall *GetHTTPResponseBodySize)(uintptr_t, http_HTTPRequestHandle, uint32_t *);
		bool(__thiscall *GetHTTPResponseBodyData)(uintptr_t, http_HTTPRequestHandle, uint8_t *, uint32_t);
		bool(__thiscall *GetHTTPStreamingResponseBodyData)(uintptr_t, http_HTTPRequestHandle, uint32_t, uint8_t *, uint32_t);
		bool(__thiscall *ReleaseHTTPRequest)(uintptr_t, http_HTTPRequestHandle);
		bool(__thiscall *GetHTTPDownloadProgressPct)(uintptr_t, http_HTTPRequestHandle, float *);
		bool(__thiscall *SetHTTPRequestRawPostBody)(uintptr_t, http_HTTPRequestHandle, const char *, uint8_t *, uint32_t);
		http_HTTPCookieContainerHandle(__thiscall *CreateCookieContainer)(uintptr_t, bool);
		bool(__thiscall *ReleaseCookieContainer)(uintptr_t, http_HTTPCookieContainerHandle);
		bool(__thiscall *SetCookie)(uintptr_t, http_HTTPCookieContainerHandle, const char *, const char *, const char *);
		bool(__thiscall *SetHTTPRequestCookieContainer)(uintptr_t, http_HTTPRequestHandle, http_HTTPCookieContainerHandle);
		bool(__thiscall *SetHTTPRequestUserAgentInfo)(uintptr_t, http_HTTPRequestHandle, const char *);
		bool(__thiscall *SetHTTPRequestRequiresVerifiedCertificate)(uintptr_t, http_HTTPRequestHandle, bool);
		bool(__thiscall *SetHTTPRequestAbsoluteTimeoutMS)(uintptr_t, http_HTTPRequestHandle, uint32_t);
		bool(__thiscall *GetHTTPRequestWasTimedOut)(uintptr_t, http_HTTPRequestHandle, bool *pbWasTimedOut);
	};
]])

--
-- constants
--

local method_name_to_enum = {
	get = 1,-- ffi.C.k_EHTTPMethodGET,
	head = 2,-- ffi.C.k_EHTTPMethodHEAD,
	post = 3,-- ffi.C.k_EHTTPMethodPOST,
	put = 4,-- ffi.C.k_EHTTPMethodPUT,
	delete = 5,-- ffi.C.k_EHTTPMethodDELETE,
	options = 6,-- ffi.C.k_EHTTPMethodOPTIONS,
	patch = 7,-- ffi.C.k_EHTTPMethodPATCH,
}

local status_code_to_message = {
	[100]="Continue",[101]="Switching Protocols",[102]="Processing",[200]="OK",[201]="Created",[202]="Accepted",[203]="Non-Authoritative Information",[204]="No Content",[205]="Reset Content",[206]="Partial Content",[207]="Multi-Status",
	[208]="Already Reported",[250]="Low on Storage Space",[226]="IM Used",[300]="Multiple Choices",[301]="Moved Permanently",[302]="Found",[303]="See Other",[304]="Not Modified",[305]="Use Proxy",[306]="Switch Proxy",
	[307]="Temporary Redirect",[308]="Permanent Redirect",[400]="Bad Request",[401]="Unauthorized",[402]="Payment Required",[403]="Forbidden",[404]="Not Found",[405]="Method Not Allowed",[406]="Not Acceptable",[407]="Proxy Authentication Required",
	[408]="Request Timeout",[409]="Conflict",[410]="Gone",[411]="Length Required",[412]="Precondition Failed",[413]="Request Entity Too Large",[414]="Request-URI Too Long",[415]="Unsupported Media Type",[416]="Requested Range Not Satisfiable",
	[417]="Expectation Failed",[418]="I'm a teapot",[420]="Enhance Your Calm",[422]="Unprocessable Entity",[423]="Locked",[424]="Failed Dependency",[424]="Method Failure",[425]="Unordered Collection",[426]="Upgrade Required",[428]="Precondition Required",
	[429]="Too Many Requests",[431]="Request Header Fields Too Large",[444]="No Response",[449]="Retry With",[450]="Blocked by Windows Parental Controls",[451]="Parameter Not Understood",[451]="Unavailable For Legal Reasons",[451]="Redirect",
	[452]="Conference Not Found",[453]="Not Enough Bandwidth",[454]="Session Not Found",[455]="Method Not Valid in This State",[456]="Header Field Not Valid for Resource",[457]="Invalid Range",[458]="Parameter Is Read-Only",[459]="Aggregate Operation Not Allowed",
	[460]="Only Aggregate Operation Allowed",[461]="Unsupported Transport",[462]="Destination Unreachable",[494]="Request Header Too Large",[495]="Cert Error",[496]="No Cert",[497]="HTTP to HTTPS",[499]="Client Closed Request",[500]="Internal Server Error",
	[501]="Not Implemented",[502]="Bad Gateway",[503]="Service Unavailable",[504]="Gateway Timeout",[505]="HTTP Version Not Supported",[506]="Variant Also Negotiates",[507]="Insufficient Storage",[508]="Loop Detected",[509]="Bandwidth Limit Exceeded",
	[510]="Not Extended",[511]="Network Authentication Required",[551]="Option not supported",[598]="Network read timeout error",[599]="Network connect timeout error"
}

local single_allowed_keys = {"params", "body", "json"}

-- https://github.com/AlexApps99/SteamworksSDK/blob/fe3524b655eb9df6ae4d24e0ffb365357a370c7f/public/steam/isteamhttp.h#L162-L214
local CALLBACK_HTTPRequestCompleted = 2101
local CALLBACK_HTTPRequestHeadersReceived = 2102
local CALLBACK_HTTPRequestDataReceived = 2103


--
-- steamhttp ffi stuff
--

local HTTPRequestCompleted_t_ptr = typeof([[
struct {
	http_HTTPRequestHandle m_hRequest;
	uint64_t m_ulContextValue;
	bool m_bRequestSuccessful;
	int m_eStatusCode;
	uint32_t m_unBodySize;
} *
]])

local HTTPRequestHeadersReceived_t_ptr = typeof([[
struct {
	http_HTTPRequestHandle m_hRequest;
	uint64_t m_ulContextValue;
} *
]])

local HTTPRequestDataReceived_t_ptr = typeof([[
struct {
	http_HTTPRequestHandle m_hRequest;
	uint64_t m_ulContextValue;
	uint32_t m_cOffset;
	uint32_t m_cBytesReceived;
} *
]])

local CookieContainerHandle_t = typeof([[
struct {
	http_HTTPCookieContainerHandle m_hCookieContainer;
}
]])

local SteamAPICall_t_arr = typeof("SteamAPICall_t[1]")
local char_ptr = typeof("const char[?]")
local unit8_ptr = typeof("uint8_t[?]")
local uint_ptr = typeof("unsigned int[?]")
local bool_ptr = typeof("bool[1]")
local float_ptr = typeof("float[1]")


local function find_isteamhttp()
	local vmt = ffi.cast("struct http_ISteamHTTPVtbl**", steamHttp)[0]
	if vmt == 0 or vmt == nil then
		return error("find_isteamhttp failed")
	end

	return steamHttp, vmt
end

local function func_bind(func, arg)
	return function(...)
		return func(arg, ...)
	end
end

local steam_http, steam_http_vtable = find_isteamhttp()
--
-- isteamhttp functions
--

local native_CreateHTTPRequest = func_bind(steam_http_vtable.CreateHTTPRequest, steam_http)
local native_SetHTTPRequestContextValue = func_bind(steam_http_vtable.SetHTTPRequestContextValue, steam_http)
local native_SetHTTPRequestNetworkActivityTimeout = func_bind(steam_http_vtable.SetHTTPRequestNetworkActivityTimeout, steam_http)
local native_SetHTTPRequestHeaderValue = func_bind(steam_http_vtable.SetHTTPRequestHeaderValue, steam_http)
local native_SetHTTPRequestGetOrPostParameter = func_bind(steam_http_vtable.SetHTTPRequestGetOrPostParameter, steam_http)
local native_SendHTTPRequest = func_bind(steam_http_vtable.SendHTTPRequest, steam_http)
local native_SendHTTPRequestAndStreamResponse = func_bind(steam_http_vtable.SendHTTPRequestAndStreamResponse, steam_http)
local native_DeferHTTPRequest = func_bind(steam_http_vtable.DeferHTTPRequest, steam_http)
local native_PrioritizeHTTPRequest = func_bind(steam_http_vtable.PrioritizeHTTPRequest, steam_http)
local native_GetHTTPResponseHeaderSize = func_bind(steam_http_vtable.GetHTTPResponseHeaderSize, steam_http)
local native_GetHTTPResponseHeaderValue = func_bind(steam_http_vtable.GetHTTPResponseHeaderValue, steam_http)
local native_GetHTTPResponseBodySize = func_bind(steam_http_vtable.GetHTTPResponseBodySize, steam_http)
local native_GetHTTPResponseBodyData = func_bind(steam_http_vtable.GetHTTPResponseBodyData, steam_http)
local native_GetHTTPStreamingResponseBodyData = func_bind(steam_http_vtable.GetHTTPStreamingResponseBodyData, steam_http)
local native_ReleaseHTTPRequest = func_bind(steam_http_vtable.ReleaseHTTPRequest, steam_http)
local native_GetHTTPDownloadProgressPct = func_bind(steam_http_vtable.GetHTTPDownloadProgressPct, steam_http)
local native_SetHTTPRequestRawPostBody = func_bind(steam_http_vtable.SetHTTPRequestRawPostBody, steam_http)
local native_CreateCookieContainer = func_bind(steam_http_vtable.CreateCookieContainer, steam_http)
local native_ReleaseCookieContainer = func_bind(steam_http_vtable.ReleaseCookieContainer, steam_http)
local native_SetCookie = func_bind(steam_http_vtable.SetCookie, steam_http)
local native_SetHTTPRequestCookieContainer = func_bind(steam_http_vtable.SetHTTPRequestCookieContainer, steam_http)
local native_SetHTTPRequestUserAgentInfo = func_bind(steam_http_vtable.SetHTTPRequestUserAgentInfo, steam_http)
local native_SetHTTPRequestRequiresVerifiedCertificate = func_bind(steam_http_vtable.SetHTTPRequestRequiresVerifiedCertificate, steam_http)
local native_SetHTTPRequestAbsoluteTimeoutMS = func_bind(steam_http_vtable.SetHTTPRequestAbsoluteTimeoutMS, steam_http)
local native_GetHTTPRequestWasTimedOut = func_bind(steam_http_vtable.GetHTTPRequestWasTimedOut, steam_http)

--
-- private variables
--

local completed_callbacks, is_in_callback = {}, false
local headers_received_callback_registered, headers_received_callbacks = false, {}
local data_received_callback_registered, data_received_callbacks = false, {}

-- weak table containing headers tbl -> cookie container handle
local cookie_containers = setmetatable({}, {__mode = "k"})

-- weak table containing headers tbl -> request handle
local headers_request_handles, request_handles_headers = setmetatable({}, {__mode = "k"}), setmetatable({}, {__mode = "v"})

-- table containing in-flight http requests
local pending_requests = {}

--
-- response headers metatable
--

local response_headers_mt = {
	__index = function(req_key, name)
		local req = headers_request_handles[req_key]
		if req == nil then
			return
		end

		name = tostring(name)
		if req.m_hRequest ~= 0 then
			local header_size = uint_ptr(1)
			if native_GetHTTPResponseHeaderSize(req.m_hRequest, name, header_size) then
				if header_size ~= nil then
					header_size = header_size[0]
					if header_size < 0 then
						return
					end

					local buffer = unit8_ptr(header_size)
					if native_GetHTTPResponseHeaderValue(req.m_hRequest, name, buffer, header_size) then
						req_key[name] = ffi_string(buffer, header_size-1)
						return req_key[name]
					end
				end
			end
		end
	end,
	__metatable = false
}

--
-- cookie container metatable
--

local cookie_container_mt = {
	__index = {
		set_cookie = function(handle_key, host, url, name, value)
			local handle = cookie_containers[handle_key]
			if handle == nil or handle.m_hCookieContainer == 0 then
				return
			end

			native_SetCookie(handle.m_hCookieContainer, host, url, tostring(name) .. "=" .. tostring(value))
		end
	},
	__metatable = false
}

--
-- garbage collection callbaks
--

local function cookie_container_gc(handle)
	if handle.m_hCookieContainer ~= 0 then
		native_ReleaseCookieContainer(handle.m_hCookieContainer)
		handle.m_hCookieContainer = 0
	end
end

local function http_request_gc(req)
	if req.m_hRequest ~= 0 then
		native_ReleaseHTTPRequest(req.m_hRequest)
		req.m_hRequest = 0
	end
end

local function http_request_error(req_handle, ...)
	native_ReleaseHTTPRequest(req_handle)
	return error(...)
end

local function http_request_callback_common(req, callback, successful, data, ...)
	local headers = request_handles_headers[req.m_hRequest]
	if headers == nil then
		headers = setmetatable({}, response_headers_mt)
		request_handles_headers[req.m_hRequest] = headers
	end
	headers_request_handles[headers] = req
	data.headers = headers

	-- run callback
	is_in_callback = true
	xpcall(callback, error, successful, data, ...)
	is_in_callback = false
end

local function http_request_completed(param, io_failure)
	if param == nil then
		return
	end

	local req = cast(HTTPRequestCompleted_t_ptr, param)

	if req.m_hRequest ~= 0 then
		local callback = completed_callbacks[req.m_hRequest]

		-- if callback ~= nil the request was sent by us
		if callback ~= nil then
			completed_callbacks[req.m_hRequest] = nil
			data_received_callbacks[req.m_hRequest] = nil
			headers_received_callbacks[req.m_hRequest] = nil

			-- callback can be false
			if callback then
				local successful = io_failure == false and req.m_bRequestSuccessful
				local status = req.m_eStatusCode

				local response = {
					status = status
				}

				local body_size = req.m_unBodySize
				if successful and body_size > 0 then
					local buffer = unit8_ptr(body_size)
					if native_GetHTTPResponseBodyData(req.m_hRequest, buffer, body_size) then
						response.body = ffi_string(buffer, body_size)
					end
				elseif not req.m_bRequestSuccessful then
					local timed_out = bool_ptr()
					native_GetHTTPRequestWasTimedOut(req.m_hRequest, timed_out)
					response.timed_out = timed_out ~= nil and timed_out[0] == true
				end

				if status > 0 then
					response.status_message = status_code_to_message[status] or "Unknown status"
				elseif io_failure then
					response.status_message = string_format("IO Failure: %s", io_failure)
				else
					response.status_message = response.timed_out and "Timed out" or "Unknown error"
				end


				-- release http request on garbage collection
				-- ffi.gc(req, http_request_gc)

				http_request_callback_common(req, callback, successful, response)
			end

			http_request_gc(req)
		end
	end
end

local function http_request_headers_received(param, io_failure)
	if param == nil then
		return
	end

	local req = cast(HTTPRequestHeadersReceived_t_ptr, param)

	if req.m_hRequest ~= 0 then
		local callback = headers_received_callbacks[req.m_hRequest]
		if callback then
			http_request_callback_common(req, callback, io_failure == false, {})
		end
	end
end

local function http_request_data_received(param, io_failure)
	if param == nil then
		return
	end

	local req = cast(HTTPRequestDataReceived_t_ptr, param)

	if req.m_hRequest ~= 0 then
		local callback = data_received_callbacks[req.m_hRequest]
		if data_received_callbacks[req.m_hRequest] then
			local data = {}

			local download_percentage_prt = float_ptr()
			if native_GetHTTPDownloadProgressPct(req.m_hRequest, download_percentage_prt) then
				data.download_progress = tonumber(download_percentage_prt[0])
			end

			local buffer = unit8_ptr(req.m_cBytesReceived)
			if native_GetHTTPStreamingResponseBodyData(req.m_hRequest, req.m_cOffset, buffer, req.m_cBytesReceived) then
				data.body = ffi_string(buffer, req.m_cBytesReceived)
			end

			http_request_callback_common(req, callback, io_failure == false, data)
		end
	end
end

local function http_request_new(method, url, options, callbacks)
	-- support overload: http.request(method, url, callback)
	if type(options) == "function" and callbacks == nil then
		callbacks = options
		options = {}
	end

	options = options or {}

	local method = method_name_to_enum[string_lower(tostring(method))]
	if method == nil then
		return error("invalid HTTP method")
	end

	if type(url) ~= "string" then
		return error("URL has to be a string")
	end

	local completed_callback, headers_received_callback, data_received_callback
	if type(callbacks) == "function" then
		completed_callback = callbacks
	elseif type(callbacks) == "table" then
		completed_callback = callbacks.completed or callbacks.complete
		headers_received_callback = callbacks.headers_received or callbacks.headers
		data_received_callback = callbacks.data_received or callbacks.data

		if completed_callback ~= nil and type(completed_callback) ~= "function" then
			return error("callbacks.completed callback has to be a function")
		elseif headers_received_callback ~= nil and type(headers_received_callback) ~= "function" then
			return error("callbacks.headers_received callback has to be a function")
		elseif data_received_callback ~= nil and type(data_received_callback) ~= "function" then
			return error("callbacks.data_received callback has to be a function")
		end
	else
		return error("callbacks has to be a function or table")
	end

	local req_handle = native_CreateHTTPRequest(method, url)
	if req_handle == 0 then
		return error("Failed to create HTTP request")
	end
    

	local set_one = false
	for i, key in ipairs(single_allowed_keys) do
		if options[key] ~= nil then
			if set_one then
				return error("can only set options.params, options.body or options.json")
			else
				set_one = true
			end
		end
	end

	local json_body
	if options.json ~= nil then
		local success
		success, json_body = pcall(json.stringify, options.json)

		if not success then
			return error("options.json is invalid: " .. json_body)
		end
	end

	-- WARNING:
	-- use http_request_error after this point to properly free the http request

	local network_timeout = options.network_timeout
	if network_timeout == nil then
		network_timeout = 10
	end

	if type(network_timeout) == "number" and network_timeout > 0 then
		if not native_SetHTTPRequestNetworkActivityTimeout(req_handle, network_timeout) then
			return http_request_error(req_handle, "failed to set network_timeout")
		end
	elseif network_timeout ~= nil then
		return http_request_error(req_handle, "options.network_timeout has to be of type number and greater than 0")
	end

	local absolute_timeout = options.absolute_timeout
	if absolute_timeout == nil then
		absolute_timeout = 30
	end

	if type(absolute_timeout) == "number" and absolute_timeout > 0 then
		if not native_SetHTTPRequestAbsoluteTimeoutMS(req_handle, absolute_timeout*1000) then
			return http_request_error(req_handle, "failed to set absolute_timeout")
		end
	elseif absolute_timeout ~= nil then
		return http_request_error(req_handle, "options.absolute_timeout has to be of type number and greater than 0")
	end

	local content_type = json_body ~= nil and "application/json" or "text/plain"
	local authorization_set

	local headers = options.headers
	if type(headers) == "table" then
		for name, value in pairs(headers) do
			name = tostring(name)
			value = tostring(value)

			local name_lower = string_lower(name)

			if name_lower == "content-type" then
				content_type = value
			elseif name_lower == "authorization" then
				authorization_set = true
			end

			if not native_SetHTTPRequestHeaderValue(req_handle, name, value) then
				return http_request_error(req_handle, "failed to set header " .. name)
			end
		end
	elseif headers ~= nil then
		return http_request_error(req_handle, "options.headers has to be of type table")
	end


	local authorization = options.authorization
	if type(authorization) == "table" then
		if authorization_set then
			return http_request_error(req_handle, "Cannot set both options.authorization and the 'Authorization' header.")
		end

		local username, password = authorization[1], authorization[2]
		local header_value = string_format("Basic %s", base64_encode(string_format("%s:%s", tostring(username), tostring(password)), "base64"))

		if not native_SetHTTPRequestHeaderValue(req_handle, "Authorization", header_value) then
			return http_request_error(req_handle, "failed to apply options.authorization")
		end
	elseif authorization ~= nil then
		return http_request_error(req_handle, "options.authorization has to be of type table")
	end

	local body = json_body or options.body
	if type(body) == "string" then
		local len = string_len(body)

		if not native_SetHTTPRequestRawPostBody(req_handle, content_type, cast("unsigned char*", body), len) then
			return http_request_error(req_handle, "failed to set post body")
		end
	elseif body ~= nil then
		return http_request_error(req_handle, "options.body has to be of type string")
	end

	local params = options.params
	if type(params) == "table" then
		for name, value in pairs(params) do
			name = tostring(name)

			if not native_SetHTTPRequestGetOrPostParameter(req_handle, name, tostring(value)) then
				return http_request_error(req_handle, "failed to set parameter " .. name)
			end
		end
	elseif params ~= nil then
		return http_request_error(req_handle, "options.params has to be of type table")
	end

	local require_ssl = options.require_ssl
	if type(require_ssl) == "boolean" then
		if not native_SetHTTPRequestRequiresVerifiedCertificate(req_handle, require_ssl == true) then
			return http_request_error(req_handle, "failed to set require_ssl")
		end
	elseif require_ssl ~= nil then
		return http_request_error(req_handle, "options.require_ssl has to be of type boolean")
	end

	local user_agent_info = options.user_agent_info
	if type(user_agent_info) == "string" then
		if not native_SetHTTPRequestUserAgentInfo(req_handle, tostring(user_agent_info)) then
			return http_request_error(req_handle, "failed to set user_agent_info")
		end
	elseif user_agent_info ~= nil then
		return http_request_error(req_handle, "options.user_agent_info has to be of type string")
	end

	local cookie_container = options.cookie_container
	if type(cookie_container) == "table" then
		local handle = cookie_containers[cookie_container]

		if handle ~= nil and handle.m_hCookieContainer ~= 0 then
			if not native_SetHTTPRequestCookieContainer(req_handle, handle.m_hCookieContainer) then
				return http_request_error(req_handle, "failed to set user_agent_info")
			end
		else
			return http_request_error(req_handle, "options.cookie_container has to a valid cookie container")
		end
	elseif cookie_container ~= nil then
		return http_request_error(req_handle, "options.cookie_container has to a valid cookie container")
	end

	local send_func = native_SendHTTPRequest
	local stream_response = options.stream_response
	if type(stream_response) == "boolean" then
		if stream_response then
			send_func = native_SendHTTPRequestAndStreamResponse

			-- at least one callback is required
			if completed_callback == nil and headers_received_callback == nil and data_received_callback == nil then
				return http_request_error(req_handle, "a 'completed', 'headers_received' or 'data_received' callback is required")
			end
		else
			-- completed callback is required and others cant be used
			if completed_callback == nil then
				return http_request_error(req_handle, "'completed' callback has to be set for non-streamed requests")
			elseif headers_received_callback ~= nil or data_received_callback ~= nil then
				return http_request_error(req_handle, "non-streamed requests only support 'completed' callbacks")
			end
		end
	elseif stream_response ~= nil then
		return http_request_error(req_handle, "options.stream_response has to be of type boolean")
	end

	if headers_received_callback ~= nil or data_received_callback ~= nil then
		headers_received_callbacks[req_handle] = headers_received_callback or false
		if headers_received_callback ~= nil then
			if not headers_received_callback_registered then
				register_callback(CALLBACK_HTTPRequestHeadersReceived, http_request_headers_received)
				headers_received_callback_registered = true
			end
		end

		data_received_callbacks[req_handle] = data_received_callback or false
		if data_received_callback ~= nil then
			if not data_received_callback_registered then
				register_callback(CALLBACK_HTTPRequestDataReceived, http_request_data_received)
				data_received_callback_registered = true
			end
		end
	end

	local call_handle = SteamAPICall_t_arr()
	if not send_func(req_handle, call_handle) then
		native_ReleaseHTTPRequest(req_handle)

		if completed_callback ~= nil then
			completed_callback(false, {status = 0, status_message = "Failed to send request"})
		end

		return
	end


	if options.priority == "defer" or options.priority == "prioritize" then
		local func = options.priority == "prioritize" and native_PrioritizeHTTPRequest or native_DeferHTTPRequest

		if not func(req_handle) then
			return http_request_error(req_handle, "failed to set priority")
		end
	elseif options.priority ~= nil then
		return http_request_error(req_handle, "options.priority has to be 'defer' of 'prioritize'")
	end

	completed_callbacks[req_handle] = completed_callback or false
	if completed_callback ~= nil then
		register_call_result(call_handle[0], http_request_completed, CALLBACK_HTTPRequestCompleted)
	end
end

local function cookie_container_new(allow_modification)
	if allow_modification ~= nil and type(allow_modification) ~= "boolean" then
		return error("allow_modification has to be of type boolean")
	end

	local handle_raw = native_CreateCookieContainer(allow_modification == true)

	if handle_raw ~= nil then
		local handle = CookieContainerHandle_t(handle_raw)
		ffi_gc(handle, cookie_container_gc)

		local key = setmetatable({}, cookie_container_mt)
		cookie_containers[key] = handle

		return key
	end
end

--
-- public module functions
--

local http_library = {
	request = http_request_new,
	create_cookie_container = cookie_container_new
}

-- shortcut for http methods
for method in pairs(method_name_to_enum) do
	http_library[method] = function(...)
		return http_request_new(method, ...)
	end
end

--return http_library
--[[
http_library.post("nigga", {
    headers = {
        ["custom"] = "xsaxsa",
    },
	params = {
		["1231242"] = "12312",
	}
}, function (status, response)
    if not status and response.body ~= 200 then 
        print("Failed to connect with API server")
        return
    end
	print(response.body)
end)	
]]
```

</details>

> 原帖地址: [Discord - Steam HTTP实现](https://discord.com/channels/987624505604194374/1330074633705361408)

## 🔧 实现方式

### 1. 基础HTTP实现

这种实现使用Windows Socket API直接发送HTTP请求。它简单但功能有限，且不支持HTTPS。

#### 使用示例

```lua
-- 创建一个简单的GET请求
local request = "GET / HTTP/1.1\r\nHost: example.com\r\nConnection: close\r\n\r\n"

-- 设置目标服务器信息
local addr = ffi.new("sockaddr_in")
addr.sin_family = AF_INET
addr.sin_port = htons(80)  -- 标准HTTP端口
addr.sin_addr.s_addr = inet_addr("93.184.216.34")  -- example.com的IP地址

-- 发送请求
if send(sock, request, #request, 0) == -1 then
    error("发送失败")
end

-- 接收响应
local buffer = ffi.new("char[4096]")
local received = recv(sock, buffer, 4096, 0)

if received > 0 then
    local response = ffi.string(buffer, received)
    print(response)
else
    error("接收响应失败")
end
```

### 2. Steam HTTP实现

这种实现利用Steam API发送HTTP请求，功能更完善，支持HTTPS，但需要在Steam环境中运行。

#### 使用示例

```lua
-- 简单的GET请求
http.get("https://api.example.com/data", function(success, response)
    if success and response.status == 200 then
        print("请求成功！")
        print("响应内容:", response.body)
    else
        print("请求失败:", response.status_message)
    end
end)

-- 带参数的POST请求
http.post("https://api.example.com/submit", {
    headers = {
        ["Content-Type"] = "application/json",
        ["Authorization"] = "Bearer your_token_here"
    },
    params = {
        ["user_id"] = "12345",
        ["action"] = "update"
    },
    json = {
        name = "张三",
        age = 30,
        interests = {"编程", "游戏", "音乐"}
    }
}, function(success, response)
    if success and response.status == 200 then
        -- 尝试解析JSON响应
        local data = json.parse(response.body)
        print("操作结果:", data.result)
    else
        print("请求失败:", response.status, response.status_message)
    end
end)
```

## 🚀 API 参考

### 基础HTTP

基础HTTP实现主要使用底层Socket API，需要手动处理连接、请求和响应。

### Steam HTTP

Steam HTTP实现提供了更友好的API，类似于现代HTTP客户端库。

#### http.request

[![函数][这是一个必须使用点(.)调用的函数]rw]

发送HTTP请求。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `method` | `string` | HTTP方法，如"get"、"post"、"put"等 |
| `url` | `string` | 请求的URL |
| `options` | `table` | 请求选项（可选） |
| `callback` | `function` | 请求完成后的回调函数 |

**options参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `headers` | `table` | 请求头 |
| `params` | `table` | URL参数或表单数据 |
| `body` | `string` | 请求体（原始数据） |
| `json` | `table` | JSON请求体（会自动序列化） |
| `network_timeout` | `number` | 网络活动超时（秒） |
| `absolute_timeout` | `number` | 绝对超时（秒） |
| `require_ssl` | `boolean` | 是否要求SSL证书验证 |
| `user_agent_info` | `string` | 用户代理信息 |
| `stream_response` | `boolean` | 是否流式接收响应 |

**回调函数参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `success` | `boolean` | 请求是否成功 |
| `response` | `table` | 响应对象 |

**响应对象属性**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `status` | `number` | HTTP状态码 |
| `status_message` | `string` | 状态消息 |
| `body` | `string` | 响应体 |
| `headers` | `table` | 响应头 |

#### 便捷方法

[![函数][这是一个必须使用点(.)调用的函数]rw]

```lua
http.get(url, options, callback)
http.post(url, options, callback)
http.put(url, options, callback)
http.delete(url, options, callback)
http.head(url, options, callback)
http.options(url, options, callback)
http.patch(url, options, callback)
```

这些是`http.request`的便捷包装，自动设置对应的HTTP方法。

## 📊 实际应用示例

### 获取天气数据

```lua
http.get("http://api.weatherapi.com/v1/current.json", {
    params = {
        key = "your_api_key",
        q = "Beijing"
    }
}, function(success, response)
    if success and response.status == 200 then
        local weather_data = json.parse(response.body)
        print("北京当前温度:", weather_data.current.temp_c, "°C")
        print("天气状况:", weather_data.current.condition.text)
    else
        print("获取天气数据失败")
    end
end)
```

### 提交表单数据

```lua
http.post("http://example.com/submit-form", {
    params = {
        username = "user123",
        email = "user@example.com",
        message = "这是一条测试消息"
    }
}, function(success, response)
    if success and response.status == 200 then
        print("表单提交成功!")
    else
        print("表单提交失败:", response.status_message)
    end
end)
```

### 下载文件

```lua
http.get("http://example.com/files/document.txt", {
    stream_response = true
}, {
    completed = function(success, response)
        if success and response.status == 200 then
            print("文件下载完成")
            -- 保存文件逻辑
        else
            print("文件下载失败")
        end
    end,
    data_received = function(success, data)
        if success then
            print("下载进度:", math.floor(data.download_progress * 100), "%")
            -- 处理部分数据
        end
    end
})
```

## ⚠️ 注意事项

1. **安全性**：基础HTTP实现不支持HTTPS，所有数据都是明文传输，存在安全风险。
2. **稳定性**：这两种实现都是社区提供的，可能不如原生功能稳定。
3. **错误处理**：始终检查请求是否成功，并妥善处理错误情况。
4. **资源管理**：长时间运行的应用应注意管理HTTP连接，避免资源泄漏。
5. **跨域限制**：某些API可能有跨域限制，需要服务器端支持CORS。
