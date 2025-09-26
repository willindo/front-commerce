"use client";
// frontend/pages/register.tsx
import { useForm } from "react-hook-form";
import { useAuth } from "@/context/AuthContext";
import Nav from "../components/Nav";
import { useRouter } from "next/navigation";

type Form = { email: string; password: string; name?: string };

export default function RegisterForm() {
  const { register: authRegister } = useAuth();
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm<Form>();

  async function onSubmit(data: Form) {
    try {
      await authRegister(data);
      router.push("/profile");
    } catch (err: any) {
      alert(err?.message ?? "Registration failed");
    }
  }

  return (
    <>
      <Nav />
      <main className="max-w-md mx-auto mt-12 bg-white p-6 rounded shadow">
        <h1 className="text-xl font-semibold mb-4">Create an account</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm">Email</label>
            <input
              {...register("email", { required: true })}
              className="mt-1 block w-full border p-2 rounded"
            />
          </div>
          <div>
            <label className="block text-sm">Password</label>
            <input
              type="password"
              {...register("password", { required: true, minLength: 6 })}
              className="mt-1 block w-full border p-2 rounded"
            />
          </div>
          <div>
            <label className="block text-sm">Name</label>
            <input
              {...register("name")}
              className="mt-1 block w-full border p-2 rounded"
            />
          </div>
          <button
            className="w-full bg-indigo-600 text-white p-2 rounded"
            type="submit"
          >
            Register
          </button>
        </form>
      </main>
    </>
  );
}
