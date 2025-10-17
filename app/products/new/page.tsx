"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateProductDto } from "@/lib/types/products";
import { useCreateProduct } from "@/hooks/useProducts";
import { useRouter } from "next/navigation";

export default function NewProductPage() {
  const { register, handleSubmit, reset } = useForm<CreateProductDto>({
    resolver: zodResolver(CreateProductDto as any),
  });
  const createMutation = useCreateProduct();
  const router = useRouter();

  const onSubmit = async (formData: CreateProductDto) => {
    await createMutation.mutateAsync(formData);
    reset();
    router.push("/admin/products");
  };

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
        disabled={createMutation.isPending}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {createMutation.isPending ? "Saving..." : "Create Product"}
      </button>
    </form>
  );
}
