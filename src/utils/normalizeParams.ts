import { ProductsParams } from "@/services/product.service";

export function normalizeParams(params?: ProductsParams) {
  if (!params) return {};
  const { category, search, page, pageSize, sort } = params;

  return {
    category: Array.isArray(category) ? [...category].sort() : category ?? null,
    search: search ?? null,
    page: page ?? 1,
    pageSize: pageSize ?? 20,
    sort: sort ?? null,
  };
}