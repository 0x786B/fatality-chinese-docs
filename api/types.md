<div class="api-header">
    <div class="api-icon">📝</div>
    <div class="api-title">类型参考</div>
</div>

<div class="grid-container">
    <div class="grid-item">
        <a href="#/api/types/ptr.md">
            <span class="icon ptr-icon">🔗</span>
            <span class="text">ptr</span>
            <span class="arrow">›</span>
        </a>
    </div>
    <div class="grid-item">
        <a href="#/api/types/ref-holder-t.md">
            <span class="icon ref-icon">🔗</span>
            <span class="text">ref_holder_t</span>
            <span class="arrow">›</span>
        </a>
    </div>
    <div class="grid-item">
        <a href="#/api/types/vector.md">
            <span class="icon vector-icon">📐</span>
            <span class="text">vector</span>
            <span class="arrow">›</span>
        </a>
    </div>
    <div class="grid-item">
        <a href="#/api/types/vector4d.md">
            <span class="icon vector4d-icon">📐</span>
            <span class="text">vector4d</span>
            <span class="arrow">›</span>
        </a>
    </div>
    <div class="grid-item">
        <a href="#/api/types/color.md">
            <span class="icon color-icon">🎨</span>
            <span class="text">color</span>
            <span class="arrow">›</span>
        </a>
    </div>
    <div class="grid-item">
        <a href="#/api/types/veccolor.md">
            <span class="icon veccolor-icon">🎨</span>
            <span class="text">veccolor</span>
            <span class="arrow">›</span>
        </a>
    </div>
    <div class="grid-item">
        <a href="#/api/types/cview-setup.md">
            <span class="icon cview-icon">👁️</span>
            <span class="text">cview_setup</span>
            <span class="arrow">›</span>
        </a>
    </div>
    <div class="grid-item">
        <a href="#/api/types/cuser_cmd.md">
            <span class="icon cmd-icon">⌨️</span>
            <span class="text">cuser_cmd</span>
            <span class="arrow">›</span>
        </a>
    </div>
    <div class="grid-item">
        <a href="#/api/types/game-event-t.md">
            <span class="icon event-icon">🎮</span>
            <span class="text">game_event_t</span>
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
    color: #319795;
    text-shadow: 0 0 10px rgba(49, 151, 149, 0.3);
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

.ptr-icon { background-color: #4a5568; }
.ref-icon { background-color: #4a5568; }
.vector-icon { background-color: #2b6cb0; }
.vector4d-icon { background-color: #2b6cb0; }
.color-icon { background-color: #dd6b20; }
.veccolor-icon { background-color: #dd6b20; }
.cview-icon { background-color: #805ad5; }
.cmd-icon { background-color: #6b46c1; }
.event-icon { background-color: #c53030; }

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
