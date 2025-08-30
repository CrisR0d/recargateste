import { DtoRegisterOrderType } from "@/types/orders";
import { BASE_URL } from "@/utils/const";

export async function createOrder(data:DtoRegisterOrderType) {
  const url = `${BASE_URL}/orders`;
  
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Failed to register order (${res.status}): ${text}`);
  }

  return res.json();
}