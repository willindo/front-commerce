"use client";

import { useRouter, useParams } from "next/navigation";
import { useProduct, useUpdateProduct } from "@/hooks/useProducts";
import ProductForm from "@/components/products/ProductForm";

export default function EditProductPage() {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();
  const { data: product, isLoading } = useProduct(id);
  const updateMutation = useUpdateProduct();

  if (isLoading) return <p>Loading...</p>;
  if (!product) return <p>Product not found</p>;

  async function handleUpdate(data: any) {
    await updateMutation.mutateAsync({ id, data });
    router.push("/products");
  }

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Edit Product</h1>
      <ProductForm
        defaultValues={product}
        onSubmit={handleUpdate}
        loading={updateMutation.isPending}
      />
    </div>
  );
}
