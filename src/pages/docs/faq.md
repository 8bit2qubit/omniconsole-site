---
layout: ../../layouts/DocsLayout.astro
title: FAQ
description: Common questions about OmniConsole.
---

## How is OmniConsole licensed?

OmniConsole is open source under [**GPL-3.0**](https://github.com/8bit2qubit/OmniConsole/blob/main/LICENSE).

## Does OmniConsole replace the Xbox App?

No. OmniConsole registers as the **FSE Home App** using the official Windows API — the same mechanism Microsoft uses for the Xbox App. The Xbox App continues to work normally as a Windows app, and you can still set it as your launch target inside OmniConsole.

## Do I need to be on a handheld?

No. OmniConsole runs on any Windows 11 PC. Desktops, laptops, and tablets use [**XFSET**](https://github.com/8bit2qubit/XboxFullScreenExperienceTool) to enable FSE first; native handhelds (ROG Xbox Ally, etc.) support FSE out of the box.

## Do I need an Xbox controller?

Windows 11 Game Bar, FSE navigation, and the Xbox button flow all require an **XInput-compatible controller with an Xbox button**.

## Can I add my own platform?

Yes — OmniConsole supports custom platforms via **Protocol URI**, **executable path**, or **Packaged App (MSIX / APPX)**. You can also add cover images and launch arguments (executable path only). Configurations can be exported and imported as JSON.

## Does OmniConsole auto-update?

Yes — OmniConsole checks for GitHub releases and can download and install updates directly from the **Advanced** settings page.

## How do I uninstall safely?

Always change the FSE Home App to **Xbox** or **None** *before* uninstalling. See [How to Revert](/omniconsole-site/docs/revert).

## Where can I report bugs or request features?

Open an issue at [github.com/8bit2qubit/OmniConsole/issues](https://github.com/8bit2qubit/OmniConsole/issues).
