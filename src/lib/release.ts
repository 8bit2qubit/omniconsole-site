import { REPO } from "../consts";

export interface ReleaseInfo {
  version: string;
  publishedAt: string;
  sizeBytes: number;
  downloadUrl: string;
}

export async function fetchLatestRelease(): Promise<ReleaseInfo | null> {
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
