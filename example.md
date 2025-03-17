<div class="example-header">
    <div class="example-icon">📚</div>
    <div class="example-title">示例文档</div>
</div>

<div class="grid-container">
    <div class="grid-item">
        <a href="#/example/entities.md">
            <span class="icon entity-icon">🔍</span>
            <span class="text">实体</span>
            <span class="arrow">›</span>
        </a>
    </div>
    <div class="grid-item">
        <a href="#/example/utils.md">
            <span class="icon utils-icon">⚙️</span>
            <span class="text">工具</span>
            <span class="arrow">›</span>
        </a>
    </div>
    <div class="grid-item">
        <a href="#/example/gui.md">
            <span class="icon gui-icon">🖥️</span>
            <span class="text">界面</span>
            <span class="arrow">›</span>
        </a>
    </div>
    <div class="grid-item">
        <a href="#/example/draw.md">
            <span class="icon draw-icon">🎨</span>
            <span class="text">绘制</span>
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

.example-header {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    padding-bottom: 15px;
    border-bottom: 1px solid #333;
}

.example-icon {
    font-size: 36px;
    margin-right: 15px;
    color: #9b8eb4;
    text-shadow: 0 0 10px rgba(155, 142, 180, 0.3);
}

.example-title {
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

.players-icon { background-color: #4a5568; }

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
