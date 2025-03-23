// 添加显示当前时间的函数
function updateCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById('current-time').textContent = `${hours}:${minutes}:${seconds}`;
}

// 页面加载后立即更新时间
updateCurrentTime();

// 每秒更新一次时间
setInterval(updateCurrentTime, 1000);

// 菜单切换函数
function switchTab(tabId) {
    // 移除所有菜单项的激活状态
    document.querySelectorAll('.main-nav li').forEach(item => {
        item.classList.remove('active');
    });

    // 激活当前点击的菜单项
    document.querySelector(`.main-nav li a[data-tab="${tabId}"]`).parentElement.classList.add('active');

    // 隐藏所有页面
    document.querySelectorAll('.page-content .page').forEach(page => {
        page.classList.remove('active');
        page.style.display = 'none';
    });

    // 显示对应页面
    if (tabId === 'rage') {
        const ragePage = document.getElementById('rage-content');
        if (ragePage) {
            ragePage.classList.add('active');
            ragePage.style.display = 'flex';
            const sidebar = document.querySelector('.sidebar');
            if (sidebar) sidebar.style.display = 'flex'; // 显示侧边栏
            
            // 重置RAGE页面子菜单状态
            document.querySelectorAll('.aimbot-menu .sub-menu-item').forEach(item => {
                item.classList.remove('active');
            });
            // 激活General选项
            const generalItem = document.querySelector('.aimbot-menu .sub-menu-item[data-page="general"]');
            if (generalItem) generalItem.classList.add('active');
        }
    } else if (tabId === 'legit') {
        const legitPage = document.getElementById('legit-content');
        if (legitPage) {
            legitPage.classList.add('active');
            legitPage.style.display = 'flex';
            const sidebar = document.querySelector('.sidebar');
            if (sidebar) sidebar.style.display = 'none'; // 隐藏侧边栏
            
            // 重置LEGIT页面子菜单状态
            document.querySelectorAll('.legit-sidebar .sub-menu-item').forEach(item => {
                item.classList.remove('active');
            });
            // 激活General选项
            const generalItem = document.querySelector('.legit-sidebar .sub-menu-item[data-page="legit-general"]');
            if (generalItem) generalItem.classList.add('active');
        }
    } else if (tabId === 'visuals') {
        const visualsPage = document.getElementById('visuals-content');
        if (visualsPage) {
            visualsPage.classList.add('active');
            visualsPage.style.display = 'flex';
            const sidebar = document.querySelector('.sidebar');
            if (sidebar) sidebar.style.display = 'none'; // 隐藏侧边栏
        }
    } else if (tabId === 'misc') {
        const miscPage = document.getElementById('misc-content');
        if (miscPage) {
            miscPage.classList.add('active');
            miscPage.style.display = 'flex';
            const sidebar = document.querySelector('.sidebar');
            if (sidebar) sidebar.style.display = 'none'; // 隐藏侧边栏
        }
    } else if (tabId === 'skins') {
        const skinsPage = document.getElementById('skins-content');
        if (skinsPage) {
            skinsPage.classList.add('active');
            skinsPage.style.display = 'flex';
            const sidebar = document.querySelector('.sidebar');
            if (sidebar) sidebar.style.display = 'none'; // 隐藏侧边栏
        }
    } else if (tabId === 'lua') {
        const luaPage = document.getElementById('lua-content');
        if (luaPage) {
            luaPage.classList.add('active');
            luaPage.style.display = 'flex';
            const sidebar = document.querySelector('.sidebar');
            if (sidebar) sidebar.style.display = 'none'; // 隐藏侧边栏
        }
    }

    console.log('切换到页面: ' + tabId);
}

// 侧边栏标签切换函数
function switchSidebarTab(sidebarType) {
    // 移除所有标签的active类
    document.querySelectorAll('.sidebar-tab').forEach(tab => {
        tab.classList.remove('active');
    });

    // 给当前点击的标签添加active类
    document.querySelector(`.sidebar-tab[data-sidebar="${sidebarType}"]`).classList.add('active');

    // 如果是anti-aim，添加对应的类到body
    if (sidebarType === 'anti-aim') {
        document.body.classList.add('show-anti-aim');

        // 显示anti-aim页面
        document.querySelectorAll('.page').forEach(page => {
            if (page.classList.contains('anti-aim-page')) {
                page.classList.add('active');
                page.style.display = 'flex';
            } else {
                page.classList.remove('active');
                page.style.display = 'none';
            }
        });
    } else {
        document.body.classList.remove('show-anti-aim');

        // 显示general页面
        document.querySelectorAll('.page').forEach(page => {
            if (page.classList.contains('general-page')) {
                page.classList.add('active');
                page.style.display = 'flex';
            } else {
                page.classList.remove('active');
                page.style.display = 'none';
            }
        });
    }

    // 隐藏所有二级菜单
    document.querySelectorAll('.sub-menu').forEach(menu => {
        menu.classList.remove('active');
    });

    // 显示对应的二级菜单
    const targetMenu = document.querySelector(`.${sidebarType}-menu`);
    if (targetMenu) {
        targetMenu.classList.add('active');
    }

    console.log('切换侧边栏标签: ' + sidebarType);
}

