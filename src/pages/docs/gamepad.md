---
layout: ../../layouts/DocsLayout.astro
title: Gamepad Reference
description: Full gamepad button mapping for OmniConsole.
---

OmniConsole is fully operable with an **Xbox-compatible (XInput) controller**.

On your controller, press the **Xbox button** to open the **Game Bar** overlay, or press and hold it to open **Task View**.

## Platform Settings UI

| Input | System Platforms | Custom Platforms |
|---|---|---|
| **D-Pad / Left Stick** | Navigate focus in four directions | Navigate focus in four directions |
| **A** | Select | Select |
| **B** | Exit | Exit |
| **LB / RB** | Switch category tabs | Switch category tabs |
| **Y** | — | Add a custom platform |
| **X** | — | Edit the focused platform |
| **☰ (Menu)** | Set as default and launch¹ | Set as default and launch¹ |

¹ In Xbox Mode (FSE)

## Nekomata Mode

Turn your controller into a mouse and keyboard, customizable per app. Two layouts are available out of the box, **OmniNav** and **Classic**, with a third **Custom** layout you can define yourself (Pro). Cursor speed is adjustable in Settings.

| Button | OmniNav | Classic |
|---|---|---|
| Left Stick | Cursor | Scroll |
| Right Stick | Scroll | Cursor |
| A | Left Click | Enter |
| B | Right Click | Esc |
| X | Page Down | Page Down |
| Y | Page Up | Page Up |
| LB | Ctrl+Shift+Tab | Tab |
| RB | Ctrl+Tab | Left Click |
| LT | Esc | Shift+Tab |
| RT | Enter | Right Click |
| LS | Shift+Tab | — |
| RS | Tab | — |
| D-pad | Arrow Keys | Arrow Keys |

### On / Off

An **On / Off** toggle. When on, your customized profiles take over, and the apps below run on built-in mapping (also customizable): Edge, Chrome, Firefox, Opera, Brave, Epic Games Store, EA Desktop, Playnite Desktop, File Explorer, the Windows file picker, the Open with dialog, Windows Installer, Steam, Discord, App Installer, and a wide range of built-in Windows tools and Control Panel dialogs. Those that run as Administrator, such as Task Manager, and the On-screen keyboard also require Administrator App Support (Pro).

Toggleable via the OmniCharm Game Bar widget. On ROG Ally family devices, which have built-in gamepad mapping, Nekomata Mode stays out of the way; Pro can turn it on for those consoles.

### Per-App Mapping

Some games only speak keyboard and mouse, with no native gamepad support. Nekomata weaves a charm for these apps, remapping XInput controls (A/B/X/Y, LB/RB, LT/RT, LS/RS, D-pad, left stick, right stick) into keyboard, mouse, or cursor actions so you can play them fully on a gamepad. Each charm can also raise the mapping service priority with Nekomata Boost, give any key hold-to-repeat, and prevent double input by blocking the app's own native gamepad signals.

Open the editor from the OmniCharm widget's **"Customize gamepad mapping for this app…"** button.

### Editor Controls

| Input | Profile List | Profile Editor |
|---|---|---|
| **D-Pad / Left Stick** | Navigate | Navigate |
| **A** | Edit the focused profile | Select |
| **B** | Exit | Save and close |
| **X** | Delete the focused profile | Delete this profile |
| **Y** | Jump to / leave the search box | — |
| **LB / RB** | Page up / page down | — |

### Mappable Targets

| Category | Targets |
|---|---|
| Letters | A–Z |
| Digits | 0–9 |
| Function keys | F1–F24 |
| Edit / navigation / directional | Insert, Delete, Home, End, Page Up, Page Down, arrow keys, WASD |
| Control keys | Enter, Esc, Tab, Backspace, Space, PrtSc, Pause, Caps Lock, Apps |
| Symbols | ` - = [ ] \ ; ' , . / |
| Numpad | Numpad 0–9, and . + - * / |
| Media keys | Volume, playback controls, browser keys, launch keys |
| Modifier combo | Ctrl / Shift / Alt / Win + key |
| Mouse | Left / right / middle button, scroll wheel, cursor movement, scrolling |
| Screen keyboards (Pro) | Gamepad keyboard, On-screen keyboard |

### Custom Controller Layout (Pro)

Alongside OmniNav and Classic, you can define a default layout of your own. Choose **Custom** under **Settings → Advanced → Nekomata → Controller Layout Preset**, then click **Edit…** to arrange the controller's inputs.

It then becomes the starting point everywhere: apps covered by built-in mapping pick it up right away, and every new app profile begins from it. The OmniCharm widget can switch to it as well.

### Administrator App Support (Pro)

Some apps and games on Windows only ever run as an administrator. Administrator App Support extends your gamepad mappings to them.

Install it from **Settings → Advanced → Nekomata** and approve the administrator prompt. Nekomata Mode takes over in those apps, and the OmniCharm widget opens the mapping editor for them too.

## Gamepad Steam Shortcuts

| Input | Action |
|---|---|
| **⧉ (short press)** | Open Steam menu¹ |
| **⧉ (long press)** | Open Quick Access menu¹ |
| **☰ (long press)** | Open Steam In-Game Overlay²˒³ |

¹ In Steam Big Picture　² In-game　³ Toggleable via the OmniCharm Game Bar widget

## OmniCharm Widget

The OmniCharm Game Bar widget gives you in-game quick access to:

- **Task View**, the **Xbox Library**, and the **Steam Overlay** as one-tap shortcuts.
- Toggling **long-press ☰** to open the Steam In-Game Overlay.
- Toggling **Nekomata Mode**, switching controller layout (**OmniNav / Classic / Custom**), and adjusting cursor speed.
- Opening the **Nekomata** per-app gamepad mapping editor for the foreground app with the **"Customize gamepad mapping for this app…"** button — including apps that run as an administrator, with Administrator App Support set up.
