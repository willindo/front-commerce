"use client";
import { useForm } from "react-hook-form";

type ProductFormProps = {
  defaultValues?: any;
  onSubmit: (data: any) => void;
  loading?: boolean;
};

export default function ProductForm({
  defaultValues,
  onSubmit,
  loading,
}: ProductFormProps) {
  const { register, handleSubmit } = useForm({ defaultValues });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md">
      <input
        {...register("name")}
        placeholder="Name"
        className="border p-2 w-full"
      />
      <input
        {...register("slug")}
        placeholder="Slug"
        className="border p-2 w-full"
      />
      <input
        {...register("sku")}
        placeholder="SKU"
        className="border p-2 w-full"
      />
      <input
        type="number"
        {...register("price", { valueAsNumber: true })}
        placeholder="Price"
        className="border p-2 w-full"
      />
      <input
        type="number"
        {...register("stock", { valueAsNumber: true })}
        placeholder="Stock"
        className="border p-2 w-full"
      />
      <textarea
        {...register("description")}
        placeholder="Description"
        className="border p-2 w-full"
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2"
      >
        {loading ? "Saving..." : "Submit"}
      </button>
    </form>
  );
}
