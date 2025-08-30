import { Pagination } from "@/types/commons";
import { IOptions4Recharge, IProducts } from "@/types/products";
import { BASE_URL } from "@/utils/const";
import { toQueryString } from "@/utils/toQueryString";

export type ProductsParams = {
  category?: string | string[];
  search?: string;             
  page?: number;               
  pageSize?: number;           
  sort?: string;               
};

export async function getProducts(params: ProductsParams = {}): Promise<Pagination<IProducts>> {
  const qs = toQueryString(params);
  const url = `${BASE_URL}/products${qs ? `?${qs}` : ""}`;

  const res = await fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Failed to fetch products (${res.status}): ${text}`);
  }

  return res.json();
}

export async function getOptions4RechargeByProducts(productId: string): Promise<Pagination<IOptions4Recharge>> {
  const url = `${BASE_URL}/products/${productId}/options-recharge`;

  const res = await fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Failed to fetch options for recharge (${res.status}): ${text}`);
  }

  return res.json();
}

