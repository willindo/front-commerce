"use client";
import Link from "next/link";

export default function OrderSuccessPage() {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center">
      <h1 className="text-3xl font-bold text-green-600 mb-4">
        ✅ Order Placed Successfully!
      </h1>
      <p className="text-gray-700 mb-8">
        Your order has been confirmed. You can track it anytime in{" "}
        <Link href="/orders" className="text-blue-600 underline">
          My Orders
        </Link>
        .
      </p>
      <Link
        href="/"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Continue Shopping
      </Link>
    </div>
  );
}
