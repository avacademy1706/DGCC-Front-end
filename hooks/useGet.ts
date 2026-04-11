import { useQuery, type QueryKey, type UseQueryOptions } from "@tanstack/react-query";
import { apiClient } from "@/lib/apiClient";

export const useGet = <T>(
  key: QueryKey,
  url: string,
  options?: Omit<UseQueryOptions<T>, "queryKey" | "queryFn">
) => {
  return useQuery<T>({
    queryKey: key,
    queryFn: async () => {
      const { data } = await apiClient.get(url);
      return data;
    },
    ...options,
  });
};