"use client";

import { useEffect, useState } from "react";

type OrderItem = {
  productId: string;
  quantity: number;
  priceAtPurchase: number;
};
type Order = { id: string; total: number; status: string; items: OrderItem[] };

export default function OrdersPage() {
  const userId = "demo-user-id"; // Replace with auth context
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  if (orders.length === 0) return <p>No orders yet.</p>;

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold mb-4">Your Orders</h1>
      {orders.map((o) => (
        <div key={o.id} className="border p-4 rounded space-y-2">
          <div className="flex justify-between">
            <div>Order ID: {o.id}</div>
            <div>Status: {o.status}</div>
          </div>
          <div>Total: ${o.total}</div>
          <div className="mt-2">
            {o.items.map((it) => (
              <div key={it.productId} className="flex justify-between">
                <div>Product: {it.productId}</div>
                <div>
                  {it.quantity} × ${it.priceAtPurchase}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
