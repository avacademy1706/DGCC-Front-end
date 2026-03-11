import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/lib/apiClient";

export const usePost = (url: string, invalidateKey?: string) => {

  const queryClient = useQueryClient();

  return useMutation({

    mutationFn: async (payload: any) => {
      const { data } = await apiClient.post(url, payload);
      return data;
    },

    onSuccess: () => {
      if (invalidateKey) {
        queryClient.invalidateQueries({
          queryKey: [invalidateKey],
        });
      }
    },

  });

};