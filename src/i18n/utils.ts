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
  // base: "/omniconsole-site" 會多出一段路徑；讀取 locale 前先去掉
  const baseStripped = segments[0] === "omniconsole-site" ? segments.slice(1) : segments;
  const first = baseStripped[0];
  if (first === "zh-TW" || first === "zh-CN") return first;
  return "en";
}

/**
 * 組出保留 Astro `base` 前綴並插入 locale 區段的路徑。
 * 範例：withLocale("/docs/install", "zh-TW") → "/omniconsole-site/zh-TW/docs/install"
 */
export function withLocale(path: string, locale: Locale | string, base: string): string {
  const safe = resolveLocale(locale);
  const clean = path.startsWith("/") ? path : `/${path}`;
  const baseTrimmed = base.replace(/\/$/, "");
  if (safe === "en") return `${baseTrimmed}${clean}`;
  return `${baseTrimmed}/${safe}${clean}`;
}

/**
 * 給定目前的 pathname（非 en 已含 locale 前綴），
 * 回傳對應到目標 locale 的等效路徑。
 */
export function translatePath(currentPath: string, targetLocale: Locale | string, base: string): string {
  const safe = resolveLocale(targetLocale);
  const baseTrimmed = base.replace(/\/$/, "");
  let p = currentPath;
  if (baseTrimmed && p.startsWith(baseTrimmed)) p = p.slice(baseTrimmed.length);
  if (!p.startsWith("/")) p = `/${p}`;
  // 去除既有的 locale 前綴
  const m = p.match(/^\/(zh-TW|zh-CN)(\/.*|$)/);
  const pathWithoutLocale = m ? m[2] || "/" : p;
  return withLocale(pathWithoutLocale, safe, base);
}
