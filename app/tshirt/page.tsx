"use client";
import TshirtForm from "@/components/TshirtForm";
import { useCreateProduct } from "@/hooks/useProducts";

export default function CreateProductPage() {
  const { mutate, isPending } = useCreateProduct();

  return (
    <TshirtForm
      onSubmit={(data) => {
        // ensure images not empty
        const payload = {
          ...data,
          images: data.images.filter((img: string) => img.trim() !== ""),
        };
        mutate(payload);
      }}
      loading={isPending}
    />
  );
}
