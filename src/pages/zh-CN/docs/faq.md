---
layout: ../../../layouts/DocsLayout.astro
title: 常见问题
description: OmniConsole 常见问答。
---

## OmniConsole 的许可条款是什么？

OmniConsole 为开源软件，采用 [**GPL-3.0**](https://github.com/8bit2qubit/OmniConsole/blob/main/LICENSE) 许可。

## OmniConsole 会取代 Xbox App 吗？

不会。OmniConsole 通过 Windows 官方 API 注册为 **FSE 主页应用** — 与 Xbox App 使用的机制相同。Xbox App 仍可正常作为 Windows 应用使用，你也可以在 OmniConsole 内将其设为启动目标。

## 我必须使用掌机吗？

不必。OmniConsole 可在任何 Windows 11 PC 上执行。台式机、笔记本与平板需先使用 [**XFSET**](https://github.com/8bit2qubit/XboxFullScreenExperienceTool) 启用 FSE；原生掌机（ROG Xbox Ally 等）已原生支持。

## 需要 Xbox 手柄吗？

Windows 11 Game Bar、FSE 导览以及 Xbox 键流程皆需使用**具备 Xbox 按钮的 XInput 兼容控制器**。

## 可以新增自定义平台吗？

可以 — OmniConsole 支持通过 **Protocol URI**、**可执行文件路径** 或 **打包应用（MSIX / APPX）** 新增自定义平台，也可加入封面图片与启动参数（仅可执行文件路径类型支持）。配置可导出与导入为 JSON。

## OmniConsole 会自动更新吗？

会 — OmniConsole 会检查 GitHub 发布版本，可在**高级**设置页面直接下载与安装更新。

## 如何安全卸载？

务必在卸载前将 FSE 主页应用改为 **Xbox** 或 **无**。详见 [如何还原](/omniconsole-site/zh-CN/docs/revert)。

## 在哪里报告错误或建议功能？

请于 [github.com/8bit2qubit/OmniConsole/issues](https://github.com/8bit2qubit/OmniConsole/issues) 开 issue。
