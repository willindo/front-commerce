"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type CartItem = {
  id: string;
  productId: string;
  quantity: number;
  product?: { name: string; price: number };
};

type Cart = {
  id: string;
  userId: string;
  items: CartItem[];
};

export default function CartPage() {
  const userId = "demo-user-id"; // Replace with actual auth context
  const router = useRouter();
  const [cart, setCart] = useState<Cart | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchCart = async () => {
    try {
      setLoading(true);
      const res = await fetch(`http://localhost:3001/cart/${userId}`);
      const data: Cart = await res.json();
      // Ensure items is always an array
      setCart({ ...data, items: data.items || [] });
    } catch (err) {
      console.error("Failed to fetch cart:", err);
      setCart({ id: "", userId, items: [] });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const updateQuantity = async (itemId: string, qty: number) => {
    try {
      await fetch(`http://localhost:3001/cart/${userId}/update`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ itemId, quantity: qty }),
      });
      fetchCart();
    } catch (err) {
      console.error("Failed to update quantity:", err);
    }
  };

  const removeItem = async (itemId: string) => {
    try {
      await fetch(`http://localhost:3001/cart/${userId}/item/${itemId}`, {
        method: "DELETE",
      });
      fetchCart();
    } catch (err) {
      console.error("Failed to remove item:", err);
    }
  };

  const clearCart = async () => {
    try {
      await fetch(`http://localhost:3001/cart/${userId}/clear`, {
        method: "DELETE",
      });
      fetchCart();
    } catch (err) {
      console.error("Failed to clear cart:", err);
    }
  };

  const checkout = async () => {
    if (!cart) return;
    try {
      await fetch(`http://localhost:3001/orders`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, cartId: cart.id }),
      });
      alert("Order placed successfully!");
      router.push("/orders");
    } catch (err) {
      console.error("Checkout failed:", err);
      alert("Checkout failed. Please try again.");
    }
  };

  if (loading) return <p>Loading cart...</p>;

  // Safe total calculation
  const total =
    cart?.items?.reduce(
      (sum, item) => sum + (item.product?.price || 0) * item.quantity,
      0
    ) || 0;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {cart?.items.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <div className="space-y-4">
          {cart?.items?.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border p-4 rounded"
            >
              <div>
                <h2 className="font-semibold">
                  {item.product?.name || "Unknown Product"}
                </h2>
                <p>
                  ${item.product?.price ?? 0} x {item.quantity}
                </p>
              </div>
              <div className="space-x-2 flex items-center">
                <input
                  type="number"
                  value={item.quantity}
                  min={1}
                  onChange={(e) =>
                    updateQuantity(item.id, Number(e.target.value))
                  }
                  className="w-16 border p-1 rounded"
                />
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-600"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="font-bold text-lg">Total: ${total}</div>
          <div className="space-x-2">
            <button
              onClick={clearCart}
              className="bg-gray-600 text-white px-4 py-2 rounded"
            >
              Clear Cart
            </button>
            <button
              onClick={checkout}
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
