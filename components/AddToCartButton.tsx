import { useCart } from "@/hooks/useCart";

export default function AddToCartButton({ productId }: { productId: string }) {
  const { addMutation } = useCart();

  return (
    <button onClick={() => addMutation.mutate({ productId, quantity: 1 })}>
      Add to Cart
    </button>
  );
}
