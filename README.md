<div class="readme-header">
  <div class="header-icon">
    <div class="icon-wrapper">
      <img src="https://928777311-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/organizations%2FRc8lKzugjqovdk120qVl%2Fsites%2Fsite_dW5Sg%2Ficon%2FR4K8IVAKqKBik6Ct0U3w%2Fimage.avif?alt=media&token=cd45ac3f-9ef5-43a9-a9a3-4919ab291984" alt="Fatality Logo" class="header-logo">
    </div>
  </div>
  <div class="header-text">
    <div class="header-title animated-title">Fatality Lua API</div>
  </div>
</div>

<div class="notice-box">
  <div class="notice-content">
    <strong>本文档由社区用户编写，可能有错误的地方，请以官方文档为准</strong>
    <div class="notice-links">
      <a href="https://lua.fatality.win/" target="_blank">📚 fatality官方文档主页</a>
      <a href="https://0x786b.github.io/fatality-chinese-docs/" target="_blank">🌐 文档主页</a>
      <a href="https://github.com/0x786B/fatality-chinese-docs/" target="_blank">📦 文档仓库</a>
    </div>
  </div>
</div>

## 前言

欢迎使用我们的API基础脚本。

Fatality的API设计旨在模仿软件的内部结构，为您提供对其子系统的大量控制。一些可能导致不稳定或损坏的功能受到限制。

<div class="warning-box">
  <div class="warning-icon">⚠️⚠️⚠️</div>
  <div class="warning-text">
    <strong>重要提示：</strong> 市场脚本目前未受保护，可能有潜在被dumper的风险。保护措施将很快引入。
  </div>
</div>

## 概念
我们的脚本引擎使用<span class="highlight">LuaJIT 2.1</span>（带有少量自定义）。它与Lua 5.1完全兼容，并包含一些Lua 5.2的增强功能。

