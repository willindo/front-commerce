"use client";

import { useForm } from "react-hook-form";

export default function TestForm() {
  const { register, handleSubmit } = useForm<{ email: string }>();

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <input {...register("email")} />
      <button type="submit">Submit</button>
    </form>
  );
}
