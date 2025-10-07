"use client";
import { Product } from "@/lib/types/products";

import { useEffect, useState } from "react";
import Link from "next/link";

// type Product = {
//   id: string;
//   name: string;
//   price: number;
//   stock: number;
// };

export default function ProductsPage({ products }: { products: Product[] }) {
  // const [products, setProducts] = useState<Product[]>([]);

  // useEffect(() => {
  //   fetch("http://localhost:3001/products")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data.data || []));
  // }, []);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Products</h1>
        <Link
          href="/products/new"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          + New Product
        </Link>
      </div>

      <ul className="space-y-2">
        {products.map((p) => (
          <li
            key={p.id}
            className="border p-4 flex justify-between items-center rounded"
          >
            <div>
              <h2 className="font-semibold">{p.name}</h2>
              <p>
                ${p.price} · Stock: {p.stock}
              </p>
            </div>
            <div className="space-x-2">
              <Link href={`/products/${p.id}`} className="text-blue-600">
                View
              </Link>
              <Link href={`/products/${p.id}/edit`} className="text-green-600">
                Edit
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
