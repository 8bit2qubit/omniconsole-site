import { REPO } from "../consts";

export interface ReleaseInfo {
  version: string;
  publishedAt: string;
  sizeBytes: number;
  downloadUrl: string;
}

// 失敗結果的重試間隔
const FAILURE_TTL_MS = 5 * 60 * 1000;
let cached: ReleaseInfo | null | undefined;
let cachedAt = 0;
let inflight: Promise<ReleaseInfo | null> | null = null;

/**
 * 取得最新 release 資訊，帶模組層快取：
 * 成功結果整個行程只抓一次，失敗結果保留 FAILURE_TTL_MS 後才重試，
 * 並發呼叫共用同一個進行中的請求。
 * dev 模式每次頁面重載都會重跑 frontmatter，快取讓重載不再累積 GitHub API 呼叫次數。
 */
export async function fetchLatestRelease(): Promise<ReleaseInfo | null> {
  if (cached !== undefined && (cached !== null || Date.now() - cachedAt < FAILURE_TTL_MS)) {
    return cached;
  }
  inflight ??= doFetch();
  try {
    cached = await inflight;
  } finally {
    inflight = null;
  }
  cachedAt = Date.now();
  return cached;
}

/** 呼叫 GitHub API，解析最新 release 的版本、發布時間與 x64 zip 資產。 */
async function doFetch(): Promise<ReleaseInfo | null> {
  try {
    const res = await fetch(REPO.apiLatestUrl, {
      headers: { Accept: "application/vnd.github+json", "User-Agent": "omniconsole-site" },
    });
    if (!res.ok) return null;
    const data = await res.json();
    const zip = data.assets?.find((a: { name: string }) => /_x64\.zip$/i.test(a.name))
      ?? data.assets?.find((a: { name: string }) => /\.zip$/i.test(a.name));
    if (!zip) return null;
    return {
      version: data.tag_name ?? "unknown",
      publishedAt: data.published_at ?? "",
      sizeBytes: zip.size ?? 0,
      downloadUrl: zip.browser_download_url ?? "",
    };
  } catch {
    return null;
  }
}
