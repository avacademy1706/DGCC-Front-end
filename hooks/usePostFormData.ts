import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/lib/apiClient";

export const usePostFormData = (url: string, invalidateKey?: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (formData: FormData) => {
      const { data } = await apiClient.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

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