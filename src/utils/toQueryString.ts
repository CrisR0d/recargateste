import { ProductsParams } from "@/services/product.service";

export function toQueryString(params: ProductsParams = {}) {
  const q = new URLSearchParams();

  if (params.search) q.set("search", params.search);
  if (params.page && params.page > 0) q.set("page", String(params.page));
  if (params.pageSize && params.pageSize > 0) q.set("pageSize", String(params.pageSize));
  if (params.sort) q.set("sort", params.sort);

  if (params.category) {
    const cats = Array.isArray(params.category) ? params.category : [params.category];
    if (cats.length) q.set("category", cats.join(","));
  }

  return q.toString();
}