# 📦Netprops
>本页列出的结构仅是一部分常用的结构，如果需要访问完整的结构，请前往 ->[client.dll](https://github.com/a2x/cs2-dumper/blob/main/output/client_dll.cs)

<style>
:root {
    --vscode-bg: #1e1e1e;
    --vscode-fg: #d4d4d4;
    --vscode-border: #3e3e42;
    --vscode-highlight: #264f78;
    --vscode-selection: #3a3d41;
    --vscode-header-bg: #252526;
    --vscode-type-color: #4ec9b0;
    --vscode-property-color: #9cdcfe;
    --vscode-comment-color: #6a9955;
    --vscode-hover-bg: #2c2c2d;
    --vscode-accent: #007acc;
    --vscode-keyword: #569cd6;
    --vscode-string: #ce9178;
    --vscode-number: #b5cea8;
    --vscode-class: #4ec9b0;
    --vscode-interface: #b8d7a3;
}

body {
    background-color: var(--vscode-bg);
    color: var(--vscode-fg);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    margin: 0;
    padding: 20px;
}

/* 滚动条样式 */
::-webkit-scrollbar {
    width: 10px;
    height: 10px;
}

::-webkit-scrollbar-track {
    background: var(--vscode-bg);
}

::-webkit-scrollbar-thumb {
    background: #555;
    border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
    background: #777;
}

/* 表格样式 */
table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
    font-size: 14px;
    background-color: var(--vscode-bg);
    border: 1px solid var(--vscode-border);
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
}

table:hover {
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.4);
}

th {
    background-color: var(--vscode-header-bg);
    color: var(--vscode-fg);
    font-weight: bold;
    padding: 12px 15px;
    text-align: left;
    border-bottom: 2px solid var(--vscode-border);
    position: sticky;
    top: 0;
    z-index: 10;
}

td {
    padding: 10px 15px;
    border-bottom: 1px solid var(--vscode-border);
    transition: background-color 0.2s ease;
}

tr:nth-child(even) {
    background-color: rgba(58, 61, 65, 0.4);
}

tr:hover {
    background-color: var(--vscode-hover-bg);
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

/* 代码和类型样式 */
code, .type-column {
    font-family: 'Consolas', 'Courier New', monospace;
    background-color: rgba(0, 0, 0, 0.2);
    padding: 2px 4px;
    border-radius: 3px;
    color: var(--vscode-type-color);
    border: 1px solid rgba(79, 79, 79, 0.2);
}

/* 属性名列样式 */
td:first-child {
    color: var(--vscode-property-color);
    font-weight: 500;
    border-right: 1px solid rgba(62, 62, 66, 0.5);
    width: 30%;
}

/* 类型列样式 */
td:nth-child(2) {
    color: var(--vscode-type-color);
    font-family: 'Consolas', 'Courier New', monospace;
    width: 25%;
}

/* 描述列样式 */
td:last-child {
    color: var(--vscode-comment-color);
    font-style: normal;
}

/* 标题样式 */
h1 {
    color: var(--vscode-keyword);
    border-bottom: 1px solid var(--vscode-border);
    padding-bottom: 10px;
    font-size: 28px;
    margin-top: 0;
}

h3 {
    color: var(--vscode-keyword);
    border-bottom: 1px solid var(--vscode-border);
    padding-bottom: 8px;
    margin-top: 40px;
    font-size: 20px;
    display: flex;
    align-items: center;
}

h3::before {
    content: '📋';
    margin-right: 8px;
    font-size: 18px;
}

/* 引用块样式 */
blockquote {
    border-left: 4px solid var(--vscode-accent);
    padding: 10px 15px;
    margin: 20px 0;
    background-color: rgba(0, 122, 204, 0.1);
    border-radius: 0 4px 4px 0;
}

/* 段落样式 */
p {
    line-height: 1.6;
    margin-bottom: 20px;
}

/* 代码块样式 */
pre {
    background-color: #1e1e1e;
    border: 1px solid var(--vscode-border);
    border-radius: 4px;
    padding: 15px;
    overflow: auto;
    margin: 20px 0;
    box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.2);
}

/* 类描述样式 */
p code {
    color: var(--vscode-class);
}

/* 分隔线样式 */
hr {
    border: none;
    height: 1px;
    background-color: var(--vscode-border);
    margin: 30px 0;
}

/* 特殊类型高亮 */
code[class*="language-"] {
    color: var(--vscode-fg);
}

.token.keyword {
    color: var(--vscode-keyword);
}

.token.string {
    color: var(--vscode-string);
}

.token.number {
    color: var(--vscode-number);
}

.token.class-name {
    color: var(--vscode-class);
}

.token.interface-name {
    color: var(--vscode-interface);
}

