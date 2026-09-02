---
layout: ../../layouts/DocsLayout.astro
title: Troubleshooting
description: Recover from XBOX Mode (FSE) issues on Windows 11.
---

## XBOX Mode (FSE) entry dialog does not appear

On some Windows builds the "Restart for better performance" dialog fails to appear when entering XBOX Mode (FSE). OmniConsole provides a recovery action:

1. Open **OmniConsole Settings** from the Start Menu.
2. Switch to the **Troubleshoot** tab in the left menu.
3. Next to **Restart Game Bar & Enter XBOX Mode (FSE)**, click **Run**. This restarts Game Bar and enters XBOX Mode (FSE); once Game Bar is restarted, the dialog appears as expected.

## OmniConsole does not launch my platform

1. Confirm OmniConsole is set as the **XBOX Mode (FSE) Home App** in **Settings → Gaming → XBOX mode (FSE)**.
2. Open **OmniConsole Settings** from the Start Menu and verify your default platform is selected.
3. Make sure the selected platform is installed. Steam Big Picture requires Steam; XBOX App requires the XBOX app, etc.

## Entering XBOX Mode (FSE) with no mouse connected

Windows itself draws no cursor when it finds no mouse attached. To keep one visible on a console without a mouse, OmniConsole borrows a Windows system state; a mouse plugged in while that is in effect goes unnoticed, and the desktop will have no cursor after you exit. To use a mouse, exit XBOX Mode (FSE) first, then connect it.

## Installation fails with signature errors

You must install the provided `.cer` certificate into **Local Machine → Trusted People**. Run `Install.bat` for a guided setup.

## Installation fails with SCCD errors

Go to **Settings → System → Advanced** and enable **Developer Mode**.
