// import { useQuery, type QueryKey, type UseQueryOptions } from "@tanstack/react-query";
// import { apiClient } from "@/lib/apiClient";

// export const useGet = <T>(
//   key: QueryKey,
//   url: string,
//   options?: Omit<UseQueryOptions<T>, "queryKey" | "queryFn">
// ) => {
//   return useQuery<T>({
//     queryKey: key,
//     queryFn: async () => {
//       const { data } = await apiClient.get(url);
//       return data;
//     },
//     ...options,
//   });
// };


import {
  useQuery,
  type UseQueryOptions,
  type QueryKey,
} from "@tanstack/react-query";
import { apiClient } from "@/lib/apiClient";

type UseGetKey = string | QueryKey;

export const useGet = <T>(
  key: UseGetKey,
  url: string,
  options?: Omit<UseQueryOptions<T>, "queryKey" | "queryFn">
) => {
  return useQuery<T>({
    queryKey: Array.isArray(key) ? key : [key],
    queryFn: async () => {
      const { data } = await apiClient.get(url);
      return data;
    },
    ...options,
  });
};