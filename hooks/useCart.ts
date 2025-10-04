import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { addToCart, updateCartItem, removeCartItem } from "@/lib/api/cart";
import type { Cart, CartItem } from "@/lib/types/cart";
import { AddToCartInput, UpdateCartItemInput } from "@/lib/schemas/cart";
export function useCart() {
  const queryClient = useQueryClient();

  // ✅ Query
  const cartQuery = useQuery<Cart>({
    queryKey: ["cart"],
    staleTime: 1000 * 60, // 1 min cache
  });

  // ✅ Mutations
  const addMutation = useMutation<Cart, Error, AddToCartInput>({
    // mutationFn: addToCart,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  const updateMutation = useMutation<Cart, Error, UpdateCartItemInput>({
    // mutationFn: updateCartItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  const removeMutation = useMutation<Cart, Error, string>({
    // mutationFn: removeCartItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  return {
    cartQuery,
    addMutation,
    updateMutation,
    removeMutation,
  };
}
