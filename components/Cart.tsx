import { useCart } from "@/hooks/useCart";

export default function Cart() {
  const { cartQuery, updateMutation, removeMutation } = useCart();

  if (cartQuery.isLoading) return <div>Loading cart...</div>;
  if (cartQuery.isError || !cartQuery.data)
    return <div>Error loading cart</div>;

  const cart = cartQuery.data;

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.items.length === 0 && <p>Cart is empty</p>}
      <ul>
        {cart.items.map((item) => (
          <li key={item.id} className="flex justify-between items-center gap-4">
            <span>{item.product?.name}</span>
            <input
              type="number"
              value={item.quantity}
              min={1}
              onChange={(e) =>
                updateMutation.mutate({
                  itemId: item.id,
                  quantity: Number(e.target.value),
                })
              }
              className="border p-1 w-16"
            />
            <button
              onClick={() => removeMutation.mutate(item.id)}
              className="bg-red-600 text-white px-2 py-1"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      {/* <p>
        Total: ₹
        {cart.items.reduce(
          (sum: number, i) => sum + (i.product?.price || 0) * i.quantity,
          0
        )}
      </p> */}
    </div>
  );
}