document.addEventListener('DOMContentLoaded', function () {
    // 检查当前活动页面并设置相应的body类
    const legitPage = document.querySelector('.legit-page.active');
    if (legitPage) {
        document.body.classList.add('show-legit');
    }

    // 初始化滑块和复选框
    initializeAllSliders();
    initializeAllCheckboxes();

    // 初始化下拉菜单
    initializeAllDropdowns();

    // 初始化顶部菜单切换功能
    initTopNavigation();

    // 初始化侧边栏标签
    handleSidebarTabs();

    // 检查是否已经有激活的标签，如果没有，默认激活第一个
    if (!document.querySelector('.sidebar-tab.active')) {
        document.querySelector('.sidebar-tab').classList.add('active');
    }

    // 检查激活的标签是哪个，应用相应的类
    if (document.querySelector('.sidebar-tab[data-sidebar="anti-aim"]').classList.contains('active')) {
        document.body.classList.add('show-anti-aim');
    }

    // 一级菜单切换功能
    const mainNavLinks = document.querySelectorAll('.main-nav li a');
    const contentPages = document.querySelectorAll('.page-content .page');

    mainNavLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation(); // 阻止事件冒泡

            console.log('点击菜单项: ' + this.getAttribute('data-tab'));

            try {
                // 移除所有菜单项的激活状态
                mainNavLinks.forEach(item => {
                    item.parentElement.classList.remove('active');
                });

                // 激活当前点击的菜单项
                this.parentElement.classList.add('active');

                // 获取对应的标签页ID
                const tabId = this.getAttribute('data-tab');

                // 隐藏所有页面
                contentPages.forEach(page => {
                    page.classList.remove('active');
                    page.style.display = 'none';
                });

                // 显示对应页面
                if (tabId === 'rage') {
                    const ragePage = document.getElementById('rage-content');
                    if (ragePage) {
                        ragePage.classList.add('active');
                        ragePage.style.display = 'flex';
                        const sidebar = document.querySelector('.sidebar');
                        if (sidebar) sidebar.style.display = 'flex'; // 显示侧边栏

                        console.log('切换回RAGE菜单，当前保存的菜单状态:', lastRageSubmenu);
                        
                        // 重置RAGE页面子菜单状态
                        document.querySelectorAll('.aimbot-menu .sub-menu-item').forEach(item => {
                            item.classList.remove('active');
                        });
                        // 激活General选项
                        const generalItem = document.querySelector('.aimbot-menu .sub-menu-item[data-page="general"]');
                        if (generalItem) generalItem.classList.add('active');

                        // 使用保存的RAGE状态
                        document.querySelectorAll('.sidebar-tab').forEach(tab => {
                            tab.classList.remove('active');
                        });

                        const targetTab = document.querySelector(`.sidebar-tab[data-sidebar="${lastRageSubmenu}"]`);
                        if (targetTab) {
                            console.log('找到目标标签:', targetTab);
                            targetTab.classList.add('active');
                        } else {
                            console.error('未找到目标标签:', lastRageSubmenu);
                        }
                    }
                } else if (tabId === 'legit') {
                    const legitPage = document.getElementById('legit-content');
                    if (legitPage) {
                        legitPage.classList.add('active');
                        legitPage.style.display = 'flex';
                        const sidebar = document.querySelector('.sidebar');
                        if (sidebar) sidebar.style.display = 'none'; // 隐藏侧边栏
                        
                        // 重置LEGIT页面子菜单状态
                        document.querySelectorAll('.legit-sidebar .sub-menu-item').forEach(item => {
                            item.classList.remove('active');
                        });
                        // 激活General选项
                        const generalItem = document.querySelector('.legit-sidebar .sub-menu-item[data-page="legit-general"]');
                        if (generalItem) generalItem.classList.add('active');
                    }
                } else if (tabId === 'visuals') {
                    const visualsPage = document.getElementById('visuals-content');
                    if (visualsPage) {
                        visualsPage.classList.add('active');
                        visualsPage.style.display = 'flex';
                        const sidebar = document.querySelector('.sidebar');
                        if (sidebar) sidebar.style.display = 'none'; // 隐藏侧边栏
                    }
                } else if (tabId === 'misc') {
                    const miscPage = document.getElementById('misc-content');
                    if (miscPage) {
                        miscPage.classList.add('active');
                        miscPage.style.display = 'flex';
                        const sidebar = document.querySelector('.sidebar');
                        if (sidebar) sidebar.style.display = 'none'; // 隐藏侧边栏
                    }
                } else if (tabId === 'skins') {
                    const skinsPage = document.getElementById('skins-content');
                    if (skinsPage) {
                        skinsPage.classList.add('active');
                        skinsPage.style.display = 'flex';
                        const sidebar = document.querySelector('.sidebar');
                        if (sidebar) sidebar.style.display = 'none'; // 隐藏侧边栏
                    }
                } else if (tabId === 'lua') {
                    const luaPage = document.getElementById('lua-content');
                    if (luaPage) {
                        luaPage.classList.add('active');
                        luaPage.style.display = 'flex';
                        const sidebar = document.querySelector('.sidebar');
                        if (sidebar) sidebar.style.display = 'none'; // 隐藏侧边栏
                    }
                }

                // 输出调试信息
                console.log('切换到页面: ' + tabId);
            } catch (error) {
                console.error('菜单切换出错: ', error);
            }
        });
    });

    // 侧边栏标签切换功能
    function handleSidebarTabs() {
        const sidebarTabs = document.querySelectorAll('.sidebar-tab');

        // 先移除所有现有的事件监听器
        sidebarTabs.forEach(tab => {
            const newTab = tab.cloneNode(true);
            tab.parentNode.replaceChild(newTab, tab);
        });

        // 重新获取替换后的标签
        const updatedTabs = document.querySelectorAll('.sidebar-tab');

        updatedTabs.forEach(tab => {
            tab.addEventListener('click', function () {
                // 移除所有标签的active类
                updatedTabs.forEach(t => t.classList.remove('active'));

                // 给当前点击的标签添加active类
                this.classList.add('active');

                // 获取侧边栏类型
                const sidebarType = this.getAttribute('data-sidebar');

                // 如果是anti-aim，添加对应的类到body
                if (sidebarType === 'anti-aim') {
                    document.body.classList.add('show-anti-aim');

                    // 显示anti-aim页面
                    document.querySelectorAll('.page').forEach(page => {
                        if (page.classList.contains('anti-aim-page')) {
                            page.classList.add('active');
                            page.style.display = 'flex';
                        } else {
                            page.classList.remove('active');
                            page.style.display = 'none';
                        }
                    });
                } else {
                    document.body.classList.remove('show-anti-aim');

                    // 显示general页面
                    document.querySelectorAll('.page').forEach(page => {
                        if (page.classList.contains('general-page')) {
                            page.classList.add('active');
                            page.style.display = 'flex';
                        } else {
                            page.classList.remove('active');
                            page.style.display = 'none';
                        }
                    });
                }

                // 隐藏所有二级菜单
                document.querySelectorAll('.sub-menu').forEach(menu => {
                    menu.classList.remove('active');
                });

                // 显示对应的二级菜单
                const targetMenu = document.querySelector(`.${sidebarType}-menu`);
                if (targetMenu) {
                    targetMenu.classList.add('active');
                }

                console.log('切换侧边栏标签: ' + sidebarType);
            });
        });
    }

    // 初始化侧边栏标签
    handleSidebarTabs();

    // 初始化颜色选择器相关按钮
    const pasteColorBtn = document.getElementById('paste-color');
    const copyColorBtn = document.getElementById('copy-color');

    if (pasteColorBtn) {
        pasteColorBtn.addEventListener('click', function (e) {
            e.stopPropagation();

            // 关闭所有下拉菜单
            closeAllOpenDropdowns();

            // 从剪贴板读取
            navigator.clipboard.readText()
                .then(text => {
                    // 验证粘贴的文本是否是有效的颜色格式
                    if (/^#([0-9A-F]{6}|[0-9A-F]{8})$/i.test(text)) {
                        setColorFromHex(text);
                        // 视觉反馈
                        this.style.opacity = '1';
                        setTimeout(() => {
                            this.style.opacity = '0.7';
                        }, 300);
                    }
                })
                .catch(err => {
                    console.error('无法粘贴颜色: ', err);
                });
        });
    }

    // 全局点击处理 - 优先处理，放在代码开头
    // 关闭所有下拉菜单的函数
    function closeAllDropdowns(e) {
        // 如果点击事件发生在fixed定位的hitsound-dropdown菜单内，不关闭它
        const hitSoundDropdown = document.getElementById('hitsound-dropdown');
        if (hitSoundDropdown && hitSoundDropdown.classList.contains('active') && 
            e && e.target && (e.target.closest('#hitsound-dropdown') || e.target.closest('.dropdown-menu[style*="position: fixed"]'))) {
            // 不关闭hitsound-dropdown
            console.log('点击发生在hitsound-dropdown内部，保持菜单打开');
            return;
        }
        
        // 关闭所有下拉菜单
        closeAllOpenDropdowns();
    }

    // 添加全局事件监听器，用于关闭所有下拉菜单
    document.addEventListener('click', closeAllDropdowns);

    // 通用的关闭所有下拉菜单的函数
    function closeAllOpenDropdowns() {
        const openDropdowns = document.querySelectorAll('.dropdown.active:not(.special-dropdown)');
        openDropdowns.forEach(dropdown => {
            dropdown.classList.remove('active');
            const arrow = dropdown.querySelector('.arrow');
            if (arrow) arrow.textContent = '▼';
            
            // 重置fixed定位的下拉菜单位置
            if (dropdown.id === 'hitsound-dropdown') {
                const dropdownMenu = dropdown.querySelector('.dropdown-menu');
                if (dropdownMenu) {
                    dropdownMenu.style.top = '';
                    dropdownMenu.style.left = '';
                }
            }
        });
        console.log('已关闭所有普通下拉菜单');
    }

    // 关闭颜色选择器的函数
    function closeColorPicker() {
        const colorPicker = document.getElementById('color-picker');
        const overlay = document.getElementById('settings-overlay');
        if (colorPicker) {
            colorPicker.style.display = 'none';
        }
        if (overlay) {
            overlay.classList.remove('active');
        }
    }

    // 添加全局点击事件监听
    document.addEventListener('click', function (e) {
        // 如果点击的不是下拉菜单或其子元素，关闭所有下拉菜单
        if (!e.target.closest('.dropdown')) {
            // 使用统一的关闭函数
            closeAllOpenDropdowns();
        }
    });

    // 设置面板功能
    const settingsPanels = document.querySelectorAll('.settings-panel');
    const overlay = document.getElementById('settings-overlay');

    // 关闭所有设置面板
    function closeAllPanels() {
        settingsPanels.forEach(panel => {
            panel.classList.remove('active');
        });
        overlay.classList.remove('active');

        // 同时关闭颜色选择器面板
        closeColorPicker();
    }

    // 点击遮罩层关闭所有面板
    overlay.addEventListener('click', closeAllPanels);

    // 全局点击处理，关闭打开的面板和颜色选择器
    document.addEventListener('click', function (e) {
        // 如果点击的不是设置面板内的元素，也不是设置图标，也不是颜色选择器相关元素
        const isColorPickerClick = e.target.closest('#color-picker') ||
            e.target.closest('.color-gradient') ||
            e.target.closest('.color-slider') ||
            e.target.closest('.hue-slider') ||
            e.target.closest('#hue-slider') ||
            e.target.closest('#opacity-slider') ||
            e.target.closest('.opacity-slider') ||
            e.target.closest('.opacity-slider-container') ||
            e.target.closest('.color-picker-actions') ||
            e.target.closest('#color-cursor') ||
            e.target.closest('#hue-cursor') ||
            e.target.closest('#opacity-thumb') ||
            e.target.closest('#color-value') ||
            e.target.closest('#copy-color') ||
            e.target.closest('#paste-color') ||
            e.target.closest('.color-option');

        if (!e.target.closest('.settings-panel') &&
            !e.target.closest('.settings-icon') &&
            !isColorPickerClick) {
            closeAllPanels();
        }

        // 移除这里的颜色选择器关闭代码，因为已经在另一个全局点击事件中处理了
    });

    // 拖动功能实现
    const container = document.getElementById('draggable-container');
    const dragHandle = document.getElementById('drag-handle');

    let isDragging = false;
    let offsetX, offsetY;

    // 拖动开始
    dragHandle.addEventListener('mousedown', function (e) {
        isDragging = true;
        offsetX = e.clientX - container.getBoundingClientRect().left;
        offsetY = e.clientY - container.getBoundingClientRect().top;
        container.style.cursor = 'move';
    });

    // 拖动过程
    document.addEventListener('mousemove', function (e) {
        if (!isDragging) return;

        const x = e.clientX - offsetX;
        const y = e.clientY - offsetY;

        // 确保不会拖出视口
        const maxX = window.innerWidth - container.offsetWidth;
        const maxY = window.innerHeight - container.offsetHeight;

        container.style.left = Math.max(0, Math.min(x, maxX)) + 'px';
        container.style.top = Math.max(0, Math.min(y, maxY)) + 'px';
    });

    // 拖动结束
    document.addEventListener('mouseup', function () {
        isDragging = false;
        container.style.cursor = 'default';
    });

    // 一级菜单切换
    const mainNavItems = document.querySelectorAll('.main-nav li a');
    mainNavItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            mainNavItems.forEach(nav => nav.parentElement.classList.remove('active'));
            this.parentElement.classList.add('active');
        });
    });

    // 二级菜单切换
    const subMenuItems = document.querySelectorAll('.sub-menu-item');

    // 全局变量，记住RAGE菜单的状态
    let lastRageSubmenu = localStorage.getItem('lastRageSubmenu') || 'aimbot';

    // 侧边栏标签切换 (Aimbot/Anti-aim)
    const sidebarTabs = document.querySelectorAll('.sidebar-tab');
    const subMenus = document.querySelectorAll('.sub-menu');
    const pages = document.querySelectorAll('.page');

    sidebarTabs.forEach(tab => {
        tab.addEventListener('click', function () {
            // 关闭所有下拉菜单
            closeAllOpenDropdowns();

            // 切换标签激活状态
            sidebarTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            // 获取标签类型
            const sidebarType = this.getAttribute('data-sidebar');

            // 保存RAGE菜单状态到全局变量和localStorage
            lastRageSubmenu = sidebarType;
            localStorage.setItem('lastRageSubmenu', sidebarType);
            console.log('保存RAGE菜单状态:', lastRageSubmenu);

            // 切换子菜单显示
            subMenus.forEach(menu => {
                menu.classList.remove('active');
                if (menu.classList.contains(sidebarType + '-menu')) {
                    menu.classList.add('active');
                }
            });

            // 显示对应内容页面
            if (sidebarType === 'aimbot') {
                pages.forEach(page => page.classList.remove('active'));
                document.querySelector('.general-page').classList.add('active');
                // 移除anti-aim类
                document.body.classList.remove('show-anti-aim');
            } else if (sidebarType === 'anti-aim') {
                pages.forEach(page => page.classList.remove('active'));
                document.querySelector('.anti-aim-page').classList.add('active');
                // 添加anti-aim类
                document.body.classList.add('show-anti-aim');
            }
        });
    });

    // 二级菜单切换
    subMenuItems.forEach(item => {
        item.addEventListener('click', function () {
            // 只在Aimbot菜单中切换
            if (!document.querySelector('.sidebar-tab[data-sidebar="aimbot"]').classList.contains('active')) {
                return;
            }

            // 切换激活项
            subMenuItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // 页面加载完成后初始化所有交互元素
    window.addEventListener('load', function () {
        // 先初始化复选框，避免事件冲突
        initializeAllCheckboxes();

        // 然后初始化下拉菜单
        initializeAllDropdowns();

        // 初始化滑块
        initializeAllSliders();

        // 初始化齿轮图标
        initializeSettingsIcons();

        // 初始化Anti-aim控制逻辑
        initializeAntiAimControls();

        // 最后居中显示容器
        centerContainer();

        // 颜色选择器功能
        initializeColorPicker();

        // 顶部导航功能
        initTopNavigation();

        // 初始化应用保存的RAGE菜单状态
        const savedRageSubmenu = localStorage.getItem('lastRageSubmenu') || 'aimbot';
        if (document.querySelector('.main-nav li.active a').getAttribute('data-tab') === 'rage') {
            // 如果当前在RAGE页面，应用保存的状态
            document.querySelectorAll('.sidebar-tab').forEach(tab => {
                tab.classList.remove('active');
            });
            const targetTab = document.querySelector(`.sidebar-tab[data-sidebar="${savedRageSubmenu}"]`);
            if (targetTab) {
                targetTab.click(); // 触发点击事件应用所有相关状态
            }
        }

        // 初始化Remove scope和Spread组件的显示逻辑
        const removeScopeDropdown = document.getElementById('remove-scope-dropdown');
        const removeScopeGear = removeScopeDropdown.parentElement.querySelector('.settings-icon');
        const spreadDropdown = document.getElementById('spread-dropdown');
        const spreadColors = spreadDropdown.parentElement.querySelector('.spread-colors');

        // 设置初始状态
        const initialRemoveScopeValue = removeScopeDropdown.querySelector('.dropdown-display').textContent;
        removeScopeGear.style.display =
            (initialRemoveScopeValue === 'Gradient static' || initialRemoveScopeValue === 'Gradient dynamic')
                ? 'block'
                : 'none';

        const initialSpreadValue = spreadDropdown.querySelector('.dropdown-display').textContent;
        spreadColors.style.display =
            (initialSpreadValue === 'Gradient')
                ? 'flex'
                : 'none';

        // 添加事件监听器
        removeScopeDropdown.addEventListener('click', function (e) {
            if (e.target.classList.contains('dropdown-item')) {
                const selectedValue = e.target.getAttribute('data-value');
                removeScopeGear.style.display =
                    (selectedValue === 'Gradient static' || selectedValue === 'Gradient dynamic')
                        ? 'block'
                        : 'none';
            }
        });

        spreadDropdown.addEventListener('click', function (e) {
            if (e.target.classList.contains('dropdown-item')) {
                const selectedValue = e.target.getAttribute('data-value');
                spreadColors.style.display =
                    (selectedValue === 'Gradient')
                        ? 'flex'
                        : 'none';
            }
        });

        // 初始化MODEL面板组件的显示逻辑
        initializeVisualComponents();

        // 初始化Enemy页面组件显示逻辑
        initializeEnemyComponents();
    });

    // 初始化所有复选框的函数
    function initializeAllCheckboxes() {
        // 移除所有复选框上的现有事件监听器
        const allCheckboxes = document.querySelectorAll('.checkbox');
        allCheckboxes.forEach(checkbox => {
            // 克隆并替换元素，以移除所有事件监听器
            const newCheckbox = checkbox.cloneNode(true);
            checkbox.parentNode.replaceChild(newCheckbox, checkbox);

            // 添加新的点击事件监听器
            newCheckbox.addEventListener('click', function (e) {
                e.stopPropagation();
                this.classList.toggle('checked');

                // 点击复选框时关闭所有下拉菜单
                closeAllOpenDropdowns();
            });
        });

        console.log('所有复选框已重新初始化，共 ' + allCheckboxes.length + ' 个');
    }

    // 初始化所有下拉菜单的函数
    function initializeAllDropdowns() {
        const allDropdowns = document.querySelectorAll('.dropdown');
        console.log('初始化下拉菜单...');

        // 添加特殊处理，确保点击document的其他区域时可以关闭特殊下拉菜单
        document.addEventListener('click', function(e) {
            const specialDropdowns = document.querySelectorAll('.special-dropdown.active');
            if (specialDropdowns.length > 0) {
                // 检查点击是否发生在特殊下拉菜单或其菜单项内
                let isInsideSpecialDropdown = false;
                specialDropdowns.forEach(dropdown => {
                    if (dropdown.contains(e.target) || 
                        e.target.closest('.dropdown-menu[style*="position: fixed"]')) {
                        isInsideSpecialDropdown = true;
                    }
                });
                
                // 如果点击不在特殊下拉菜单内，关闭它们
                if (!isInsideSpecialDropdown) {
                    specialDropdowns.forEach(dropdown => {
                        dropdown.classList.remove('active');
                        const arrow = dropdown.querySelector('.arrow');
                        if (arrow) arrow.textContent = '▼';
                        const menu = dropdown.querySelector('.dropdown-menu');
                        if (menu && menu.style.position === 'fixed') {
                            menu.style.top = '';
                            menu.style.left = '';
                        }
                    });
                    console.log('通过点击外部关闭特殊下拉菜单');
                }
            }
        });

        // 清除所有现有的事件监听器
        allDropdowns.forEach(dropdown => {
            const newDropdown = dropdown.cloneNode(true);
            dropdown.parentNode.replaceChild(newDropdown, dropdown);
        });

        // 重新获取替换后的元素
        const updatedDropdowns = document.querySelectorAll('.dropdown');

        // 为每个下拉菜单添加点击事件
        updatedDropdowns.forEach(dropdown => {
            dropdown.addEventListener('click', function (event) {
                // 阻止事件冒泡
                event.stopPropagation();

                // 检查是否是从项目点击冒泡上来的事件
                if (event.target.closest('.dropdown-item')) {
                    return; // 如果是从下拉项目冒泡上来的事件，不处理
                }

                console.log('点击下拉菜单:', this.id || '无ID');

                // 获取当前状态
                const isCurrentlyActive = this.classList.contains('active');

                // 关闭所有普通下拉菜单，对特殊下拉菜单进行特殊处理
                updatedDropdowns.forEach(d => {
                    // 特殊下拉菜单只有在当前点击的是自身时才关闭
                    if (!d.classList.contains('special-dropdown') || d === this) {
                        d.classList.remove('active');
                        const arrow = d.querySelector('.arrow');
                        if (arrow) arrow.textContent = '▼';
                    }
                });

                // 如果当前菜单之前不是活动状态，则激活它
                if (!isCurrentlyActive) {
                    this.classList.add('active');
                    const arrow = this.querySelector('.arrow');
                    if (arrow) arrow.textContent = '▲';
                    console.log('下拉菜单已激活:', this.id || '无ID');
                    
                    // 特殊处理hitsound-dropdown的位置
                    if (this.id === 'hitsound-dropdown' || this.classList.contains('special-dropdown')) {
                        const dropdownMenu = this.querySelector('.dropdown-menu');
                        if (dropdownMenu) {
                            const rect = this.getBoundingClientRect();
                            dropdownMenu.style.top = (rect.bottom + 2) + 'px';
                            dropdownMenu.style.left = rect.left + 'px';
                            dropdownMenu.style.width = rect.width + 'px';
                        }
                    }
                } else {
                    console.log('下拉菜单已关闭:', this.id || '无ID');
                }
            });

            // 单独处理下拉菜单中的选项点击事件
            const menuItems = dropdown.querySelectorAll('.dropdown-item');
            const type = dropdown.getAttribute('data-type');
            const displaySpan = dropdown.querySelector('.dropdown-display');

            menuItems.forEach(item => {
                item.addEventListener('click', function (event) {
                    // 阻止冒泡，这样不会触发父级下拉菜单的点击事件
                    event.stopPropagation();

                    if (type === 'single') {
                        // 单选模式逻辑
                        menuItems.forEach(i => i.classList.remove('active'));
                        this.classList.add('active');
                        const selectedValue = this.getAttribute('data-value');
                        displaySpan.textContent = selectedValue;

                        // Remove scope齿轮图标显示逻辑
                        if (dropdown.id === 'remove-scope-dropdown') {
                            const removeScopeGear = dropdown.parentElement.querySelector('.settings-icon');
                            if (removeScopeGear) {
                                removeScopeGear.style.display =
                                    (selectedValue === 'Gradient static' || selectedValue === 'Gradient dynamic')
                                        ? 'inline-block'
                                        : 'none';
                                console.log('Remove scope选项变更:', selectedValue, '齿轮显示:', removeScopeGear.style.display);
                            }
                        }

                        // Spread颜色选择器显示逻辑
                        if (dropdown.id === 'spread-dropdown') {
                            const spreadColors = dropdown.parentElement.querySelector('.spread-colors');
                            if (spreadColors) {
                                spreadColors.style.display =
                                    (selectedValue === 'Gradient')
                                        ? 'flex'
                                        : 'none';
                                console.log('Spread选项变更:', selectedValue, '颜色选择器显示:', spreadColors.style.display);
                            }
                        }

                        // 关闭下拉菜单
                        dropdown.classList.remove('active');
                        const arrow = dropdown.querySelector('.arrow');
                        if (arrow) arrow.textContent = '▼';
                        console.log('单选项已选择，下拉菜单已关闭');
                    } else if (type === 'multi') {
                        // 多选模式逻辑
                        this.classList.toggle('selected');

                        // 更新显示文本
                        const selectedItems = Array.from(dropdown.querySelectorAll('.dropdown-item.selected'))
                            .map(i => i.getAttribute('data-value'));

                        if (selectedItems.length > 0) {
                            if (selectedItems.length <= 2) {
                                displaySpan.textContent = selectedItems.join(', ');
                            } else {
                                displaySpan.textContent = selectedItems.slice(0, 2).join(', ') + '...';
                            }
                        } else {
                            displaySpan.textContent = 'None';
                        }
                        console.log('多选项已更新:', selectedItems);
                    }
                });
            });
        });

        console.log('所有下拉菜单已初始化，共', updatedDropdowns.length, '个');
    }

    // 初始化所有滑块的函数
    function initializeAllSliders() {
        const allSliders = document.querySelectorAll('.slider-container');

        allSliders.forEach(slider => {
            const track = slider.querySelector('.slider-track');
            const fill = slider.querySelector('.slider-fill');
            const valueDisplay = slider.querySelector('.slider-value');
            const sliderId = slider.id;

            // 获取滑块属性，对于小数值使用 parseFloat
            const min = parseFloat(slider.getAttribute('data-min'));
            const max = parseFloat(slider.getAttribute('data-max'));
            const suffix = slider.getAttribute('data-suffix') || '';
            const specialValue = slider.getAttribute('data-special-value');
            let value = parseFloat(slider.getAttribute('data-value'));

            // 解析特殊值（例如 "-1:Auto"）
            let specialValueMap = {};
            if (specialValue) {
                const specialValues = specialValue.split(',');
                specialValues.forEach(pair => {
                    const [val, text] = pair.split(':');
                    specialValueMap[val] = text;
                });
            }

            // 更新滑块显示
            function updateSlider(newValue, fromEvent = false) {
                // 确保值在范围内
                newValue = Math.max(min, Math.min(max, newValue));

                // 更新滑块内部值
                value = newValue;
                slider.setAttribute('data-value', value);

                // 计算填充宽度百分比
                const range = max - min;
                const percentage = ((value - min) / range) * 100;
                fill.style.width = percentage + '%';

                // 更新显示的值文本
                if (sliderId === 'turn-angle-slider') {
                    if (value === -1) {
                        valueDisplay.textContent = 'Max speed gain';
                        valueDisplay.style.color = "#a0a0a0";
                    } else if (value === 100) {
                        valueDisplay.textContent = 'Max angle';
                        valueDisplay.style.color = "white";
                    } else {
                        valueDisplay.textContent = value + '%';
                        valueDisplay.style.color = "white";
                    }
                } else if (sliderId === 'autoaccept-slider') {
                    if (value === 0.4) {
                        valueDisplay.textContent = 'Disabled';
                        valueDisplay.style.color = "#a0a0a0";
                    } else {
                        valueDisplay.textContent = value.toFixed(1) + 's';
                        valueDisplay.style.color = "white";
                    }
                } else if (sliderId === 'aspect-ratio-slider') {
                    if (value === 0.00) {
                        valueDisplay.textContent = 'Default';
                        valueDisplay.style.color = "#a0a0a0";
                    } else {
                        valueDisplay.textContent = value.toFixed(2);
                        valueDisplay.style.color = "white";
                    }
                } else if (sliderId === 'impacts-lifetime-slider') {
                    valueDisplay.textContent = value.toFixed(1);
                    valueDisplay.style.color = "white";
                } else if (specialValueMap[value] !== undefined) {
                    valueDisplay.textContent = specialValueMap[value];
                    valueDisplay.style.color = "#a0a0a0";
                } else if (sliderId === 'min-damage-slider' && value > 100) {
                    valueDisplay.textContent = 'HP+' + (value - 100);
                    valueDisplay.style.color = "white";
                } else {
                    // 对于小数值，保留一位小数
                    const displayValue = Number.isInteger(value) ? value : value.toFixed(1);
                    valueDisplay.textContent = displayValue + suffix;
                    valueDisplay.style.color = "white";
                }
            }

            // 鼠标点击和拖动事件
            function handleSliderInteraction(e) {
                e.preventDefault();

                // 点击滑块时关闭所有下拉菜单
                closeAllOpenDropdowns();

                // 计算点击位置的值
                const rect = track.getBoundingClientRect();
                let percentage = (e.clientX - rect.left) / rect.width;
                percentage = Math.max(0, Math.min(1, percentage));

                const range = max - min;
                let newValue = min + (range * percentage);

                // 对于小数值，保留一位小数
                if (!Number.isInteger(min) || !Number.isInteger(max)) {
                    newValue = parseFloat(newValue.toFixed(1));
                } else {
                    newValue = Math.round(newValue);
                }

                // 更新滑块
                updateSlider(newValue, true);

                // 添加鼠标移动和鼠标松开事件
                function handleMouseMove(moveEvent) {
                    moveEvent.preventDefault();
                    let movePercentage = (moveEvent.clientX - rect.left) / rect.width;
                    movePercentage = Math.max(0, Math.min(1, movePercentage));

                    let moveValue = min + (range * movePercentage);

                    // 对于小数值，保留相应的小数位数
                    if (sliderId === 'aspect-ratio-slider') {
                        moveValue = parseFloat(moveValue.toFixed(2));
                    } else if (!Number.isInteger(min) || !Number.isInteger(max)) {
                        moveValue = parseFloat(moveValue.toFixed(1));
                    } else {
                        moveValue = Math.round(moveValue);
                    }

                    updateSlider(moveValue, true);
                }

                function handleMouseUp() {
                    document.removeEventListener('mousemove', handleMouseMove);
                    document.removeEventListener('mouseup', handleMouseUp);
                }

                document.addEventListener('mousemove', handleMouseMove);
                document.addEventListener('mouseup', handleMouseUp);
            }

            // 添加事件监听器
            track.addEventListener('mousedown', handleSliderInteraction);

            // 初始设置滑块值
            updateSlider(value);
        });

        console.log('所有滑块已初始化，共 ' + allSliders.length + ' 个');
    }

    // 初始化齿轮图标的函数
    function initializeSettingsIcons() {
        const allSettingsIcons = document.querySelectorAll('.settings-icon');

        // 移除所有齿轮图标上的现有事件监听器
        allSettingsIcons.forEach(icon => {
            // 克隆并替换元素，以移除所有事件监听器
            const newIcon = icon.cloneNode(true);
            icon.parentNode.replaceChild(newIcon, icon);

            // 添加新的点击事件监听器
            newIcon.addEventListener('click', function (e) {
                e.stopPropagation();

                // 关闭所有下拉菜单
                closeAllOpenDropdowns();

                // 关闭所有其他设置面板
                document.querySelectorAll('.settings-panel').forEach(panel => {
                    panel.style.display = 'none';
                });

                // 获取选项名称
                let optionName = '';
                let panelId = '';
                const optionNameElement = this.parentElement.querySelector('.option-name');

                try {
                    // 处理带有工具提示的选项名称
                    if (optionNameElement.classList.contains('tooltip')) {
                        // 获取文本内容，不包括子元素
                        const textNodes = Array.from(optionNameElement.childNodes)
                            .filter(node => node.nodeType === Node.TEXT_NODE)
                            .map(node => node.textContent.trim())
                            .join('');
                        optionName = textNodes.toLowerCase();
                    } else {
                        optionName = optionNameElement.textContent.toLowerCase();
                    }

                    console.log('找到选项名称:', optionName);

                    // 特殊处理一些选项
                    if (optionName === 'autostrafer') {
                        panelId = 'autostrafer-settings-panel';
                    }
                    else if (optionName === 'peek assist') {
                        panelId = 'peek-assist-settings-panel';
                    }
                    else if (optionName === 'offscreen arrow') {
                        panelId = 'enemy-offscreen-arrow-panel';
                    }
                    else if (optionName === 'visualize aimbot') {
                        panelId = 'enemy-visualize-aimbot-panel';
                    }
                    else if (optionName === 'bullet tracer') {
                        panelId = 'enemy-bullet-tracer-panel';
                    }
                    else if (optionName === 'ragdolls') {
                        panelId = 'ragdolls-panel';
                    }
                    else if (optionName === 'glow') {
                        panelId = 'glow-panel';
                    }
                    else {
                        panelId = optionName.replace(/\s+/g, '-') + '-panel';
                    }

                    console.log('对应的面板ID:', panelId);
                } catch (error) {
                    console.error('处理选项名称时出错:', error);
                    return;
                }

                const panel = document.getElementById(panelId);
                if (panel) {
                    // 获取图标的位置
                    const iconRect = this.getBoundingClientRect();
                    
                    // 设置面板的位置
                    panel.style.position = 'fixed';
                    panel.style.top = (iconRect.bottom + 5) + 'px';
                    panel.style.left = iconRect.left + 'px';
                    panel.style.display = 'block';
                    panel.style.zIndex = '1000';

                    // 确保面板不会超出视口
                    const panelRect = panel.getBoundingClientRect();
                    if (panelRect.right > window.innerWidth) {
                        panel.style.left = (window.innerWidth - panelRect.width - 5) + 'px';
                    }
                    if (panelRect.bottom > window.innerHeight) {
                        panel.style.top = (iconRect.top - panelRect.height - 5) + 'px';
                    }

                    // 添加点击事件监听器到document，用于关闭面板
                    const closePanel = function (e) {
                        if (!panel.contains(e.target) && !newIcon.contains(e.target)) {
                            panel.style.display = 'none';
                            document.removeEventListener('click', closePanel);
                        }
                    };
                    document.addEventListener('click', closePanel);
                } else {
                    console.error('未找到对应的设置面板:', panelId);
                }
            });
        });

        console.log('所有齿轮图标已初始化');
    }

    // Anti-aim面板控制逻辑
    function initializeAntiAimControls() {
        // 获取所有相关元素
        const pitchDropdown = document.getElementById('pitch-dropdown');
        const pitchGearIcon = pitchDropdown.parentElement.querySelector('.settings-icon');
        const pitchCustomPanel = document.getElementById('pitch-custom-panel');

        const pitchJitterDropdown = document.getElementById('pitch-jitter-dropdown');
        const pitchJitterGearIcon = pitchJitterDropdown.parentElement.querySelector('.settings-icon');
        const pitchJitterPanel = document.getElementById('pitch-jitter-panel');

        const yawDropdown = document.getElementById('yaw-dropdown');
        const yawGearIcon = yawDropdown.parentElement.querySelector('.settings-icon');
        const yawCustomPanel = document.getElementById('yaw-custom-panel');

        const yawJitterDropdown = document.getElementById('yaw-jitter-dropdown');
        const yawJitterGearIcon = yawJitterDropdown.parentElement.querySelector('.settings-icon');
        const yawJitterPanel = document.getElementById('yaw-jitter-panel');

        const overlay = document.getElementById('settings-overlay');

        // 立即根据当前选择设置齿轮图标的可见性
        const pitchSelectedValue = pitchDropdown.querySelector('.dropdown-display').textContent;
        pitchGearIcon.style.display = (pitchSelectedValue === 'Custom') ? 'block' : 'none';

        const pitchJitterSelectedValue = pitchJitterDropdown.querySelector('.dropdown-display').textContent;
        pitchJitterGearIcon.style.display = (pitchJitterSelectedValue === 'Center' || pitchJitterSelectedValue === 'Offset') ? 'block' : 'none';

        const yawSelectedValue = yawDropdown.querySelector('.dropdown-display').textContent;
        yawGearIcon.style.display = (yawSelectedValue === 'Custom') ? 'block' : 'none';

        const yawJitterSelectedValue = yawJitterDropdown.querySelector('.dropdown-display').textContent;
        yawJitterGearIcon.style.display = (yawJitterSelectedValue === 'Center' || yawJitterSelectedValue === 'Offset') ? 'block' : 'none';

        // 为齿轮图标直接添加点击事件
        if (pitchGearIcon) {
            pitchGearIcon.addEventListener('click', function (e) {
                e.stopPropagation();

                // 关闭所有下拉菜单
                closeAllOpenDropdowns();

                // 获取当前选中的Pitch值
                const currentPitchValue = pitchDropdown.querySelector('.dropdown-display').textContent;

                // 关闭所有面板
                document.querySelectorAll('.settings-panel').forEach(panel => {
                    panel.classList.remove('active');
                });

                // 打开Pitch Custom面板
                if (pitchCustomPanel && currentPitchValue === 'Custom') {
                    pitchCustomPanel.classList.add('active');
                    pitchCustomPanel.style.left = (this.getBoundingClientRect().right + 10) + 'px';
                    pitchCustomPanel.style.top = this.getBoundingClientRect().top + 'px';
                    overlay.classList.add('active');
                }
            });
        }

        if (pitchJitterGearIcon) {
            pitchJitterGearIcon.addEventListener('click', function (e) {
                e.stopPropagation();

                // 关闭所有下拉菜单
                closeAllOpenDropdowns();

                // 获取当前选中的Pitch Jitter值
                const currentPitchJitterValue = pitchJitterDropdown.querySelector('.dropdown-display').textContent;

                // 关闭所有面板
                document.querySelectorAll('.settings-panel').forEach(panel => {
                    panel.classList.remove('active');
                });

                // 打开Pitch Jitter面板
                if (pitchJitterPanel && (currentPitchJitterValue === 'Center' || currentPitchJitterValue === 'Offset')) {
                    pitchJitterPanel.classList.add('active');
                    pitchJitterPanel.style.left = (this.getBoundingClientRect().right + 10) + 'px';
                    pitchJitterPanel.style.top = this.getBoundingClientRect().top + 'px';
                    overlay.classList.add('active');
                }
            });
        }

        if (yawGearIcon) {
            yawGearIcon.addEventListener('click', function (e) {
                e.stopPropagation();

                // 关闭所有下拉菜单
                closeAllOpenDropdowns();

                // 获取当前选中的Yaw值
                const currentYawValue = yawDropdown.querySelector('.dropdown-display').textContent;

                // 关闭所有面板
                document.querySelectorAll('.settings-panel').forEach(panel => {
                    panel.classList.remove('active');
                });

                // 打开Yaw Custom面板
                if (yawCustomPanel && currentYawValue === 'Custom') {
                    yawCustomPanel.classList.add('active');
                    yawCustomPanel.style.left = (this.getBoundingClientRect().right + 10) + 'px';
                    yawCustomPanel.style.top = this.getBoundingClientRect().top + 'px';
                    overlay.classList.add('active');
                }
            });
        }

        if (yawJitterGearIcon) {
            yawJitterGearIcon.addEventListener('click', function (e) {
                e.stopPropagation();

                // 关闭所有下拉菜单
                closeAllOpenDropdowns();

                // 获取当前选中的Yaw Jitter值
                const currentYawJitterValue = yawJitterDropdown.querySelector('.dropdown-display').textContent;

                // 关闭所有面板
                document.querySelectorAll('.settings-panel').forEach(panel => {
                    panel.classList.remove('active');
                });

                // 打开Yaw Jitter面板
                if (yawJitterPanel && (currentYawJitterValue === 'Center' || currentYawJitterValue === 'Offset')) {
                    yawJitterPanel.classList.add('active');
                    yawJitterPanel.style.left = (this.getBoundingClientRect().right + 10) + 'px';
                    yawJitterPanel.style.top = this.getBoundingClientRect().top + 'px';
                    overlay.classList.add('active');
                }
            });
        }

        // 为dropdown-item添加点击事件，直接处理Pitch下拉选项的变化
        pitchDropdown.querySelectorAll('.dropdown-item').forEach(item => {
            item.addEventListener('click', function () {
                // 更新显示文本
                pitchDropdown.querySelector('.dropdown-display').textContent = this.textContent;

                // 更新齿轮图标显示状态
                const isCustomSelected = this.textContent === 'Custom';
                pitchGearIcon.style.display = isCustomSelected ? 'block' : 'none';
            });
        });

        // Pitch Jitter下拉菜单与齿轮图标关联
        pitchJitterDropdown.querySelectorAll('.dropdown-item').forEach(item => {
            item.addEventListener('click', function () {
                // 更新显示文本
                pitchJitterDropdown.querySelector('.dropdown-display').textContent = this.textContent;

                // 更新齿轮图标显示状态
                const isSpecialOption = this.textContent === 'Center' || this.textContent === 'Offset';
                pitchJitterGearIcon.style.display = isSpecialOption ? 'block' : 'none';
            });
        });

        // Yaw下拉菜单与齿轮图标关联
        yawDropdown.querySelectorAll('.dropdown-item').forEach(item => {
            item.addEventListener('click', function () {
                // 更新显示文本
                yawDropdown.querySelector('.dropdown-display').textContent = this.textContent;


                // 更新齿轮图标显示状态
                const isCustomSelected = this.textContent === 'Custom';
                yawGearIcon.style.display = isCustomSelected ? 'block' : 'none';
            });
        });

        // Yaw Jitter下拉菜单与齿轮图标关联
        yawJitterDropdown.querySelectorAll('.dropdown-item').forEach(item => {
            item.addEventListener('click', function () {
                // 更新显示文本
                yawJitterDropdown.querySelector('.dropdown-display').textContent = this.textContent;

                // 更新齿轮图标显示状态
                const isSpecialOption = this.textContent === 'Center' || this.textContent === 'Offset';
                yawJitterGearIcon.style.display = isSpecialOption ? 'block' : 'none';
            });
        });

        // 齿轮图标点击事件
        document.querySelectorAll('.settings-icon').forEach(icon => {
            icon.addEventListener('click', function (e) {
                e.stopPropagation();

                // 检查是否是Anti-aim面板中已经单独处理过的图标
                const isAntiAimSpecialIcon =
                    this === pitchGearIcon ||
                    this === pitchJitterGearIcon ||
                    this === yawGearIcon ||
                    this === yawJitterGearIcon;

                // 如果是已经单独处理过的，直接返回
                if (isAntiAimSpecialIcon) {
                    return;
                }

                const parentOption = this.closest('.option');
                const optionName = parentOption.querySelector('.option-name').textContent.trim().toLowerCase();

                // 关联面板ID与选项
                let panelId = '';
                if (optionName === 'mouse override') {
                    panelId = 'mouse-override-panel';
                }
                else if (optionName === 'autostop') {
                    panelId = 'autostop-panel';
                }
                else if (optionName === 'nospread') {
                    panelId = 'nospread-panel';
                }
                else if (optionName === 'doubletap') {
                    panelId = 'doubletap-panel';
                }
                // Enemy页面的面板ID映射
                else if (optionName === 'box') {
                    panelId = 'box-panel';
                }
                else if (optionName === 'health') {
                    panelId = 'health-panel';
                }
                else if (optionName === 'item name') {
                    panelId = 'item-name-panel';
                }
                else if (optionName === 'item icon') {
                    panelId = 'item-icon-panel';
                }
                else if (optionName === 'ammo') {
                    panelId = 'ammo-panel';
                }
                else if (optionName === 'armor') {
                    panelId = 'armor-panel';
                }
                else if (optionName === 'offscreen arrow') {
                    panelId = 'enemy-offscreen-arrow-panel';
                }
                else if (optionName === 'visualize aimbot') {
                    panelId = 'enemy-visualize-aimbot-panel';
                }
                else if (optionName === 'bullet tracer') {
                    panelId = 'enemy-bullet-tracer-panel';
                }
                else if (optionName === 'ragdolls') {
                    panelId = 'ragdolls-panel';
                }
                else if (optionName === 'glow') {
                    panelId = 'glow-panel';
                }

                const panel = document.getElementById(panelId);
                if (!panel) {
                    console.log('未找到对应的设置面板:', panelId);
                    return;  // 如果没有找到对应的面板，直接返回
                }

                // 关闭所有面板
                document.querySelectorAll('.settings-panel').forEach(p => {
                    p.classList.remove('active');
                });

                // 打开指定面板
                panel.classList.add('active');

                // 初始化面板内的复选框
                const panelCheckboxes = panel.querySelectorAll('.checkbox');
                if (panelCheckboxes.length > 0) {
                    panelCheckboxes.forEach(checkbox => {
                        // 移除现有事件监听器
                        const newCheckbox = checkbox.cloneNode(true);
                        checkbox.parentNode.replaceChild(newCheckbox, checkbox);

                        // 添加点击事件
                        newCheckbox.addEventListener('click', function (e) {
                            e.stopPropagation();
                            this.classList.toggle('checked');

                            // 关闭所有下拉菜单
                            closeAllOpenDropdowns();
                        });
                    });
                    console.log('已初始化面板内的 ' + panelCheckboxes.length + ' 个复选框');
                }

                // 设置面板位置
                const rect = this.getBoundingClientRect();
                panel.style.left = (rect.right + 10) + 'px';
                panel.style.top = rect.top + 'px';

                // 显示遮罩层
                const overlay = document.getElementById('settings-overlay');
                if (overlay) {
                    overlay.classList.add('active');
                }
            });
        });
    }

    if (pasteColorBtn) {
        pasteColorBtn.addEventListener('click', function (e) {
            e.stopPropagation();

            // 关闭所有下拉菜单
            closeAllOpenDropdowns();

            // 从剪贴板读取
            navigator.clipboard.readText()
                .then(text => {
                    // 验证粘贴的文本是否是有效的颜色格式
                    if (/^#([0-9A-F]{6}|[0-9A-F]{8})$/i.test(text)) {
                        setColorFromHex(text);
                        // 视觉反馈
                        this.style.opacity = '1';
                        setTimeout(() => {
                            this.style.opacity = '0.7';
                        }, 300);
                    }
                })
                .catch(err => {
                    console.error('无法粘贴颜色: ', err);
                });
        });
    }

    // 初始化位置 - 居中显示
    function centerContainer() {
        const container = document.getElementById('draggable-container');
        const x = (window.innerWidth - container.offsetWidth) / 2;
        const y = (window.innerHeight - container.offsetHeight) / 2;
        container.style.left = x + 'px';
        container.style.top = y + 'px';
    }

    // 颜色选择器功能
    function initializeColorPicker() {
        // 获取DOM元素
        const colorPicker = document.getElementById('color-picker');
        const colorGradient = document.querySelector('.color-gradient');
        const hueSlider = document.getElementById('hue-slider');
        const opacitySlider = document.getElementById('opacity-slider');
        const colorCursor = document.getElementById('color-cursor');
        const hueCursor = document.getElementById('hue-cursor');
        const opacityThumb = document.getElementById('opacity-thumb');
        const colorValue = document.getElementById('color-value');
        const copyColorBtn = document.getElementById('copy-color');
        const pasteColorBtn = document.getElementById('paste-color');
        const redOption = document.getElementById('red-color');
        const greenOption = document.getElementById('green-color');

        // 当前状态
        let currentColor = { h: 0, s: 100, v: 100, a: 1 };
        let activeOption = null;

        // 保存每个颜色选项的颜色值
        const colorCache = {
            'red-color': redOption.getAttribute('data-color') || '#ff4a4aff',
            'green-color': greenOption.getAttribute('data-color') || '#4aff4aff'
        };

        console.log('初始颜色缓存:', colorCache);

        // HSV转RGB函数
        function hsvToRgb(h, s, v) {
            s = s / 100;
            v = v / 100;
            const i = Math.floor(h * 6);
            const f = h * 6 - i;
            const p = v * (1 - s);
            const q = v * (1 - f * s);
            const t = v * (1 - (1 - f) * s);

            let r, g, b;
            switch (i % 6) {
                case 0: r = v; g = t; b = p; break;
                case 1: r = q; g = v; b = p; break;
                case 2: r = p; g = v; b = t; break;
                case 3: r = p; g = q; b = v; break;
                case 4: r = t; g = p; b = v; break;
                case 5: r = v; g = p; b = q; break;
            }

            return {
                r: Math.round(r * 255),
                g: Math.round(g * 255),
                b: Math.round(b * 255)
            };
        }

        // 更新颜色选择器UI
        function updateColorPicker() {
            // 更新颜色值显示
            const rgb = hsvToRgb(currentColor.h, currentColor.s, currentColor.v);
            const hex = '#' +
                rgb.r.toString(16).padStart(2, '0') +
                rgb.g.toString(16).padStart(2, '0') +
                rgb.b.toString(16).padStart(2, '0') +
                Math.round(currentColor.a * 255).toString(16).padStart(2, '0');

            // 设置颜色值输入框
            if (colorValue) colorValue.value = hex;

            // 更新当前选项颜色和缓存
            if (activeOption) {
                activeOption.style.backgroundColor = hex;
                activeOption.setAttribute('data-color', hex);

                // 更新颜色缓存
                if (activeOption.id) {
                    colorCache[activeOption.id] = hex;
                    console.log('更新颜色缓存:', activeOption.id, hex);
                }
            }

            // 更新渐变背景
            if (colorGradient) {
                const hueRgb = hsvToRgb(currentColor.h, 100, 100);
                colorGradient.style.background = `linear-gradient(to right, white, rgb(${hueRgb.r}, ${hueRgb.g}, ${hueRgb.b}))`;
            }

            // 更新不透明度滑块背景
            if (opacitySlider) {
                const rgbOpacity = hsvToRgb(currentColor.h, currentColor.s, currentColor.v);
                const hexOpacity = '#' +
                    rgbOpacity.r.toString(16).padStart(2, '0') +
                    rgbOpacity.g.toString(16).padStart(2, '0') +
                    rgbOpacity.b.toString(16).padStart(2, '0');

                // 获取透明度滑块的填充元素
                const opacityFill = document.getElementById('opacity-fill');
                if (opacityFill) {
                    // 设置透明度渐变，从完全透明到完全不透明
                    opacityFill.style.background = `linear-gradient(to right, rgba(${rgbOpacity.r}, ${rgbOpacity.g}, ${rgbOpacity.b}, 0), rgba(${rgbOpacity.r}, ${rgbOpacity.g}, ${rgbOpacity.b}, 1))`;
                }
            }
        }

        // 定义全局可访问的setColorFromHex函数
        window.setColorFromHex = function (hex) {
            // 解析十六进制颜色
            const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(hex);
            if (result) {
                const r = parseInt(result[1], 16);
                const g = parseInt(result[2], 16);
                const b = parseInt(result[3], 16);
                const a = result[4] ? parseInt(result[4], 16) / 255 : 1;

                // RGB转HSV
                const max = Math.max(r, g, b);
                const min = Math.min(r, g, b);
                const d = max - min;
                const s = max === 0 ? 0 : d / max;
                const v = max / 255;

                let h;
                if (max === min) {
                    h = 0;
                } else {
                    switch (max) {
                        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                        case g: h = (b - r) / d + 2; break;
                        case b: h = (r - g) / d + 4; break;
                    }
                    h /= 6;
                }

                currentColor = {
                    h: h,
                    s: s * 100,
                    v: v * 100,
                    a: a
                };

                // 更新UI
                if (colorCursor) colorCursor.style.left = (currentColor.s) + '%';
                if (colorCursor) colorCursor.style.top = (100 - currentColor.v) + '%';
                if (hueCursor) hueCursor.style.top = (currentColor.h * 100) + '%';
                if (opacityThumb) opacityThumb.style.left = (currentColor.a * 100) + '%';

                updateColorPicker();
            }
        };

        // 为颜色选择器本身添加点击事件监听器，阻止事件传播
        if (colorPicker) {
            colorPicker.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            });
        }

        // 颜色选择器事件处理
        if (colorGradient) {
            colorGradient.addEventListener('mousedown', function (e) {
                e.preventDefault();
                e.stopPropagation();
                const rect = this.getBoundingClientRect();
                const handleColorSelection = function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
                    const y = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));
                    currentColor.s = x * 100;
                    currentColor.v = (1 - y) * 100;
                    colorCursor.style.left = x * 100 + '%';
                    colorCursor.style.top = y * 100 + '%';
                    updateColorPicker();
                };

                handleColorSelection(e);

                const mouseMove = function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    handleColorSelection(e);
                };

                const mouseUp = function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    document.removeEventListener('mousemove', mouseMove);
                    document.removeEventListener('mouseup', mouseUp);
                };

                document.addEventListener('mousemove', mouseMove);
                document.addEventListener('mouseup', mouseUp);
            });
        }

        // 色相滑块事件处理
        if (hueSlider) {
            hueSlider.addEventListener('mousedown', function (e) {
                e.preventDefault();
                e.stopPropagation();
                const rect = this.getBoundingClientRect();
                const handleHueSelection = function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    const y = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));
                    currentColor.h = y;
                    hueCursor.style.top = y * 100 + '%';
                    updateColorPicker();
                };

                handleHueSelection(e);

                const mouseMove = function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    handleHueSelection(e);
                };

                const mouseUp = function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    document.removeEventListener('mousemove', mouseMove);
                    document.removeEventListener('mouseup', mouseUp);
                };

                document.addEventListener('mousemove', mouseMove);
                document.addEventListener('mouseup', mouseUp);
            });
        }

        // 不透明度滑块事件处理
        if (opacitySlider) {
            opacitySlider.addEventListener('mousedown', function (e) {
                e.preventDefault();
                e.stopPropagation();
                const rect = this.getBoundingClientRect();
                const handleOpacitySelection = function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
                    currentColor.a = x;
                    opacityThumb.style.left = x * 100 + '%';
                    updateColorPicker();
                };

                handleOpacitySelection(e);

                const mouseMove = function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    handleOpacitySelection(e);
                };

                const mouseUp = function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    document.removeEventListener('mousemove', mouseMove);
                    document.removeEventListener('mouseup', mouseUp);
                };

                document.addEventListener('mousemove', mouseMove);
                document.addEventListener('mouseup', mouseUp);
            });
        }

        // 复制颜色按钮事件
        if (copyColorBtn) {
            copyColorBtn.addEventListener('click', function (e) {
                e.stopPropagation();
                navigator.clipboard.writeText(colorValue.value)
                    .then(() => {
                        this.style.opacity = '1';
                        setTimeout(() => this.style.opacity = '0.7', 300);
                    });
            });
        }

        // 粘贴颜色按钮事件
        if (pasteColorBtn) {
            pasteColorBtn.addEventListener('click', function (e) {
                e.stopPropagation();
                navigator.clipboard.readText()
                    .then(text => {
                        if (/^#([0-9A-F]{6}|[0-9A-F]{8})$/i.test(text)) {
                            window.setColorFromHex(text);
                            this.style.opacity = '1';
                            setTimeout(() => this.style.opacity = '0.7', 300);
                        }
                    });
            });
        }

        // 初始化颜色选项 - 应用缓存的颜色
        function initializeColorOptions() {
            document.querySelectorAll('.color-option').forEach(option => {
                if (option.id && colorCache[option.id]) {
                    option.style.backgroundColor = colorCache[option.id];
                    option.setAttribute('data-color', colorCache[option.id]);
                    console.log('应用缓存颜色:', option.id, colorCache[option.id]);
                }
            });
        }

        // 初始化透明度滑块
        const opacityFill = document.getElementById('opacity-fill');
        if (opacityFill) {
            const initialRgb = hsvToRgb(currentColor.h, currentColor.s, currentColor.v);
            opacityFill.style.background = `linear-gradient(to right, rgba(${initialRgb.r}, ${initialRgb.g}, ${initialRgb.b}, 0), rgba(${initialRgb.r}, ${initialRgb.g}, ${initialRgb.b}, 1))`;
        }

        // 初始化颜色选项点击事件
        document.querySelectorAll('.color-option').forEach(option => {
            option.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();

                // 关闭所有打开的下拉菜单
                if (typeof closeAllOpenDropdowns === 'function') {
                    closeAllOpenDropdowns();
                }

                // 确保之前的颜色选择器被关闭并保存
                if (activeOption && activeOption !== this) {
                    console.log('切换颜色选项，保存之前的颜色:', activeOption.id);
                }

                // 设置当前活动选项
                activeOption = this;

                // 显示颜色选择器
                if (colorPicker) {
                    const rect = this.getBoundingClientRect();
                    colorPicker.style.display = 'block';
                    colorPicker.style.left = rect.right + 10 + 'px';
                    colorPicker.style.top = rect.top + 'px';

                    // 从缓存或属性获取当前颜色
                    let currentOptionColor;
                    if (this.id && colorCache[this.id]) {
                        currentOptionColor = colorCache[this.id];
                    } else {
                        currentOptionColor = this.getAttribute('data-color');
                        if (this.id && currentOptionColor) {
                            colorCache[this.id] = currentOptionColor;
                        }
                    }

                    console.log('打开颜色选择器:', this.id, '颜色:', currentOptionColor);

                    if (currentOptionColor) {
                        window.setColorFromHex(currentOptionColor);
                    }

                    // 显示遮罩
                    const overlay = document.getElementById('settings-overlay');
                    if (overlay) {
                        overlay.classList.add('active');
                    }
                }
            });
        });

        // 全局点击事件监听
        document.addEventListener('click', function (e) {
            if (colorPicker && colorPicker.style.display === 'block') {
                const isColorPickerClick = e.target.closest('#color-picker') ||
                    e.target.closest('.color-option');

                if (!isColorPickerClick) {
                    // 在关闭前保存当前颜色到缓存
                    if (activeOption && activeOption.id) {
                        const currentHex = activeOption.getAttribute('data-color');
                        if (currentHex) {
                            colorCache[activeOption.id] = currentHex;
                            console.log('关闭颜色选择器，保存颜色:', activeOption.id, currentHex);
                        }
                    }

                    // 隐藏颜色选择器
                    colorPicker.style.display = 'none';

                    // 隐藏遮罩
                    const overlay = document.getElementById('settings-overlay');
                    if (overlay) {
                        overlay.classList.remove('active');
                    }

                    // 重置活动选项
                    activeOption = null;

                    // 应用所有缓存的颜色
                    initializeColorOptions();
                }
            }
        });
    }

    // 顶部菜单切换功能初始化
    function initTopNavigation() {
        const mainNavLinks = document.querySelectorAll('.main-nav li a');
        const contentPages = document.querySelectorAll('.page-content .page');

        mainNavLinks.forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();

                // 移除所有菜单项的激活状态
                mainNavLinks.forEach(item => {
                    item.parentElement.classList.remove('active');
                });

                // 激活当前点击的菜单项
                this.parentElement.classList.add('active');

                // 获取对应的标签页ID
                const tabId = this.getAttribute('data-tab');

                // 隐藏所有页面
                contentPages.forEach(page => {
                    page.classList.remove('active');
                    page.style.display = 'none';
                });

                // 显示对应页面
                if (tabId === 'rage') {
                    const ragePage = document.getElementById('rage-content');
                    if (ragePage) {
                        ragePage.classList.add('active');
                        ragePage.style.display = 'flex';
                        const sidebar = document.querySelector('.sidebar');
                        if (sidebar) sidebar.style.display = 'flex'; // 显示侧边栏

                        console.log('切换回RAGE菜单，当前保存的菜单状态:', lastRageSubmenu);
                        
                        // 重置RAGE页面子菜单状态
                        document.querySelectorAll('.aimbot-menu .sub-menu-item').forEach(item => {
                            item.classList.remove('active');
                        });
                        // 激活General选项
                        const generalItem = document.querySelector('.aimbot-menu .sub-menu-item[data-page="general"]');
                        if (generalItem) generalItem.classList.add('active');

                        // 使用保存的RAGE状态
                        document.querySelectorAll('.sidebar-tab').forEach(tab => {
                            tab.classList.remove('active');
                        });

                        const targetTab = document.querySelector(`.sidebar-tab[data-sidebar="${lastRageSubmenu}"]`);
                        if (targetTab) {
                            console.log('找到目标标签:', targetTab);
                            targetTab.classList.add('active');
                                } else {
                            console.error('未找到目标标签:', lastRageSubmenu);
                        }
                    }
                } else if (tabId === 'legit') {
                    const legitPage = document.getElementById('legit-content');
                    if (legitPage) {
                        legitPage.classList.add('active');
                        legitPage.style.display = 'flex';
                        const sidebar = document.querySelector('.sidebar');
                        if (sidebar) sidebar.style.display = 'none'; // 隐藏侧边栏
                        
                        // 重置LEGIT页面子菜单状态
                        document.querySelectorAll('.legit-sidebar .sub-menu-item').forEach(item => {
                            item.classList.remove('active');
                        });
                        // 激活General选项
                        const generalItem = document.querySelector('.legit-sidebar .sub-menu-item[data-page="legit-general"]');
                        if (generalItem) generalItem.classList.add('active');
                    }
                } else if (tabId === 'visuals') {
                    const visualsPage = document.getElementById('visuals-content');
                    if (visualsPage) {
                        visualsPage.classList.add('active');
                        visualsPage.style.display = 'flex';
                        const sidebar = document.querySelector('.sidebar');
                        if (sidebar) sidebar.style.display = 'none'; // 隐藏侧边栏
                    }
                } else if (tabId === 'misc') {
                    const miscPage = document.getElementById('misc-content');
                    if (miscPage) {
                        miscPage.classList.add('active');
                        miscPage.style.display = 'flex';
                        const sidebar = document.querySelector('.sidebar');
                        if (sidebar) sidebar.style.display = 'none'; // 隐藏侧边栏
                    }
                } else if (tabId === 'skins') {
                    const skinsPage = document.getElementById('skins-content');
                    if (skinsPage) {
                        skinsPage.classList.add('active');
                        skinsPage.style.display = 'flex';
                        const sidebar = document.querySelector('.sidebar');
                        if (sidebar) sidebar.style.display = 'none'; // 隐藏侧边栏
                    }
                } else if (tabId === 'lua') {
                    const luaPage = document.getElementById('lua-content');
                    if (luaPage) {
                        luaPage.classList.add('active');
                        luaPage.style.display = 'flex';
                        const sidebar = document.querySelector('.sidebar');
                        if (sidebar) sidebar.style.display = 'none'; // 隐藏侧边栏
                    }
                }

                // 输出调试信息
                console.log('切换到页面: ' + tabId);
            });
        });
    }

    // 初始化Remove scope和Spread组件的显示逻辑
    function initializeVisualComponents() {
        // Remove scope组件
        const removeScopeDropdown = document.getElementById('remove-scope-dropdown');
        const removeScopeItems = removeScopeDropdown.querySelectorAll('.dropdown-item');
        const removeScopeGear = removeScopeDropdown.parentElement.querySelector('.settings-icon');

        removeScopeItems.forEach(item => {
            item.addEventListener('click', function () {
                const value = this.getAttribute('data-value');
                removeScopeGear.style.display =
                    (value === 'Gradient static' || value === 'Gradient dynamic')
                        ? 'inline-block'
                        : 'none';
                console.log('Remove scope选项变更:', value);
            });
        });

        // Spread组件
        const spreadDropdown = document.getElementById('spread-dropdown');
        const spreadItems = spreadDropdown.querySelectorAll('.dropdown-item');
        const spreadColors = spreadDropdown.parentElement.querySelector('.spread-colors');

        spreadItems.forEach(item => {
            item.addEventListener('click', function () {
                const value = this.getAttribute('data-value');
                spreadColors.style.display =
                    (value === 'Gradient')
                        ? 'flex'
                        : 'none';
                console.log('Spread选项变更:', value);
            });
        });

        // MODEL面板组件
        // Visible组件
        const visibleDropdown = document.getElementById('visible-dropdown');
        const visibleItems = visibleDropdown.querySelectorAll('.dropdown-item');
        const visibleColorOption = visibleDropdown.parentElement.querySelector('.color-option');

        visibleItems.forEach(item => {
            item.addEventListener('click', function () {
                const value = this.getAttribute('data-value');
                visibleColorOption.style.display =
                    (value === 'Disabled')
                        ? 'none'
                        : 'block';
                console.log('Visible选项变更:', value, '颜色选择器显示:', visibleColorOption.style.display);
            });
        });

        // Invisible组件
        const invisibleDropdown = document.getElementById('invisible-dropdown');
        const invisibleItems = invisibleDropdown.querySelectorAll('.dropdown-item');
        const invisibleColorOption = invisibleDropdown.parentElement.querySelector('.color-option');

        invisibleItems.forEach(item => {
            item.addEventListener('click', function () {
                const value = this.getAttribute('data-value');
                invisibleColorOption.style.display =
                    (value === 'Disabled')
                        ? 'none'
                        : 'block';
                console.log('Invisible选项变更:', value, '颜色选择器显示:', invisibleColorOption.style.display);
            });
        });

        // Arms组件
        const armsDropdown = document.getElementById('arms-dropdown');
        const armsItems = armsDropdown.querySelectorAll('.dropdown-item');
        const armsColorOption = armsDropdown.parentElement.querySelector('.color-option');

        armsItems.forEach(item => {
            item.addEventListener('click', function () {
                const value = this.getAttribute('data-value');
                armsColorOption.style.display =
                    (value === 'Disabled')
                        ? 'none'
                        : 'block';
                console.log('Arms选项变更:', value, '颜色选择器显示:', armsColorOption.style.display);
            });
        });

        // Viewmodel组件
        const viewmodelDropdown = document.getElementById('viewmodel-dropdown');
        const viewmodelItems = viewmodelDropdown.querySelectorAll('.dropdown-item');
        const viewmodelColorOption = viewmodelDropdown.parentElement.querySelector('.color-option');

        viewmodelItems.forEach(item => {
            item.addEventListener('click', function () {
                const value = this.getAttribute('data-value');
                viewmodelColorOption.style.display =
                    (value === 'Disabled')
                        ? 'none'
                        : 'block';
                console.log('Viewmodel选项变更:', value, '颜色选择器显示:', viewmodelColorOption.style.display);
            });
        });

        // Attachments组件
        const attachmentsDropdown = document.getElementById('attachments-dropdown');
        const attachmentsItems = attachmentsDropdown.querySelectorAll('.dropdown-item');
        const attachmentsColorOption = attachmentsDropdown.parentElement.querySelector('.color-option');

        attachmentsItems.forEach(item => {
            item.addEventListener('click', function () {
                const value = this.getAttribute('data-value');
                attachmentsColorOption.style.display =
                    (value === 'Disabled')
                        ? 'none'
                        : 'block';
                console.log('Attachments选项变更:', value, '颜色选择器显示:', attachmentsColorOption.style.display);
            });
        });

        // 设置初始状态
        const initialRemoveScopeValue = removeScopeDropdown.querySelector('.dropdown-display').textContent;
        removeScopeGear.style.display =
            (initialRemoveScopeValue === 'Gradient static' || initialRemoveScopeValue === 'Gradient dynamic')
                ? 'inline-block'
                : 'none';

        const initialSpreadValue = spreadDropdown.querySelector('.dropdown-display').textContent;
        spreadColors.style.display =
            (initialSpreadValue === 'Gradient')
                ? 'flex'
                : 'none';

        // 设置MODEL组件的初始状态
        const initialVisibleValue = visibleDropdown.querySelector('.dropdown-display').textContent;
        visibleColorOption.style.display =
            (initialVisibleValue === 'Disabled')
                ? 'none'
                : 'block';

        const initialInvisibleValue = invisibleDropdown.querySelector('.dropdown-display').textContent;
        invisibleColorOption.style.display =
            (initialInvisibleValue === 'Disabled')
                ? 'none'
                : 'block';

        const initialArmsValue = armsDropdown.querySelector('.dropdown-display').textContent;
        armsColorOption.style.display =
            (initialArmsValue === 'Disabled')
                ? 'none'
                : 'block';

        const initialViewmodelValue = viewmodelDropdown.querySelector('.dropdown-display').textContent;
        viewmodelColorOption.style.display =
            (initialViewmodelValue === 'Disabled')
                ? 'none'
                : 'block';

        const initialAttachmentsValue = attachmentsDropdown.querySelector('.dropdown-display').textContent;
        attachmentsColorOption.style.display =
            (initialAttachmentsValue === 'Disabled')
                ? 'none'
                : 'block';
    }

    // 初始化所有组件
    initializeVisualComponents();
});

