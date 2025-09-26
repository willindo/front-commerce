" use client";
// frontend/pages/login.tsx
import { useForm } from "react-hook-form";
import { useAuth } from "@/context/AuthContext";
import Nav from "../../components/Nav";
import { useRouter } from "next/navigation";

type Form = { email: string; password: string };

export default function Login() {
  const { login } = useAuth();
  const router = useRouter();
  const { register, handleSubmit } = useForm<Form>();

  async function onSubmit(data: Form) {
    try {
      await login(data);
      router.push("/profile");
    } catch (err: any) {
      alert(err?.message ?? "Login failed");
    }
  }

  return (
    <>
      <Nav />
      <main className="max-w-md mx-auto mt-12 bg-white p-6 rounded shadow">
        <h1 className="text-xl font-semibold mb-4">Sign in</h1>
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
              {...register("password", { required: true })}
              className="mt-1 block w-full border p-2 rounded"
            />
          </div>
          <button
            className="w-full bg-indigo-600 text-white p-2 rounded"
            type="submit"
          >
            Login
          </button>
        </form>
      </main>
    </>
  );
}
