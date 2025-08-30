import { getOptions4RechargeByProducts } from "@/services/product.service";
import { Pagination } from "@/types/commons";
import { IOptions4Recharge } from "@/types/products";
import { QueryKey, useQuery, UseQueryOptions } from "@tanstack/react-query";

export const options4Recharge = {
  all: ["product-with-options-recharge"] as const,
  list: (productId: string) => ["product-with-options-recharge", "list", productId] as const,
};

type UseProductsOptions = Omit<
  UseQueryOptions<Pagination<IOptions4Recharge>, Error, Pagination<IOptions4Recharge>, QueryKey>,
  "queryKey" | "queryFn"
>;

export function useOptions4Recharge(productId: string, options?: UseProductsOptions) {
  return useQuery({
    queryKey: options4Recharge.list(productId),
    queryFn: () => getOptions4RechargeByProducts(productId),
    staleTime: 60_000,
    ...options,
  });
}