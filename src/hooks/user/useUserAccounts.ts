
import { getAccountsByUser } from "@/services/user.service";
import { IUserAccounts } from "@/types/user";
import { QueryKey, useQuery, UseQueryOptions } from "@tanstack/react-query";

export const userAccounts = {
  all: ["user-accounts"] as const,
  list: (userId: string) => ["user-accounts", "list", userId] as const,
};

type UseUserAccounts = Omit<
  UseQueryOptions<IUserAccounts, Error, IUserAccounts, QueryKey>,
  "queryKey" | "queryFn"
>;

export function useUserAccounts(userId: string, options?: UseUserAccounts) {
  return useQuery({
    queryKey: userAccounts.list(userId),
    queryFn: () => getAccountsByUser(userId),
    staleTime: 60_000,
    ...options,
  });
}