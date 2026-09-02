---
layout: ../../../layouts/DocsLayout.astro
title: 疑難排解
description: 在 Windows 11 上排除 XBOX 模式 (FSE) 問題。
---

## XBOX 模式 (FSE) 進入對話方塊未出現

部分 Windows 版本因本身的 Bug，進入 XBOX 模式 (FSE) 時「重新啟動以提升效能」對話方塊遲遲不會出現。OmniConsole 提供修復方式：

1. 從開始功能表開啟 **OmniConsole 設定**。
2. 透過左側選單切換至 **疑難排解** 頁面。
3. 在 **「重啟 Game Bar 並進入 XBOX 模式 (FSE)」** 旁點選 **「執行」** 按鈕。這會重啟 Game Bar 並進入 XBOX 模式 (FSE)；Game Bar 重啟後，對話方塊就會正常出現。

## OmniConsole 無法啟動我的平台

1. 確認 OmniConsole 已於 **設定 → 遊戲 → XBOX 模式 (FSE)** 設為 **XBOX 模式 (FSE) 主畫面應用程式**。
2. 從開始功能表開啟 **OmniConsole 設定**，確認已選取預設平台。
3. 確認所選平台已安裝。Steam Big Picture 需要安裝 Steam、XBOX App 需要安裝 XBOX 應用程式，其餘平台以此類推。

## 未連接滑鼠時進入 XBOX 模式 (FSE)

Windows 本身在找不到滑鼠時就不會畫出游標。為了讓游標在沒有滑鼠的主機上也看得見，OmniConsole 會借用 Windows 的一個系統狀態；這段期間插入的實體滑鼠不會被系統認得，退出後桌面也不會有游標。要用滑鼠的話，請先退出 XBOX 模式 (FSE) 再連接。

## 安裝時出現簽章錯誤

請務必將隨附的 `.cer` 憑證安裝至 **本機電腦 → 受信任的人**。建議直接執行 `Install.bat`。

## 安裝時出現 SCCD 錯誤

請前往 **設定 → 系統 → 進階**，啟用**開發人員模式**。
