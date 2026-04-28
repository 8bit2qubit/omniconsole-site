export const SITE = {
  name: "OmniConsole",
  tagline: "Your Gaming Platform, On Boot.",
  description:
    "OmniConsole turns your PC into a gaming console — boot into your platform and switch anytime via Game Bar.",
  author: "8bit2qubit",
} as const;

export const REPO = {
  owner: "8bit2qubit",
  name: "OmniConsole",
  url: "https://github.com/8bit2qubit/OmniConsole",
  releasesUrl: "https://github.com/8bit2qubit/OmniConsole/releases",
  latestReleaseUrl:
    "https://github.com/8bit2qubit/OmniConsole/releases/latest",
  apiLatestUrl:
    "https://api.github.com/repos/8bit2qubit/OmniConsole/releases/latest",
  licenseUrl:
    "https://github.com/8bit2qubit/OmniConsole/blob/main/LICENSE",
} as const;

export const XFSET = {
  name: "Xbox Full Screen Experience Tool",
  url: "https://github.com/8bit2qubit/XboxFullScreenExperienceTool",
} as const;

// 相對於 BASE_URL；對應到 public/images/
export const IMG_BASE = "/images";

export const LOCALES = ["en", "zh-TW", "zh-CN"] as const;
export type Locale = (typeof LOCALES)[number];

export const LOCALE_NAMES: Record<Locale, string> = {
  en: "English",
  "zh-TW": "繁體中文",
  "zh-CN": "简体中文",
};

export const LOCALE_IMG_SUFFIX: Record<Locale, string> = {
  en: "",
  "zh-TW": ".zh-TW",
  "zh-CN": ".zh-TW", // zh-CN 擷圖 fallback 到 zh-TW（無獨立版本）
};

export const GAMEPAD_SHORTCUT_IMG: Record<Locale, string> = {
  en: "/images/gamepad-steam-shortcuts.png",
  "zh-TW": "/images/gamepad-steam-shortcuts.zh-TW.png",
  "zh-CN": "/images/gamepad-steam-shortcuts.zh-TW.png",
};

// 手把滑鼠模式示意圖（不區分語言）
export const GAMEPAD_MOUSE_MODE_IMG = "/images/gamepad-mouse-mode.png";
