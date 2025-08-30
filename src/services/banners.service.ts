
import { IBanners } from "@/types/banners";
import { BASE_URL } from "@/utils/const";

export async function fetchBanners(): Promise<IBanners> {
  const url = `${BASE_URL}/banners`;

  const res = await fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Failed to fetch banners (${res.status}): ${text}`);
  }

  return res.json();
}
