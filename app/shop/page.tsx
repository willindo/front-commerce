"use client";

import { useState } from "react";
import ProductCard from "@/components/shop/ProductCard";
import Filters from "@/components/shop/Filters";

// Mock data for now – replace with useProducts() hook later
const mockProducts = [
  {
    id: "1",
    name: "Men's T-Shirt",
    price: 19.99,
    images: ["/shirt1.jpg"],
    gender: "MENS",
    category: { name: "Tshirts" },
  },
  {
    id: "2",
    name: "Women's T-Shirt",
    price: 22.99,
    images: ["/shirt2.jpg"],
    gender: "WOMENS",
    category: { name: "Tshirts" },
  },
];

export default function ShopPage() {
  const [page, setPage] = useState(0);

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
          {mockProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
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
