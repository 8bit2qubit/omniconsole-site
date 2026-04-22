---
layout: ../../../layouts/DocsLayout.astro
title: 疑难解答
description: 在 Windows 11 上排除 FSE 问题。
---

## FSE 进入对话框未出现

部分 Windows 版本因本身的 Bug，全屏体验 （FSE） 进入对话框（“重启以提高性能”）迟迟不会出现。OmniConsole 提供紧急绕过方式：

1. 从开始菜单开启 **OmniConsole 设置**。
2. 通过左侧菜单切换至 **疑难解答** 页面。
3. 在 **”结束 Game Bar 并进入 FSE”** 旁单击 **”执行”** 按钮，将结束 Game Bar 并绕过 FSE 确认对话框，直接进入 FSE。部分 Windows 版本仍可能显示确认对话框。

## OmniConsole 无法启动我的平台

1. 确认 OmniConsole 已于 **设置 → 游戏 → 全屏体验** 设为 **FSE 主页应用**。
2. 从开始菜单开启 **OmniConsole 设置**，确认已选取默认平台。
3. 确认所选平台已安装。Steam Big Picture 需要 Steam，Xbox App 需要 Xbox 应用等。

## 安装时出现签章错误

请务必将随附的 `.cer` 证书安装至 **本地计算机 → 受信任人**。建议直接执行 `Install.bat`。

## 安装时出现 SCCD 错误

请前往 **设置 → 系统 → 高级**，启用**开发人员模式**。
