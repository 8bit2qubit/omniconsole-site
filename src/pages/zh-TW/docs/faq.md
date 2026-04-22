---
layout: ../../../layouts/DocsLayout.astro
title: 常見問題
description: OmniConsole 常見問答。
---

## OmniConsole 的授權條款為何？

OmniConsole 為開放原始碼軟體，採用 [**GPL-3.0**](https://github.com/8bit2qubit/OmniConsole/blob/main/LICENSE) 授權。

## OmniConsole 會取代 Xbox App 嗎？

不會。OmniConsole 透過 Windows 官方 API 登記為 **FSE 首頁應用程式** — 與 Xbox App 使用的機制相同。Xbox App 仍可正常作為 Windows 應用程式使用，您也可以在 OmniConsole 內將其設為啟動目標。

## 我必須使用掌機嗎？

不必。OmniConsole 可在任何 Windows 11 PC 上執行。桌機、筆電與平板需先使用 [**XFSET**](https://github.com/8bit2qubit/XboxFullScreenExperienceTool) 啟用 FSE；原生掌機（ROG Xbox Ally 等）已原生支援。

## 需要 Xbox 手把嗎？

Windows 11 Game Bar、FSE 導覽以及 Xbox 鍵流程皆需使用**具備 Xbox 按鈕的 XInput 相容控制器**。

## 可以新增自訂平台嗎？

可以 — OmniConsole 支援透過 **Protocol URI**、**執行檔路徑** 或 **封裝套件 （MSIX / APPX）** 新增自訂平台，也可加入封面圖片與啟動參數（僅執行檔路徑類型支援）。配置可匯出與匯入為 JSON。

## OmniConsole 會自動更新嗎？

會 — OmniConsole 會檢查 GitHub 發布版本，可在**進階**設定頁面直接下載與安裝更新。

## 如何安全解除安裝？

務必在解除安裝前將 FSE 首頁應用程式改為 **Xbox** 或 **無**。詳見 [如何還原](/omniconsole-site/zh-TW/docs/revert)。

## 在哪裡回報錯誤或建議功能？

請於 [github.com/8bit2qubit/OmniConsole/issues](https://github.com/8bit2qubit/OmniConsole/issues) 開 issue。
