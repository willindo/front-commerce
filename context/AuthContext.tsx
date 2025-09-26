"use client";
// frontend/context/AuthContext.tsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { User, loginUser, registerUser, fetchProfile } from "../lib/api";
import { useRouter } from "next/navigation";

type AuthContextValue = {
  user: User | null;
  loading: boolean;
  register: (data: {
    email: string;
    password: string;
    name?: string;
  }) => Promise<User>;
  login: (data: { email: string; password: string }) => Promise<User>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // hydrate from localStorage (temporary session approach)
  useEffect(() => {
    const raw = localStorage.getItem("mono:user");
    if (raw) {
      try {
        setUser(JSON.parse(raw));
      } catch {
        localStorage.removeItem("mono:user");
      }
    }
    setLoading(false);
  }, []);

  const saveUser = (u: User | null) => {
    setUser(u);
    if (u) localStorage.setItem("mono:user", JSON.stringify(u));
    else localStorage.removeItem("mono:user");
  };

  const register = async (data: {
    email: string;
    password: string;
    name?: string;
  }) => {
    const result = await registerUser(data);
    // backend might return user or {user, message}
    const returnedUser: User = result.user ?? result;
    saveUser(returnedUser);
    return returnedUser;
  };

  const login = async (data: { email: string; password: string }) => {
    const result = await loginUser(data);
    // backend may return { message, user } or user directly
    const returnedUser: User = result.user ?? result;
    saveUser(returnedUser);
    return returnedUser;
  };

  const logout = () => {
    saveUser(null);
    // If backend supports logout endpoint, call it here.
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ user, loading, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
};
