"use client";

import { useEffect, useState } from "react";
import {
  getCart,
  updateCartItem,
  removeCartItem,
  clearCart,
  Cart,
  verifyCart,
} from "@/lib/api/cart";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const [cart, setCart] = useState<Cart | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    getCart()
      .then(setCart)
      .finally(() => setLoading(false));
  }, []);

  async function handleQuantityChange(itemId: string, quantity: number) {
    if (quantity < 1) return;
    const updated = await updateCartItem(itemId, quantity);
    setCart(updated);
  }

  async function handleRemove(itemId: string) {
    const updated = await removeCartItem(itemId);
    setCart(updated);
  }

  async function handleClear() {
    const updated = await clearCart();
    setCart(updated);
  }

  if (loading) return <p className="p-4">Loading cart...</p>;
  if (!cart || cart.items.length === 0)
    return <p className="p-4">Your cart is empty.</p>;

  const subtotal = cart.items.reduce(
    (sum, item) => sum + (item.product.price || 0) * item.quantity,
    0
  );

  async function handleProceedToCheckout() {
    if (!cart?.id || !cart?.userId) return;
    try {
      const verified = await verifyCart(cart.userId); // ✅ fixed
      if (!verified.isValid) {
        alert("Some items in your cart are unavailable or out of stock.");
        return;
      }

      router.push(`/checkout?cartId=${cart.id}`);
    } catch (err) {
      console.error("Cart verification failed:", err);
      alert("Could not verify cart. Please try again.");
    }
  }

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
              {item.product.image && (
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-16 h-16 object-cover rounded"
                />
              )}
              <div>
                <p className="font-medium">{item.product.name}</p>
                <p className="text-sm text-gray-500">₹{item.product.price}</p>
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
      <div className="flex justify-between mt-6">
        <button
          onClick={handleClear}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Clear Cart
        </button>
        <button
          onClick={handleProceedToCheckout}
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
