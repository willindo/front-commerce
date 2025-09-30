"use client";
import { useState } from "react";

export default function Filters() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedGenders, setSelectedGenders] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

  return (
    <div className="space-y-6">
      {/* Category */}
      <div>
        <h3 className="font-semibold mb-2">Category</h3>
        {["Tshirts", "Jeans", "Jackets"].map((cat) => (
          <label key={cat} className="block">
            <input type="checkbox" className="mr-2" /> {cat}
          </label>
        ))}
      </div>

      {/* Gender */}
      <div>
        <h3 className="font-semibold mb-2">Gender</h3>
        {["MENS", "WOMENS", "BOYS", "GIRLS", "UNISEX"].map((g) => (
          <label key={g} className="block">
            <input type="checkbox" className="mr-2" /> {g}
          </label>
        ))}
      </div>

      {/* Size */}
      <div>
        <h3 className="font-semibold mb-2">Sizes</h3>
        {["XS", "S", "M", "L", "XL", "XXL"].map((s) => (
          <label key={s} className="inline-block mr-4 mb-2">
            <input type="checkbox" className="mr-1" /> {s}
          </label>
        ))}
      </div>

      {/* Price (UI only for now) */}
      <div>
        <h3 className="font-semibold mb-2">Price Range</h3>
        <input type="range" min={0} max={200} className="w-full" />
        <div className="flex justify-between text-sm text-gray-600">
          <span>$0</span>
          <span>$200+</span>
        </div>
      </div>
    </div>
  );
}
