"use client";

import { useState } from "react";

type CartItem = {
  id: string;
  productId: string;
  name: string;
  price: number;
  quantity: number;
};

type CartPageProps = {
  items: CartItem[];
};

export default function EnhancedCartPage({ items }: CartPageProps) {
  const [cartItems, setCartItems] = useState(items);

  const updateQuantity = (id: string, qty: number) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: qty } : item))
    );
  };

  const removeItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>🛒 Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border p-4 rounded"
            >
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p>
                  ${item.price} x {item.quantity}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min={1}
                  value={item.quantity}
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

          <div className="text-lg font-bold text-right">
            Total: ${total.toFixed(2)}
          </div>
          <div className="flex justify-end gap-2">
            <button
              onClick={() => setCartItems([])}
              className="bg-gray-600 text-white px-4 py-2 rounded"
            >
              Clear Cart
            </button>
            <button
              onClick={() => alert("Proceed to Checkout")}
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}
