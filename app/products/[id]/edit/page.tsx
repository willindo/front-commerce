"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useProduct, useUpdateProduct } from "@/hooks/useProducts";

export default function EditProductPage() {
  const router = useRouter();
  const { id } = useParams();
  const { data: product } = useProduct(id as string);
  const { mutateAsync: update } = useUpdateProduct();

  const [form, setForm] = useState({ name: "", price: "", stock: "" });

  useEffect(() => {
    if (product)
      setForm({
        name: product.name,
        price: String(product.price),
        stock: String(product.stock),
      });
  }, [product]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await update({
      id: id as string,
      data: {
        name: form.name,
        price: Number(form.price),
        stock: Number(form.stock),
      },
    });
    router.push("/products");
  }

  if (!product) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Edit Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="number"
          placeholder="Stock"
          value={form.stock}
          onChange={(e) => setForm({ ...form, stock: e.target.value })}
          className="w-full border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Update
        </button>
      </form>
    </div>
  );
}
