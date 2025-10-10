"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CheckoutSchema,
  CheckoutBody,
  VerifyCartResponse as VerifyCartRes,
} from "@/lib/types/checkout";
import { checkout } from "@/lib/api/checkout";
import { verifyCart, VerifyCartResponse } from "@/lib/api/cart";

export default function CheckoutPage() {
  const [invalidItems, setInvalidItems] = useState<VerifyCartResponse | null>(
    null
  );
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const { register, handleSubmit } = useForm<CheckoutBody>({
    resolver: zodResolver(CheckoutSchema),
  });

  useEffect(() => {
    const TEMP_USER_ID = "2b38ae62-d82f-4034-8419-c4c4737473ed";

    verifyCart(TEMP_USER_ID)
      .then((res) => {
        if (!res.isValid) setInvalidItems(res);
      })
      .catch((err) => setError(err.message));
  }, []);

  const onSubmit = async (data: CheckoutBody) => {
    try {
      setLoading(true);
      await checkout(data);
      setSuccess(true);
    } catch (err: any) {
      setError(err.message || "Checkout failed");
    } finally {
      setLoading(false);
    }
  };

  if (success) return <h2>✅ Order placed successfully!</h2>;

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

      {invalidItems && invalidItems.invalidItems.length > 0 && (
        <div className="text-red-600 mb-4">
          <h2>Cart Issues:</h2>
          <ul>
            {invalidItems.invalidItems.map((item) => (
              <li key={item.id}>
                {item.productName}: {item.reason}
              </li>
            ))}
          </ul>
        </div>
      )}

      {error && <div className="text-red-600 mb-2">{error}</div>}

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <input
          {...register("addressId")}
          placeholder="Address ID (optional)"
          className="border p-2 rounded"
        />
        <select {...register("paymentMethod")} className="border p-2 rounded">
          <option value="">Select Payment Method (optional)</option>
          <option value="stripe">Stripe</option>
          <option value="razorpay">Razorpay</option>
        </select>
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white py-2 px-4 rounded"
        >
          {loading ? "Processing..." : "Place Order"}
        </button>
      </form>
    </div>
  );
}