/* 表格容器，支持水平滚动 */
.table-container {
    overflow-x: auto;
    margin: 20px 0;
    border-radius: 4px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* 搜索框样式 */
.search-container {
    margin: 20px 0;
    display: flex;
    align-items: center;
}

.search-input {
    background-color: var(--vscode-bg);
    border: 1px solid var(--vscode-border);
    color: var(--vscode-fg);
    padding: 8px 12px;
    border-radius: 4px;
    font-size: 14px;
    flex: 1;
    outline: none;
    transition: all 0.3s ease;
}

.search-input:focus {
    border-color: var(--vscode-accent);
    box-shadow: 0 0 0 2px rgba(0, 122, 204, 0.3);
}

/* 响应式设计 */
@media (max-width: 768px) {
    body {
        padding: 10px;
    }
    
    table {
        font-size: 12px;
    }
    
    th, td {
        padding: 8px 10px;
    }
}

/* 打印样式 */
@media print {
    body {
        background-color: white;
        color: black;
    }
    
    table {
        border: 1px solid #ddd;
    }
    
    th {
        background-color: #f2f2f2;
        color: black;
    }
    
    tr:nth-child(even) {
        background-color: #f9f9f9;
    }
    
    code {
        background-color: #f5f5f5;
        color: #333;
    }
}
</style>

<div class="search-container">
    <input type="text" id="searchInput" class="search-input" placeholder="搜索属性..." oninput="
        (function() {
            // 获取输入框的值并转换为大写以进行不区分大小写的搜索
            const input = document.getElementById('searchInput');
            const filter = input.value.toUpperCase();
            
            // 获取所有标题、描述和表格
            const headings = document.querySelectorAll('h3');
            const tables = document.getElementsByTagName('table');
            const blockquotes = document.querySelectorAll('blockquote');
            
            // 如果搜索框为空，显示所有内容并移除可能存在的无结果提示
            if (filter === '') {
                document.querySelectorAll('h1, h3, p, blockquote, table, tr').forEach(el => {
                    el.style.display = '';
                });
                
                // 移除可能存在的无结果提示
                const noResultsMsg = document.getElementById('noResultsMessage');
                if (noResultsMsg) {
                    noResultsMsg.remove();
                }
                return;
            }
            
            // 首先隐藏所有内容
            document.querySelectorAll('h1, h3, p, blockquote, table, tr').forEach(el => {
                el.style.display = 'none';
            });
            
            // 只显示页面标题，但隐藏引言
            document.querySelector('h1').style.display = '';
            
            // 移除可能存在的无结果提示
            const existingNoResultsMsg = document.getElementById('noResultsMessage');
            if (existingNoResultsMsg) {
                existingNoResultsMsg.remove();
            }
            
            // 跟踪是否找到了匹配项
            let foundMatch = false;
            
            // 遍历所有表格，查找匹配的行
            for (let t = 0; t < tables.length; t++) {
                const rows = tables[t].getElementsByTagName('tr');
                let hasMatch = false;
                
                // 隐藏所有行
                for (let i = 0; i < rows.length; i++) {
                    rows[i].style.display = 'none';
                }
                
                // 检查数据行（跳过表头）
                for (let i = 1; i < rows.length; i++) {
                    const cells = rows[i].getElementsByTagName('td');
                    let found = false;
                    
                    // 检查行中的所有单元格
                    for (let j = 0; j < cells.length; j++) {
                        const cellText = cells[j].textContent || cells[j].innerText;
                        if (cellText.toUpperCase().indexOf(filter) > -1) {
                            found = true;
                            foundMatch = true;
                            break;
                        }
                    }
                    
                    // 如果找到匹配项，显示该行和表头行
                    if (found) {
                        hasMatch = true;
                        rows[i].style.display = '';
                        rows[0].style.display = ''; // 显示表头行
                    }
                }
                
                // 如果表格有匹配的行，显示该表格
                if (hasMatch) {
                    tables[t].style.display = '';
                }
            }
            
            // 检查标题本身是否匹配搜索条件
            headings.forEach(heading => {
                if (heading.textContent.toUpperCase().indexOf(filter) > -1) {
                    heading.style.display = '';
                    foundMatch = true;
                    
                    // 显示标题下的表格（包括所有行）
                    let nextElement = heading.nextElementSibling;
                    while (nextElement) {
                        if (nextElement.tagName === 'TABLE') {
                            nextElement.style.display = '';
                            const rows = nextElement.getElementsByTagName('tr');
                            for (let i = 0; i < rows.length; i++) {
                                rows[i].style.display = '';
                            }
                            break;
                        } else if (nextElement.tagName === 'P') {
                            nextElement = nextElement.nextElementSibling;
                        } else {
                            break;
                        }
                    }
                }
            });
            
            // 如果没有找到匹配项，显示提示信息
            if (!foundMatch) {
                const noResultsMsg = document.createElement('div');
                noResultsMsg.id = 'noResultsMessage';
                noResultsMsg.style.margin = '20px 0';
                noResultsMsg.style.padding = '15px';
                noResultsMsg.style.backgroundColor = 'rgba(255, 0, 0, 0.1)';
                noResultsMsg.style.border = '1px solid rgba(255, 0, 0, 0.3)';
                noResultsMsg.style.borderRadius = '4px';
                noResultsMsg.style.color = '#d4d4d4';
                noResultsMsg.style.textAlign = 'center';
                noResultsMsg.style.fontWeight = 'bold';
                noResultsMsg.innerHTML = '没有找到匹配的属性。请尝试其他搜索词。';
                
                // 将提示信息插入到搜索框下方
                const searchContainer = document.querySelector('.search-container');
                searchContainer.parentNode.insertBefore(noResultsMsg, searchContainer.nextSibling);
            }
        })();
    ">
</div>

### C_BaseEntity

`C_BaseEntity` 是游戏中的基础实体类，包含了所有实体的通用属性和功能，例如生命值、移动类型、碰撞检测、动画时间等。

| 属性名 | 类型 | 描述 |
|--------|------|------|
| m_CBodyComponent | `CBodyComponent*` | 身体组件指针 |
| m_NetworkTransmitComponent | `CNetworkTransmitComponent` | 网络传输组件 |
| m_nLastThinkTick | `GameTick_t` | 上一次执行Think函数的tick |
| m_pGameSceneNode | `CGameSceneNode*` | 游戏场景节点指针 |
| m_pRenderComponent | `CRenderComponent*` | 渲染组件指针 |
| m_pCollision | `CCollisionProperty*` | 碰撞属性指针 |
| m_iMaxHealth | `int32` | 最大生命值 |
| m_iHealth | `int32` | 当前生命值 |
| m_lifeState | `uint8` | 生命状态 |
| m_bTakesDamage | `bool` | 是否可以受到伤害 |
| m_nTakeDamageFlags | `TakeDamageFlags_t` | 受伤标志 |
| m_nPlatformType | `EntityPlatformTypes_t` | 平台类型 |
| m_ubInterpolationFrame | `uint8` | 插值帧 |
| m_hSceneObjectController | `CHandle<C_BaseEntity>` | 场景对象控制器句柄 |
| m_nNoInterpolationTick | `int32` | 禁用插值的起始tick |
| m_nVisibilityNoInterpolationTick | `int32` | 可见性插值禁用的起始tick |
| m_flProxyRandomValue | `float32` | 代理随机值 |
| m_iEFlags | `int32` | 实体标志 |
| m_nWaterType | `uint8` | 水类型 |
| m_bInterpolateEvenWithNoModel | `bool` | 即使没有模型也进行插值 |
| m_bPredictionEligible | `bool` | 是否可以进行预测 |
| m_bApplyLayerMatchIDToModel | `bool` | 是否将层匹配ID应用于模型 |
| m_tokLayerMatchID | `CUtlStringToken` | 层匹配ID |
| m_nSubclassID | `CUtlStringToken` | 子类ID |
| m_nSimulationTick | `int32` | 物理模拟的基准tick |
| m_iCurrentThinkContext | `int32` | 当前思考上下文 |
| m_aThinkFunctions | `CUtlVector<thinkfunc_t>` | 思考函数数组 |
| m_bDisabledContextThinks | `bool` | 是否禁用上下文思考 |
| m_flAnimTime | `float32` | 动画时间 |
| m_flSimulationTime | `float32` | 模拟时间 |
| m_nSceneObjectOverrideFlags | `uint8` | 场景对象覆盖标志 |
| m_bHasSuccessfullyInterpolated | `bool` | 是否成功插值 |
| m_bHasAddedVarsToInterpolation | `bool` | 是否已将变量添加到插值中 |
| m_bRenderEvenWhenNotSuccessfullyInterpolated | `bool` | 即使未成功插值也进行渲染 |
| m_nInterpolationLatchDirtyFlags | `int32[2]` | 插值锁标志 |
| m_ListEntry | `uint16[11]` | 列表条目 |
| m_flCreateTime | `GameTime_t` | 创建时间 |
| m_flSpeed | `float32` | 速度 |
| m_EntClientFlags | `uint16` | 客户端标志 |
| m_bClientSideRagdoll | `bool` | 是否为客户端布娃娃 |
| m_iTeamNum | `uint8` | 队伍编号 |
| m_spawnflags | `uint32` | 生成标志 |
| m_nNextThinkTick | `GameTick_t` | 下一次思考的tick |
| m_fFlags | `uint32` | 标志 |
| m_vecAbsVelocity | `Vector` | 绝对速度 |
| m_vecVelocity | `CNetworkVelocityVector` | 速度向量 |
| m_vecBaseVelocity | `Vector` | 基础速度 |
| m_hEffectEntity | `CHandle<C_BaseEntity>` | 效果实体句柄 |
| m_hOwnerEntity | `CHandle<C_BaseEntity>` | 所有者实体句柄 |
| m_MoveCollide | `MoveCollide_t` | 移动碰撞类型 |
| m_MoveType | `MoveType_t` | 移动类型 |
| m_nActualMoveType | `MoveType_t` | 实际移动类型 |
| m_flWaterLevel | `float32` | 水位 |
| m_fEffects | `uint32` | 效果标志 |
| m_hGroundEntity | `CHandle<C_BaseEntity>` | 地面实体句柄 |
| m_nGroundBodyIndex | `int32` | 地面身体索引 |
| m_flFriction | `float32` | 摩擦力 |
| m_flElasticity | `float32` | 弹性 |
| m_flGravityScale | `float32` | 重力比例 |
| m_flTimeScale | `float32` | 时间比例 |
| m_bAnimatedEveryTick | `bool` | 每个tick都进行动画更新 |
| m_flNavIgnoreUntilTime | `GameTime_t` | 忽略导航的时间 |
| m_hThink | `uint16` | 思考函数句柄 |
| m_fBBoxVisFlags | `uint8` | 边界框可视化标志 |
| m_bPredictable | `bool` | 是否可预测 |
| m_bRenderWithViewModels | `bool` | 是否与视图模型一起渲染 |
| m_nSplitUserPlayerPredictionSlot | `CSplitScreenSlot` | 分屏玩家预测槽 |
| m_nFirstPredictableCommand | `int32` | 第一个可预测的命令 |
| m_nLastPredictableCommand | `int32` | 最后一个可预测的命令 |
| m_hOldMoveParent | `CHandle<C_BaseEntity>` | 旧移动父实体句柄 |
| m_Particles | `CParticleProperty` | 粒子属性 |
| m_vecPredictedScriptFloats | `CUtlVector<float32>` | 预测脚本浮点值 |
| m_vecPredictedScriptFloatIDs | `CUtlVector<int32>` | 预测脚本浮点ID |
| m_nNextScriptVarRecordID | `int32` | 下一个脚本变量记录ID |
| m_vecAngVelocity | `QAngle` | 角速度 |
| m_DataChangeEventRef | `int32` | 数据变更事件引用 |
| m_dependencies | `CUtlVector<CEntityHandle>` | 依赖实体列表 |
| m_nCreationTick | `int32` | 创建时的tick |
| m_bAnimTimeChanged | `bool` | 动画时间是否改变 |
| m_bSimulationTimeChanged | `bool` | 模拟时间是否改变 |
| m_sUniqueHammerID | `CUtlString` | 唯一的Hammer ID |
| m_nBloodType | `BloodType` | 血液类型 |


### CCSPlayerController

`CCSPlayerController` 是CS2中的一个类，用于处理玩家控制器相关的逻辑。

| 属性名 | 类型 | 描述 |
|--------|------|------|
| m_pInGameMoneyServices | `nint` | 指向游戏内货币服务的指针 |
| m_pInventoryServices | `nint` | 指向库存服务的指针 |
| m_pActionTrackingServices | `nint` | 指向动作跟踪服务的指针 |
| m_pDamageServices | `nint` | 指向伤害服务的指针 |
| m_iPing | `uint32` | 玩家当前的网络延迟（毫秒） |
| m_bHasCommunicationAbuseMute | `bool` | 指示玩家是否因滥用通信而被静音 |
| m_szCrosshairCodes | `CUtlSymbolLarge` | 玩家自定义准星代码 |
| m_iPendingTeamNum | `uint8` | 待加入的队伍编号 |
| m_flForceTeamTime | `GameTime_t` | 强制加入队伍的时间 |
| m_iCompTeammateColor | `int32` | 竞技模式中队友的颜色 |
| m_bEverPlayedOnTeam | `bool` | 指示玩家是否曾在队伍中游戏 |
| m_flPreviousForceJoinTeamTime | `GameTime_t` | 之前强制加入队伍的时间 |
| m_szClan | `CUtlSymbolLarge` | 玩家所属的战队 |
| m_sSanitizedPlayerName | `CUtlString` | 清理后的玩家名称 |
| m_iCoachingTeam | `int32` | 玩家当前指导的队伍 |
| m_nPlayerDominated | `uint64` | 被玩家支配的玩家列表 |
| m_nPlayerDominatingMe | `uint64` | 支配玩家的列表 |
| m_iCompetitiveRanking | `int32` | 玩家在竞技模式中的排名 |
| m_iCompetitiveWins | `int32` | 玩家在竞技模式中的胜利次数 |
| m_iCompetitiveRankType | `int8` | 竞技排名类型 |
| m_iCompetitiveRankingPredicted_Win | `int32` | 预测的胜利排名 |
| m_iCompetitiveRankingPredicted_Loss | `int32` | 预测的失败排名 |
| m_iCompetitiveRankingPredicted_Tie | `int32` | 预测的平局排名 |
| m_nEndMatchNextMapVote | `int32` | 比赛结束时的下一个地图投票 |
| m_unActiveQuestId | `uint16` | 当前活跃任务的 ID |
| m_nQuestProgressReason | `QuestProgress::Reason` | 任务进度的原因 |
| m_unPlayerTvControlFlags | `uint32` | 玩家电视控制标志 |
| m_iDraftIndex | `int32` | 草稿索引 |
| m_msQueuedModeDisconnectionTimestamp | `uint32` | 排队模式断开连接的时间戳 |
| m_uiAbandonRecordedReason | `uint32` | 放弃记录的原因 |
| m_bCannotBeKicked | `bool` | 指示玩家是否不能被踢出 |
| m_bEverFullyConnected | `bool` | 指示玩家是否曾完全连接 |
| m_bAbandonAllowsSurrender | `bool` | 指示放弃是否允许投降 |
| m_bAbandonOffersInstantSurrender | `bool` | 指示放弃是否提供即时投降 |
| m_bDisconnection1MinWarningPrinted | `bool` | 指示是否打印了断开连接 1 分钟警告 |
| m_bScoreReported | `bool` | 指示分数是否已报告 |
| m_nDisconnectionTick | `int32` | 断开连接时的服务器tick |
| m_bControllingBot | `bool` | 指示玩家是否在控制机器人 |
| m_bHasControlledBotThisRound | `bool` | 指示玩家是否在本回合控制过机器人 |
| m_bHasBeenControlledByPlayerThisRound | `bool` | 指示玩家是否在本回合被其他玩家控制过 |
| m_nBotsControlledThisRound | `int32` | 本回合控制的机器人数量 |
| m_bCanControlObservedBot | `bool` | 指示玩家是否可以控制观察到的机器人 |
| m_hPlayerPawn | `CHandle<C_CSPlayerPawn>` | 玩家角色的句柄 |
| m_hObserverPawn | `CHandle<C_CSObserverPawn>` | 观察者角色的句柄 |
| m_bPawnIsAlive | `bool` | 指示玩家角色是否存活 |
| m_iPawnHealth | `uint32` | 玩家角色的健康值 |
| m_iPawnArmor | `int32` | 玩家角色的护甲值 |
| m_bPawnHasDefuser | `bool` | 指示玩家角色是否有拆弹器 |
| m_bPawnHasHelmet | `bool` | 指示玩家角色是否有头盔 |
| m_nPawnCharacterDefIndex | `uint16` | 玩家角色的角色定义索引 |
| m_iPawnLifetimeStart | `int32` | 玩家角色的生命开始时间 |
| m_iPawnLifetimeEnd | `int32` | 玩家角色的生命结束时间 |
| m_iPawnBotDifficulty | `int32` | 玩家角色的机器人难度 |
| m_hOriginalControllerOfCurrentPawn | `CHandle<CCSPlayerController>` | 当前玩家角色的原始控制器句柄 |
| m_iScore | `int32` | 玩家得分 |
| m_recentKillQueue | `uint8[8]` | 最近击杀队列 |
| m_nFirstKill | `uint8` | 第一次击杀 |
| m_nKillCount | `uint8` | 击杀计数 |
| m_bMvpNoMusic | `bool` | 指示 MVP 是否没有音乐 |
| m_eMvpReason | `int32` | MVP 的原因 |
| m_iMusicKitID | `int32` | 音乐套件 ID |
| m_iMusicKitMVPs | `int32` | 音乐套件 MVP 数量 |
| m_iMVPs | `int32` | MVP 数量 |
| m_bIsPlayerNameDirty | `bool` | 指示玩家名称是否已更改 |
| m_bFireBulletsSeedSynchronized | `bool` | 指示子弹种子是否已同步 |

### C_CSPlayerPawn

`C_CSPlayerPawn` 是CS2中的一个类，用于处理玩家角色的相关逻辑。

| 属性名 | 类型 | 描述 |
|--------|------|------|
| m_pBulletServices | `CCSPlayer_BulletServices*` | 子弹服务指针 |
| m_pHostageServices | `CCSPlayer_HostageServices*` | 人质服务指针 |
| m_pBuyServices | `CCSPlayer_BuyServices*` | 购买服务指针 |
| m_pGlowServices | `CCSPlayer_GlowServices*` | 发光服务指针 |
| m_pActionTrackingServices | `CCSPlayer_ActionTrackingServices*` | 行为跟踪服务指针 |
| m_pDamageReactServices | `CCSPlayer_DamageReactServices*` | 伤害反应服务指针 |
| m_flHealthShotBoostExpirationTime | `GameTime_t` | 健康注射剂增益到期时间 |
| m_flLastFiredWeaponTime | `GameTime_t` | 最后一次开火时间 |
| m_bHasFemaleVoice | `bool` | 是否有女性语音 |
| m_flLandingTimeSeconds | `float32` | 着陆时间（秒） |
| m_flOldFallVelocity | `float32` | 旧的下落速度 |
| m_szLastPlaceName | `char[18]` | 最后一个地点名称 |
| m_bPrevDefuser | `bool` | 上一次是否携带拆弹器 |
| m_bPrevHelmet | `bool` | 上一次是否佩戴头盔 |
| m_nPrevArmorVal | `int32` | 上一次的护甲值 |
| m_nPrevGrenadeAmmoCount | `int32` | 上一次的手榴弹弹药数量 |
| m_unPreviousWeaponHash | `uint32` | 上一次武器的哈希值 |
| m_unWeaponHash | `uint32` | 当前武器的哈希值 |
| m_bInBuyZone | `bool` | 是否处于购买区域 |
| m_bPreviouslyInBuyZone | `bool` | 上一次是否处于购买区域 |
| m_aimPunchAngle | `QAngle` | 瞄准冲击角度 |
| m_aimPunchAngleVel | `QAngle` | 瞄准冲击角度速度 |
| m_aimPunchTickBase | `int32` | 后坐力计算基准tick |
| m_aimPunchTickFraction | `float32` | 后坐力计算的tick插值 |
| m_aimPunchCache | `CUtlVector<QAngle>` | 瞄准冲击缓存 |
| m_bInLanding | `bool` | 是否处于着陆状态 |
| m_flLandingStartTime | `float32` | 着陆开始时间 |
| m_bInHostageRescueZone | `bool` | 是否处于人质救援区域 |
| m_bInBombZone | `bool` | 是否处于炸弹区域 |
| m_bIsBuyMenuOpen | `bool` | 购买菜单是否打开 |
| m_flTimeOfLastInjury | `GameTime_t` | 最后一次受伤时间 |
| m_flNextSprayDecalTime | `GameTime_t` | 下一次喷漆时间 |
| m_iRetakesOffering | `int32` | 重赛提供的物品 |
| m_iRetakesOfferingCard | `int32` | 重赛提供的卡片 |
| m_bRetakesHasDefuseKit | `bool` | 是否有重赛提供的拆弹器 |
| m_bRetakesMVPLastRound | `bool` | 上一轮是否为MVP |
| m_iRetakesMVPBoostItem | `int32` | 重赛MVP增益物品 |
| m_RetakesMVPBoostExtraUtility | `loadout_slot_t` | 重赛MVP增益额外道具 |
| m_bNeedToReApplyGloves | `bool` | 是否需要重新应用手套 |
| m_EconGloves | `C_EconItemView` | 经济手套 |
| m_nEconGlovesChanged | `uint8` | 经济手套变更标志 |
| m_bMustSyncRagdollState | `bool` | 是否需要同步布娃娃状态 |
| m_nRagdollDamageBone | `int32` | 布娃娃受伤的骨骼编号 |
| m_vRagdollDamageForce | `Vector` | 布娃娃受伤的力 |
| m_vRagdollDamagePosition | `Vector` | 布娃娃受伤的位置 |
| m_szRagdollDamageWeaponName | `char[64]` | 布娃娃受伤的武器名称 |
| m_bRagdollDamageHeadshot | `bool` | 布娃娃是否被爆头 |
| m_vRagdollServerOrigin | `Vector` | 布娃娃服务器的起始位置 |
| m_bLastHeadBoneTransformIsValid | `bool` | 上一次头部骨骼变换是否有效 |
| m_lastLandTime | `GameTime_t` | 上一次着陆时间 |
| m_bOnGroundLastTick | `bool` | 上一次是否在地面上 |
| m_qDeathEyeAngles | `QAngle` | 死亡时眼睛的角度 |
| m_bSkipOneHeadConstraintUpdate | `bool` | 是否跳过一次头部约束更新 |
| m_bLeftHanded | `bool` | 是否为左撇子 |
| m_fSwitchedHandednessTime | `GameTime_t` | 切换左右手的时间 |
| m_flViewmodelOffsetX | `float32` | 视角模型偏移X |
| m_flViewmodelOffsetY | `float32` | 视角模型偏移Y |
| m_flViewmodelOffsetZ | `float32` | 视角模型偏移Z |
| m_flViewmodelFOV | `float32` | 视角模型视野 |
| m_vecPlayerPatchEconIndices | `uint32[5]` | 玩家补丁经济索引 |
| m_GunGameImmunityColor | `Color` | 枪战模式免疫颜色 |
| m_vecBulletHitModels | `CUtlVector<C_BulletHitModel*>` | 子弹击中模型列表 |
| m_bIsWalking | `bool` | 是否在行走 |
| m_thirdPersonHeading | `QAngle` | 第三人称视角方向 |
| m_flSlopeDropOffset | `float32` | 斜坡下落偏移 |
| m_flSlopeDropHeight | `float32` | 斜坡下落高度 |
| m_vHeadConstraintOffset | `Vector` | 头部约束偏移 |
| m_entitySpottedState | `EntitySpottedState_t` | 实体被发现状态 |
| m_bIsScoped | `bool` | 是否处于瞄准镜中 |
| m_bResumeZoom | `bool` | 是否恢复放大 |
| m_bIsDefusing | `bool` | 是否正在拆弹 |
| m_bIsGrabbingHostage | `bool` | 是否正在抓人质 |
| m_iBlockingUseActionInProgress | `CSPlayerBlockingUseAction_t` | 阻止使用动作进行中 |
| m_flEmitSoundTime | `GameTime_t` | 发出声音的时间 |
| m_bInNoDefuseArea | `bool` | 是否处于无拆弹区域 |
| m_nWhichBombZone | `int32` | 哪个炸弹区域 |
| m_iShotsFired | `int32` | 射击次数 |
| m_flFlinchStack | `float32` | 躲闪堆叠值 |
| m_flVelocityModifier | `float32` | 速度修改器 |
| m_flHitHeading | `float32` | 被击中方向 |
| m_nHitBodyPart | `int32` | 被击中的身体部位 |
| m_bWaitForNoAttack | `bool` | 是否等待无攻击 |
| m_ignoreLadderJumpTime | `float32` | 忽略梯子跳跃时间 |
| m_bKilledByHeadshot | `bool` | 是否被爆头击杀 |
| m_ArmorValue | `int32` | 护甲值 |
| m_unCurrentEquipmentValue | `uint16` | 当前装备价值 |
| m_unRoundStartEquipmentValue | `uint16` | 回合开始时的装备价值 |
| m_unFreezetimeEndEquipmentValue | `uint16` | 冻结时间结束时的装备价值 |
| m_nLastKillerIndex | `CEntityIndex` | 上一次击杀者的索引 |
| m_bOldIsScoped | `bool` | 上一次是否处于瞄准镜中 |
| m_bHasDeathInfo | `bool` | 是否有死亡信息 |
| m_flDeathInfoTime | `float32` | 死亡信息时间 |
| m_vecDeathInfoOrigin | `Vector` | 死亡信息位置 |
| m_grenadeParameterStashTime | `GameTime_t` | 手榴弹参数存储时间 |
| m_bGrenadeParametersStashed | `bool` | 手榴弹参数是否已存储 |
| m_angStashedShootAngles | `QAngle` | 存储的射击角度 |
| m_vecStashedGrenadeThrowPosition | `Vector` | 存储的手榴弹投掷位置 |
| m_vecStashedVelocity | `Vector` | 存储的速度 |
| m_angShootAngleHistory | `QAngle[2]` | 射击角度历史 |
| m_vecThrowPositionHistory | `Vector[2]` | 投掷位置历史 |
| m_vecVelocityHistory | `Vector[2]` | 速度历史 |
| m_PredictedDamageTags | `PredictedDamageTag_t` | 预测伤害标签 |
| m_nPrevHighestReceivedDamageTagTick | `GameTick_t` | 上一次收到的最高伤害标签计时 |
| m_nHighestAppliedDamageTagTick | `int32` | 应用的最高伤害标签计时 |

### CBasePlayerController

`CBasePlayerController` 是CS2中的一个类，用于处理玩家控制器相关的逻辑。

| 属性名 | 类型 | 描述 |
|--------|------|------|
| m_nFinalPredictedTick | `int32` | 最终预测的服务器tick |
| m_CommandContext | `C_CommandContext` | 命令上下文 |
| m_nInButtonsWhichAreToggles | `uint64` | 切换的按钮 |
| m_nTickBase | `uint32` | 用于指令预测的基准tick |
| m_hPawn | `CHandle<C_BasePlayerPawn>` | 玩家角色的句柄 |
| m_bKnownTeamMismatch | `bool` | 是否已知队伍不匹配 |
| m_hPredictedPawn | `CHandle<C_BasePlayerPawn>` | 预测的玩家角色句柄 |
| m_nSplitScreenSlot | `CSplitScreenSlot` | 分屏槽位 |
| m_hSplitOwner | `CHandle<CBasePlayerController>` | 分屏所有者的句柄 |
| m_hSplitScreenPlayers | `CBasePlayerController` | 分屏玩家的句柄向量 |
| m_bIsHLTV | `bool` | 是否为HLTV |
| m_iConnected | `PlayerConnectedState` | 连接状态 |
| m_iszPlayerName | `char[128]` | 玩家名称 |
| m_steamID | `uint64` | Steam ID |
| m_bIsLocalPlayerController | `bool` | 是否为本地玩家控制器 |
| m_iDesiredFOV | `uint32` | 期望的视野 |

### C_BasePlayerPawn

`C_BasePlayerPawn` 是CS2中的一个类，用于处理玩家角色的基础逻辑。

| 属性名 | 类型 | 描述 |
|--------|------|------|
| m_pWeaponServices | `nint` | 指向武器服务的指针 |
| m_pItemServices | `nint` | 指向物品服务的指针 |
| m_pAutoaimServices | `nint` | 指向自动瞄准服务的指针 |
| m_pObserverServices | `nint` | 指向观察者服务的指针 |
| m_pWaterServices | `nint` | 指向水体服务的指针 |
| m_pUseServices | `nint` | 指向使用服务的指针 |
| m_pFlashlightServices | `nint` | 指向闪光灯服务的指针 |
| m_pCameraServices | `nint` | 指向相机服务的指针 |
| m_pMovementServices | `nint` | 指向移动服务的指针 |
| m_ServerViewAngleChanges | `ViewAngleServerChange_t` | 服务器视角变化 |
| m_nHighestConsumedServerViewAngleChangeIndex | `uint32` | 最高消耗的服务器视角变化索引 |
| v_angle | `QAngle` | 视角 |
| v_anglePrevious | `QAngle` | 之前的视角 |
| m_iHideHUD | `uint32` | 隐藏HUD |
| m_skybox3d | `sky3dparams_t` | 3D天空盒参数 |
| m_flDeathTime | `GameTime_t` | 死亡时间 |
| m_vecPredictionError | `Vector` | 预测误差 |
| m_flPredictionErrorTime | `GameTime_t` | 预测误差时间 |
| m_vecLastCameraSetupLocalOrigin | `Vector` | 上次相机设置的本地原点 |
| m_flLastCameraSetupTime | `GameTime_t` | 上次相机设置时间 |
| m_flFOVSensitivityAdjust | `float32` | 视野灵敏度调整 |
| m_flMouseSensitivity | `float32` | 鼠标灵敏度 |
| m_vOldOrigin | `Vector` | 旧的原点 |
| m_flOldSimulationTime | `float32` | 旧的模拟时间 |
| m_nLastExecutedCommandNumber | `int32` | 上次执行的命令编号 |
| m_nLastExecutedCommandTick | `int32` | 最后执行命令的服务器tick |
| m_hController | `CHandle<CBasePlayerController>` | 控制器句柄 |
| m_bIsSwappingToPredictableController | `bool` | 是否正在切换到可预测的控制器 |

### C_CSPlayerPawnBase

`C_CSPlayerPawnBase` 是CS2中的一个类，用于处理玩家角色的基础逻辑。

| 属性名 | 类型 | 描述 |
|--------|------|------|
| m_pPingServices | `CCSPlayer_PingServices*` | 玩家延迟服务指针 |
| m_pViewModelServices | `CPlayer_ViewModelServices*` | 玩家视图模型服务指针 |
| m_fRenderingClipPlane | `float32[4]` | 渲染裁剪平面 |
| m_nLastClipPlaneSetupFrame | `int32` | 上一次裁剪平面设置的帧数 |
| m_vecLastClipCameraPos | `Vector` | 上一次裁剪相机位置 |
| m_vecLastClipCameraForward | `Vector` | 上一次裁剪相机前方向量 |
| m_bClipHitStaticWorld | `bool` | 是否裁剪到静态世界 |
| m_bCachedPlaneIsValid | `bool` | 缓存的裁剪平面是否有效 |
| m_pClippingWeapon | `C_CSWeaponBase*` | 裁剪武器指针 |
| m_previousPlayerState | `CSPlayerState` | 上一个玩家状态 |
| m_iPlayerState | `CSPlayerState` | 当前玩家状态 |
| m_bIsRescuing | `bool` | 是否正在救援 |
| m_fImmuneToGunGameDamageTime | `GameTime_t` | 免疫枪战模式伤害的时间 |
| m_fImmuneToGunGameDamageTimeLast | `GameTime_t` | 上一次免疫枪战模式伤害的时间 |
| m_bGunGameImmunity | `bool` | 是否免疫枪战模式伤害 |
| m_bHasMovedSinceSpawn | `bool` | 自从重生后是否移动过 |
| m_fMolotovUseTime | `float32` | 使用燃烧瓶的时间 |
| m_fMolotovDamageTime | `float32` | 燃烧瓶伤害时间 |
| m_iThrowGrenadeCounter | `int32` | 手榴弹投掷计数 |
| m_flLastSpawnTimeIndex | `GameTime_t` | 上一次重生时间索引 |
| m_iProgressBarDuration | `int32` | 进度条持续时间 |
| m_flProgressBarStartTime | `float32` | 进度条开始时间 |
| m_vecIntroStartEyePosition | `Vector` | 开场动画开始时的眼睛位置 |
| m_vecIntroStartPlayerForward | `Vector` | 开场动画开始时玩家的前方向量 |
| m_flClientDeathTime | `GameTime_t` | 客户端死亡时间 |
| m_bScreenTearFrameCaptured | `bool` | 是否捕获了屏幕撕裂帧 |
| m_flFlashBangTime | `float32` | 闪光弹时间 |
| m_flFlashScreenshotAlpha | `float32` | 闪光弹截图透明度 |
| m_flFlashOverlayAlpha | `float32` | 闪光弹覆盖层透明度 |
| m_bFlashBuildUp | `bool` | 是否正在累积闪光效果 |
| m_bFlashDspHasBeenCleared | `bool` | 是否清除过闪光DSP效果 |
| m_bFlashScreenshotHasBeenGrabbed | `bool` | 是否抓取过闪光截图 |
| m_flFlashMaxAlpha | `float32` | 闪光最大透明度 |
| m_flFlashDuration | `float32` | 闪光持续时间 |
| m_iHealthBarRenderMaskIndex | `int32` | 生命条渲染遮罩索引 |
| m_flHealthFadeValue | `float32` | 生命值渐隐值 |
| m_flHealthFadeAlpha | `float32` | 生命值渐隐透明度 |
| m_flDeathCCWeight | `float32` | 死亡交叉权重 |
| m_flPrevRoundEndTime | `float32` | 上一轮结束时间 |
| m_flPrevMatchEndTime | `float32` | 上一场比赛结束时间 |
| m_angEyeAngles | `QAngle` | 眼睛角度 |
| m_fNextThinkPushAway | `float32` | 下一次推开思考时间 |
| m_bShouldAutobuyDMWeapons | `bool` | 是否自动购买死亡竞赛武器 |
| m_bShouldAutobuyNow | `bool` | 是否现在自动购买 |
| m_iIDEntIndex | `CEntityIndex` | 目标实体索引 |
| m_delayTargetIDTimer | `CountdownTimer` | 延迟目标ID计时器 |
| m_iTargetItemEntIdx | `CEntityIndex` | 目标物品实体索引 |
| m_iOldIDEntIndex | `CEntityIndex` | 旧目标实体索引 |
| m_holdTargetIDTimer | `CountdownTimer` | 持有目标ID计时器 |
| m_flCurrentMusicStartTime | `float32` | 当前音乐开始时间 |
| m_flMusicRoundStartTime | `float32` | 音乐回合开始时间 |
| m_bDeferStartMusicOnWarmup | `bool` | 是否在热身时延迟开始音乐 |
| m_cycleLatch | `int32` | 循环锁 |
| m_serverIntendedCycle | `float32` | 服务器期望的循环 |
| m_flLastSmokeOverlayAlpha | `float32` | 上一次烟雾覆盖层透明度 |
| m_flLastSmokeAge | `float32` | 上一次烟雾年龄 |
| m_vLastSmokeOverlayColor | `Vector` | 上一次烟雾覆盖层颜色 |
| m_nPlayerSmokedFx | `ParticleIndex_t` | 玩家被烟雾效果索引 |
| m_nPlayerInfernoBodyFx | `ParticleIndex_t` | 玩家地狱火身体效果索引 |
| m_nPlayerInfernoFootFx | `ParticleIndex_t` | 玩家地狱火脚部效果索引 |
| m_flNextMagDropTime | `float32` | 下一次弹匣掉落时间 |
| m_nLastMagDropAttachmentIndex | `int32` | 上一次弹匣掉落的附件索引 |
| m_vecLastAliveLocalVelocity | `Vector` | 上一次存活时的本地速度 |
| m_bGuardianShouldSprayCustomXMark | `bool` | 是否应该喷射自定义X标记 |
| m_hOriginalController | `CHandle<CCSPlayerController>` | 原始控制器句柄 |
| m_aimPunchTickBase | `int32` | 后坐力计算基准tick |
| m_aimPunchTickFraction | `float32` | 后坐力计算的tick插值 |



### C_CSGameRules

`C_CSGameRules` 是CS2中的一个类，用于处理游戏规则相关的逻辑。

| 属性名 | 类型 | 描述 |
|--------|------|------|
| m_bFreezePeriod | `bool` | 是否处于冻结时间 |
| m_bWarmupPeriod | `bool` | 是否处于热身时间 |
| m_fWarmupPeriodEnd | `GameTime_t` | 热身时间结束时间 |
| m_fWarmupPeriodStart | `GameTime_t` | 热身时间开始时间 |
| m_bServerPaused | `bool` | 服务器是否暂停 |
| m_bTerroristTimeOutActive | `bool` | 恐怖分子是否处于暂停时间 |
| m_bCTTimeOutActive | `bool` | 反恐精英是否处于暂停时间 |
| m_flTerroristTimeOutRemaining | `float32` | 恐怖分子剩余暂停时间 |
| m_flCTTimeOutRemaining | `float32` | 反恐精英剩余暂停时间 |
| m_nTerroristTimeOuts | `int32` | 恐怖分子暂停次数 |
| m_nCTTimeOuts | `int32` | 反恐精英暂停次数 |
| m_bTechnicalTimeOut | `bool` | 是否处于技术暂停 |
| m_bMatchWaitingForResume | `bool` | 比赛是否等待恢复 |
| m_iRoundTime | `int32` | 当前回合时间 |
| m_fMatchStartTime | `float32` | 比赛开始时间 |
| m_fRoundStartTime | `GameTime_t` | 回合开始时间 |
| m_flRestartRoundTime | `GameTime_t` | 回合重启的服务器时间 |
| m_bGameRestart | `bool` | 是否重启游戏 |
| m_flGameStartTime | `float32` | 游戏开始时间 |
| m_timeUntilNextPhaseStarts | `float32` | 下一阶段开始前的时间 |
| m_gamePhase | `int32` | 当前游戏阶段 |
| m_totalRoundsPlayed | `int32` | 总回合数 |
| m_nRoundsPlayedThisPhase | `int32` | 当前阶段已玩回合数 |
| m_nOvertimePlaying | `int32` | 加时赛次数 |
| m_iHostagesRemaining | `int32` | 剩余人质数量 |
| m_bAnyHostageReached | `bool` | 是否有人质被救 |
| m_bMapHasBombTarget | `bool` | 地图是否有炸弹目标 |
| m_bMapHasRescueZone | `bool` | 地图是否有救援区域 |
| m_bMapHasBuyZone | `bool` | 地图是否有购买区域 |
| m_bIsQueuedMatchmaking | `bool` | 是否排队匹配 |
| m_nQueuedMatchmakingMode | `int32` | 排队匹配模式 |
| m_bIsValveDS | `bool` | 是否为Valve服务器 |
| m_bLogoMap | `bool` | 是否为标志地图 |
| m_bPlayAllStepSoundsOnServer | `bool` | 是否在服务器上播放所有脚步声 |
| m_iSpectatorSlotCount | `int32` | 观众席位数量 |
| m_MatchDevice | `int32` | 比赛设备 |
| m_bHasMatchStarted | `bool` | 比赛是否已开始 |
| m_nNextMapInMapgroup | `int32` | 地图组中的下一个地图 |
| m_szTournamentEventName | `char[512]` | 锦标赛事件名称 |
| m_szTournamentEventStage | `char[512]` | 锦标赛事件阶段 |
| m_szMatchStatTxt | `char[512]` | 比赛统计文本 |
| m_szTournamentPredictionsTxt | `char[512]` | 锦标赛预测文本 |
| m_nTournamentPredictionsPct | `int32` | 锦标赛预测百分比 |
| m_flCMMItemDropRevealStartTime | `GameTime_t` | CMM物品掉落揭示开始时间 |
| m_flCMMItemDropRevealEndTime | `GameTime_t` | CMM物品掉落揭示结束时间 |
| m_bIsDroppingItems | `bool` | 是否掉落物品 |
| m_bIsQuestEligible | `bool` | 是否符合任务条件 |
| m_bIsHltvActive | `bool` | 是否激活HLTV |
| m_arrProhibitedItemIndices | `uint16[100]` | 禁止物品索引数组 |
| m_arrTournamentActiveCasterAccounts | `uint32[4]` | 锦标赛活跃解说账户 |
| m_numBestOfMaps | `int32` | 最佳地图数量 |
| m_nHalloweenMaskListSeed | `int32` | 万圣节面具列表种子 |
| m_bBombDropped | `bool` | 炸弹是否掉落 |
| m_bBombPlanted | `bool` | 炸弹是否被放置 |
| m_iRoundWinStatus | `int32` | 当前回合胜利状态 |
| m_eRoundWinReason | `int32` | 回合胜利原因 |
| m_bTCantBuy | `bool` | 恐怖分子是否无法购买 |
| m_bCTCantBuy | `bool` | 反恐精英是否无法购买 |
| m_iMatchStats_RoundResults | `int32[30]` | 比赛统计 - 回合结果 |
| m_iMatchStats_PlayersAlive_CT | `int32[30]` | 比赛统计 - 反恐精英存活玩家 |
| m_iMatchStats_PlayersAlive_T | `int32[30]` | 比赛统计 - 恐怖分子存活玩家 |
| m_TeamRespawnWaveTimes | `float32[32]` | 队伍复活波次时间 |
| m_flNextRespawnWave | `GameTime_t[32]` | 下一次复活波次时间 |
| m_nServerQuestID | `int32` | 服务器任务ID |
| m_vMinimapMins | `Vector` | 小地图最小范围 |
| m_vMinimapMaxs | `Vector` | 小地图最大范围 |
| m_MinimapVerticalSectionHeights | `float32[8]` | 小地图垂直部分高度 |
| m_bSpawnedTerrorHuntHeavy | `bool` | 是否生成恐怖猎杀重型单位 |
| m_nEndMatchMapGroupVoteTypes | `int32[10]` | 结束比赛地图组投票类型 |
| m_nEndMatchMapGroupVoteOptions | `int32[10]` | 结束比赛地图组投票选项 |
| m_nEndMatchMapVoteWinner | `int32` | 结束比赛地图投票胜者 |
| m_iNumConsecutiveCTLoses | `int32` | 连续反恐精英失败次数 |
| m_iNumConsecutiveTerroristLoses | `int32` | 连续恐怖分子失败次数 |
| m_bMarkClientStopRecordAtRoundEnd | `bool` | 是否在回合结束时标记客户端停止记录 |
| m_nMatchAbortedEarlyReason | `int32` | 提前终止比赛原因 |
| m_bHasTriggeredRoundStartMusic | `bool` | 是否触发回合开始音乐 |
| m_bSwitchingTeamsAtRoundReset | `bool` | 回合重置时是否切换队伍 |
| m_pGameModeRules | `CCSGameModeRules*` | 游戏模式规则指针 |
| m_RetakeRules | `C_RetakeGameRules` | 重新占领规则 |
| m_nMatchEndCount | `uint8` | 比赛结束计数 |
| m_nTTeamIntroVariant | `int32` | 恐怖分子队伍介绍变体 |
| m_nCTTeamIntroVariant | `int32` | 反恐精英队伍介绍变体 |
| m_bTeamIntroPeriod | `bool` | 是否处于队伍介绍阶段 |
| m_iRoundEndWinnerTeam | `int32` | 回合结束获胜队伍 |
| m_eRoundEndReason | `int32` | 回合结束原因 |
| m_bRoundEndShowTimerDefend | `bool` | 回合结束时是否显示防守计时器 |
| m_iRoundEndTimerTime | `int32` | 回合结束计时器时间 |
| m_sRoundEndFunFactToken | `CUtlString` | 回合结束趣味事实令牌 |
| m_iRoundEndFunFactPlayerSlot | `CPlayerSlot` | 回合结束趣味事实玩家位置 |
| m_iRoundEndFunFactData1 | `int32` | 回合结束趣味事实数据1 |
| m_iRoundEndFunFactData2 | `int32` | 回合结束趣味事实数据2 |
| m_iRoundEndFunFactData3 | `int32` | 回合结束趣味事实数据3 |
| m_sRoundEndMessage | `CUtlString` | 回合结束消息 |
| m_iRoundEndPlayerCount | `int32` | 回合结束玩家数量 |
| m_bRoundEndNoMusic | `bool` | 回合结束时是否无音乐 |
| m_iRoundEndLegacy | `int32` | 回合结束遗留 |
| m_nRoundEndCount | `uint8` | 回合结束计数 |
| m_iRoundStartRoundNumber | `int32` | 回合开始回合编号 |
| m_nRoundStartCount | `uint8` | 回合开始计数 |
| m_flLastPerfSampleTime | `float64` | 最后一次性能采样时间 |

### CCSPlayer_MovementServices

`CCSPlayer_MovementServices` 是CS2中的一个类，用于处理玩家移动相关的服务。

| 属性名 | 类型 | 描述 |
|--------|------|------|
| m_vecLadderNormal | `Vector` | 梯子法线向量 |
| m_nLadderSurfacePropIndex | `int32` | 梯子表面属性索引 |
| m_flDuckAmount | `float32` | 当前蹲伏程度 |
| m_flDuckSpeed | `float32` | 蹲伏速度 |
| m_bDuckOverride | `bool` | 是否强制蹲伏 |
| m_bDesiresDuck | `bool` | 是否想要蹲伏 |
| m_flDuckOffset | `float32` | 蹲伏偏移量 |
| m_nDuckTimeMsecs | `uint32` | 蹲伏时间(毫秒) |
| m_nDuckJumpTimeMsecs | `uint32` | 蹲伏跳跃时间(毫秒) |
| m_nJumpTimeMsecs | `uint32` | 跳跃时间(毫秒) |
| m_flLastDuckTime | `float32` | 上次蹲伏时间 |
| m_vecLastPositionAtFullCrouchSpeed | `Vector2D` | 最后一次全速蹲伏时的位置 |
| m_duckUntilOnGround | `bool` | 是否保持蹲伏直到着地 |
| m_bHasWalkMovedSinceLastJump | `bool` | 上次跳跃后是否有行走移动 |
| m_bInStuckTest | `bool` | 是否在进行卡住测试 |
| m_flStuckCheckTime | `float32[64][2]` | 卡住检查时间数组 |
| m_nTraceCount | `int32` | 追踪计数 |
| m_StuckLast | `int32` | 上次卡住状态 |
| m_bSpeedCropped | `bool` | 速度是否被裁剪 |
| m_flGroundMoveEfficiency | `float32` | 地面移动效率 |
| m_nOldWaterLevel | `int32` | 旧的水位等级 |
| m_flWaterEntryTime | `float32` | 进入水中的时间 |
| m_vecForward | `Vector` | 前方向量 |
| m_vecLeft | `Vector` | 左方向量 |
| m_vecUp | `Vector` | 上方向量 |
| m_nGameCodeHasMovedPlayerAfterCommand | `int32` | 命令后游戏代码是否移动了玩家 |
| m_bOldJumpPressed | `bool` | 上一帧是否按下跳跃键 |
| m_flJumpPressedTime | `float32` | 跳跃键按下的时间 |
| m_fStashGrenadeParameterWhen | `GameTime_t` | 存储手榴弹参数的时间 |
| m_nButtonDownMaskPrev | `uint64` | 上一帧按键状态掩码 |
| m_flOffsetTickCompleteTime | `float32` | 偏移tick完成时间 |
| m_flOffsetTickStashedSpeed | `float32` | 偏移tick存储的速度 |
| m_flStamina | `float32` | 体力值 |
| m_flHeightAtJumpStart | `float32` | 跳跃开始时的高度 |
| m_flMaxJumpHeightThisJump | `float32` | 当前跳跃的最大高度 |
| m_flMaxJumpHeightLastJump | `float32` | 上次跳跃的最大高度 |
| m_flStaminaAtJumpStart | `float32` | 跳跃开始时的体力值 |
| m_flAccumulatedJumpError | `float32` | 累积的跳跃误差 |

### CCSWeaponBaseVData

`CCSWeaponBaseVData` 包含了CS2武器的基本数据，如武器类型、模型路径、伤害值、精准度等属性。

| 属性名 | 类型 | 描述 |
|--------|------|------|
| m_WeaponType | `CSWeaponType` | 武器类型 |
| m_WeaponCategory | `CSWeaponCategory` | 武器类别 |
| m_szViewModel | `CResourceNameTyped` | 视图模型资源 |
| m_szPlayerModel | `CResourceNameTyped` | 玩家模型资源 |
| m_szWorldDroppedModel | `CResourceNameTyped` | 掉落在世界中的模型 |
| m_szAimsightLensMaskModel | `CResourceNameTyped` | 瞄准镜镜片遮罩模型 |
| m_szMagazineModel | `CResourceNameTyped` | 弹匣模型 |
| m_szHeatEffect | `CResourceNameTyped` | 热效应粒子 |
| m_szEjectBrassEffect | `CResourceNameTyped` | 弹壳弹出效果 |
| m_szMuzzleFlashParticleAlt | `CResourceNameTyped` | 备用枪口闪光粒子 |
| m_szMuzzleFlashThirdPersonParticle | `CResourceNameTyped` | 第三人称枪口闪光粒子 |
| m_szMuzzleFlashThirdPersonParticleAlt | `CResourceNameTyped` | 备用第三人称枪口闪光粒子 |
| m_szTracerParticle | `CResourceNameTyped` | 曳光弹粒子 |
| m_GearSlot | `gear_slot_t` | 装备槽位 |
| m_GearSlotPosition | `int32` | 装备槽位位置 |
| m_DefaultLoadoutSlot | `loadout_slot_t` | 默认装备槽位 |
| m_sWrongTeamMsg | `CUtlString` | 错误队伍提示消息 |
| m_nPrice | `int32` | 价格 |
| m_nKillAward | `int32` | 击杀奖励 |
| m_nPrimaryReserveAmmoMax | `int32` | 主武器最大备用弹药 |
| m_nSecondaryReserveAmmoMax | `int32` | 副武器最大备用弹药 |
| m_bMeleeWeapon | `bool` | 是否为近战武器 |
| m_bHasBurstMode | `bool` | 是否有连发模式 |
| m_bIsRevolver | `bool` | 是否为左轮手枪 |
| m_bCannotShootUnderwater | `bool` | 是否不能在水下射击 |
| m_szName | `CGlobalSymbol` | 武器名称 |
| m_szAnimExtension | `CUtlString` | 动画扩展名 |
| m_eSilencerType | `CSWeaponSilencerType` | 消音器类型 |
| m_nCrosshairMinDistance | `int32` | 准星最小距离 |
| m_nCrosshairDeltaDistance | `int32` | 准星增量距离 |
| m_bIsFullAuto | `bool` | 是否为全自动 |
| m_nNumBullets | `int32` | 子弹数量 |
| m_flCycleTime | `CFiringModeFloat` | 射击周期时间 |
| m_flMaxSpeed | `CFiringModeFloat` | 最大移动速度 |
| m_flSpread | `CFiringModeFloat` | 扩散度 |
| m_flInaccuracyCrouch | `CFiringModeFloat` | 蹲下时的不准确度 |
| m_flInaccuracyStand | `CFiringModeFloat` | 站立时的不准确度 |
| m_flInaccuracyJump | `CFiringModeFloat` | 跳跃时的不准确度 |
| m_flInaccuracyLand | `CFiringModeFloat` | 着陆时的不准确度 |
| m_flInaccuracyLadder | `CFiringModeFloat` | 梯子上的不准确度 |
| m_flInaccuracyFire | `CFiringModeFloat` | 射击时的不准确度 |
| m_flInaccuracyMove | `CFiringModeFloat` | 移动时的不准确度 |
| m_flRecoilAngle | `CFiringModeFloat` | 后坐力角度 |
| m_flRecoilAngleVariance | `CFiringModeFloat` | 后坐力角度变化 |
| m_flRecoilMagnitude | `CFiringModeFloat` | 后坐力大小 |
| m_flRecoilMagnitudeVariance | `CFiringModeFloat` | 后坐力大小变化 |
| m_nTracerFrequency | `CFiringModeInt` | 曳光弹频率 |
| m_flInaccuracyJumpInitial | `float32` | 初始跳跃不准确度 |
| m_flInaccuracyJumpApex | `float32` | 跳跃顶点不准确度 |
| m_flInaccuracyReload | `float32` | 装弹时的不准确度 |
| m_nRecoilSeed | `int32` | 后坐力种子 |
| m_nSpreadSeed | `int32` | 扩散种子 |
| m_flTimeToIdleAfterFire | `float32` | 射击后空闲时间 |
| m_flIdleInterval | `float32` | 空闲间隔 |
| m_flAttackMovespeedFactor | `float32` | 攻击移动速度因子 |
| m_flHeatPerShot | `float32` | 每次射击产生的热量 |
| m_flInaccuracyPitchShift | `float32` | 不准确度音高偏移 |
| m_flInaccuracyAltSoundThreshold | `float32` | 不准确度备用声音阈值 |
| m_flBotAudibleRange | `float32` | 机器人可听范围 |
| m_szUseRadioSubtitle | `CUtlString` | 使用无线电字幕 |
| m_bUnzoomsAfterShot | `bool` | 射击后是否取消缩放 |
| m_bHideViewModelWhenZoomed | `bool` | 缩放时是否隐藏视图模型 |
| m_nZoomLevels | `int32` | 缩放级别数量 |
| m_nZoomFOV1 | `int32` | 第一级缩放FOV |
| m_nZoomFOV2 | `int32` | 第二级缩放FOV |
| m_flZoomTime0 | `float32` | 缩放时间0 |
| m_flZoomTime1 | `float32` | 缩放时间1 |
| m_flZoomTime2 | `float32` | 缩放时间2 |
| m_flIronSightPullUpSpeed | `float32` | 机械瞄准抬起速度 |
| m_flIronSightPutDownSpeed | `float32` | 机械瞄准放下速度 |
| m_flIronSightFOV | `float32` | 机械瞄准FOV |
| m_flIronSightPivotForward | `float32` | 机械瞄准前轴心 |
| m_flIronSightLooseness | `float32` | 机械瞄准松散度 |
| m_angPivotAngle | `QAngle` | 轴心角度 |
| m_vecIronSightEyePos | `Vector` | 机械瞄准眼睛位置 |
| m_nDamage | `int32` | 伤害值 |
| m_flHeadshotMultiplier | `float32` | 爆头伤害倍数 |
| m_flArmorRatio | `float32` | 护甲比率 |
| m_flPenetration | `float32` | 穿透力 |
| m_flRange | `float32` | 射程 |
| m_flRangeModifier | `float32` | 射程修正 |
| m_flFlinchVelocityModifierLarge | `float32` | 大幅闪避速度修正 |
| m_flFlinchVelocityModifierSmall | `float32` | 小幅闪避速度修正 |
| m_flRecoveryTimeCrouch | `float32` | 蹲下恢复时间 |
| m_flRecoveryTimeStand | `float32` | 站立恢复时间 |
| m_flRecoveryTimeCrouchFinal | `float32` | 蹲下最终恢复时间 |
| m_flRecoveryTimeStandFinal | `float32` | 站立最终恢复时间 |
| m_nRecoveryTransitionStartBullet | `int32` | 恢复过渡开始子弹 |
| m_nRecoveryTransitionEndBullet | `int32` | 恢复过渡结束子弹 |
| m_flThrowVelocity | `float32` | 投掷速度 |
| m_vSmokeColor | `Vector` | 烟雾颜色 |
| m_szAnimClass | `CGlobalSymbol` | 动画类 |

### CSPerRoundStats_t

`CSPerRoundStats_t` 是CS2中用于记录每回合玩家统计数据的结构。

| 属性名 | 类型 | 描述 |
|--------|------|------|
| m_iKills | `int32` | 击杀数 |
| m_iDeaths | `int32` | 死亡数 |
| m_iAssists | `int32` | 助攻数 |
| m_iDamage | `int32` | 造成的伤害 |
| m_iEquipmentValue | `int32` | 装备价值 |
| m_iMoneySaved | `int32` | 节省的金钱 |
| m_iKillReward | `int32` | 击杀奖励 |
| m_iLiveTime | `int32` | 存活时间 |
| m_iHeadShotKills | `int32` | 爆头击杀数 |
| m_iObjective | `int32` | 目标完成数 |
| m_iCashEarned | `int32` | 获得的金钱 |
| m_iUtilityDamage | `int32` | 道具造成的伤害 |
| m_iEnemiesFlashed | `int32` | 闪光弹致盲的敌人数量 |

### C_BaseModelEntity

`C_BaseModelEntity` 是CS2中的一个基础模型实体类，包含了渲染、碰撞、发光等相关属性。

| 属性名 | 类型 | 描述 |
|--------|------|------|
| m_CRenderComponent | `CRenderComponent*` | 渲染组件指针 |
| m_CHitboxComponent | `CHitboxComponent` | 碰撞箱组件 |
| m_LastHitGroup | `HitGroup_t` | 最后被击中的部位 |
| m_bInitModelEffects | `bool` | 是否初始化模型效果 |
| m_bIsStaticProp | `bool` | 是否为静态道具 |
| m_nLastAddDecal | `int32` | 最后添加的贴花 |
| m_nDecalsAdded | `int32` | 已添加的贴花数量 |
| m_iOldHealth | `int32` | 旧的生命值 |
| m_nRenderMode | `RenderMode_t` | 渲染模式 |
| m_nRenderFX | `RenderFx_t` | 渲染特效 |
| m_bAllowFadeInView | `bool` | 是否允许在视图中淡入淡出 |
| m_clrRender | `Color` | 渲染颜色 |
| m_vecRenderAttributes | `C_UtlVectorEmbeddedNetworkVar<EntityRenderAttribute_t>` | 渲染属性向量 |
| m_bRenderToCubemaps | `bool` | 是否渲染到立方体贴图 |
| m_bNoInterpolate | `bool` | 是否禁用插值 |
| m_Collision | `CCollisionProperty` | 碰撞属性 |
| m_Glow | `CGlowProperty` | 发光属性 |
| m_flGlowBackfaceMult | `float32` | 背面发光乘数 |
| m_fadeMinDist | `float32` | 最小淡出距离 |
| m_fadeMaxDist | `float32` | 最大淡出距离 |
| m_flFadeScale | `float32` | 淡出比例 |
| m_flShadowStrength | `float32` | 阴影强度 |
| m_nObjectCulling | `uint8` | 对象剔除 |
| m_nAddDecal | `int32` | 添加贴花 |
| m_vDecalPosition | `Vector` | 贴花位置 |
| m_vDecalForwardAxis | `Vector` | 贴花前向轴 |
| m_flDecalHealBloodRate | `float32` | 贴花血液愈合速率 |
| m_flDecalHealHeightRate | `float32` | 贴花高度愈合速率 |
| m_ConfigEntitiesToPropagateMaterialDecalsTo | `C_NetworkUtlVectorBase<CHandle<C_BaseModelEntity>>` | 传播材质贴花的实体配置 |
| m_vecViewOffset | `CNetworkViewOffsetVector` | 视图偏移向量 |
| m_pClientAlphaProperty | `CClientAlphaProperty*` | 客户端透明度属性指针 |
| m_ClientOverrideTint | `Color` | 客户端覆盖色调 |
| m_bUseClientOverrideTint | `bool` | 是否使用客户端覆盖色调 |