<div class="quick-links-header">
  <div class="header-icon">🔗</div>
  <div class="header-title">相关链接</div>
</div>

<div class="links-container">
  <div class="link-card">
    <a href="https://github.com/bruhmoment21/cs2-sdk/tree/v2" target="_blank">
      <div class="card-icon">📦</div>
      <div class="card-title">CS2-SDK</div>
      <div class="card-description">Counter-Strike 2 软件开发工具包</div>
    </a>
  </div>
  
  <div class="link-card">
    <a href="https://github.com/a2x/cs2-dumper/blob/main/output/offsets.cs" target="_blank">
      <div class="card-icon">🔍</div>
      <div class="card-title">Offset</div>
      <div class="card-description">CS2 内存偏移量数据</div>
    </a>
  </div>
  
  <div class="link-card">
    <a href="https://github.com/a2x/cs2-dumper/blob/main/output/interfaces.cs" target="_blank">
      <div class="card-icon">🔌</div>
      <div class="card-title">Interfaces</div>
      <div class="card-description">CS2 接口定义</div>
    </a>
  </div>
  
  <div class="link-card">
    <a href="https://github.com/a2x/cs2-dumper/blob/main/output/client_dll.cs" target="_blank">
      <div class="card-icon">💻</div>
      <div class="card-title">Client.dll</div>
      <div class="card-description">客户端动态链接库数据</div>
    </a>
  </div>
  
  <div class="link-card">
    <a href="https://github.com/a2x/cs2-dumper/blob/main/output/engine2_dll.cs" target="_blank">
      <div class="card-icon">⚙️</div>
      <div class="card-title">Engine2.dll</div>
      <div class="card-description">引擎动态链接库数据</div>
    </a>
  </div>
  
  <div class="link-card">
    <a href="https://github.com/a2x/cs2-dumper/blob/main/output/server_dll.cs" target="_blank">
      <div class="card-icon">🖥️</div>
      <div class="card-title">Server.dll</div>
      <div class="card-description">服务器动态链接库数据</div>
    </a>
  </div>
  
  <div class="link-card">
    <a href="https://github.com/danielkrupinski/Osiris/tree/master" target="_blank">
      <div class="card-icon">🛡️</div>
      <div class="card-title">Osiris</div>
      <div class="card-description">开源 CS2 项目</div>
    </a>
  </div>
  
  <div class="link-card">
    <a href="https://docs.cssharp.dev/index.html" target="_blank">
      <div class="card-icon">📚</div>
      <div class="card-title">CounterStrikeSharp</div>
      <div class="card-description">CS2 服务器插件框架</div>
    </a>
  </div>
</div>

<style>
:root {
  --primary-color: #58a6ff;
  --secondary-color: #9b8eb4;
  --background-color: #1e1e1e;
  --surface-color: #2a2a2a;
  --surface-hover-color: #3a3a3a;
  --border-color: #333;
  --text-primary: #e0e0e0;
  --text-secondary: #aaa;
  --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
  --transition-fast: 0.2s ease;
  --transition-normal: 0.3s ease;
  --border-radius-sm: 6px;
  --border-radius-md: 8px;
  --border-radius-lg: 12px;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: var(--text-primary);
  background-color: var(--background-color);
  margin: 0;
  padding: 0;
}

.quick-links-header {
  display: flex;
  align-items: center;
  margin: 0 0 25px 0;
  padding: 20px;
  background: linear-gradient(145deg, var(--surface-color), #252525);
  border-radius: var(--border-radius-lg);
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-md);
  transition: var(--transition-normal);
}

.quick-links-header:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.header-icon {
  font-size: 36px;
  margin-right: 15px;
  color: var(--secondary-color);
  text-shadow: 0 0 10px rgba(155, 142, 180, 0.3);
}

.header-title {
  font-size: 28px;
  font-weight: 700;
  background: linear-gradient(120deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 4px;
}

.links-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  margin: 25px 0;
}

.link-card {
  background: linear-gradient(145deg, var(--surface-color), #252525);
  border-radius: var(--border-radius-md);
  transition: var(--transition-normal);
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
}

.link-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
  background: linear-gradient(145deg, #383838, #2f2f2f);
}

.link-card a {
  display: block;
  padding: 20px;
  color: var(--text-primary);
  text-decoration: none;
}

.card-icon {
  font-size: 24px;
  margin-bottom: 12px;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #333;
  text-align: center;
}

.card-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
  color: var(--primary-color);
}

.card-description {
  font-size: 14px;
  color: var(--text-secondary);
}

/* 响应式调整 */
@media (max-width: 768px) {
  .links-container {
    grid-template-columns: 1fr;
  }
}
</style>