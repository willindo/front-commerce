"use client";
import { useEffect, useState } from "react";
import { fetchOrders, cancelOrder } from "@/lib/api/orders";

type Order = {
  id: string;
  total: number;
  status: string;
  paymentStatus: string;
  createdAt: string;
  items: {
    id: string;
    quantity: number;
    priceAtPurchase: number;
    product: { name: string; image?: string };
  }[];
};

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const TEMP_USER_ID = "2b38ae62-d82f-4034-8419-c4c4737473ed";

  useEffect(() => {
    fetchOrders(TEMP_USER_ID)
      .then(setOrders)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const handleCancel = async (id: string) => {
    if (!confirm("Cancel this order?")) return;
    try {
      await cancelOrder(id);
      setOrders((prev) =>
        prev.map((o) => (o.id === id ? { ...o, status: "CANCELLED" } : o))
      );
    } catch (err: any) {
      alert(err.message || "Cancel failed");
    }
  };

  if (loading) return <p className="text-center mt-8">Loading orders...</p>;
  if (error) return <p className="text-red-600 text-center">{error}</p>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">My Orders</h1>
      {orders.length === 0 && <p className="text-gray-600">No orders found.</p>}
      <div className="flex flex-col gap-6">
        {orders.map((order) => (
          <div
            key={order.id}
            className="border rounded-lg p-4 shadow-sm hover:shadow-md transition"
          >
            <div className="flex justify-between mb-2">
              <div>
                <h2 className="font-semibold">Order #{order.id}</h2>
                <p className="text-sm text-gray-500">
                  {new Date(order.createdAt).toLocaleString()}
                </p>
              </div>
              <div className="text-right">
                <p className="font-medium">₹{Number(order.total).toFixed(2)}</p>
                <p
                  className={`text-sm ${
                    order.status === "CANCELLED"
                      ? "text-red-600"
                      : "text-green-600"
                  }`}
                >
                  {order.status}
                </p>
              </div>
            </div>

            <ul className="mb-3">
              {order.items.map((item) => (
                <li key={item.id} className="text-sm text-gray-700">
                  {item.product.name} × {item.quantity} — ₹
                  {item.priceAtPurchase * item.quantity}
                </li>
              ))}
            </ul>

            {order.status !== "CANCELLED" && (
              <button
                onClick={() => handleCancel(order.id)}
                className="text-sm text-red-600 underline"
              >
                Cancel Order
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
