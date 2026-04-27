---
layout: ../../../layouts/DocsLayout.astro
title: 安装
description: 在 Windows 11 上安装 OmniConsole。
---

## 1. 下载

从[**发布页面**](https://github.com/8bit2qubit/OmniConsole/releases/latest)获取最新版本。ZIP 内含主程序、OmniCharm 小组件、证书、依赖框架包（VCLibs、Windows App Runtime）与 `Install.bat`。

## 2. 安装

将 `OmniConsole_*_x64.zip` 解压到任意文件夹，再从以下两种方式择一。

### 方式 A — Install.bat（推荐）

执行 `Install.bat`，将自动开启开发人员模式、安装证书、补齐依赖框架包，并安装两个 MSIX 套件。

### 方式 B — 手动安装

1. **[重要]** 前往 **Windows 设置 → 系统 → 高级**，启用**开发人员模式**。
2. **[重要]** 双击 `OmniConsole_*_x64.cer` → **安装证书** → 存储位置选**本地计算机** → **将所有的证书都放入下列存储** → **浏览** → **受信任人** → 完成。（如你之前已安装过，则无需重复此步骤。）
3. _（可选 — 仅全新／离线系统需要；联网系统会自动下载）_ 依次双击 `Dependencies\` 中的文件安装依赖框架包（若显示已安装相同或更新版本可跳过）。
4. 双击 `OmniConsole_*_x64.msix` 安装主程序。
5. 双击 `OmniConsole.PhantomLink_*_x64-widget.msix` 安装 OmniCharm 小组件。

## 3. 设置默认平台

OmniConsole 会在**首次启动**或**应用程序更新后**弹出设置界面。你也可以随时手动开启：

1. 从**所有应用**开启“**OmniConsole 设置**”。
2. 从卡片网格中选择偏好的游戏平台 — 支持鼠标、触摸或 Xbox 手柄（**方向键/左摇杆**四向移动，**A 键**确认）：
   - Steam Big Picture
   - Xbox App
   - Epic Games Store
   - Armoury Crate SE
   - Playnite Fullscreen
3. 按 **B 键**或单击**退出**即可，选择会自动保存。

## 4. [重要] 设为 FSE 主页应用

1. 前往 **Windows 设置 → 游戏 → 全屏体验**。
2. 将“选择主页应用”设为 **OmniConsole**。
3. 启用”**启动时进入全屏体验**”。

## 5. 完成

你的游戏平台现在可通过以下任一方式启动：

- **开机** — 开机自动进入配置的平台（需启用”启动时进入全屏体验”）。
- **Xbox 键** — 打开 Game Bar，选”**主页**”启动平台，或选”**库**”打开 OmniConsole 设置。
- **开始菜单** — 从桌面启动 OmniConsole，自动触发 FSE 后再启动平台。
