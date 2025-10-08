"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { createProduct } from "@/lib/api/products";

export default function NewProductPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", price: "", stock: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await createProduct({
      name: form.name,
      price: Number(form.price),
      stock: Number(form.stock),
    });
    router.push("/products");
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Create Product</h1>
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
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Save
        </button>
      </form>
    </div>
  );
}
