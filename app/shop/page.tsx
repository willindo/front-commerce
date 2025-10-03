"use client";

import { useState, useEffect } from "react";
import ProductCard from "@/components/shop/ProductCard";
import Filters from "@/components/shop/Filters";
import { addToCart } from "@/lib/api/cart";
import { Product } from "@/lib/types/products";

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.data || []));
  }, []);

  const handleAddToCart = async (productId: string) => {
    try {
      await addToCart(productId, 1);
      alert("Product added to cart!");
    } catch (err) {
      console.error(err);
      alert("Failed to add product to cart");
    }
  };

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* Sidebar Filters */}
      <aside className="md:col-span-1 border p-4 rounded h-fit">
        <Filters />
      </aside>

      {/* Product Grid */}
      <main className="md:col-span-3">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold">Shop Products</h1>
          <select className="border p-2 rounded">
            <option>Sort: Newest</option>
            <option>Price: Low → High</option>
            <option>Price: High → Low</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              onAddToCart={() => handleAddToCart(p.id)}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 0))}
            className="px-3 py-1 border rounded"
            disabled={page === 0}
          >
            Prev
          </button>
          <span>Page {page + 1}</span>
          <button
            onClick={() => setPage((p) => p + 1)}
            className="px-3 py-1 border rounded"
          >
            Next
          </button>
        </div>
      </main>
    </div>
  );
}
