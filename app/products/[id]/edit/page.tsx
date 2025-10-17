"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UpdateProductDto } from "@/lib/types/products";
import { useProduct, useUpdateProduct } from "@/hooks/useProducts";
import { useParams } from "next/navigation";

export default function EditProductPage() {
  const { id } = useParams<{ id: string }>();
  const { data } = useProduct(id);
  const updateMutation = useUpdateProduct();

  const { register, handleSubmit, reset } = useForm<UpdateProductDto>({
    resolver: zodResolver(UpdateProductDto as any),
    values: data,
  });

  const onSubmit = (formData: UpdateProductDto) => {
    updateMutation.mutate({ id, data: formData });
  };

  if (!data) return <p>Loading...</p>;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto mt-6 space-y-3"
    >
      <input
        {...register("name")}
        placeholder="Name"
        className="border p-2 w-full"
      />
      <input
        {...register("price", { valueAsNumber: true })}
        type="number"
        placeholder="Price"
      />
      <input
        {...register("stock", { valueAsNumber: true })}
        type="number"
        placeholder="Stock"
      />
      <textarea {...register("description")} placeholder="Description" />
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Update
      </button>
    </form>
  );
}
