// hooks/useAdminRoute.tsx
"use client";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function useAdminRoute() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && (!user || user.role !== "ADMIN"))
      router.replace("/auth/login");
  }, [user, loading, router]);

  return { user, loading };
}
