"use client";

import { useCart } from "@/hooks/useCart";
import { useMutation } from "@tanstack/react-query";
import { createOrder } from "@/lib/api/orders";
import type { CreateOrderDto, OrderResponseDto } from "@/lib/types/order";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

// ✅ Zod schema aligned with CreateOrderDto
const CheckoutSchema = z.object({
  paymentMethod: z.enum(["cod", "card"]),
  shippingAddress: z.object({
    line1: z.string().min(1, "Address line 1 is required"),
    line2: z.string().optional(),
    city: z.string().min(1, "City is required"),
    state: z.string().optional(),
    postalCode: z.string().min(3, "Postal code is required"),
    country: z.string().min(1, "Country is required"),
  }),
});

type CheckoutFormValues = z.infer<typeof CheckoutSchema>;

export default function Checkout() {
  const { cartQuery } = useCart();

  const mutation = useMutation<OrderResponseDto, Error, CreateOrderDto>({
    // mutationFn: createOrder,
    onSuccess: () => {
      alert("✅ Order placed successfully!");
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormValues>({
    resolver: zodResolver(CheckoutSchema),
    defaultValues: {
      paymentMethod: "cod",
      shippingAddress: {
        line1: "",
        line2: "",
        city: "",
        state: "",
        postalCode: "",
        country: "",
      },
    },
  });

  // Add a check for cartQuery.data and cartQuery.data.items
  if (
    !cartQuery.data ||
    !cartQuery.data.items ||
    cartQuery.data.items.length === 0
  ) {
    return <div>🛒 Cart is empty</div>;
  }

  const onSubmit = (data: CheckoutFormValues) => {
    mutation.mutate(data); // directly matches CreateOrderDto
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md space-y-4 p-4 border rounded-lg shadow"
    >
      <h2 className="text-xl font-bold">Checkout</h2>

      {/* Payment */}
      <div>
        <label className="block font-medium">Payment Method</label>
        <select {...register("paymentMethod")} className="border p-2 w-full">
          <option value="cod">Cash on Delivery</option>
          <option value="card">Credit/Debit Card</option>
        </select>
        {errors.paymentMethod && (
          <p className="text-red-500 text-sm">{errors.paymentMethod.message}</p>
        )}
      </div>

      {/* Shipping */}
      <div>
        <label className="block font-medium">Address Line 1</label>
        <input
          {...register("shippingAddress.line1")}
          className="border p-2 w-full"
        />
        {errors.shippingAddress?.line1 && (
          <p className="text-red-500 text-sm">
            {errors.shippingAddress.line1.message}
          </p>
        )}
      </div>

      <div>
        <label className="block font-medium">Address Line 2</label>
        <input
          {...register("shippingAddress.line2")}
          className="border p-2 w-full"
        />
      </div>

      <div>
        <label className="block font-medium">City</label>
        <input
          {...register("shippingAddress.city")}
          className="border p-2 w-full"
        />
        {errors.shippingAddress?.city && (
          <p className="text-red-500 text-sm">
            {errors.shippingAddress.city.message}
          </p>
        )}
      </div>

      <div>
        <label className="block font-medium">State</label>
        <input
          {...register("shippingAddress.state")}
          className="border p-2 w-full"
        />
      </div>

      <div>
        <label className="block font-medium">Postal Code</label>
        <input
          {...register("shippingAddress.postalCode")}
          className="border p-2 w-full"
        />
        {errors.shippingAddress?.postalCode && (
          <p className="text-red-500 text-sm">
            {errors.shippingAddress.postalCode.message}
          </p>
        )}
      </div>

      <div>
        <label className="block font-medium">Country</label>
        <input
          {...register("shippingAddress.country")}
          className="border p-2 w-full"
        />
        {errors.shippingAddress?.country && (
          <p className="text-red-500 text-sm">
            {errors.shippingAddress.country.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={mutation.isPending}
        className="bg-green-600 text-white px-4 py-2 w-full rounded"
      >
        {mutation.isPending ? "Placing Order..." : "Place Order"}
      </button>
    </form>
  );
}
