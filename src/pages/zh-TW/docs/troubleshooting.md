---
layout: ../../../layouts/DocsLayout.astro
title: 疑難排解
description: 在 Windows 11 上排除 Xbox 模式 (FSE) 問題。
---

## Xbox 模式 (FSE) 進入對話方塊未出現

部分 Windows 版本因本身的 Bug，進入 Xbox 模式 (FSE) 時「重新啟動以提升效能」對話方塊遲遲不會出現。OmniConsole 提供修復方式：

1. 從開始功能表開啟 **OmniConsole 設定**。
2. 透過左側選單切換至 **疑難排解** 頁面。
3. 在 **「重啟 Game Bar 並進入 Xbox 模式 (FSE)」** 旁點選 **「執行」** 按鈕。這會重啟 Game Bar 並進入 Xbox 模式 (FSE)；Game Bar 重啟後，對話方塊就會正常出現。

## OmniConsole 無法啟動我的平台

1. 確認 OmniConsole 已於 **設定 → 遊戲 → Xbox 模式 (FSE)** 設為 **Xbox 模式 (FSE) 主畫面應用程式**。
2. 從開始功能表開啟 **OmniConsole 設定**，確認已選取預設平台。
3. 確認所選平台已安裝。Steam Big Picture 需要 Steam，Xbox App 需要 Xbox 應用程式等。

## 安裝時出現簽章錯誤

請務必將隨附的 `.cer` 憑證安裝至 **本機電腦 → 受信任的人**。建議直接執行 `Install.bat`。

## 安裝時出現 SCCD 錯誤

請前往 **設定 → 系統 → 進階**，啟用**開發人員模式**。
