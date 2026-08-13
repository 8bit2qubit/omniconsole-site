---
layout: ../../layouts/DocsLayout.astro
title: FAQ
description: Common questions about OmniConsole.
---

## How is OmniConsole licensed?

OmniConsole is licensed under [**PolyForm Noncommercial 1.0.0**](https://github.com/8bit2qubit/OmniConsole/blob/main/LICENSE).

## What is OmniConsole Pro?

OmniConsole is a personal interest project, written and maintained by a solo developer in their own free time, and your support keeps it going. The **Pro** page in Settings carries the link and is where you activate it, and it shows who the license is for along with the licenses on this console.

## Does OmniConsole replace the Xbox App?

No. OmniConsole registers as the **Xbox Mode (FSE) Home App** using the official Windows API — the same mechanism Microsoft uses for the Xbox App. The Xbox App continues to work normally as a Windows app, and you can still set it as your launch target inside OmniConsole.

## Do I need to be on a handheld?

No. OmniConsole runs on any Windows 11 PC. It requires the **Full Handheld edition** of Xbox Mode (FSE): desktops, laptops, and tablets use [**XFSET**](https://github.com/8bit2qubit/XboxFullScreenExperienceTool) to switch to it first, while native handhelds (ROG Xbox Ally X, etc.) ship with it.

## Do I need an Xbox controller?

Windows 11 Game Bar, Xbox Mode (FSE) navigation, and the Xbox button flow all require an **XInput-compatible controller with an Xbox button**.

## Can I add my own platform?

Yes — OmniConsole supports custom platforms via **Protocol URI**, **executable path**, or **Packaged App (MSIX / APPX)**. You can also add cover images and launch arguments (executable path only). Configurations can be exported and imported as JSON, and the **Community** button browses platforms shared by other people on GitHub so you can add one with a single click. See [Custom Platforms](/omniconsole-site/docs/custom-platforms) for details.

## Does OmniConsole auto-update?

Yes — OmniConsole checks for GitHub releases and can download and install updates directly from the **Advanced** settings page.

## How do I uninstall safely?

Always change the Xbox Mode (FSE) Home App to **Xbox** or **None** *before* uninstalling. See [How to Revert](/omniconsole-site/docs/revert).

## Where can I report bugs?

Open an issue at [github.com/8bit2qubit/OmniConsole/issues](https://github.com/8bit2qubit/OmniConsole/issues).