// 菜单切换功能
document.addEventListener('DOMContentLoaded', function () {
    // 初始化顶部菜单切换
    initTopMenu();

    // 初始化侧边栏标签
    initSidebarTabs();

    // 顶部菜单切换功能
    function initTopMenu() {
        const mainNavLinks = document.querySelectorAll('.main-nav li a');
        const pages = document.querySelectorAll('.page-content .page');

        // 默认激活第一个菜单项
        if (!document.querySelector('.main-nav li.active')) {
            const firstMenuItem = document.querySelector('.main-nav li');
            if (firstMenuItem) firstMenuItem.classList.add('active');
        }

        mainNavLinks.forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation(); // 阻止事件冒泡

                console.log('点击菜单项: ' + this.getAttribute('data-tab'));

                try {
                    // 移除所有菜单项的激活状态
                    mainNavLinks.forEach(item => {
                        item.parentElement.classList.remove('active');
                    });

                    // 激活当前点击的菜单项
                    this.parentElement.classList.add('active');

                    // 获取对应的标签页ID
                    const tabId = this.getAttribute('data-tab');

                    // 隐藏所有页面
                    pages.forEach(page => {
                        page.classList.remove('active');
                        page.style.display = 'none';
                    });

                    // 移除所有相关的body类
                    document.body.classList.remove('show-anti-aim');
                    document.body.classList.remove('show-legit');

                    // 显示对应页面
                    if (tabId === 'rage') {
                        const ragePage = document.getElementById('rage-content');
                        if (ragePage) {
                            ragePage.classList.add('active');
                            ragePage.style.display = 'flex';
                            const sidebar = document.querySelector('.sidebar');
                            if (sidebar) sidebar.style.display = 'flex'; // 显示侧边栏
                            
                            // 重置RAGE页面子菜单状态
                            document.querySelectorAll('.aimbot-menu .sub-menu-item').forEach(item => {
                                item.classList.remove('active');
                            });
                            // 激活General选项
                            const generalItem = document.querySelector('.aimbot-menu .sub-menu-item[data-page="general"]');
                            if (generalItem) generalItem.classList.add('active');
                        }
                    } else if (tabId === 'legit') {
                        const legitPage = document.getElementById('legit-content');
                        if (legitPage) {
                            legitPage.classList.add('active');
                            legitPage.style.display = 'flex';
                            const sidebar = document.querySelector('.sidebar');
                            if (sidebar) sidebar.style.display = 'none'; // 隐藏侧边栏
                            
                            // 重置LEGIT页面子菜单状态
                            document.querySelectorAll('.legit-sidebar .sub-menu-item').forEach(item => {
                                item.classList.remove('active');
                            });
                            // 激活General选项
                            const generalItem = document.querySelector('.legit-sidebar .sub-menu-item[data-page="legit-general"]');
                            if (generalItem) generalItem.classList.add('active');
                        }
                    } else if (tabId === 'visuals') {
                        const visualsPage = document.getElementById('visuals-content');
                        if (visualsPage) {
                            visualsPage.classList.add('active');
                            visualsPage.style.display = 'flex';
                            const sidebar = document.querySelector('.sidebar');
                            if (sidebar) sidebar.style.display = 'none'; // 隐藏侧边栏
                        }
                    } else if (tabId === 'misc') {
                        const miscPage = document.getElementById('misc-content');
                        if (miscPage) {
                            miscPage.classList.add('active');
                            miscPage.style.display = 'flex';
                            const sidebar = document.querySelector('.sidebar');
                            if (sidebar) sidebar.style.display = 'none'; // 隐藏侧边栏
                        }
                    } else if (tabId === 'skins') {
                        const skinsPage = document.getElementById('skins-content');
                        if (skinsPage) {
                            skinsPage.classList.add('active');
                            skinsPage.style.display = 'flex';
                            const sidebar = document.querySelector('.sidebar');
                            if (sidebar) sidebar.style.display = 'none'; // 隐藏侧边栏
                        }
                    } else if (tabId === 'lua') {
                        const luaPage = document.getElementById('lua-content');
                        if (luaPage) {
                            luaPage.classList.add('active');
                            luaPage.style.display = 'flex';
                            const sidebar = document.querySelector('.sidebar');
                            if (sidebar) sidebar.style.display = 'none'; // 隐藏侧边栏
                        }
                    }

                    // 输出调试信息
                    console.log('切换到页面: ' + tabId);
                } catch (error) {
                    console.error('菜单切换出错: ', error);
                }
            });
        });
    }

    // 侧边栏标签切换功能
    function initSidebarTabs() {
        // 检查是否已经有激活的标签，如果没有，默认激活第一个
        if (!document.querySelector('.sidebar-tab.active')) {
            const firstTab = document.querySelector('.sidebar-tab');
            if (firstTab) firstTab.classList.add('active');
        }

        // 检查激活的标签是哪个，应用相应的类
        if (document.querySelector('.sidebar-tab[data-sidebar="anti-aim"]').classList.contains('active')) {
            document.body.classList.add('show-anti-aim');
        }

        const sidebarTabs = document.querySelectorAll('.sidebar-tab');

        sidebarTabs.forEach(tab => {
            tab.addEventListener('click', function () {
                // 移除所有标签的active类
                sidebarTabs.forEach(t => t.classList.remove('active'));

                // 给当前点击的标签添加active类
                this.classList.add('active');

                // 获取侧边栏类型
                const sidebarType = this.getAttribute('data-sidebar');

                // 如果是anti-aim，添加对应的类到body
                if (sidebarType === 'anti-aim') {
                    document.body.classList.add('show-anti-aim');

                    // 显示anti-aim页面
                    document.querySelectorAll('.page').forEach(page => {
                        if (page.classList.contains('anti-aim-page')) {
                            page.classList.add('active');
                            page.style.display = 'flex';
                        } else {
                            page.classList.remove('active');
                            page.style.display = 'none';
                        }
                    });
                } else {
                    document.body.classList.remove('show-anti-aim');

                    // 显示general页面
                    document.querySelectorAll('.page').forEach(page => {
                        if (page.classList.contains('general-page')) {
                            page.classList.add('active');
                            page.style.display = 'flex';
                        } else {
                            page.classList.remove('active');
                            page.style.display = 'none';
                        }
                    });
                }

                // 隐藏所有二级菜单
                document.querySelectorAll('.sub-menu').forEach(menu => {
                    menu.classList.remove('active');
                });

                // 显示对应的二级菜单
                const targetMenu = document.querySelector(`.${sidebarType}-menu`);
                if (targetMenu) {
                    targetMenu.classList.add('active');
                }

                console.log('切换侧边栏标签: ' + sidebarType);
                lastRageSubmenu = sidebarType; // 保存当前状态
            });
        });

        // 处理VISUALS侧边栏菜单项点击事件
        document.querySelectorAll('.visuals-sidebar .sub-menu-item').forEach(item => {
            item.addEventListener('click', function () {
                // 移除所有子菜单项的激活状态
                document.querySelectorAll('.sub-menu-item').forEach(i => {
                    i.classList.remove('active');
                });
                this.classList.add('active');

                // 获取对应页面
                const targetPage = this.getAttribute('data-page');

                // 隐藏所有内容页面
                document.querySelectorAll('.visuals-page-content').forEach(page => {
                    page.classList.remove('active');
                    page.style.display = 'none';
                });

                // 显示目标页面
                const activePage = document.querySelector(`.${targetPage}-content`);
                if (activePage) {
                    activePage.classList.add('active');
                    activePage.style.display = 'flex';

                    // 如果是Enemy页面，初始化组件
                    if (targetPage === 'visuals-enemy') {
                        initializeEnemyPageComponents();
                    }
                    
                    // 如果是Team页面，初始化组件
                    if (targetPage === 'visuals-team') {
                        initializeTeamPageComponents();
                    }
                    
                    // 如果是World页面，初始化组件
                    if (targetPage === 'visuals-world') {
                        initializeWorldPageComponents();
                    }
                }
            });
        });
    }
});

