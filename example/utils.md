# ⚙️utils示例

本页提供了一些你可能用得到的实用函数示例

### 💻获取FPS

```lua
local function get_absolute_fps()
    frame_rate = 0.9 * frame_rate + (1.0 - 0.9) * game.global_vars.frame_time
    return math.floor((1.0 / frame_rate) + 0.5)
end
```


### 💻平滑FPS
平滑FPS函数使用移动平均算法来平滑FPS值，减少波动，提供更稳定的显示效果。

```lua
local fps = {
    frame_times = {},
    sum_frame_time = 0,
    max_samples = 60,
    alpha = 0.98,
    last_fps = 0,
}
local function get_smooth_fps()
    local current_time = game.global_vars.frame_time
    fps.sum_frame_time = fps.sum_frame_time + current_time
    table.insert(fps.frame_times, current_time)
    if #fps.frame_times > fps.max_samples then
        fps.sum_frame_time = fps.sum_frame_time - fps.frame_times[1]
        table.remove(fps.frame_times, 1)
    end
    local current_fps = #fps.frame_times / fps.sum_frame_time
    fps.last_fps = fps.alpha * fps.last_fps + (1 - fps.alpha) * current_fps
    local alpha2 = 0.95
    fps.last_fps = alpha2 * fps.last_fps + (1 - alpha2) * current_fps
    return math.floor(fps.last_fps + 0.5)
end
```

**参数说明**
- `frame_times`: 存储最近帧时间的表
- `sum_frame_time`: 所有帧时间的总和
- `max_samples`: 最大采样数量，控制平滑程度
- `alpha`: 平滑系数，值越大平滑效果越强
- `last_fps`: 上一次计算的FPS值 

### 🕐获取时间

```lua
local time = utils.get_unix_time()
```
****将unix时间戳转换为本地时间****
```lua
local function unix_to_local_time(unix_timestamp, timezone)
    timezone = timezone or 8
    local local_timestamp = unix_timestamp + (timezone * 3600)
    local days_per_month = {31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31}
    local seconds_per_day = 86400
    local seconds_per_hour = 3600
    local seconds_per_minute = 60
    local days = math.floor(local_timestamp / seconds_per_day)
    local remaining_seconds = local_timestamp % seconds_per_day
    local hours = math.floor(remaining_seconds / seconds_per_hour)
    remaining_seconds = remaining_seconds % seconds_per_hour
    local minutes = math.floor(remaining_seconds / seconds_per_minute)
    local seconds = remaining_seconds % seconds_per_minute
    local year = 1970
    local leap_year = false
    while true do
        local days_in_year = 365
        leap_year = (year % 4 == 0 and year % 100 ~= 0) or (year % 400 == 0)
        if leap_year then days_in_year = 366 end
        
        if days < days_in_year then
            break
        end
        
        days = days - days_in_year
        year = year + 1
    end
    if leap_year then
        days_per_month[2] = 29
    else
        days_per_month[2] = 28
    end
    local month = 1
    while days >= days_per_month[month] do
        days = days - days_per_month[month]
        month = month + 1
    end
    local day = days + 1
    local formatted_date = string.format("%04d-%02d-%02d %02d:%02d:%02d", year, month, day, hours, minutes, seconds)
    return formatted_date
end
```
**使用示例**
```lua
-- 示例：转换当前时间戳到中国时间（东八区）
local china_time = unix_to_local_time(time, 8)
print("Unix时间戳:", time)
print("中国本地时间 (UTC+8):", china_time)

-- 示例：转换特定时间戳到中国时间
local example_timestamp = 1741934882
local example_china_time = unix_to_local_time(example_timestamp, 8)
print("示例时间戳:", example_timestamp)
print("对应中国本地时间 (UTC+8):", example_china_time)

-- 示例：转换到其他时区
local new_york_time = unix_to_local_time(time, -4) -- 纽约（UTC-4，夏令时）
local london_time = unix_to_local_time(time, 1)    -- 伦敦（UTC+1，夏令时）
local tokyo_time = unix_to_local_time(time, 9)     -- 东京（UTC+9）

print("纽约时间 (UTC-4):", new_york_time)
print("伦敦时间 (UTC+1):", london_time)
print("东京时间 (UTC+9):", tokyo_time)
```
### 💻获取本地系统时间

使用Windows API通过ffi直接获取本地系统时间，相比Unix时间戳转换更加准确且无需考虑时区问题。

**函数说明**
- 该函数使用Windows的`GetLocalTime`API直接获取系统本地时间
- 返回一个包含完整时间信息的表，包括毫秒和星期几
- 不需要手动处理时区转换，系统会自动处理

**返回值说明**
- `year`: 年份（四位数）
- `month`: 月份（1-12）
- `day`: 日期（1-31）
- `hour`: 小时（0-23）
- `minute`: 分钟（0-59）
- `second`: 秒（0-59）
- `millisecond`: 毫秒（0-999）
- `day_of_week`: 星期几（0-6，0表示周日）

```lua
ffi.cdef[[
typedef struct _SYSTEMTIME {
    uint16_t wYear;
    uint16_t wMonth;
    uint16_t wDayOfWeek;
    uint16_t wDay;
    uint16_t wHour;
    uint16_t wMinute;
    uint16_t wSecond;
    uint16_t wMilliseconds;
} SYSTEMTIME, *PSYSTEMTIME;

void GetLocalTime(PSYSTEMTIME lpSystemTime);
]]

local function get_system_time()
    local system_time = ffi.new("SYSTEMTIME")
    local kernel32 = utils.find_export("kernel32.dll", "GetLocalTime")
    if kernel32 == 0 then
        error("无法找到GetLocalTime函数")
    end
    local get_local_time = ffi.cast("void(__stdcall*)(PSYSTEMTIME)", kernel32)
    get_local_time(system_time)
    return {
        year = system_time.wYear,
        month = system_time.wMonth,
        day = system_time.wDay,
        hour = system_time.wHour,
        minute = system_time.wMinute,
        second = system_time.wSecond,
        millisecond = system_time.wMilliseconds,
        day_of_week = system_time.wDayOfWeek
    }
end
```

**使用示例**
```lua
-- 基本使用
local time = get_system_time()
print(string.format(
    "当前时间: %04d年%02d月%02d日 %02d:%02d:%02d.%03d",
    time.year, time.month, time.day,
    time.hour, time.minute, time.second, time.millisecond
))

-- 获取并显示星期几
local weekdays = {
    "星期日", "星期一", "星期二", "星期三", 
    "星期四", "星期五", "星期六"
}
local weekday = weekdays[time.day_of_week + 1]
print(string.format(
    "今天是：%s",
    weekday
))

-- 在回调函数中使用示例
callbacks.add(e_callbacks.PAINT, function()
    local time = get_system_time()
    render.text(5, 35, string.format(
        "系统时间: %02d:%02d:%02d",
        time.hour, time.minute, time.second
    ), color.new(255, 255, 255, 255))
end)
```

**注意事项**
1. 该函数依赖Windows API，仅在Windows系统上可用
2. 返回的时间已经是本地时区的时间，无需额外的时区转换
3. 适合需要高精度时间（毫秒级）的场景
4. 相比Unix时间戳转换方式，这种方式更加准确且性能更好

### 💻获取游戏延迟

获取游戏延迟的函数，通过获取游戏引擎的网络通道来获取当前的延迟。

```lua
local chan = game.engine:get_netchan();
if chan and not chan:is_null() then
    print('当前延迟: ' .. tostring(math.round(chan:get_latency() * 1000.0)) .. 'ms');
end
```