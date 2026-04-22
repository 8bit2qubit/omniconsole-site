# OmniConsole Site

> 🌐 [English](README.md) | **繁體中文** | [前往網站 ↗](https://8bit2qubit.github.io/omniconsole-site/zh-TW/)

<p align="center">
<img src="public/logo.png" alt="OmniConsole Site" style="height: 80px; object-fit: contain; display: block; margin: 0 auto;">
</p>

[**OmniConsole**](https://github.com/8bit2qubit/OmniConsole) 的官方網站 — 多語言、採用 Astro 6 靜態生成，部署於 GitHub Pages。

---

## 💡 什麼是 OmniConsole Site？

OmniConsole 官方網站的原始碼。包含首頁、多語文件（安裝、疑難排解、手把按鍵對照）與版本同步頁面 — 完全靜態，採用 Astro 6 建構。

### 運作方式

> 推送至 `main` → GitHub Actions 執行 `astro build`  
> → 建置時抓取 `api.github.com/.../releases/latest`，將最新版本資訊烘焙進靜態 HTML  
> → `dist/` 部署至 GitHub Pages

---

## ✨ 功能特色

- **靜態優先架構** – 透過 Astro 6 島嶼架構輸出純 HTML / CSS。
- **多語介面** – 英文、繁體中文、简体中文，透過 Astro 內建 i18n routing 帶 locale 前綴路徑。
- **建置期 Release 同步** – 建置時抓取 `api.github.com/.../releases/latest`，將最新版本、檔案 URL 與檔案大小烘焙進靜態 HTML。
- **Content Collections** – 功能卡片以型別檢查的 Markdown 撰寫（一語一份），存放於 `src/content/features/`。
- **Iconify + Lucide** – 透過 `astro-icon` 引入 tree-shaken 的 SVG 圖示。
- **自託管字型** – Inter（Latin）搭配 Noto Sans TC / SC（CJK），透過 `@fontsource` 自託管。
- **本地圖片來源** – 截圖置於 `public/images/`，網站自足、開發時可離線瀏覽，亦不受上游 CDN 變動影響。
- **支援 GitHub Pages 子路徑** – `astro.config.mjs` 設定 `base: "/omniconsole-site"`；所有內部連結皆使用 `import.meta.env.BASE_URL`，子路徑與綁定自訂網域皆可運作。
- **預設深色模式** – 深色配色，與 OmniConsole 應用程式視覺風格一致。
- **SEO 友善** – 每頁皆含 Open Graph / Twitter card metadata、canonical URL，以及各語系的 `hreflang` 替代連結。

---

## ⚙️ 前置條件

**Node.js 22.12.0 或更新版本**

---

## 🚀 快速入門

### 1. 複製儲存庫

```bash
git clone https://github.com/8bit2qubit/omniconsole-site.git
cd omniconsole-site
```

### 2. 安裝依賴套件

```bash
npm install
```

### 3. 啟動開發伺服器

```bash
npm run dev
```

於瀏覽器開啟 `http://localhost:4321/omniconsole-site/`。結尾的 `/omniconsole-site/` 對應正式環境的 base 路徑。

### 4. 建置正式版本

```bash
npm run build
```

會先執行 `astro check`（型別檢查），再執行 `astro build` 將靜態 HTML 輸出至 `dist/`。可用 `npm run preview` 預覽。

### 5. 部署

推送至 `main`，內附的 GitHub Actions workflow（`.github/workflows/deploy.yml`）即自動建置並發布至 GitHub Pages。

---

## 💻 技術堆疊

- **框架**：Astro 6
- **樣式**：Tailwind CSS 3（透過 PostCSS）
- **圖示**：Iconify（`@iconify-json/lucide`）透過 `astro-icon`
- **字型**：`@fontsource/inter`、`@fontsource/noto-sans-tc`、`@fontsource/noto-sans-sc`
- **型別檢查**：TypeScript（strict）
- **代管**：GitHub Pages
- **CI/CD**：GitHub Actions (`withastro/action@v3` + `actions/deploy-pages@v4`)

---

## 📄 授權

本專案採用 [GNU Affero 通用公共授權條款第 3 版 （AGPL-3.0）](https://github.com/8bit2qubit/omniconsole-site/blob/main/LICENSE) 授權。

您可以自由使用、修改和散佈本軟體，但任何衍生作品 — **包含部署為網路服務的修改版本** — 必須以**相同的 AGPL-3.0 授權條款散佈，並向所有透過網路與服務互動的使用者提供完整原始碼**。詳情請參閱 [AGPL-3.0 官方條款](https://www.gnu.org/licenses/agpl-3.0.html)。
