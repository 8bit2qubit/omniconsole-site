---
layout: ../../../layouts/DocsLayout.astro
title: 手柄按键对照
description: OmniConsole 完整手柄按键对照。
---

OmniConsole 完整支持 **Xbox 兼容（XInput）控制器**操作。

在手柄上按 **Xbox 键**可打开 **Game Bar** 界面，长按则打开**任务视图**。

## 平台设置界面

| 输入 | 系统平台 | 自定义平台 |
|---|---|---|
| **十字键 / 左摇杆** | 四向焦点导览 | 四向焦点导览 |
| **A 键** | 选取 | 选取 |
| **B 键** | 退出 | 退出 |
| **LB / RB** | 切换分类选项卡 | 切换分类选项卡 |
| **Y 键** | — | 新增自定义平台 |
| **X 键** | — | 编辑聚焦的平台 |
| **☰（Menu）** | 设为默认并立即启动¹ | 设为默认并立即启动¹ |

¹ 于 Xbox 模式 (FSE) 中

## 手柄鼠标模式

把手柄变成鼠标与键盘。提供两种对应方式：**OmniNav** 与 **Classic**。光标速度可于设置中调整。

| 按键 | OmniNav | Classic |
|---|---|---|
| 左摇杆 | 光标 | 滚轮 |
| 右摇杆 | 滚轮 | 光标 |
| A | 鼠标左键 | Enter |
| B | 鼠标右键 | Esc |
| X | Page Down | Page Down |
| Y | Page Up | Page Up |
| LB | Ctrl+Shift+Tab | Tab |
| RB | Ctrl+Tab | 鼠标左键 |
| LT | Esc | Shift+Tab |
| RT | Enter | 鼠标右键 |
| LS | Shift+Tab | — |
| RS | Tab | — |
| 十字键 | 方向键 | 方向键 |

### 三种状态

- **关闭** — 禁用。
- **自动** — 于 Edge、Chrome、Firefox、Opera、Brave、Epic Games Store、文件资源管理器、Steam、Discord 启用。
- **强制开启** — 于所有应用启用。

可于 OmniCharm Game Bar 小组件切换。ROG Ally 家族自动禁用手柄鼠标模式 — 设备具备内置手柄映射。

## 手柄 Steam 快捷键

| 输入 | 动作 |
|---|---|
| **⧉（短按）** | 打开 Steam 菜单¹ |
| **⧉（长按）** | 打开快速访问菜单¹ |
| **☰（长按）** | 打开 Steam 游戏叠加界面²˒³ |

¹ 于 Steam Big Picture 中　² 游戏中　³ 可于 OmniCharm Game Bar 小组件切换

## 猫又 — 各应用手柄映射

有些游戏只认键盘与鼠标，没有原生手柄操作。猫又为这类应用编一道咒，将每个 XInput 输入位（A/B/X/Y、LB/RB、LT/RT、LS/RS、十字键、左摇杆、右摇杆）重新映射为键盘、鼠标或光标动作，让它们也能纯手柄游玩。

于 OmniCharm 小组件点选 **“自定义此应用的手柄映射…”** 进入编辑器。

### 编辑器按键

| 输入 | 配置列表 | 配置编辑器 |
|---|---|---|
| **十字键 / 左摇杆** | 焦点导览 | 焦点导览 |
| **A 键** | 编辑聚焦的配置 | 选取 |
| **B 键** | 退出 | 保存并关闭 |
| **X 键** | 删除聚焦的配置 | 删除此配置 |
| **Y 键** | 在搜索框与列表间切换焦点 | — |
| **LB / RB** | 上／下翻页 | — |

### 可映射的目标

| 类别 | 目标 |
|---|---|
| 字母 | A–Z |
| 数字 | 0–9 |
| 功能键 | F1–F24 |
| 编辑／导航／方向键 | Insert、Delete、Home、End、Page Up、Page Down、方向键、WASD |
| 控制键 | Enter、Esc、Tab、Backspace、Space、PrtSc、Pause、Caps Lock、Apps |
| 符号键 | ` - = [ ] \ ; ' , . / |
| 数字键盘 | Numpad 0–9，以及 . + - * / |
| 媒体键 | 音量、播放控制、浏览器键、启动键 |
| 修饰键组合 | Ctrl / Shift / Alt / Win + 按键 |
| 鼠标 | 左／右／中键、滚轮、光标移动、滚动 |

## OmniCharm 小组件

OmniCharm Game Bar 小组件提供游戏中的快速访问：

- **任务视图**、**Xbox 库**与 **Steam 叠加界面**的一键快捷方式。
- 切换**长按 ☰** 打开 Steam 游戏叠加界面。
- 切换**手柄鼠标模式**、更改控制器布局（**OmniNav / Classic**）、调整光标速度。
- 通过 **“自定义此应用的手柄映射…”** 按钮，为前台应用打开**猫又**各应用手柄映射编辑器。
