

import { createOrder } from '@/services/orders.service'
import { useMutation } from '@tanstack/react-query'

export const useCreateOrder = () => {

  const mutation = useMutation({
    mutationFn: createOrder,
    onError(error) {
      throw new Error(error instanceof Error ? String(error) : "Error registrando orden.");
    },
  })

  return {
    handleFetch: mutation.mutateAsync,
    isLoading: mutation.isPending,
  }
}