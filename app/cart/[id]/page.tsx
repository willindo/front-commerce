"use client";

import { useEffect, useState } from "react";
import { getCart, updateCartItem, removeCartItem, Cart } from "@/lib/api/cart";
import Link from "next/link";

export default function CartPage({ params }: { params: { cartId: string } }) {
  const { cartId } = params;
  const [cart, setCart] = useState<Cart | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCart(cartId)
      .then(setCart)
      .finally(() => setLoading(false));
  }, [cartId]);

  async function handleQuantityChange(itemId: string, quantity: number) {
    if (!cart) return;
    const updated = await updateCartItem(cart.id, itemId, quantity);
    setCart({ ...cart, items: updated.items });
  }

  async function handleRemove(itemId: string) {
    if (!cart) return;
    const updated = await removeCartItem(cart.id, itemId);
    setCart({ ...cart, items: updated.items });
  }

  if (loading) return <p className="p-4">Loading cart...</p>;
  if (!cart || cart.items.length === 0)
    return <p className="p-4">Your cart is empty.</p>;

  const subtotal = cart.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <ul className="space-y-4">
        {cart.items.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between border-b pb-2"
          >
            <div className="flex items-center space-x-4">
              {item.imageUrl && (
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
              )}
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-500">₹{item.price}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                disabled={item.quantity <= 1}
                className="px-2 py-1 border rounded"
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                className="px-2 py-1 border rounded"
              >
                +
              </button>
              <button
                onClick={() => handleRemove(item.id)}
                className="ml-2 text-red-500 text-sm"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center mt-6 font-semibold text-lg">
        <span>Subtotal</span>
        <span>₹{subtotal.toFixed(2)}</span>
      </div>
      <Link
        href={`/checkout?cartId=${cart.id}`}
        className="mt-6 block bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700"
      >
        Proceed to Checkout
      </Link>
    </div>
  );
}
