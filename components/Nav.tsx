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
        <Link href="/products" className="hover:underline">
          Products
        </Link>
        <Link href="/cart" className="hover:underline">
          Cart
        </Link>
        <Link href="/checkout" className="hover:underline">
          Checkout
        </Link>
        <Link href="/orders" className="hover:underline">
          Orders
        </Link>
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
            <Link href="/auth/login">Login</Link>
            <Link href="/auth/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}
