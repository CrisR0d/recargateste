import { fetchBanners } from "@/services/banners.service";
import { IBanners } from "@/types/banners";
import { QueryKey, UseQueryOptions } from "@tanstack/react-query";


export const bannersKey = {
  all: ["banners"] as const,
  list: () => ["banners", "list"] as const,
};

type UseBannersOptions = Omit<
  UseQueryOptions<IBanners, Error, IBanners, QueryKey>,
  "queryKey" | "queryFn"
>;

export const useBannersHero = (options?: UseBannersOptions) => {

  return {
    queryKey: bannersKey.list(),
    queryFn: () => fetchBanners(),
    staleTime: 60_000,
    ...options,
  }
}