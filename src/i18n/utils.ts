import en from "./en.json";
import zhTW from "./zh-TW.json";
import zhCN from "./zh-CN.json";
import type { Locale } from "../consts";

type Translations = typeof en;

const translations: Record<Locale, Translations> = {
  en,
  "zh-TW": zhTW as Translations,
  "zh-CN": zhCN as Translations,
};

export function resolveLocale(input: Locale | string | undefined): Locale {
  return input === "zh-TW" || input === "zh-CN" ? input : "en";
}

export function useTranslations(locale: Locale | string | undefined) {
  return translations[resolveLocale(locale)];
}

export function getLocaleFromUrl(url: URL): Locale {
  const segments = url.pathname.split("/").filter(Boolean);
  // base: "/omniconsole-site" prepends an extra segment; strip it before reading locale
  const baseStripped = segments[0] === "omniconsole-site" ? segments.slice(1) : segments;
  const first = baseStripped[0];
  if (first === "zh-TW" || first === "zh-CN") return first;
  return "en";
}

/**
 * Build a path that preserves the Astro `base` prefix and injects the locale segment.
 * Example: withLocale("/docs/install", "zh-TW") → "/omniconsole-site/zh-TW/docs/install"
 */
export function withLocale(path: string, locale: Locale | string, base: string): string {
  const safe = resolveLocale(locale);
  const clean = path.startsWith("/") ? path : `/${path}`;
  const baseTrimmed = base.replace(/\/$/, "");
  if (safe === "en") return `${baseTrimmed}${clean}`;
  return `${baseTrimmed}/${safe}${clean}`;
}

/**
 * Given the current pathname (already locale-prefixed for non-en),
 * return the equivalent path in a target locale.
 */
export function translatePath(currentPath: string, targetLocale: Locale | string, base: string): string {
  const safe = resolveLocale(targetLocale);
  const baseTrimmed = base.replace(/\/$/, "");
  let p = currentPath;
  if (baseTrimmed && p.startsWith(baseTrimmed)) p = p.slice(baseTrimmed.length);
  if (!p.startsWith("/")) p = `/${p}`;
  // Strip any existing locale prefix
  const m = p.match(/^\/(zh-TW|zh-CN)(\/.*|$)/);
  const pathWithoutLocale = m ? m[2] || "/" : p;
  return withLocale(pathWithoutLocale, safe, base);
}
