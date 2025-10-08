"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchProductById, updateProduct } from "@/lib/api/products";

interface Form {
  name: string;
  price: string;
  stock: string;
}

interface Props {
  params: { id: string };
}

export default function EditProductPage({ params }: Props) {
  const router = useRouter();
  const id = params.id;
  const [form, setForm] = useState<Form>({ name: "", price: "", stock: "" });

  useEffect(() => {
    if (!id) return;
    fetchProductById(id).then((data) =>
      setForm({
        name: data.name,
        price: String(data.price),
        stock: String(data.stock),
      })
    );
  }, [id]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await updateProduct(id, {
      name: form.name,
      price: Number(form.price),
      stock: Number(form.stock),
    });
    router.push("/products");
  }

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
