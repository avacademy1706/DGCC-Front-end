import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/lib/apiClient";

export const useDelete = (url: string, invalidateKey?: string) => {

  const queryClient = useQueryClient();

  return useMutation({

    mutationFn: async (id: string) => {
      const { data } = await apiClient.delete(`${url}/${id}`);
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