// VISUALS页面的侧边栏菜单切换
document.querySelectorAll('.visuals-sidebar .sub-menu-item').forEach(item => {
    item.addEventListener('click', function () {
        // 切换菜单项的激活状态
        document.querySelectorAll('.visuals-sidebar .sub-menu-item').forEach(i => {
            i.classList.remove('active');
        });
        this.classList.add('active');

        // 获取对应页面
        const targetPage = this.getAttribute('data-page');

        // 隐藏所有内容页面
        document.querySelectorAll('.visuals-page-content').forEach(page => {
            page.classList.remove('active');
            page.style.display = 'none';
        });

        // 显示目标页面
        const activePage = document.querySelector(`.${targetPage}-content`);
        if (activePage) {
            activePage.classList.add('active');
            activePage.style.display = 'flex';

            // 如果是Enemy页面，初始化组件
            if (targetPage === 'visuals-enemy') {
                initializeEnemyPageComponents();
            }
            
            // 如果是Team页面，初始化组件
            if (targetPage === 'visuals-team') {
                initializeTeamPageComponents();
            }
            
            // 如果是World页面，初始化组件
            if (targetPage === 'visuals-world') {
                initializeWorldPageComponents();
            }
        }
    });
});

// 初始化Enemy页面组件显示逻辑的函数
function initializeEnemyComponents() {
    // 查找选项函数
    function findOptionByName(name) {
        const options = document.querySelectorAll('.enemy-esp-panel .option');
        for (let option of options) {
            const optionName = option.querySelector('.option-name');
            if (optionName && optionName.textContent.trim() === name) {
                return option;
            }
        }
        return null;
    }

    // 处理Box组件
    const boxStyleDropdown = document.getElementById('box-style-dropdown');
    const boxOption = findOptionByName('Box');
    const boxColorOptions = boxOption ? Array.from(boxOption.querySelectorAll('.color-option')) : [];

    if (boxStyleDropdown && boxOption && boxColorOptions.length >= 2) {
        boxStyleDropdown.querySelectorAll('.dropdown-item').forEach(item => {
            item.addEventListener('click', function () {
                const value = this.getAttribute('data-value');
                boxColorOptions[1].style.display =
                    (value === 'Gradient')
                        ? 'block'
                        : 'none';
                console.log('Box样式变更:', value);
            });
        });

        // 设置初始状态
        const initialBoxValue = boxStyleDropdown.querySelector('.dropdown-display').textContent;
        boxColorOptions[1].style.display =
            (initialBoxValue === 'Gradient')
                ? 'block'
                : 'none';
    }

    // 处理Health组件
    const healthStyleDropdown = document.getElementById('health-style-dropdown');
    const healthOption = findOptionByName('Health');
    const healthColorOptions = healthOption ? Array.from(healthOption.querySelectorAll('.color-option')) : [];

    if (healthStyleDropdown && healthOption && healthColorOptions.length >= 2) {
        healthStyleDropdown.querySelectorAll('.dropdown-item').forEach(item => {
            item.addEventListener('click', function () {
                const value = this.getAttribute('data-value');
                healthColorOptions[1].style.display =
                    (value === 'Gradient')
                        ? 'block'
                        : 'none';
                console.log('Health样式变更:', value);
            });
        });

        // 设置初始状态
        const initialHealthValue = healthStyleDropdown.querySelector('.dropdown-display').textContent;
        healthColorOptions[1].style.display =
            (initialHealthValue === 'Gradient')
                ? 'block'
                : 'none';
    }

    // 处理Ammo组件
    const ammoStyleDropdown = document.getElementById('ammo-style-dropdown');
    const ammoOption = findOptionByName('Ammo');
    const ammoColorOptions = ammoOption ? Array.from(ammoOption.querySelectorAll('.color-option')) : [];

    if (ammoStyleDropdown && ammoOption && ammoColorOptions.length >= 2) {
        ammoStyleDropdown.querySelectorAll('.dropdown-item').forEach(item => {
            item.addEventListener('click', function () {
                const value = this.getAttribute('data-value');
                ammoColorOptions[1].style.display =
                    (value === 'Gradient')
                        ? 'block'
                        : 'none';
                console.log('Ammo样式变更:', value);
            });
        });

        // 设置初始状态
        const initialAmmoValue = ammoStyleDropdown.querySelector('.dropdown-display').textContent;
        ammoColorOptions[1].style.display =
            (initialAmmoValue === 'Gradient')
                ? 'block'
                : 'none';
    }

    // 处理Armor组件
    const armorStyleDropdown = document.getElementById('armor-style-dropdown');
    const armorOption = findOptionByName('Armor');
    const armorColorOptions = armorOption ? Array.from(armorOption.querySelectorAll('.color-option')) : [];

    if (armorStyleDropdown && armorOption && armorColorOptions.length >= 2) {
        armorStyleDropdown.querySelectorAll('.dropdown-item').forEach(item => {
            item.addEventListener('click', function () {
                const value = this.getAttribute('data-value');
                armorColorOptions[1].style.display =
                    (value === 'Gradient')
                        ? 'block'
                        : 'none';
                console.log('Armor样式变更:', value);
            });
        });

        // 设置初始状态
        const initialArmorValue = armorStyleDropdown.querySelector('.dropdown-display').textContent;
        armorColorOptions[1].style.display =
            (initialArmorValue === 'Gradient')
                ? 'block'
                : 'none';
    }
}

