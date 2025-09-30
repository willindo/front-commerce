"use client";
import { useForm, useFieldArray } from "react-hook-form";

type ProductFormProps = {
  defaultValues?: any;
  onSubmit: (data: any) => void;
  loading?: boolean;
};

const genders = ["MENS", "WOMENS", "BOYS", "GIRLS", "UNISEX"];
const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

export default function TshirtForm({
  defaultValues,
  onSubmit,
  loading,
}: ProductFormProps) {
  const { register, control, handleSubmit } = useForm({
    defaultValues: defaultValues || {
      name: "",
      description: "",
      price: 0,
      stock: 0,
      categoryId: "",
      gender: "UNISEX",
      images: [""],
      sizes: [],
    },
  });

  // for dynamic images
  const {
    fields: imageFields,
    append: addImage,
    remove: removeImage,
  } = useFieldArray({ control, name: "images" });

  // for dynamic sizes with quantities
  const {
    fields: sizeFields,
    append: addSize,
    remove: removeSize,
  } = useFieldArray({ control, name: "sizes" });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 max-w-2xl border p-4 rounded"
    >
      <div>
        <label className="block font-medium">Name</label>
        <input
          {...register("name", { required: true })}
          className="border p-2 w-full rounded"
        />
      </div>

      <div>
        <label className="block font-medium">Description</label>
        <textarea
          {...register("description")}
          className="border p-2 w-full rounded"
        />
      </div>

      <div>
        <label className="block font-medium">Price ($)</label>
        <input
          type="number"
          step="0.01"
          {...register("price", { required: true, valueAsNumber: true })}
          className="border p-2 w-full rounded"
        />
      </div>

      <div>
        <label className="block font-medium">Stock (optional)</label>
        <input
          type="number"
          {...register("stock", { valueAsNumber: true })}
          className="border p-2 w-full rounded"
        />
      </div>

      <div>
        <label className="block font-medium">Category ID</label>
        {/* Later: replace with dropdown of actual categories */}
        <input
          {...register("categoryId", { required: true })}
          className="border p-2 w-full rounded"
          placeholder="Category UUID"
        />
      </div>

      <div>
        <label className="block font-medium">Gender</label>
        <select {...register("gender")} className="border p-2 w-full rounded">
          {genders.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block font-medium">Images</label>
        {imageFields.map((field, index) => (
          <div key={field.id} className="flex gap-2 mb-2">
            <input
              {...register(`images.${index}`)}
              className="border p-2 flex-1 rounded"
              placeholder="Image URL"
            />
            <button
              type="button"
              onClick={() => removeImage(index)}
              className="text-red-500"
            >
              ✕
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => addImage("")}
          className="bg-blue-600 text-white px-2 py-1 rounded"
        >
          + Add Image
        </button>
      </div>

      <div>
        <label className="block font-medium">Sizes</label>
        {sizeFields.map((field, index) => (
          <div key={field.id} className="flex gap-2 mb-2">
            <select
              {...register(`sizes.${index}.size`)}
              className="border p-2 rounded"
            >
              {sizes.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            <input
              type="number"
              {...register(`sizes.${index}.quantity`, { valueAsNumber: true })}
              className="border p-2 w-24 rounded"
              placeholder="Qty"
            />
            <button
              type="button"
              onClick={() => removeSize(index)}
              className="text-red-500"
            >
              ✕
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => addSize({ size: "M", quantity: 0 })}
          className="bg-blue-600 text-white px-2 py-1 rounded"
        >
          + Add Size
        </button>
      </div>

      <div className="pt-4">
        <button
          type="submit"
          disabled={loading}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          {loading ? "Saving..." : "Save Product"}
        </button>
      </div>
    </form>
  );
}
