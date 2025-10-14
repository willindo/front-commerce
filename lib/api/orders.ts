export async function fetchOrders(userId: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders`, {
    headers: {
      "Content-Type": "application/json",
      "x-user-id": userId, // temp header if auth not yet integrated
    },
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch orders");
  return res.json();
}

export async function cancelOrder(orderId: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/orders/${orderId}/cancel`,
    { method: "POST" }
  );
  if (!res.ok) throw new Error("Failed to cancel order");
  return res.json();
}