// 在页面加载完成后初始化组件
document.addEventListener('DOMContentLoaded', function () {
    initializeEnemyComponents();
    initializeEnemyPageComponents();
    initializeTeamPageComponents();
});

// Enemy页面组件初始化
function initializeEnemyPageComponents() {
    // MODEL面板组件
    // Visible组件
    const enemyVisibleDropdown = document.getElementById('enemy-visible-dropdown');
    if (enemyVisibleDropdown) {
        const enemyVisibleItems = enemyVisibleDropdown.querySelectorAll('.dropdown-item');
        const enemyVisibleColorOption = enemyVisibleDropdown.parentElement.querySelector('.color-option');
        // 获取当前选中的值
        const activeItem = enemyVisibleDropdown.querySelector('.dropdown-item.active');
        if (activeItem) {
            const currentValue = activeItem.getAttribute('data-value');
            enemyVisibleColorOption.style.display = (currentValue === 'Disabled') ? 'none' : 'block';
        }

        enemyVisibleItems.forEach(item => {
            item.addEventListener('click', function () {
                const value = this.getAttribute('data-value');
                enemyVisibleColorOption.style.display =
                    (value === 'Disabled')
                        ? 'none'
                        : 'block';
                console.log('Enemy Visible选项变更:', value, '颜色选择器显示:', enemyVisibleColorOption.style.display);
            });
        });
    }

    // Hidden组件
    const enemyHiddenDropdown = document.getElementById('enemy-hidden-dropdown');
    if (enemyHiddenDropdown) {
        const enemyHiddenItems = enemyHiddenDropdown.querySelectorAll('.dropdown-item');
        const enemyHiddenColorOption = enemyHiddenDropdown.parentElement.querySelector('.color-option');
        // 获取当前选中的值
        const activeItem = enemyHiddenDropdown.querySelector('.dropdown-item.active');
        if (activeItem) {
            const currentValue = activeItem.getAttribute('data-value');
            enemyHiddenColorOption.style.display = (currentValue === 'Disabled') ? 'none' : 'block';
        }

        enemyHiddenItems.forEach(item => {
            item.addEventListener('click', function () {
                const value = this.getAttribute('data-value');
                enemyHiddenColorOption.style.display =
                    (value === 'Disabled')
                        ? 'none'
                        : 'block';
                console.log('Enemy Hidden选项变更:', value, '颜色选择器显示:', enemyHiddenColorOption.style.display);
            });
        });
    }

    // ATTACHMENTS面板组件
    // Visible组件
    const enemyAttachmentsVisibleDropdown = document.getElementById('enemy-attachments-visible-dropdown');
    if (enemyAttachmentsVisibleDropdown) {
        const enemyAttachmentsVisibleItems = enemyAttachmentsVisibleDropdown.querySelectorAll('.dropdown-item');
        const enemyAttachmentsVisibleColorOption = enemyAttachmentsVisibleDropdown.parentElement.querySelector('.color-option');
        // 获取当前选中的值
        const activeItem = enemyAttachmentsVisibleDropdown.querySelector('.dropdown-item.active');
        if (activeItem) {
            const currentValue = activeItem.getAttribute('data-value');
            enemyAttachmentsVisibleColorOption.style.display = (currentValue === 'Disabled') ? 'none' : 'block';
        }

        enemyAttachmentsVisibleItems.forEach(item => {
            item.addEventListener('click', function () {
                const value = this.getAttribute('data-value');
                enemyAttachmentsVisibleColorOption.style.display =
                    (value === 'Disabled')
                        ? 'none'
                        : 'block';
                console.log('Enemy Attachments Visible选项变更:', value, '颜色选择器显示:', enemyAttachmentsVisibleColorOption.style.display);
            });
        });
    }

    // Hidden组件
    const enemyAttachmentsHiddenDropdown = document.getElementById('enemy-attachments-hidden-dropdown');
    if (enemyAttachmentsHiddenDropdown) {
        const enemyAttachmentsHiddenItems = enemyAttachmentsHiddenDropdown.querySelectorAll('.dropdown-item');
        const enemyAttachmentsHiddenColorOption = enemyAttachmentsHiddenDropdown.parentElement.querySelector('.color-option');
        // 获取当前选中的值
        const activeItem = enemyAttachmentsHiddenDropdown.querySelector('.dropdown-item.active');
        if (activeItem) {
            const currentValue = activeItem.getAttribute('data-value');
            enemyAttachmentsHiddenColorOption.style.display = (currentValue === 'Disabled') ? 'none' : 'block';
        }

        enemyAttachmentsHiddenItems.forEach(item => {
            item.addEventListener('click', function () {
                const value = this.getAttribute('data-value');
                enemyAttachmentsHiddenColorOption.style.display =
                    (value === 'Disabled')
                        ? 'none'
                        : 'block';
                console.log('Enemy Attachments Hidden选项变更:', value, '颜色选择器显示:', enemyAttachmentsHiddenColorOption.style.display);
            });
        });
    }

    // BACKTRACK面板组件
    // Visible组件
    const enemyBacktrackVisibleDropdown = document.getElementById('enemy-backtrack-visible-dropdown');
    if (enemyBacktrackVisibleDropdown) {
        const enemyBacktrackVisibleItems = enemyBacktrackVisibleDropdown.querySelectorAll('.dropdown-item');
        const enemyBacktrackVisibleColorOption = enemyBacktrackVisibleDropdown.parentElement.querySelector('.color-option');
        // 获取当前选中的值
        const activeItem = enemyBacktrackVisibleDropdown.querySelector('.dropdown-item.active');
        if (activeItem) {
            const currentValue = activeItem.getAttribute('data-value');
            enemyBacktrackVisibleColorOption.style.display = (currentValue === 'Disabled') ? 'none' : 'block';
        }

        enemyBacktrackVisibleItems.forEach(item => {
            item.addEventListener('click', function () {
                const value = this.getAttribute('data-value');
                enemyBacktrackVisibleColorOption.style.display =
                    (value === 'Disabled')
                        ? 'none'
                        : 'block';
                console.log('Enemy Backtrack Visible选项变更:', value, '颜色选择器显示:', enemyBacktrackVisibleColorOption.style.display);
            });
        });
    }

    // Hidden组件
    const enemyBacktrackHiddenDropdown = document.getElementById('enemy-backtrack-hidden-dropdown');
    if (enemyBacktrackHiddenDropdown) {
        const enemyBacktrackHiddenItems = enemyBacktrackHiddenDropdown.querySelectorAll('.dropdown-item');
        const enemyBacktrackHiddenColorOption = enemyBacktrackHiddenDropdown.parentElement.querySelector('.color-option');
        // 获取当前选中的值
        const activeItem = enemyBacktrackHiddenDropdown.querySelector('.dropdown-item.active');
        if (activeItem) {
            const currentValue = activeItem.getAttribute('data-value');
            enemyBacktrackHiddenColorOption.style.display = (currentValue === 'Disabled') ? 'none' : 'block';
        }

        enemyBacktrackHiddenItems.forEach(item => {
            item.addEventListener('click', function () {
                const value = this.getAttribute('data-value');
                enemyBacktrackHiddenColorOption.style.display =
                    (value === 'Disabled')
                        ? 'none'
                        : 'block';
                console.log('Enemy Backtrack Hidden选项变更:', value, '颜色选择器显示:', enemyBacktrackHiddenColorOption.style.display);
            });
        });
    }

    // SHOT面板组件
    // Visible组件
    const enemyShotVisibleDropdown = document.getElementById('enemy-shot-visible-dropdown');
    if (enemyShotVisibleDropdown) {
        const enemyShotVisibleItems = enemyShotVisibleDropdown.querySelectorAll('.dropdown-item');
        const enemyShotVisibleColorOption = enemyShotVisibleDropdown.parentElement.querySelector('.color-option');
        // 获取当前选中的值
        const activeItem = enemyShotVisibleDropdown.querySelector('.dropdown-item.active');
        if (activeItem) {
            const currentValue = activeItem.getAttribute('data-value');
            enemyShotVisibleColorOption.style.display = (currentValue === 'Disabled') ? 'none' : 'block';
        }

        enemyShotVisibleItems.forEach(item => {
            item.addEventListener('click', function () {
                const value = this.getAttribute('data-value');
                enemyShotVisibleColorOption.style.display =
                    (value === 'Disabled')
                        ? 'none'
                        : 'block';
                console.log('Enemy Shot Visible选项变更:', value, '颜色选择器显示:', enemyShotVisibleColorOption.style.display);
            });
        });
    }

    // Hidden组件
    const enemyShotHiddenDropdown = document.getElementById('enemy-shot-hidden-dropdown');
    if (enemyShotHiddenDropdown) {
        const enemyShotHiddenItems = enemyShotHiddenDropdown.querySelectorAll('.dropdown-item');
        const enemyShotHiddenColorOption = enemyShotHiddenDropdown.parentElement.querySelector('.color-option');
        // 获取当前选中的值
        const activeItem = enemyShotHiddenDropdown.querySelector('.dropdown-item.active');
        if (activeItem) {
            const currentValue = activeItem.getAttribute('data-value');
            enemyShotHiddenColorOption.style.display = (currentValue === 'Disabled') ? 'none' : 'block';
        }

        enemyShotHiddenItems.forEach(item => {
            item.addEventListener('click', function () {
                const value = this.getAttribute('data-value');
                enemyShotHiddenColorOption.style.display =
                    (value === 'Disabled')
                        ? 'none'
                        : 'block';
                console.log('Enemy Shot Hidden选项变更:', value, '颜色选择器显示:', enemyShotHiddenColorOption.style.display);
            });
        });
    }

    // 初始化EXTRA面板组件
    // Ragdolls组件
    const ragdollsVisibleDropdown = document.getElementById('ragdolls-visible-dropdown');
    if (ragdollsVisibleDropdown) {
        const ragdollsVisibleItems = ragdollsVisibleDropdown.querySelectorAll('.dropdown-item');
        const ragdollsVisibleColorOption = ragdollsVisibleDropdown.parentElement.querySelector('.color-option');
        // 获取当前选中的值
        const activeItem = ragdollsVisibleDropdown.querySelector('.dropdown-item.active');
        if (activeItem) {
            const currentValue = activeItem.getAttribute('data-value');
            ragdollsVisibleColorOption.style.display = (currentValue === 'Disabled') ? 'none' : 'block';
        }

        ragdollsVisibleItems.forEach(item => {
            item.addEventListener('click', function () {
                const value = this.getAttribute('data-value');
                ragdollsVisibleColorOption.style.display =
                    (value === 'Disabled')
                        ? 'none'
                        : 'block';
                console.log('Ragdolls Visible选项变更:', value, '颜色选择器显示:', ragdollsVisibleColorOption.style.display);
            });
        });
    }

    // Ragdolls Hidden组件
    const ragdollsHiddenDropdown = document.getElementById('ragdolls-hidden-dropdown');
    if (ragdollsHiddenDropdown) {
        const ragdollsHiddenItems = ragdollsHiddenDropdown.querySelectorAll('.dropdown-item');
        const ragdollsHiddenColorOption = ragdollsHiddenDropdown.parentElement.querySelector('.color-option');
        // 获取当前选中的值
        const activeItem = ragdollsHiddenDropdown.querySelector('.dropdown-item.active');
        if (activeItem) {
            const currentValue = activeItem.getAttribute('data-value');
            ragdollsHiddenColorOption.style.display = (currentValue === 'Disabled') ? 'none' : 'block';
        }

        ragdollsHiddenItems.forEach(item => {
            item.addEventListener('click', function () {
                const value = this.getAttribute('data-value');
                ragdollsHiddenColorOption.style.display =
                    (value === 'Disabled')
                        ? 'none'
                        : 'block';
                console.log('Ragdolls Hidden选项变更:', value, '颜色选择器显示:', ragdollsHiddenColorOption.style.display);
            });
        });
    }
    
    // 初始化所有的设置面板中的复选框
    // initializeAllCheckboxes();
}

