<div class="api-header">
    <div class="api-icon">⚙️</div>
    <div class="api-title">API 参考文档</div>
</div>

<div class="grid-container">
    <div class="grid-item">
        <a href="#/api/global.md">
            <span class="icon global-icon">🌐</span>
            <span class="text">Global</span>
            <span class="arrow">›</span>
        </a>
    </div>
    <div class="grid-item">
        <a href="#/api/ffi.md">
            <span class="icon ffi-icon">🔌</span>
            <span class="text">FFi</span>
            <span class="arrow">›</span>
        </a>
    </div>
    <div class="grid-item">
        <a href="#/api/bit.md">
            <span class="icon bit-icon">🎲</span>
            <span class="text">Bit</span>
            <span class="arrow">›</span>
        </a>
    </div>
    <div class="grid-item">
        <a href="#/api/http.md">
            <span class="icon http-icon">🌍</span>
            <span class="text">HTTP</span>
            <span class="arrow">›</span>
        </a>
    </div>
    <div class="grid-item">
        <a href="#/api/files.md">
            <span class="icon files-icon">📂</span>
            <span class="text">Files</span>
            <span class="arrow">›</span>
        </a>
    </div>
    <div class="grid-item">
        <a href="#/api/json.md">
            <span class="icon json-icon">📄</span>
            <span class="text">Json</span>
            <span class="arrow">›</span>
        </a>
    </div>
    <div class="grid-item">
        <a href="#/api/math.md">
            <span class="icon math-icon">📐</span>
            <span class="text">Math</span>
            <span class="arrow">›</span>
        </a>
    </div>
    <div class="grid-item">
        <a href="#/api/events.md">
            <span class="icon events-icon">📢</span>
            <span class="text">事件[Events]</span>
            <span class="arrow">›</span>
        </a>
    </div>
    <div class="grid-item">
        <a href="#/api/game.md">
            <span class="icon game-icon">🎮</span>
            <span class="text">游戏[Game]</span>
            <span class="arrow">›</span>
        </a>
    </div>
    <div class="grid-item">
        <a href="#/api/mods.md">
            <span class="icon mods-icon">🧩</span>
            <span class="text">模块[Mods]</span>
            <span class="arrow">›</span>
        </a>
    </div>
    <div class="grid-item">
        <a href="#/api/entities.md">
            <span class="icon entities-icon">🤖</span>
            <span class="text">实体[Entities]</span>
            <span class="arrow">›</span>
        </a>
    </div>
    <div class="grid-item">
        <a href="#/api/draw.md">
            <span class="icon draw-icon">🎨</span>
            <span class="text">绘制[Draw]</span>
            <span class="arrow">›</span>
        </a>
    </div>
    <div class="grid-item">
        <a href="#/api/gui.md">
            <span class="icon gui-icon">🖥️</span>
            <span class="text">界面[gui]</span>
            <span class="arrow">›</span>
        </a>
    </div>
    <div class="grid-item">
        <a href="#/api/utils.md">
            <span class="icon utils-icon">🧰</span>
            <span class="text">工具[Utils]</span>
            <span class="arrow">›</span>
        </a>
    </div>
    <div class="grid-item">
        <a href="#/api/types.md">
            <span class="icon types-icon">📝</span>
            <span class="text">类型[Types]</span>
            <span class="arrow">›</span>
        </a>
    </div>
    <div class="grid-item">
        <a href="#/api/enums.md">
            <span class="icon enums-icon">🔢</span>
            <span class="text">枚举[Enums]</span>
            <span class="arrow">›</span>
        </a>
    </div>
</div>

<style>
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #e0e0e0;
    background-color: #1e1e1e;
}

.api-header {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    padding-bottom: 15px;
    border-bottom: 1px solid #333;
}

.api-icon {
    font-size: 36px;
    margin-right: 15px;
    color: #9b8eb4;
    text-shadow: 0 0 10px rgba(155, 142, 180, 0.3);
}

.api-title {
    font-size: 32px;
    font-weight: 600;
    color: #ffffff;
    letter-spacing: 0.5px;
}

.grid-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 0;
}

.grid-item {
    background-color: #2a2a2a;
    border-radius: 10px;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border: 1px solid #333;
}

.grid-item:hover {
    background-color: #3a3a3a;
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    border-color: #444;
}

.grid-item a {
    display: flex;
    align-items: center;
    color: #ffffff;
    text-decoration: none;
    padding: 18px;
    position: relative;
}

.icon {
    font-size: 24px;
    margin-right: 15px;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background-color: #333;
    text-align: center;
}

.math-icon { background-color: #4a5568; }
.events-icon { background-color: #c53030; }
.game-icon { background-color: #2b6cb0; }
.mods-icon { background-color: #6b46c1; }
.draw-icon { background-color: #dd6b20; }
.entities-icon { background-color: #2f855a; }
.gui-icon { background-color: #805ad5; }
.utils-icon { background-color: #718096; }
.bit-icon { background-color: #3182ce; }
.ffi-icon { background-color: #d69e2e; }
.types-icon { background-color: #319795; }
.enums-icon { background-color: #b83280; }
.global-icon { background-color: #4299e1; }
.http-icon { background-color: #9c4221; }
.json-icon { background-color: #38a169; }
.files-icon { background-color: #4a5568; }

.text {
    font-size: 17px;
    font-weight: 500;
    flex-grow: 1;
    letter-spacing: 0.3px;
}

.arrow {
    font-size: 22px;
    color: #777;
    margin-left: 5px;
    transition: all 0.2s ease;
}

.grid-item:hover .arrow {
    color: #aaa;
    transform: translateX(3px);
}

@media (max-width: 768px) {
    .grid-container {
        grid-template-columns: 1fr;
    }
}
</style>
