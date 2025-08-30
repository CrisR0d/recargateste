import { IPaymentMethods } from "@/types/payment-methods";
import { BASE_URL } from "@/utils/const";

export async function fetchPaymentMethods(): Promise<IPaymentMethods> {
  const url = `${BASE_URL}/payment-methods`;

  const res = await fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Failed to fetch payment methods (${res.status}): ${text}`);
  }

  return res.json();
}
