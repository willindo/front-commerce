"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchOrders } from "@/lib/api/orders";

export default function OrdersPage() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["orders"],
    queryFn: fetchOrders,
  });

  if (isLoading) return <div>Loading orders...</div>;
  if (isError || !data) return <div>Error loading orders</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Orders</h1>
      <ul className="space-y-3">
        {data.map((order) => (
          <li
            key={order.id}
            className="border p-4 rounded shadow-sm bg-white"
          >
            <p>
              <span className="font-semibold">Order ID:</span> {order.id}
            </p>
            <p>
              <span className="font-semibold">Total:</span> ₹
              {(order.total / 100).toFixed(2)}
            </p>
            <p>
              <span className="font-semibold">Status:</span> {order.status}
            </p>
            <p className="text-sm text-gray-500">
              Placed: {new Date(order.createdAt).toLocaleString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
