---
layout: ../../../layouts/DocsLayout.astro
title: 常见问题
description: OmniConsole 常见问答。
---

## OmniConsole 的许可条款是什么？

OmniConsole 采用 [**PolyForm Noncommercial 1.0.0**](https://github.com/8bit2qubit/OmniConsole/blob/main/LICENSE) 许可。

## OmniConsole 专业版是什么？

OmniConsole 是独立开发者利用自己的闲暇时间编写与维护的个人兴趣项目，你的赞助能让它继续走下去。设置的**专业版**页面备有赞助链接，升级也在该页面完成，并会显示授权对象，以及这台主机持有的授权。

## OmniConsole 会取代 XBOX 应用吗？

不会。OmniConsole 通过 Windows 官方 API 注册为 **XBOX 模式 (FSE) 主应用** — 与 XBOX 应用使用的机制相同。XBOX 应用仍可照常使用，你也可以在 OmniConsole 内将其设为启动目标。

## 我必须使用掌机吗？

不必。OmniConsole 可在任何 Windows 11 PC 上运行，但需要**完整掌机版**的 XBOX 模式 (FSE)：台式机、笔记本与平板需先使用 [**XFSET**](https://github.com/8bit2qubit/XboxFullScreenExperienceTool) 切换至完整掌机版；原生掌机（ROG Xbox Ally X 等）出厂即是。

## 需要 XBOX 手柄吗？

Windows 11 Game Bar、XBOX 模式 (FSE) 导览以及 XBOX 按钮流程皆需使用**具备 XBOX 按钮的 XInput 兼容控制器**。

## 可以新增自定义平台吗？

可以 — OmniConsole 支持通过 **Protocol URI**、**可执行文件路径** 或 **打包应用（MSIX / APPX）** 新增自定义平台，也可加入封面图片与启动参数（仅可执行文件路径类型支持）。配置可导出与导入为 JSON，也能通过**社区**按钮浏览其他人分享在 GitHub 上的平台、一键添加。详见 [自定义平台](/omniconsole-site/zh-CN/docs/custom-platforms)。

## OmniConsole 会自动更新吗？

会 — OmniConsole 会检查 GitHub 发布版本，可在**高级**设置页面直接下载与安装更新。

## 如何安全卸载？

务必在卸载前将 XBOX 模式 (FSE) 主应用改为 **XBOX** 或 **无**。详见 [如何还原](/omniconsole-site/zh-CN/docs/revert)。

## 在哪里报告错误？

请于 [github.com/8bit2qubit/OmniConsole/issues](https://github.com/8bit2qubit/OmniConsole/issues) 开 issue。
