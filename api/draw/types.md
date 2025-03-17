<div class="api-header">
    <div class="api-icon">📝</div>
    <div class="api-title">Draw API 类型</div>
</div>

# Draw API 类型

Draw API 提供了多种类型来帮助您进行绘图操作。以下是可用的类型：

<div class="grid-container">
    <div class="grid-item">
        <a href="#/api/draw/types/rect.md">
            <span class="icon rect-icon">🔲</span>
            <span class="text">矩形 [rect]</span>
            <span class="arrow">›</span>
        </a>
    </div>
    <div class="grid-item">
        <a href="#/api/draw/types/vec2.md">
            <span class="icon vec2-icon">➡️</span>
            <span class="text">二维向量 [vec2]</span>
            <span class="arrow">›</span>
        </a>
    </div>
    <div class="grid-item">
        <a href="#/api/draw/types/color.md">
            <span class="icon color-icon">🎨</span>
            <span class="text">颜色 [color]</span>
            <span class="arrow">›</span>
        </a>
    </div>
    <div class="grid-item">
        <a href="#/api/draw/types/accessor.md">
            <span class="icon accessor-icon">🔑</span>
            <span class="text">访问器 [accessor]</span>
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
    color: #dd6b20;
    text-shadow: 0 0 10px rgba(221, 107, 32, 0.3);
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
    padding: 20px 0;
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

.rect-icon { background-color: #4a5568; }
.vec2-icon { background-color: #2b6cb0; }
.color-icon { background-color: #dd6b20; }
.accessor-icon { background-color: #6b46c1; }

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