标准库`baselib`、`bit`、`ffi`、`math`、`string`和`table`可用。请注意，`ffi`库**仅**在启用**允许不安全操作**选项时可用。有关更多详细信息，请参阅[官方Lua文档](https://www.lua.org/manual/5.1/)。

如果我们修改了任何标准函数，我们将记录这些更改以保持您的信息同步。

## 概述
在整个API参考中，您会遇到用于描述某个方法或字段的各种标签。

### 标签

[![字段][这是一个必须使用点（.）访问的常规字段。]rw]
[![函数][这是一个必须使用点（.）调用的常规函数。]rw]
[![方法][这是一个方法，也称为函数，但建议使用冒号（:）语法调用（`obj:fn()`）。]rw]
[![构造函数][这是此类型的构造函数定义。您不需要调用任何特定字段，而是必须调用**类型本身**（例如：`vector`具有`__call`，这意味着您应该这样调用：`vector()`）。]rw]
[![只读][这是一个只读字段，您无法更改其值。此限制通常不适用于任何子元素。]r]
[![不安全][此函数仅在启用"允许不安全操作"时存在。]i]

上述列出了所有可能的标签。

* **字段**：表示一个标准字段，其类型会在名称下方说明。

* **函数**：表示一个函数，使用点语法调用（`obj.fn()`）。

* **方法**：表示一个方法，建议使用冒号语法调用（`obj:fn()`）。

* **构造函数**：表示一个构造函数定义，需调用类型本身（例如：`vector`的`__call`，应调用为：`vector()`）。

* **只读**：表示只读项，值不可更改，通常不影响子元素。

* **不安全**：表示仅在启用"允许不安全操作"时可访问。

### 参数和返回值列表

<div class="info-box">
  <div class="info-icon">ℹ️</div>
  <div class="info-content">
    参数和返回值按您必须提供的顺序列出。例如，如果参数显示在第一位，则应将其作为函数的第一个参数传递。对于返回值也是如此：第一个列出的值将放在您声明的第一个变量中，依此类推。
  </div>
</div>

### 类型
某些类型描述中包含特殊符号：

<div class="type-container">
  <div class="type-item">
    <div class="type-title">可空类型</div>
    <div class="type-content">
      <code>type?</code> 表示该类型可能是 <code>nil</code>
    </div>
  </div>
  
  <div class="type-item">
    <div class="type-title">泛型类型</div>
    <div class="type-content">
      <code>type&lt;other&gt;</code> 表示内部方法或字段将使用 <code>other</code> 类型
    </div>
  </div>
  
  <div class="type-item">
    <div class="type-title">基类类型</div>
    <div class="type-content">
      <code>&lt;other&gt;</code> 表示该类型将是 <code>other</code>，或其任何子类型
    </div>
  </div>

  <div class="type-item">
    <div class="type-title">数组类型</div>
    <div class="type-content">
      <code>type[]</code> 表示该类型是 <code>type</code> 类型的数组或列表
    </div>
  </div>
</div>

## 规则

为了使脚本安全且易于使用，我们采取了许多安全措施。但由于某些特定内容的工作方式，我们无法将其完全安全化。因此，在编写脚本之前，请了解以下几点：

<div class="rules-container">
  <div class="rule-item">
    <div class="rule-title">关于LUA的控制</div>
    <div class="rule-content">
      您可以替换或覆盖API函数，但您负责维护稳定的行为。如果您遇到默认API中的任何错误（<strong>除了FFI</strong>），请报告这些问题，以便我们可以解决这些问题。
    </div>
  </div>
  
  <div class="rule-item">
    <div class="rule-title">关于LUA的安全性</div>
    <div class="rule-content">
      使用FFI为您提供极大的自由度。请记住，任何可能对用户造成伤害的脚本都是被禁止的，并将被移除。尽可能<strong>依赖提供的API</strong>或请求其他功能，如果您需要目前未提供的功能。自定义"脚本加载器"严格禁止。
    </div>
  </div>
  
  <div class="rule-item">
    <div class="rule-title">关于LUA的可用性</div>
    <div class="rule-content">
      避免隐藏不相关的UI元素、阻碍用户输入或干扰整体用户体验。任何破坏功能或骚扰用户的脚本都有可能从工作坊中移除。
    </div>
  </div>

  <div class="rule-item">
    <div class="rule-title">关于LUA的性能</div>
    <div class="rule-content">
      编写脚本时请注意性能优化，避免不必要的循环和资源消耗。建议使用<strong>事件驱动</strong>的方式编写代码，合理利用缓存机制，保持代码高效运行。
    </div>
  </div>
</div>

<style>
/* 重置和基础样式 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --primary-color: #569cd6;
  --secondary-color: #4ec9b0;
  --background-color: #1e1e1e;
  --surface-color: #252526;
  --surface-hover-color: #2d2d2d;
  --border-color: #404040;
  --text-primary: #d4d4d4;
  --text-secondary: #9cdcfe;
  --code-color: #ce9178;
  --keyword-color: #c586c0;
  --function-color: #dcdcaa;
  --comment-color: #6a9955;
  --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.2);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.25);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.3);
  --transition-fast: 0.2s ease;
  --transition-normal: 0.3s ease;
  --border-radius-sm: 4px;
  --border-radius-md: 6px;
  --border-radius-lg: 8px;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: var(--text-primary);
  background-color: var(--background-color);
  margin: 0;
  padding: 0;
}

/* 内容容器 */
.markdown-body {
  max-width: 100%;
  padding: 20px;
  margin: 0;
}

/* 标题样式 */
h1, h2, h3 {
  color: var(--text-primary);
  font-weight: 600;
  letter-spacing: -0.02em;
}

h1 {
  font-size: 1.8em;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--border-color);
}

h2 {
  font-size: 1.5em;
  margin: 25px 0 15px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--border-color);
  color: var(--secondary-color);
}

h3 {
  font-size: 1.2em;
  margin: 20px 0 10px;
  color: var(--text-secondary);
}

