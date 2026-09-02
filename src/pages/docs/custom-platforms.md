---
layout: ../../layouts/DocsLayout.astro
title: Custom Platforms
description: Add your own platforms and apps to OmniConsole.
---

OmniConsole ships with a set of built-in platforms, and you can add your own — any executable or app. Everything is done through the graphical interface; there is no need to hand-edit any JSON configuration file. Whenever a text field is focused, the Windows 11 gamepad keyboard opens automatically, so you can fill everything in without a physical keyboard.

> ⚠️ **Custom platforms are an experimental feature.** The built-in platforms are tested, but a custom platform you configure yourself is not. A misconfigured platform may fail to launch and, in some cases, can destabilize the XBOX Mode (FSE) environment — recovering may require resetting the app. When you first open this feature, OmniConsole shows a consent notice that you need to accept.

## Adding a Platform

On the Settings screen, open the **Custom** tab. Press the **Y** button on the controller, or click the **"Y Add"** prompt at the bottom of the screen, to open the new-platform dialog.

## Launch Types

A custom platform uses one of three launch types:

| Type | Description |
|---|---|
| Executable | Point to an `.exe` file. Supports custom launch arguments. A gamepad-friendly file picker is built in, so you can browse without a mouse. |
| Protocol URI | Launch via a protocol link, such as `steam://open/bigpicture`. |
| Packaged App | For MSIX / APPX apps (UWP or Microsoft Store apps). Search installed packages by their Package Family Name. |

## Card Cover

You can give a custom platform its own card cover image. The recommended resolution is 800 × 560 px (a 10:7 ratio); images are scaled to that size automatically.

## Import and Export

To share a platform, right-click (or press and hold) its card and choose **Export** — the configuration is copied to the clipboard as JSON. To add a shared platform, use the **Import** button on the Custom tab and paste the JSON.

Per-user install paths are exported as environment variables (such as `%LocalAppData%\…`) carrying no Windows account name, and import expands them again. A platform you share with a friend works on their console right away.

## Community Platforms

Next to Import on the Custom tab, the **Community** button opens a browser of platform definitions shared by the community on GitHub. Search by name or submitter, sort by date or name, and preview each platform's cover and launch details before adding it with one click.

Your own platform can be listed as well: export it and open a pull request at [**OmniConsolePlatforms**](https://github.com/8bit2qubit/OmniConsolePlatforms).
