---
layout: ../../../layouts/DocsLayout.astro
title: 安裝
description: 在 Windows 11 上安裝 OmniConsole。
---

## 1. 下載

從[**發布頁面**](https://github.com/8bit2qubit/OmniConsole/releases/latest)取得最新版本。ZIP 內含主程式、OmniCharm 小工具、憑證、相依框架套件（VCLibs、Windows App Runtime）與 `Install.bat`。

## 2. 安裝

將 `OmniConsole_*_x64.zip` 解壓縮至任意資料夾，再從以下兩種方式擇一。

### 方式 A — Install.bat（建議）

執行 `Install.bat`，將自動開啟開發人員模式、安裝憑證、補齊相依框架套件，並安裝兩個 MSIX 套件。

### 方式 B — 手動安裝

1. **[重要]** 前往 **Windows 設定 → 系統 → 進階**，啟用**開發人員模式**。
2. **[重要]** 點兩下 `OmniConsole_*_x64.cer` → **安裝憑證** → 存放區位置選**本機電腦** → **將所有憑證放入以下的存放區** → **瀏覽** → **受信任的人** → 完成。（若您之前已安裝過，則無需重複此步驟。）
3. _（選用 — 僅全新／離線系統需要；連網系統會自動下載）_ 依序點兩下 `Dependencies\` 中的檔案安裝相依框架套件（若顯示已安裝相同或更新版本可略過）。
4. 點兩下 `OmniConsole_*_x64.msix` 安裝主程式。
5. 點兩下 `OmniConsole.PhantomLink_*_x64-widget.msix` 安裝 OmniCharm 小工具。

## 3. 設定預設平台

OmniConsole 會在**首次啟動**或**應用程式更新後**彈出設定介面。您也可以隨時手動開啟：

1. 從**所有應用程式**開啟「**OmniConsole 設定**」。
2. 從卡片網格中選擇偏好的遊戲平台 — 支援滑鼠、觸控或 Xbox 手把（**方向鍵/左搖桿**四向移動，**A 鍵**確認）：
   - Steam Big Picture
   - Xbox App
   - Epic Games Store
   - Armoury Crate SE
   - Playnite Fullscreen
3. 按 **B 鍵**或點選**退出**即可，選擇會自動儲存。

## 4. [重要] 設為 FSE 首頁應用程式

1. 前往 **Windows 設定 → 遊戲 → 全螢幕體驗**。
2. 將「選擇首頁應用程式」設為 **OmniConsole**。
3. 啟用「**啟動時進入全螢幕體驗**」。

## 5. 完成

您的遊戲平台現在可透過以下任一方式啟動：

- **開機** — 開機自動進入設定的平台（需啟用「啟動時進入全螢幕體驗」）。
- **Xbox 鍵** — 開啟 Game Bar，選「**首頁**」啟動平台，或選「**媒體櫃**」開啟 OmniConsole 設定。
- **開始功能表** — 從桌面啟動 OmniConsole，自動觸發 FSE 後再啟動平台。
