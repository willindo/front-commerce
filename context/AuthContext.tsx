"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { api } from "@/lib/api/axios";
import { User } from "@/lib/types/users";

type AuthContextValue = {
  user: User | null;
  loading: boolean;
  register: (d: {
    email: string;
    password: string;
    name?: string;
  }) => Promise<void>;
  login: (d: { email: string; password: string }) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // 🔹 Load from localStorage immediately (avoid flash logout)
  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch {
        localStorage.removeItem("user");
      }
    }
  }, []);

  // 🔹 Sync from backend once (to confirm session still valid)
  useEffect(() => {
    if (pathname.startsWith("/auth")) {
      setLoading(false);
      return;
    }

    let mounted = true;
    api
      .get("/auth/me")
      .then((res) => {
        if (!mounted) return;
        setUser(res.data.user);
        localStorage.setItem("user", JSON.stringify(res.data.user));
      })
      .catch(() => {
        if (!mounted) return;
        setUser(null);
        localStorage.removeItem("user");
      })
      .finally(() => {
        if (!mounted) return;
        setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, [pathname]);

  // 🔹 Auth actions
  const register = async (data: {
    email: string;
    password: string;
    name?: string;
  }) => {
    await api.post("/auth/register", data);
    const res = await api.get("/auth/me");
    setUser(res.data.user);
    localStorage.setItem("user", JSON.stringify(res.data.user));
    router.replace("/"); // soft redirect to home or dashboard
  };

  const login = async (data: { email: string; password: string }) => {
    await api.post("/auth/login", data);
    const res = await api.get("/auth/me");
    setUser(res.data.user);
    localStorage.setItem("user", JSON.stringify(res.data.user));
    router.replace("/"); // stay or navigate as needed
  };

  const logout = async () => {
    try {
      await api.post("/auth/logout");
    } catch (err) {
      // still continue to clear client state even if the request fails
      console.warn("Logout request failed", err);
    } finally {
      setUser(null);
      localStorage.removeItem("user");
      router.replace("/auth/login");
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
