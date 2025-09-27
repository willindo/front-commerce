"use client";
import { useRouter } from "next/navigation";
import ProductForm from "@/components/products/ProductForm";
import { useCreateProduct } from "@/hooks/useProducts";

export default function NewProductPage() {
  const router = useRouter();
  const { mutateAsync, isPending } = useCreateProduct();

  async function handleCreate(data: any) {
    await mutateAsync({ ...data });
    router.push("/products");
  }

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Create Product</h1>
      <ProductForm onSubmit={handleCreate} loading={isPending} />
    </div>
  );
}
