import { Heart } from "lucide-react";

export default function ProductCard({ product }: { product: any }) {
  return (
    <div className="border rounded-lg p-4 flex flex-col hover:shadow-md transition">
      <img
        src={product.images?.[0] || "/placeholder.png"}
        alt={product.name}
        className="w-full h-48 object-cover rounded mb-3"
      />
      <h3 className="font-medium text-lg">{product.name}</h3>
      <p className="text-gray-600">${product.price.toFixed(2)}</p>

      <div className="mt-auto flex justify-between items-center pt-3">
        <button className="bg-green-600 text-white px-3 py-1 rounded">
          Add to Cart
        </button>
        <button className="text-gray-600 hover:text-red-500">
          <Heart className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
