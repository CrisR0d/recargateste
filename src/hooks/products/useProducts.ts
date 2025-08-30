import { ProductsParams, getProducts } from "@/services/product.service";
import { Pagination } from "@/types/commons";
import { IProducts } from "@/types/products";
import { normalizeParams } from "@/utils/normalizeParams";
import { QueryKey, useQuery, UseQueryOptions } from "@tanstack/react-query";

export const productsKeys = {
  all: ["products"] as const,
  list: (params?: ProductsParams) => ["products", "list", normalizeParams(params)] as const,
};

type UseProductsOptions = Omit<
  UseQueryOptions<Pagination<IProducts>, Error, Pagination<IProducts>, QueryKey>,
  "queryKey" | "queryFn"
>;

export function useProducts(params?: ProductsParams, options?: UseProductsOptions) {
  return useQuery({
    queryKey: productsKeys.list(params),
    queryFn: () => getProducts(params),
    staleTime: 60_000,
    ...options,
  });
}