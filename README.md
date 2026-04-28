# OmniConsole Site

> 🌐 **English** | [繁體中文](README.zh-TW.md) | [Live Site ↗](https://8bit2qubit.github.io/omniconsole-site/)

<p align="center">
<img src="public/logo.png" alt="OmniConsole Site" style="height: 80px; object-fit: contain; display: block; margin: 0 auto;">
</p>

The official website for [**OmniConsole**](https://github.com/8bit2qubit/OmniConsole) — a multilingual static site, pre-rendered with Astro 6 and deployed to GitHub Pages.

---

## 💡 What is OmniConsole Site?

Source for the OmniConsole official website. Covers the landing page, multilingual docs (install, troubleshooting, gamepad reference), and a release-synced page — fully pre-rendered to static HTML, built with Astro 6.

### How It Works

> Push to `main` → GitHub Actions runs `astro build`  
> → Build-time fetch of `api.github.com/.../releases/latest` bakes the latest release info into pre-rendered HTML  
> → `dist/` is published to GitHub Pages

---

## ✨ Features

- **Pre-Rendered to Static HTML** – Every page is pre-rendered to plain HTML / CSS at build time via Astro 6 islands; no server runtime required.
- **Multilingual UI** – English, Traditional Chinese (繁體中文), and Simplified Chinese (简体中文) routed through Astro's built-in i18n with locale-prefixed paths.
- **Build-Time Release Sync** – Build-time fetch of `api.github.com/.../releases/latest` bakes the latest version, asset URL, and file size into the pre-rendered HTML.
- **Content Collections** – Feature cards are authored as type-checked Markdown files (one per language) under `src/content/features/`.
- **Iconify + Lucide** – Tree-shaken SVG icons via `astro-icon`.
- **Native System Fonts** – Each locale renders in its OS-native font (PingFang / Microsoft JhengHei for `zh-TW`, PingFang SC / Microsoft YaHei for `zh-CN`, system-ui / Segoe UI for `en`) via `:lang()` rules. No font downloads, no FOUT, instant first paint.
- **Site-Local Images** – Screenshots are committed under `public/images/` so the site is self-contained, renders offline during development, and is immune to upstream CDN changes.
- **GitHub Pages Subpath Aware** – `astro.config.mjs` sets `base: "/omniconsole-site"`; all internal links use `import.meta.env.BASE_URL` so deployments under a subpath or a custom domain both work.
- **Dark-Mode Default** – Dark palette styled to complement the OmniConsole app aesthetic.
- **SEO Friendly** – Per-page Open Graph / Twitter card metadata, canonical URLs, and `hreflang` alternates for every locale.

---

## ⚙️ Prerequisites

**Node.js 22.12.0 or later**

---

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/8bit2qubit/omniconsole-site.git
cd omniconsole-site
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Dev Server

```bash
npm run dev
```

Open `http://localhost:4321/omniconsole-site/` in your browser. The trailing `/omniconsole-site/` mirrors the production base path.

### 4. Build for Production

```bash
npm run build
```

`astro check` runs first (type checking), then `astro build` writes the pre-rendered HTML to `dist/`. Preview locally with `npm run preview`.

### 5. Deploy

Push to `main` and the included GitHub Actions workflow (`.github/workflows/deploy.yml`) builds and publishes to GitHub Pages automatically.

---

## 💻 Tech Stack

- **Framework**: Astro 6
- **Styling**: Tailwind CSS 3 (via PostCSS)
- **Icons**: Iconify (`@iconify-json/lucide`) via `astro-icon`
- **Fonts**: OS-native system fonts (no web fonts)
- **Type Checking**: TypeScript (strict)
- **Hosting**: GitHub Pages
- **CI/CD**: GitHub Actions (`withastro/action@v3` + `actions/deploy-pages@v4`)

---

## 📄 License

This project is licensed under the [GNU Affero General Public License v3.0 (AGPL-3.0)](https://github.com/8bit2qubit/omniconsole-site/blob/main/LICENSE).

You are free to use, modify, and distribute this software, but any derivative works — **including modified versions deployed as a network service** — must also be distributed under the **same AGPL-3.0 license and provide the complete source code** to all users interacting with the service. For more details, see the [official AGPL-3.0 terms](https://www.gnu.org/licenses/agpl-3.0.html).
