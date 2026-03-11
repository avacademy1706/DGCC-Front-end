import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/apiClient";

export const useGet = <T>(key: string, url: string, options?: any) => {

  return useQuery<T>({
    queryKey: [key],
    queryFn: async () => {
      const { data } = await apiClient.get(url);
      return data;
    },
    ...options,
  });

};