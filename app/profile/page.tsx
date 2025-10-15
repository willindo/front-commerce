"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useProtectedRoute } from "@/hooks/useProtectedRoute";

export default function ProfilePage() {
  const { user, loading } = useProtectedRoute();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/auth/login");
    }
  }, [loading, user, router]);

  if (loading) return <div className="p-8">Loading...</div>;
  if (!user) return null;

  return (
    <>
      <main className="max-w-2xl mx-auto mt-12 bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-semibold mb-4">Profile</h1>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Name:</strong> {user.name ?? "—"}
        </p>
        <p>
          <strong>Role:</strong> {user.role ?? "CUSTOMER"}
        </p>
      </main>
    </>
  );
}
