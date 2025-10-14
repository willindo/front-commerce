"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState(100); // rupees
  const router = useRouter();
  const API = process.env.NEXT_PUBLIC_API_URL!;

  const handleCheckout = async () => {
    setLoading(true);
    try {
      // 1) Create internal order (server will read cart or payload)
      const createOrderRes = await fetch(`${API}/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-user-id": "user_123" /* or use auth */,
        },
        body: JSON.stringify({
          items: [], // optional: server will pull from cart if empty
          paymentMethod: "RAZORPAY",
          // include address etc
        }),
      });
      if (!createOrderRes.ok) throw new Error("Failed to create order");
      const orderJson = await createOrderRes.json();
      const internalOrderId = orderJson.id;
      const total = Number(orderJson.total || amount);

      // 2) Create Razorpay order on server (linking to internal order)
      const createPaymentRes = await fetch(`${API}/payments/create-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderId: internalOrderId, amount: total }),
      });
      if (!createPaymentRes.ok) {
        const txt = await createPaymentRes.text();
        throw new Error(`create-order failed: ${txt}`);
      }
      const paymentJson = await createPaymentRes.json();
      const razorpayOrderId = paymentJson.razorpayOrderId;

      // 3) Open Razorpay checkout
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: Math.round(total * 100),
        currency: "INR",
        name: "Reload Store",
        description: `Order ${internalOrderId}`,
        order_id: razorpayOrderId,
        handler: async function (res: any) {
          // res: { razorpay_order_id, razorpay_payment_id, razorpay_signature }
          // attach the internal order id so backend can reconcile
          await fetch(`${API}/payments/verify`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              orderId: internalOrderId,
              razorpay_order_id: res.razorpay_order_id,
              razorpay_payment_id: res.razorpay_payment_id,
              razorpay_signature: res.razorpay_signature,
            }),
          });

          // redirect to order success - optionally include internalOrderId
          router.push(`/order-success?orderId=${internalOrderId}`);
        },
        prefill: {
          name: "Test User",
          email: "test@example.com",
          contact: "9999999999",
        },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch (err: any) {
      console.error(err);
      alert("Payment failed: " + (err.message || err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 flex flex-col items-center">
      <h2 className="text-xl mb-4">Checkout</h2>
      <p className="mb-2">Total Amount: ₹{amount}</p>
      <button
        onClick={handleCheckout}
        disabled={loading}
        className="bg-black text-white px-4 py-2 rounded-md"
      >
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </div>
  );
}
