"use client";

type OrderItem = { name: string; quantity: number; priceAtPurchase: number };
type Order = { id: string; status: string; total: number; items: OrderItem[] };

type OrderDetailsPageProps = { order: Order };

export default function OrderDetailsPage({ order }: OrderDetailsPageProps) {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">Order Details</h1>

      <div className="border p-4 rounded space-y-2">
        <div className="flex justify-between">
          <span>Order ID:</span>
          <span>{order.id}</span>
        </div>
        <div className="flex justify-between">
          <span>Status:</span>
          <span>{order.status}</span>
        </div>
        <div className="flex justify-between">
          <span>Total:</span>
          <span>${order.total.toFixed(2)}</span>
        </div>
      </div>

      <div className="border p-4 rounded space-y-2">
        <h2 className="font-semibold">Items</h2>
        {order.items.map((item, i) => (
          <div key={i} className="flex justify-between">
            <span>
              {item.name} x {item.quantity}
            </span>
            <span>${(item.priceAtPurchase * item.quantity).toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
