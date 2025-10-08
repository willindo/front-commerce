// context/AuthContext.tsx
"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { User } from "../lib/types/users";
import { loginUser, registerUser } from "../lib/aply";

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

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // ✅ Load user from localStorage on app mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch {
        localStorage.removeItem("user");
      }
    }
    setLoading(false);
  }, []);

  const saveUser = (user: User) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const register = async (data: {
    email: string;
    password: string;
    name?: string;
  }) => {
    const returnedUser = await registerUser(data);
    saveUser(returnedUser);
    return returnedUser;
  };

  const login = async (data: { email: string; password: string }) => {
    const result = await loginUser(data);
    saveUser(result.user);
    return result.user;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
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
