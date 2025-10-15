"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { api } from "@/lib/api/axios";
import { User } from "@/lib/types/users";

type AuthContextValue = {
  user: User | null;
  loading: boolean;
  register: (data: {
    email: string;
    password: string;
    name?: string;
  }) => Promise<void>;
  login: (data: { email: string; password: string }) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // ✅ Load user session from backend
  useEffect(() => {
    api
      .get("/auth/me")
      .then((res) => setUser(res.data.user))
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  }, []);

  const register = async (data: {
    email: string;
    password: string;
    name?: string;
  }) => {
    await api.post("/auth/register", data);
    const res = await api.get("/auth/me");
    setUser(res.data.user);
  };

  const login = async (data: { email: string; password: string }) => {
    await api.post("/auth/login", data);
    const res = await api.get("/auth/me");
    setUser(res.data.user);
  };

  const logout = async () => {
    await api.post("/auth/logout");
    setUser(null);
    window.location.href = "/";
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