// Team页面组件初始化
function initializeTeamPageComponents() {
    // MODEL面板组件
    // Visible组件
    const teamVisibleDropdown = document.getElementById('team-visible-dropdown');
    if (teamVisibleDropdown) {
        const teamVisibleItems = teamVisibleDropdown.querySelectorAll('.dropdown-item');
        const teamVisibleColorOption = teamVisibleDropdown.parentElement.querySelector('.color-option');
        // 获取当前选中的值
        const activeItem = teamVisibleDropdown.querySelector('.dropdown-item.active');
        if (activeItem) {
            const currentValue = activeItem.getAttribute('data-value');
            teamVisibleColorOption.style.display = (currentValue === 'Disabled') ? 'none' : 'block';
        }

        teamVisibleItems.forEach(item => {
            item.addEventListener('click', function () {
                const value = this.getAttribute('data-value');
                teamVisibleColorOption.style.display =
                    (value === 'Disabled')
                        ? 'none'
                        : 'block';
                console.log('Team Visible选项变更:', value, '颜色选择器显示:', teamVisibleColorOption.style.display);
            });
        });
    }

    // Hidden组件
    const teamHiddenDropdown = document.getElementById('team-hidden-dropdown');
    if (teamHiddenDropdown) {
        const teamHiddenItems = teamHiddenDropdown.querySelectorAll('.dropdown-item');
        const teamHiddenColorOption = teamHiddenDropdown.parentElement.querySelector('.color-option');
        // 获取当前选中的值
        const activeItem = teamHiddenDropdown.querySelector('.dropdown-item.active');
        if (activeItem) {
            const currentValue = activeItem.getAttribute('data-value');
            teamHiddenColorOption.style.display = (currentValue === 'Disabled') ? 'none' : 'block';
        }

        teamHiddenItems.forEach(item => {
            item.addEventListener('click', function () {
                const value = this.getAttribute('data-value');
                teamHiddenColorOption.style.display =
                    (value === 'Disabled')
                        ? 'none'
                        : 'block';
                console.log('Team Hidden选项变更:', value, '颜色选择器显示:', teamHiddenColorOption.style.display);
            });
        });
    }

    // ATTACHMENTS面板组件
    // Visible组件
    const teamAttachmentsVisibleDropdown = document.getElementById('team-attachments-visible-dropdown');
    if (teamAttachmentsVisibleDropdown) {
        const teamAttachmentsVisibleItems = teamAttachmentsVisibleDropdown.querySelectorAll('.dropdown-item');
        const teamAttachmentsVisibleColorOption = teamAttachmentsVisibleDropdown.parentElement.querySelector('.color-option');
        // 获取当前选中的值
        const activeItem = teamAttachmentsVisibleDropdown.querySelector('.dropdown-item.active');
        if (activeItem) {
            const currentValue = activeItem.getAttribute('data-value');
            teamAttachmentsVisibleColorOption.style.display = (currentValue === 'Disabled') ? 'none' : 'block';
        }

        teamAttachmentsVisibleItems.forEach(item => {
            item.addEventListener('click', function () {
                const value = this.getAttribute('data-value');
                teamAttachmentsVisibleColorOption.style.display =
                    (value === 'Disabled')
                        ? 'none'
                        : 'block';
                console.log('Team Attachments Visible选项变更:', value, '颜色选择器显示:', teamAttachmentsVisibleColorOption.style.display);
            });
        });
    }

    // Hidden组件
    const teamAttachmentsHiddenDropdown = document.getElementById('team-attachments-hidden-dropdown');
    if (teamAttachmentsHiddenDropdown) {
        const teamAttachmentsHiddenItems = teamAttachmentsHiddenDropdown.querySelectorAll('.dropdown-item');
        const teamAttachmentsHiddenColorOption = teamAttachmentsHiddenDropdown.parentElement.querySelector('.color-option');
        // 获取当前选中的值
        const activeItem = teamAttachmentsHiddenDropdown.querySelector('.dropdown-item.active');
        if (activeItem) {
            const currentValue = activeItem.getAttribute('data-value');
            teamAttachmentsHiddenColorOption.style.display = (currentValue === 'Disabled') ? 'none' : 'block';
        }

        teamAttachmentsHiddenItems.forEach(item => {
            item.addEventListener('click', function () {
                const value = this.getAttribute('data-value');
                teamAttachmentsHiddenColorOption.style.display =
                    (value === 'Disabled')
                        ? 'none'
                        : 'block';
                console.log('Team Attachments Hidden选项变更:', value, '颜色选择器显示:', teamAttachmentsHiddenColorOption.style.display);
            });
        });
    }

    // 初始化EXTRA面板组件
    // 初始化Ragdolls组件的设置面板交互
    const teamRagdollsSettings = document.querySelector('.team-extra-panel .option:nth-child(1) .settings-icon');
    if (teamRagdollsSettings) {
        teamRagdollsSettings.addEventListener('click', function () {
            const ragdollsPanel = document.getElementById('ragdolls-panel');
            if (ragdollsPanel) {
                document.getElementById('settings-overlay').style.display = 'block';
                ragdollsPanel.style.display = 'block';
            }
        });
    }
    
    // 初始化Ragdolls设置面板的下拉框和颜色选择器交互
    // Ragdolls Visible组件
    const ragdollsVisibleDropdown = document.getElementById('ragdolls-visible-dropdown');
    if (ragdollsVisibleDropdown) {
        const ragdollsVisibleItems = ragdollsVisibleDropdown.querySelectorAll('.dropdown-item');
        const ragdollsVisibleColorOption = ragdollsVisibleDropdown.parentElement.querySelector('.color-option');
        // 获取当前选中的值
        const activeItem = ragdollsVisibleDropdown.querySelector('.dropdown-item.active');
        if (activeItem) {
            const currentValue = activeItem.getAttribute('data-value');
            ragdollsVisibleColorOption.style.display = (currentValue === 'Disabled') ? 'none' : 'block';
        }

        ragdollsVisibleItems.forEach(item => {
            item.addEventListener('click', function () {
                const value = this.getAttribute('data-value');
                ragdollsVisibleColorOption.style.display =
                    (value === 'Disabled')
                        ? 'none'
                        : 'block';
                console.log('Team Ragdolls Visible选项变更:', value, '颜色选择器显示:', ragdollsVisibleColorOption.style.display);
            });
        });
    }

    // Ragdolls Hidden组件
    const ragdollsHiddenDropdown = document.getElementById('ragdolls-hidden-dropdown');
    if (ragdollsHiddenDropdown) {
        const ragdollsHiddenItems = ragdollsHiddenDropdown.querySelectorAll('.dropdown-item');
        const ragdollsHiddenColorOption = ragdollsHiddenDropdown.parentElement.querySelector('.color-option');
        // 获取当前选中的值
        const activeItem = ragdollsHiddenDropdown.querySelector('.dropdown-item.active');
        if (activeItem) {
            const currentValue = activeItem.getAttribute('data-value');
            ragdollsHiddenColorOption.style.display = (currentValue === 'Disabled') ? 'none' : 'block';
        }

        ragdollsHiddenItems.forEach(item => {
            item.addEventListener('click', function () {
                const value = this.getAttribute('data-value');
                ragdollsHiddenColorOption.style.display =
                    (value === 'Disabled')
                        ? 'none'
                        : 'block';
                console.log('Team Ragdolls Hidden选项变更:', value, '颜色选择器显示:', ragdollsHiddenColorOption.style.display);
            });
        });
    }
    
    // 初始化ESP面板组件的设置面板
    // 查找ESP组件函数
    function findTeamESPOptionByName(name) {
        const options = document.querySelectorAll('.team-esp-panel .option');
        for (let option of options) {
            const optionName = option.querySelector('.option-name');
            if (optionName && optionName.textContent.trim() === name) {
                return option;
            }
        }
        return null;
    }
    
    // Box组件设置面板
    const boxOption = findTeamESPOptionByName('Box');
    if (boxOption) {
        const boxSettingsIcon = boxOption.querySelector('.settings-icon');
        if (boxSettingsIcon) {
            boxSettingsIcon.addEventListener('click', function() {
                const boxPanel = document.getElementById('team-box-panel');
                if (boxPanel) {
                    document.getElementById('settings-overlay').style.display = 'block';
                    boxPanel.style.display = 'block';
                }
            });
        }
        
        // Box样式变更逻辑
        const boxStyleDropdown = document.getElementById('team-box-style-dropdown');
        const boxColorOptions = boxOption ? Array.from(boxOption.querySelectorAll('.color-option')) : [];

        if (boxStyleDropdown && boxOption && boxColorOptions.length >= 2) {
            boxStyleDropdown.querySelectorAll('.dropdown-item').forEach(item => {
                item.addEventListener('click', function () {
                    const value = this.getAttribute('data-value');
                    boxColorOptions[1].style.display =
                        (value === 'Gradient')
                            ? 'block'
                            : 'none';
                    console.log('Team Box样式变更:', value);
                });
            });

            // 设置初始状态
            const initialBoxValue = boxStyleDropdown.querySelector('.dropdown-display').textContent;
            boxColorOptions[1].style.display =
                (initialBoxValue === 'Gradient')
                    ? 'block'
                    : 'none';
        }
    }
    
    // Health组件设置面板
    const healthOption = findTeamESPOptionByName('Health');
    if (healthOption) {
        const healthSettingsIcon = healthOption.querySelector('.settings-icon');
        if (healthSettingsIcon) {
            healthSettingsIcon.addEventListener('click', function() {
                const healthPanel = document.getElementById('team-health-panel');
                if (healthPanel) {
                    document.getElementById('settings-overlay').style.display = 'block';
                    healthPanel.style.display = 'block';
                }
            });
        }
        
        // Health样式变更逻辑
        const healthStyleDropdown = document.getElementById('team-health-style-dropdown');
        const healthColorOptions = healthOption ? Array.from(healthOption.querySelectorAll('.color-option')) : [];

        if (healthStyleDropdown && healthOption && healthColorOptions.length >= 2) {
            healthStyleDropdown.querySelectorAll('.dropdown-item').forEach(item => {
                item.addEventListener('click', function () {
                    const value = this.getAttribute('data-value');
                    healthColorOptions[1].style.display =
                        (value === 'Gradient')
                            ? 'block'
                            : 'none';
                    console.log('Team Health样式变更:', value);
                });
            });

            // 设置初始状态
            const initialHealthValue = healthStyleDropdown.querySelector('.dropdown-display').textContent;
            healthColorOptions[1].style.display =
                (initialHealthValue === 'Gradient')
                    ? 'block'
                    : 'none';
        }
    }
    
    // Ammo组件设置面板
    const ammoOption = findTeamESPOptionByName('Ammo');
    if (ammoOption) {
        const ammoSettingsIcon = ammoOption.querySelector('.settings-icon');
        if (ammoSettingsIcon) {
            ammoSettingsIcon.addEventListener('click', function() {
                const ammoPanel = document.getElementById('team-ammo-panel');
                if (ammoPanel) {
                    document.getElementById('settings-overlay').style.display = 'block';
                    ammoPanel.style.display = 'block';
                }
            });
        }
        
        // Ammo样式变更逻辑
        const ammoStyleDropdown = document.getElementById('team-ammo-style-dropdown');
        const ammoColorOptions = ammoOption ? Array.from(ammoOption.querySelectorAll('.color-option')) : [];

        if (ammoStyleDropdown && ammoOption && ammoColorOptions.length >= 2) {
            ammoStyleDropdown.querySelectorAll('.dropdown-item').forEach(item => {
                item.addEventListener('click', function () {
                    const value = this.getAttribute('data-value');
                    ammoColorOptions[1].style.display =
                        (value === 'Gradient')
                            ? 'block'
                            : 'none';
                    console.log('Team Ammo样式变更:', value);
                });
            });

            // 设置初始状态
            const initialAmmoValue = ammoStyleDropdown.querySelector('.dropdown-display').textContent;
            ammoColorOptions[1].style.display =
                (initialAmmoValue === 'Gradient')
                    ? 'block'
                    : 'none';
        }
    }
    
    // Armor组件设置面板
    const armorOption = findTeamESPOptionByName('Armor');
    if (armorOption) {
        const armorSettingsIcon = armorOption.querySelector('.settings-icon');
        if (armorSettingsIcon) {
            armorSettingsIcon.addEventListener('click', function() {
                const armorPanel = document.getElementById('team-armor-panel');
                if (armorPanel) {
                    document.getElementById('settings-overlay').style.display = 'block';
                    armorPanel.style.display = 'block';
                }
            });
        }
        
        // Armor样式变更逻辑
        const armorStyleDropdown = document.getElementById('team-armor-style-dropdown');
        const armorColorOptions = armorOption ? Array.from(armorOption.querySelectorAll('.color-option')) : [];

        if (armorStyleDropdown && armorOption && armorColorOptions.length >= 2) {
            armorStyleDropdown.querySelectorAll('.dropdown-item').forEach(item => {
                item.addEventListener('click', function () {
                    const value = this.getAttribute('data-value');
                    armorColorOptions[1].style.display =
                        (value === 'Gradient')
                            ? 'block'
                            : 'none';
                    console.log('Team Armor样式变更:', value);
                });
            });

            // 设置初始状态
            const initialArmorValue = armorStyleDropdown.querySelector('.dropdown-display').textContent;
            armorColorOptions[1].style.display =
                (initialArmorValue === 'Gradient')
                    ? 'block'
                    : 'none';
        }
    }
    
    // Bullet tracer组件设置面板
    const bulletTracerOption = findTeamESPOptionByName('Bullet tracer');
    if (bulletTracerOption) {
        const bulletTracerSettingsIcon = bulletTracerOption.querySelector('.settings-icon');
        if (bulletTracerSettingsIcon) {
            bulletTracerSettingsIcon.addEventListener('click', function() {
                // 如果有专门的Bullet tracer设置面板则显示
                alert('Bullet tracer settings will be added in future updates');
            });
        }
    }
}