/* 标题动画效果 */
@keyframes titleGlow {
  0% {
    background-position: 0% 50%;
    text-shadow: 0 0 10px rgba(88, 166, 255, 0.5);
  }
  50% {
    background-position: 100% 50%;
    text-shadow: 0 0 20px rgba(155, 142, 180, 0.8), 0 0 30px rgba(88, 166, 255, 0.4);
  }
  100% {
    background-position: 0% 50%;
    text-shadow: 0 0 10px rgba(88, 166, 255, 0.5);
  }
}

@keyframes titleFloat {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0px);
  }
}

.animated-title {
  font-size: 32px;
  font-weight: 700;
  background: linear-gradient(120deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 4px;
  animation: titleGlow 6s ease infinite;
}

.animated-title::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--primary-color), var(--secondary-color), var(--primary-color), transparent);
  animation: titleGlow 6s ease infinite;
}

/* 头部样式 */
.readme-header {
  display: flex;
  align-items: center;
  margin: 0 0 25px 0;
  padding: 20px;
  background: var(--surface-color);
  border-radius: var(--border-radius-lg);
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-md);
  transition: var(--transition-normal);
  overflow: hidden;
  position: relative;
}

.readme-header::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(88, 166, 255, 0.1) 0%, transparent 60%);
  opacity: 0;
  animation: pulseEffect 8s ease-in-out infinite;
}

@keyframes pulseEffect {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  50% {
    opacity: 0.3;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}

.readme-header:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.icon-wrapper {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(145deg, #2f2f2f, #252525);
  border-radius: var(--border-radius-md);
  margin-right: 20px;
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  animation: iconPulse 4s ease-in-out infinite;
}

@keyframes iconPulse {
  0% {
    box-shadow: 0 0 0 0 rgba(88, 166, 255, 0.2);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(88, 166, 255, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(88, 166, 255, 0);
  }
}

.header-logo {
  width: 100%;
  height: 100%;
  object-fit: contain;
  animation: logoRotate 20s linear infinite;
}

@keyframes logoRotate {
  0% {
    filter: hue-rotate(0deg) brightness(1);
  }
  50% {
    filter: hue-rotate(30deg) brightness(1.1);
  }
  100% {
    filter: hue-rotate(0deg) brightness(1);
  }
}

.header-title {
  font-size: 28px;
  font-weight: 700;
  background: linear-gradient(120deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 4px;
}

.header-subtitle {
  font-size: 16px;
  color: var(--text-secondary);
  letter-spacing: 0.5px;
}

/* 通知框样式 */
.notice-box {
  background: var(--surface-color);
  border-radius: var(--border-radius-md);
  padding: 20px;
  margin: 20px 0;
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-md);
}

.notice-links {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 15px;
}

.notice-links a {
  background: var(--surface-hover-color);
  color: var(--text-secondary);
  padding: 8px 15px;
  border-radius: var(--border-radius-sm);
  border: 1px solid var(--border-color);
}

.notice-links a:hover {
  background: var(--surface-color);
  color: var(--primary-color);
}

/* 警告框样式 */
.warning-box {
  background: rgba(255, 204, 0, 0.1);
  border-left: 4px solidrgb(169, 206, 120);
  padding: 15px;
  margin: 20px 0;
  border-radius: 0 var(--border-radius-sm) var(--border-radius-sm) 0;
}

.warning-icon {
  font-size: 20px;
  margin-right: 12px;
  color: #ffcc00;
}

/* 标签容器 */
.tags-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 15px;
  margin: 20px 0;
}

.tag {
  background: linear-gradient(145deg, var(--surface-color), #252525);
  padding: 20px;
  border-radius: var(--border-radius-md);
  transition: var(--transition-normal);
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-sm);
}

.tag:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
}

/* 规则容器 */
.rules-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  margin: 25px 0;
}

