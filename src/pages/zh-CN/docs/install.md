---
layout: ../../../layouts/DocsLayout.astro
title: 安装与更新
description: 在 Windows 11 上安装与更新 OmniConsole。
---

## 1. 下载

从[**发布页面**](https://github.com/8bit2qubit/OmniConsole/releases/latest)获取最新版本。ZIP 内含主程序、OmniCharm 小组件、证书、依赖框架包（VCLibs、Windows App Runtime）与 `Install.bat`。

## 2. 安装

将 `OmniConsole_*_x64.zip` 解压到任意文件夹，再从以下两种方式择一。

### 方式 A — Install.bat（推荐）

运行 `Install.bat`，将自动开启开发人员模式、安装证书、补齐依赖框架包，并安装两个 MSIX 套件。

### 方式 B — 手动安装

1. **[重要]** 前往 **Windows 设置 → 系统 → 高级**，启用**开发人员模式**。
2. **[重要]** 双击 `OmniConsole_*_x64.cer` → **安装证书** → 存储位置选**本地计算机** → **将所有的证书都放入下列存储** → **浏览** → **受信任人** → 完成。（如你之前已安装过，则无需重复此步骤。）
3. _（可选 — 仅全新／离线系统需要；联网系统会自动下载）_ 依次双击 `Dependencies\` 中的文件安装依赖框架包（若显示已安装相同或更新版本可跳过）。
4. 双击 `OmniConsole_*_x64.msix` 安装主程序。
5. 双击 `OmniConsole.PhantomLink_*_x64-widget.msix` 安装 OmniCharm 小组件。

## 3. 设置默认平台

OmniConsole 会在**首次启动**或**应用程序更新后**弹出设置界面。你也可以随时手动开启：

1. 从**所有应用**开启“**OmniConsole 设置**”。
2. 从卡片网格中选择偏好的游戏平台 — 支持鼠标、触摸或 Xbox 手柄（**十字键/左摇杆**四向移动，**A 键**确认）：
   - Steam Big Picture
   - Xbox 应用
   - Epic Games Store
   - Armoury Crate SE
   - Playnite 全屏
3. 按 **B 键**或单击**退出**即可，选择会自动保存。

## 4. [重要] 设为 Xbox 模式 (FSE) 主应用

1. 前往 **Windows 设置 → 游戏 → Xbox 模式 (FSE)**。
2. 将“选择主应用”设为 **OmniConsole**。
3. 启用”**启动时进入 Xbox 模式 (FSE)**”。

## 5. 完成

你的游戏平台现在可通过以下任一方式启动：

- **开机** — 开机自动进入配置的平台（需启用”启动时进入 Xbox 模式 (FSE)”）。
- **Xbox 键** — 打开 Game Bar，选”**主页**”启动平台，或选”**库**”打开 OmniConsole 设置。
- **开始菜单** — 从桌面启动 OmniConsole，自动触发 Xbox 模式 (FSE) 后再启动平台。

## 6. 更新 OmniConsole

已安装过 OmniConsole？直接在应用内更新：

1. 打开 **OmniConsole 设置**，前往 **☰ → 高级**。
2. 单击**检查更新**，再单击**下载并安装**。OmniConsole 会自动下载新版本并完成安装。

> ⚠️ **升级请通过“应用内更新”或 `Install.bat`，不要手动安装 MSIX 套件。**“应用内更新”与 `Install.bat` 都会妥善处理被运行中的游戏占用的文件；手动安装 MSIX 套件会导致更新不完整或两个套件版本不一致。
