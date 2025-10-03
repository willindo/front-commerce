"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

type Product = {
  id: string;
  name: string;
  price: number;
  stock: number;
  description?: string;
};

export default function ProductDetailPage() {
  const params = useParams();
  const id = params?.id as string;
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3001/products/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data));
    }
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="text-lg">${product.price}</p>
      <p>Stock: {product.stock}</p>
      {product.description && <p className="mt-2">{product.description}</p>}
    </div>
  );
}
