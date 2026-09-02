---
layout: ../../../layouts/DocsLayout.astro
title: 常見問題
description: OmniConsole 常見問答。
---

## OmniConsole 的授權條款為何？

OmniConsole 採用 [**PolyForm Noncommercial 1.0.0**](https://github.com/8bit2qubit/OmniConsole/blob/main/LICENSE) 授權。

## OmniConsole 專業版是什麼？

OmniConsole 是獨立開發者利用自己的閒暇時間撰寫與維護的個人興趣專案，你的贊助能讓它繼續走下去。設定的**專業版**分頁備有贊助連結，升級也在該頁面完成，並會顯示授權對象，以及這台主機持有的授權。

## OmniConsole 會取代 XBOX 應用程式嗎？

不會。OmniConsole 透過 Windows 官方 API 註冊為 **XBOX 模式 (FSE) 主畫面應用程式** — 與 XBOX 應用程式使用的機制相同。XBOX 應用程式仍可照常使用，你也可以在 OmniConsole 內將其設為啟動目標。

## 我必須使用掌機嗎？

不必。OmniConsole 可在任何 Windows 11 PC 上執行，但需要**完整掌機版**的 XBOX 模式 (FSE)：桌機、筆電與平板需先使用 [**XFSET**](https://github.com/8bit2qubit/XboxFullScreenExperienceTool) 切換至完整掌機版；原生掌機（ROG Xbox Ally X 等）原廠即是。

## 需要 XBOX 手把嗎？

Windows 11 Game Bar、XBOX 模式 (FSE) 導覽以及 XBOX 按鈕流程皆需使用**具備 XBOX 按鈕的 XInput 相容控制器**。

## 可以新增自訂平台嗎？

可以 — OmniConsole 支援透過 **Protocol URI**、**執行檔路徑** 或 **封裝套件 （MSIX / APPX）** 新增自訂平台，也可加入封面圖片與啟動參數（僅執行檔路徑類型支援）。組態可匯出與匯入為 JSON，也能透過**社群**按鈕瀏覽其他人分享在 GitHub 上的平台、一鍵加入。詳見 [自訂平台](/omniconsole-site/zh-TW/docs/custom-platforms)。

## OmniConsole 會自動更新嗎？

會 — OmniConsole 會檢查 GitHub 發布版本，可在**進階**設定頁面直接下載與安裝更新。

## 如何安全解除安裝？

務必在解除安裝前將 XBOX 模式 (FSE) 主畫面應用程式改為 **XBOX** 或 **無**。詳見 [如何還原](/omniconsole-site/zh-TW/docs/revert)。

## 在哪裡回報錯誤？

請於 [github.com/8bit2qubit/OmniConsole/issues](https://github.com/8bit2qubit/OmniConsole/issues) 開 issue。
