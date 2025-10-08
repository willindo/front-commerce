"use client";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const { user, loading } = useAuth();
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
      <h1 className="text-2xl font-bold">Welcome, {user.name || user.email}</h1>
      <p>Role: {user.role}</p>
    </div>
  );
}
