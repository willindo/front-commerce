"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Product = {
  id: string;
  name: string;
  price: number;
  description?: string;
  images: string[];
  category: { name: string };
};

type ProductDetailPageProps = {
  product: Product;
};

export default function ProductDetailPage({ product }: ProductDetailPageProps) {
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();

  const addToCart = () => {
    alert(`Add ${quantity} of ${product.name} to cart`);
    // Connect API later
  };

  return (
    <div className="p-6 max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
      {/* Images */}
      <div className="space-y-4">
        {product.images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={product.name}
            className="rounded shadow"
          />
        ))}
      </div>

      {/* Product Info */}
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p className="text-xl font-semibold">${product.price}</p>
        <p>{product.description || "No description available."}</p>
        <p className="text-sm text-gray-500">
          Category: {product.category.name}
        </p>

        {/* Quantity & Add to Cart */}
        <div className="flex items-center gap-2">
          <input
            type="number"
            value={quantity}
            min={1}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="border p-1 w-20 rounded"
          />
          <button
            onClick={addToCart}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
