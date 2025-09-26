"use client";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";

export default function Nav() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white shadow p-4 flex justify-between">
      <div>
        <Link href="/">mono-commerce</Link>
      </div>
      <div className="space-x-4">
        <Link href="/products">Products</Link>
        {user ? (
          <>
            <Link href="/profile">Profile</Link>
            <button
              onClick={() => logout()}
              className="ml-2 text-sm text-red-500"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}