// World页面组件初始化
function initializeWorldPageComponents() {
    // 初始化ESP面板组件
    // ESP选项
    const worldEspDropdown = document.getElementById('world-esp-dropdown');
    if (worldEspDropdown) {
        // 初始化多选下拉菜单
        const worldEspItems = worldEspDropdown.querySelectorAll('.dropdown-item');
        worldEspItems.forEach(item => {
            // 默认选中Items和Projectiles
            if (item.getAttribute('data-value') === 'Items' || 
                item.getAttribute('data-value') === 'Projectiles') {
                item.classList.add('selected');
            }
            
            item.addEventListener('click', function() {
                this.classList.toggle('selected');
                
                // 更新显示文本
                const selectedItems = Array.from(worldEspDropdown.querySelectorAll('.dropdown-item.selected'))
                    .map(selected => selected.getAttribute('data-value'));
                
                worldEspDropdown.querySelector('.dropdown-display').textContent = 
                    selectedItems.length > 0 ? selectedItems.join(', ') : 'None';
                
                console.log('World ESP选项变更:', selectedItems);
            });
        });
    }
    
    // Weapon icons选项 - 复选框不需要特殊处理
    
    // Weapon visible选项
    const weaponVisibleDropdown = document.getElementById('world-weapon-visible-dropdown');
    if (weaponVisibleDropdown) {
        const weaponVisibleItems = weaponVisibleDropdown.querySelectorAll('.dropdown-item');
        const weaponVisibleColorOption = weaponVisibleDropdown.parentElement.querySelector('.color-option');
        
        // 获取当前选中的值
        const activeItem = weaponVisibleDropdown.querySelector('.dropdown-item.active');
        if (activeItem) {
            const currentValue = activeItem.getAttribute('data-value');
            weaponVisibleColorOption.style.display = (currentValue === 'Disabled') ? 'none' : 'block';
        }
        
        weaponVisibleItems.forEach(item => {
            item.addEventListener('click', function() {
                const value = this.getAttribute('data-value');
                weaponVisibleColorOption.style.display = 
                    (value === 'Disabled') ? 'none' : 'block';
                console.log('World Weapon Visible选项变更:', value, '颜色选择器显示:', weaponVisibleColorOption.style.display);
            });
        });
    }
    
    // Weapon invisible选项
    const weaponInvisibleDropdown = document.getElementById('world-weapon-invisible-dropdown');
    if (weaponInvisibleDropdown) {
        const weaponInvisibleItems = weaponInvisibleDropdown.querySelectorAll('.dropdown-item');
        const weaponInvisibleColorOption = weaponInvisibleDropdown.parentElement.querySelector('.color-option');
        
        // 获取当前选中的值
        const activeItem = weaponInvisibleDropdown.querySelector('.dropdown-item.active');
        if (activeItem) {
            const currentValue = activeItem.getAttribute('data-value');
            weaponInvisibleColorOption.style.display = (currentValue === 'Disabled') ? 'none' : 'block';
        }
        
        weaponInvisibleItems.forEach(item => {
            item.addEventListener('click', function() {
                const value = this.getAttribute('data-value');
                weaponInvisibleColorOption.style.display = 
                    (value === 'Disabled') ? 'none' : 'block';
                console.log('World Weapon Invisible选项变更:', value, '颜色选择器显示:', weaponInvisibleColorOption.style.display);
            });
        });
    }
    
    // Glow选项
    const worldGlowDropdown = document.getElementById('world-glow-dropdown');
    if (worldGlowDropdown) {
        // 初始化多选下拉菜单
        const worldGlowItems = worldGlowDropdown.querySelectorAll('.dropdown-item');
        worldGlowItems.forEach(item => {
            // 默认选中Items和Projectiles
            if (item.getAttribute('data-value') === 'Items' || 
                item.getAttribute('data-value') === 'Projectiles') {
                item.classList.add('selected');
            }
            
            item.addEventListener('click', function() {
                this.classList.toggle('selected');
                
                // 更新显示文本
                const selectedItems = Array.from(worldGlowDropdown.querySelectorAll('.dropdown-item.selected'))
                    .map(selected => selected.getAttribute('data-value'));
                
                worldGlowDropdown.querySelector('.dropdown-display').textContent = 
                    selectedItems.length > 0 ? selectedItems.join(', ') : 'None';
                
                console.log('World Glow选项变更:', selectedItems);
            });
        });
    }
    
    // 初始化Environment面板组件
    
    // Exposure滑块
    const exposureSlider = document.getElementById('exposure-slider');
    if (exposureSlider) {
        const sliderTrack = exposureSlider.querySelector('.slider-track');
        const sliderFill = exposureSlider.querySelector('.slider-fill');
        const sliderValue = exposureSlider.querySelector('.slider-value');
        
        // 初始滑块值
        let currentValue = 0;
        
        // 初始化时设置值
        sliderFill.style.width = '0%';
        sliderValue.textContent = '0%';
        
        sliderTrack.addEventListener('mousedown', function(e) {
            e.preventDefault();
            
            const updateExposureValue = function(clientX) {
                const rect = sliderTrack.getBoundingClientRect();
                let percentage = (clientX - rect.left) / rect.width;
                percentage = Math.max(0, Math.min(1, percentage));
                
                // 转换为0-100的范围
                currentValue = Math.round(percentage * 100);
                
                sliderFill.style.width = `${percentage * 100}%`;
                sliderValue.textContent = `${currentValue}%`;
                
                console.log('Exposure值变更:', currentValue);
            };
            
            // 初始更新
            updateExposureValue(e.clientX);
            
            // 鼠标移动事件
            const mouseMoveHandler = function(moveEvent) {
                updateExposureValue(moveEvent.clientX);
            };
            
            // 鼠标释放事件
            const mouseUpHandler = function() {
                document.removeEventListener('mousemove', mouseMoveHandler);
                document.removeEventListener('mouseup', mouseUpHandler);
            };
            
            document.addEventListener('mousemove', mouseMoveHandler);
            document.addEventListener('mouseup', mouseUpHandler);
        });
    }
    
    // Fog设置面板
    const fogSettingsIcon = document.querySelector('.world-environment-panel .option:nth-child(4) .settings-icon');
    if (fogSettingsIcon) {
        fogSettingsIcon.addEventListener('click', function() {
            const fogPanel = document.getElementById('fog-panel');
            if (fogPanel) {
                document.getElementById('settings-overlay').style.display = 'block';
                fogPanel.style.display = 'block';
            }
        });
    }
    
    // Fog Distance滑块
    const fogDistanceSlider = document.getElementById('fog-distance-slider');
    if (fogDistanceSlider) {
        const sliderTrack = fogDistanceSlider.querySelector('.slider-track');
        const sliderFill = fogDistanceSlider.querySelector('.slider-fill');
        const sliderValue = fogDistanceSlider.querySelector('.slider-value');
        
        // 初始滑块值
        let currentValue = 700;
        
        // 初始化时设置值
        sliderFill.style.width = '10%';
        sliderValue.textContent = '700u';
        
        sliderTrack.addEventListener('mousedown', function(e) {
            e.preventDefault();
            
            const updateDistanceValue = function(clientX) {
                const rect = sliderTrack.getBoundingClientRect();
                let percentage = (clientX - rect.left) / rect.width;
                percentage = Math.max(0, Math.min(1, percentage));
                
                // 转换为1-7000的范围
                currentValue = Math.round(percentage * 6999) + 1;
                
                sliderFill.style.width = `${percentage * 100}%`;
                sliderValue.textContent = `${currentValue}u`;
                
                console.log('Fog Distance值变更:', currentValue);
            };
            
            // 初始更新
            updateDistanceValue(e.clientX);
            
            // 鼠标移动事件
            const mouseMoveHandler = function(moveEvent) {
                updateDistanceValue(moveEvent.clientX);
            };
            
            // 鼠标释放事件
            const mouseUpHandler = function() {
                document.removeEventListener('mousemove', mouseMoveHandler);
                document.removeEventListener('mouseup', mouseUpHandler);
            };
            
            document.addEventListener('mousemove', mouseMoveHandler);
            document.addEventListener('mouseup', mouseUpHandler);
        });
    }
    
    // Fog Falloff滑块
    const fogFalloffSlider = document.getElementById('fog-falloff-slider');
    if (fogFalloffSlider) {
        const sliderTrack = fogFalloffSlider.querySelector('.slider-track');
        const sliderFill = fogFalloffSlider.querySelector('.slider-fill');
        const sliderValue = fogFalloffSlider.querySelector('.slider-value');
        
        // 初始滑块值
        let currentValue = 50;
        
        // 初始化时设置值
        sliderFill.style.width = '50%';
        sliderValue.textContent = '50%';
        
        sliderTrack.addEventListener('mousedown', function(e) {
            e.preventDefault();
            
            const updateFalloffValue = function(clientX) {
                const rect = sliderTrack.getBoundingClientRect();
                let percentage = (clientX - rect.left) / rect.width;
                percentage = Math.max(0, Math.min(1, percentage));
                
                // 转换为1-100的范围
                currentValue = Math.round(percentage * 99) + 1;
                
                sliderFill.style.width = `${percentage * 100}%`;
                sliderValue.textContent = `${currentValue}%`;
                
                console.log('Fog Falloff值变更:', currentValue);
            };
            
            // 初始更新
            updateFalloffValue(e.clientX);
            
            // 鼠标移动事件
            const mouseMoveHandler = function(moveEvent) {
                updateFalloffValue(moveEvent.clientX);
            };
            
            // 鼠标释放事件
            const mouseUpHandler = function() {
                document.removeEventListener('mousemove', mouseMoveHandler);
                document.removeEventListener('mouseup', mouseUpHandler);
            };
            
            document.addEventListener('mousemove', mouseMoveHandler);
            document.addEventListener('mouseup', mouseUpHandler);
        });
    }
    
    // World effects下拉菜单不需要特殊处理
    
    // Skybox下拉菜单不需要特殊处理
    
    // Disablers多选下拉菜单
    const disablersDropdown = document.querySelector('.world-environment-panel #disablers-dropdown');
    if (disablersDropdown) {
        // 初始化多选下拉菜单
        const disablersItems = disablersDropdown.querySelectorAll('.dropdown-item');
        const skyColorOptions = document.querySelectorAll('.world-environment-panel .sky-color-1, .world-environment-panel .sky-color-2, .world-environment-panel .sky-color-3');
        
        // 默认都选中
        disablersItems.forEach(item => {
            item.classList.add('selected');
            
            item.addEventListener('click', function() {
                this.classList.toggle('selected');
                
                // 更新显示文本
                const selectedItems = Array.from(disablersDropdown.querySelectorAll('.dropdown-item.selected'))
                    .map(selected => selected.getAttribute('data-value'));
                
                disablersDropdown.querySelector('.dropdown-display').textContent = 
                    selectedItems.length > 0 ? selectedItems.join(', ') : 'None';
                    
                // 特殊处理：当Disablers选中"3d skybox"时，Sky的颜色选择器只显示第一个
                const has3dSkybox = selectedItems.includes('3d skybox');
                if (skyColorOptions.length >= 3) {
                    skyColorOptions[1].style.display = has3dSkybox ? 'none' : 'block';
                    skyColorOptions[2].style.display = has3dSkybox ? 'none' : 'block';
                }
                
                console.log('Disablers选项变更:', selectedItems, '3d skybox状态:', has3dSkybox);
            });
        });
        
        // 初始化时处理天空颜色选择器显示
        const selectedItems = Array.from(disablersDropdown.querySelectorAll('.dropdown-item.selected'))
            .map(selected => selected.getAttribute('data-value'));
        const has3dSkybox = selectedItems.includes('3d skybox');
        
        if (skyColorOptions.length >= 3) {
            skyColorOptions[1].style.display = has3dSkybox ? 'none' : 'block';
            skyColorOptions[2].style.display = has3dSkybox ? 'none' : 'block';
        }
    }
}
