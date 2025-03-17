## 开始使用

### 学习资源

📚 **学习资源**

- [📖 Lua教程](https://www.runoob.com/lua/lua-tutorial.html)
- [⚡ 10分钟快速入门](https://learnxinyminutes.com/lua/)

如果您已经了解了基本知识，现在就可以开始编写脚本了。

## 开发环境

### 选择编辑器 💻

新手推荐使用：[Visual Studio Code](https://code.visualstudio.com/)

有经验的开发者可以使用自己熟悉的文本编辑器。

### 脚本位置 📂

脚本文件应放置在：`<CS2>/game/csgo/fatality/scripts`

您可能注意到还有一个 `lib` 目录，我们稍后会详细介绍。

> ℹ️ **注意**：创建的脚本文件必须以 `.lua` 结尾

> ⚠️ **警告**：`.ljbc` 格式不能从本地源加载

## 第一个脚本

### 示例代码 🚀

> ⚠️ 目前fatality不支持中文，请使用英文

```lua
local function on_present_queue()
    local d = draw.surface;
    d.font = draw.fonts['gui_main'];
    d:add_text(draw.vec2(50, 50),
        'hello world',
         draw.color.white()
    );
end

events.present_queue:add(on_present_queue);
```

### 代码解析

#### 🔄 定义回调函数

`on_present_queue` 是一个**回调函数**，它将在每个渲染帧被调用。

#### 🎨 获取绘图表面

`draw.surface` 是一个全局绘图表面，允许您在屏幕上绘制各种图形和文本。

#### 📝 设置字体

`draw.fonts['gui_main']` 是一个预定义的字体，用于在用户界面中绘制文本。

#### ✏️ 添加文本

`d:add_text()` 方法用于在屏幕上绘制文本，接受以下参数：

- 文本位置（使用 `draw.vec2` 创建的 2D 向量）
- 要显示的文本字符串
- 文本颜色（使用 `draw.color.white()` 创建的白色）

#### 🔌 注册事件

`events.present_queue:add(on_present_queue)` 将回调函数注册到渲染队列事件中，使其在每次渲染帧时被调用。

## 添加用户界面

> 现在您已经了解了基础知识，让我们通过添加交互元素来扩展脚本。我们将添加一个复选框，用于控制文本的显示。

### 创建控件 🔘

```lua
local cb = gui.checkbox(gui.control_id('my_checkbox'));
```

#### 🆔 控件ID

每个控件都需要一个**唯一ID**，UI框架使用这个ID来区分容器中的控件。确保您的控件ID不会与其他控件冲突，否则可能导致状态损坏。

#### 🧩 创建复选框

`gui.checkbox()` 函数用于创建一个复选框控件，它接受一个由 `gui.control_id()` 创建的ID结构。

### 构建UI布局 📋

```lua
-- 创建一个带标签的行
local row = gui.make_control('显示文本', cb);

-- 找到目标分组
local group = gui.ctx:find('lua>elements a');

-- 将行添加到分组中
group:add(row);
```

#### 📏 构建行

`gui.make_control()` 函数将控件包装到由标签和控件组成的布局中，创建一个美观的行布局。

#### 🔍 查找分组

`gui.ctx:find()` 方法用于在全局上下文中查找指定ID的分组。在这个例子中，我们使用 `'lua>elements a'` 分组。

> ℹ️ **提示**：要查看分组和控件ID，您可以在SCRIPTS选项卡中启用**调试模式**

#### ➕ 添加到分组

`group:add()` 方法将行添加到找到的分组中，使其在UI中可见。

### 使用控件值 🔄

```lua
local function on_present_queue()
    -- 只在复选框被选中时显示文本
    if cb:get_value():get() then
        local d = draw.surface;
        d.font = draw.fonts['gui_main'];
        d:add_text(draw.vec2(50, 50),
            'hello world',
            draw.color.white()
        );
    end
end
```

`cb:get_value():get()` 用于获取复选框的当前状态（选中或未选中）。这个表达式返回一个布尔值，可以在条件语句中使用。

### 完整示例 📄

```lua
-- 创建UI控件
local cb = gui.checkbox(gui.control_id('my_checkbox'));
local row = gui.make_control('显示文本', cb);
local group = gui.ctx:find('lua>elements a');
group:add(row);

-- 定义渲染回调
local function on_present_queue()
    if cb:get_value():get() then
        local d = draw.surface;
        d.font = draw.fonts['gui_main'];
        d:add_text(draw.vec2(50, 50),
            'hello world',
            draw.color.white()
        );
    end
end

-- 注册事件
events.present_queue:add(on_present_queue);
```

## 下一步 👉

恭喜！您已经完成了第一个带有交互界面的Fatality Lua脚本。接下来，您可以探索更多高级功能，如颜色选择器、滑块和按钮等控件，以创建更复杂的脚本。