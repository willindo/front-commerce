// app/cart-test/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useCart } from "@/hooks/useCart"; // your react-query hooks
import { AddToCartInput, UpdateCartItemInput } from "@/lib/schemas/cart";
import { clearCart } from "@/lib/api/cart";

export default function CartTestPage() {
  const [userId, setUserId] = useState<string>("");
  const [newProductId, setNewProductId] = useState<string>(""); // for adding new product
  const [quantity, setQuantity] = useState<number>(1);

  const { cartQuery, addMutation, updateMutation, removeMutation } = useCart();

  useEffect(() => {
    // Load userId from localStorage or default
    // const uid =
    //   localStorage.getItem("userId") || "ae5f0299-5311-4dba-b0f3-b7d2d1dff8df";
    // setUserId(uid);
    localStorage.setItem("userId", "ae5f0299-5311-4dba-b0f3-b7d2d1dff8df");
  }, []);

  const refreshCart = () => cartQuery.refetch();

  const handleAddToCart = async () => {
    if (!newProductId || quantity < 1)
      return alert("Enter valid productId & quantity");
    const payload: AddToCartInput = { productId: newProductId, quantity };
    await addMutation.mutateAsync(payload);
    refreshCart();
    setNewProductId("");
    setQuantity(1);
  };

  const handleUpdateQuantity = async (itemId: string, qty: number) => {
    if (qty < 1) return;
    const payload: UpdateCartItemInput = { itemId, quantity: qty };
    await updateMutation.mutateAsync(payload);
    refreshCart();
  };

  const handleRemoveItem = async (itemId: string) => {
    await removeMutation.mutateAsync(itemId);
    refreshCart();
  };

  const handleClearCart = async () => {
    await clearCart();
    refreshCart();
  };

  if (cartQuery.isLoading) return <div>Loading cart...</div>;
  if (cartQuery.isError) return <div>Error loading cart</div>;

  return (
    <div style={{ padding: 20 }}>
      <h1>Cart Test Page</h1>

      <div style={{ marginBottom: 20 }}>
        <label>
          User ID:{" "}
          <input
            value={userId}
            onChange={(e) => {
              const val = e.target.value;
              setUserId(val);
              localStorage.setItem("userId", val);
            }}
          />
        </label>
      </div>

      <div style={{ marginBottom: 20 }}>
        <h3>Add Product to Cart</h3>
        <input
          placeholder="Product ID"
          value={newProductId}
          onChange={(e) => setNewProductId(e.target.value)}
        />
        <input
          type="number"
          min={1}
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>

      <div style={{ marginBottom: 20 }}>
        <h3>Cart Items</h3>
        {cartQuery.data?.items.length === 0 && <div>Cart is empty</div>}
        {cartQuery.data?.items.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ccc",
              padding: 10,
              marginBottom: 5,
            }}
          >
            <div>
              <strong>{item.product?.name || item.productId}</strong>
            </div>
            <div>Quantity: {item.quantity}</div>
            <div>
              <button
                className=" m-2.5 bg-blue-500 "
                onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
              >
                ➕
              </button>
              <button
                className=" m-2.5 bg-amber-600"
                onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
              >
                ➖
              </button>
              <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>

      <button onClick={handleClearCart}>Clear Cart</button>
    </div>
  );
}