.rule-item {
  background: var(--surface-color);
  padding: 20px;
  border-radius: var(--border-radius-md);
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-sm);
}

.rule-item:hover {
  background: var(--surface-hover-color);
}

.rule-title {
  color: var(--primary-color);
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--border-color);
}

/* 快速链接 */
.quick-links {
  background: linear-gradient(145deg, var(--surface-color), #252525);
  border-radius: var(--border-radius-lg);
  padding: 25px;
  margin: 30px 0;
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-md);
}

.quick-links-title {
  text-align: center;
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #fff;
}

.quick-links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 15px;
}

.quick-link {
  background: linear-gradient(145deg, #333, #2a2a2a);
  padding: 15px;
  border-radius: var(--border-radius-md);
  text-align: center;
  transition: var(--transition-normal);
  border: 1px solid var(--border-color);
}

.quick-link:hover {
  transform: translateY(-3px);
  background: linear-gradient(145deg, #383838, #2f2f2f);
  box-shadow: var(--shadow-md);
  text-decoration: none;
}

.quick-link-icon {
  font-size: 24px;
  margin-bottom: 8px;
}

.quick-link-text {
  color: var(--text-primary);
  font-weight: 500;
}

/* 代码块样式 */
code {
  font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
  font-size: 0.9em;
  color: var(--code-color);
  background-color: var(--surface-hover-color);
  padding: 3px 6px;
  border-radius: var(--border-radius-sm);
  border: 1px solid var(--border-color);
}

/* 链接样式 */
a {
  color: var(--text-secondary);
  text-decoration: none;
  transition: var(--transition-fast);
}

a:hover {
  color: var(--primary-color);
  text-decoration: none;
}

/* 滚动条样式 */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: var(--background-color);
}

::-webkit-scrollbar-thumb {
  background: var(--surface-hover-color);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--border-color);
}

/* 响应式调整 */
@media (max-width: 1200px) {
  .tags-container,
  .rules-container {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
}

@media (max-width: 768px) {
  .markdown-body {
    padding: 15px;
  }
  
  .readme-header {
    padding: 15px;
  }
  
  .icon-wrapper {
    width: 50px;
    height: 50px;
    font-size: 28px;
  }
  
  .header-title {
    font-size: 24px;
  }
  
  .tags-container,
  .rules-container,
  .quick-links-grid {
    grid-template-columns: 1fr;
  }
  
  .notice-links {
    flex-direction: column;
  }
  
  .animated-title {
    font-size: 26px;
  }
}

/* 打印样式优化 */
@media print {
  body {
    background: white;
    color: black;
  }
  
  .readme-header,
  .notice-box,
  .tag,
  .rule-item,
  .quick-links {
    box-shadow: none;
    border: 1px solid #ddd;
  }
}

/* 类型容器样式 */
.type-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  margin: 25px 0;
}

.type-item {
  background: var(--surface-color);
  padding: 20px;
  border-radius: var(--border-radius-md);
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-sm);
}

.type-item:hover {
  background: var(--surface-hover-color);
}

.type-title {
  color: var(--primary-color);
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--border-color);
}

.type-content {
  color: var(--text-primary);
}

.type-content code {
  color: var(--code-color);
  background-color: var(--surface-hover-color);
  padding: 2px 6px;
  border-radius: 4px;
  margin: 0 2px;
  font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
}

.info-box {
  background: rgba(86, 156, 214, 0.1);
  border-left: 4px solid var(--primary-color);
  padding: 15px;
  margin: 20px 0;
  border-radius: 0 var(--border-radius-sm) var(--border-radius-sm) 0;
  display: flex;
  align-items: flex-start;
}

.info-icon {
  font-size: 20px;
  margin-right: 12px;
  color: var(--primary-color);
}

.info-content {
  flex: 1;
  color: var(--text-primary);
}

/* 高亮文本 */
.highlight {
  color: var(--secondary-color);
  font-weight: 500;
}
</style>
