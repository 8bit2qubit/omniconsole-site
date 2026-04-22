---
layout: ../../layouts/DocsLayout.astro
title: Install
description: Install OmniConsole on Windows 11.
---

## 1. Download

Grab the latest release from the [**Releases Page**](https://github.com/8bit2qubit/OmniConsole/releases/latest). The ZIP contains the main app, the OmniCharm widget, a certificate, bundled framework dependencies (VCLibs, Windows App Runtime), and `Install.bat`.

## 2. Install

Extract `OmniConsole_*_x64.zip` to any folder, then pick one of the options below.

### Option A — Install.bat (Recommended)

Run `Install.bat`. It enables Developer Mode, installs the certificate, installs any missing framework dependencies, and installs both MSIX packages automatically.

### Option B — Manual Install

1. **[Critical]** Open **Windows Settings → System → Advanced** and enable **Developer Mode**.
2. **[Critical]** Double-click `OmniConsole_*_x64.cer` → **Install Certificate** → **Local Machine** → **Place all certificates in the following store** → **Browse** → **Trusted People** → Finish. (Skip if you have installed the certificate before.)
3. _(Optional — only needed on fresh/offline systems; online systems fetch these automatically)_ Double-click each file inside `Dependencies\` to install the bundled framework packages (skip any that report an equal or newer version already installed).
4. Double-click `OmniConsole_*_x64.msix` to install the main app.
5. Double-click `OmniConsole.PhantomLink_*_x64-widget.msix` to install the OmniCharm widget.

## 3. Configure Your Default Platform

OmniConsole shows its Settings UI on **first launch** and **after updates**. You can also open it anytime from the Start Menu:

1. Open **OmniConsole Settings** from **All Apps**.
2. Pick your platform from the card grid — mouse, touch, or Xbox controller (**D-Pad/Left Stick** to navigate, **A** to confirm):
   - Steam Big Picture
   - Xbox App
   - Epic Games Store
   - Armoury Crate SE
   - Playnite Fullscreen
3. Press **B** or click **Exit** to finish. Selection saves automatically.

## 4. [Critical] Set as FSE Home App

1. Open **Settings → Gaming → Full Screen Experience**.
2. Set **Choose home app** to **OmniConsole**.
3. Enable **Enter full screen experience on startup**.

## 5. Done

Your gaming platform now launches via any of these entry points:

- **Boot** — auto-launches into your configured platform (requires "Enter full screen experience on startup" enabled).
- **Xbox button** — open Game Bar, pick **Home** to launch your platform, or **Library** to open OmniConsole settings.
- **Start Menu** — launch OmniConsole from the desktop; FSE is triggered automatically before the platform starts.
