import { IUserAccounts } from "@/types/user";
import { BASE_URL } from "@/utils/const";

export async function getAccountsByUser(userId: string): Promise<IUserAccounts> {
  const url = `${BASE_URL}/user/${userId}/accounts`;

  const res = await fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Failed to fetch user accounts (${res.status}): ${text}`);
  }

  return res.json();
}
