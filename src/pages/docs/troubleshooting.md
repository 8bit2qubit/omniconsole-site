---
layout: ../../layouts/DocsLayout.astro
title: Troubleshooting
description: Recover from Xbox Mode (FSE) issues on Windows 11.
---

## Xbox Mode (FSE) entry dialog does not appear

On some Windows builds the "Restart for better performance" dialog fails to appear when entering Xbox Mode (FSE). OmniConsole provides a recovery action:

1. Open **OmniConsole Settings** from the Start Menu.
2. Switch to the **Troubleshoot** tab in the left menu.
3. Next to **Restart Game Bar & Enter Xbox Mode (FSE)**, click **Run**. This restarts Game Bar and enters Xbox Mode (FSE); once Game Bar is restarted, the dialog appears as expected.

## OmniConsole does not launch my platform

1. Confirm OmniConsole is set as the **Xbox Mode (FSE) Home App** in **Settings → Gaming → Xbox mode (FSE)**.
2. Open **OmniConsole Settings** from the Start Menu and verify your default platform is selected.
3. Make sure the selected platform is installed. Steam Big Picture requires Steam; Xbox App requires the Xbox app, etc.

## Installation fails with signature errors

You must install the provided `.cer` certificate into **Local Machine → Trusted People**. Run `Install.bat` for a guided setup.

## Installation fails with SCCD errors

Go to **Settings → System → Advanced** and enable **Developer Mode**.
