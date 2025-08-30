import { fetchPaymentMethods } from "@/services/payment-methods.service";
import { IPaymentMethods } from "@/types/payment-methods";
import { QueryKey, useQuery, UseQueryOptions } from "@tanstack/react-query";

export const paymentMethods = {
  all: ["payment-methods"] as const,
  list: () => ["payment-methods", "list",] as const,
};

type UsePaymentMethods = Omit<
  UseQueryOptions<IPaymentMethods, Error, IPaymentMethods, QueryKey>,
  "queryKey" | "queryFn"
>;

export const useGetPaymentMethods = (options: UsePaymentMethods) => {
  return useQuery({
    queryKey: paymentMethods.list(),
    queryFn: () => fetchPaymentMethods(),
    staleTime: 60_000,
    ...options,
  });
}