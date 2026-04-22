---
layout: ../../layouts/DocsLayout.astro
title: Troubleshooting
description: Recover from FSE issues on Windows 11.
---

## FSE entry dialog does not appear

On some Windows builds the FSE entry dialog ("Restart for better performance") fails to appear. OmniConsole provides an emergency bypass:

1. Open **OmniConsole Settings** from the Start Menu.
2. Switch to the **Troubleshoot** tab in the left menu.
3. Next to **Terminate Game Bar & Enter FSE**, click **Run**. This force-closes Game Bar and enters FSE directly, bypassing the confirmation dialog. Some Windows builds may still show a confirmation dialog.

## OmniConsole does not launch my platform

1. Confirm OmniConsole is set as the **FSE Home App** in **Settings → Gaming → Full Screen Experience**.
2. Open **OmniConsole Settings** from the Start Menu and verify your default platform is selected.
3. Make sure the selected platform is installed. Steam Big Picture requires Steam; Xbox App requires the Xbox app, etc.

## Installation fails with signature errors

You must install the provided `.cer` certificate into **Local Machine → Trusted People**. Run `Install.bat` for a guided setup.

## Installation fails with SCCD errors

Go to **Settings → System → Advanced** and enable **Developer Mode**.
