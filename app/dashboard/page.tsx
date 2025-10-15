"use client";
import { useAuth } from "@/context/AuthContext";
import { useProtectedRoute } from "@/hooks/useProtectedRoute";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

export default function DashboardPage() {
  const { user, loading } = useProtectedRoute();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/auth/login");
    }
  }, [user, loading, router]);

  if (loading) return <p className="p-6">Loading...</p>;
  if (!user) return null; // Prevent flash

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Welcome, {user.name}</h1>
      {user.role === "ADMIN" ? (
        <div className="grid grid-cols-2 gap-4 mt-6">
          <Link
            href="/users"
            className="p-6 border rounded bg-gray-50 hover:bg-gray-100"
          >
            Manage Users
          </Link>
          <Link
            href="/products"
            className="p-6 border rounded bg-gray-50 hover:bg-gray-100"
          >
            Manage Products
          </Link>
        </div>
      ) : (
        <div className="mt-6">
          <Link href="/orders" className="text-blue-600 underline">
            View My Orders
          </Link>
        </div>
      )}
    </div>
  );
}
