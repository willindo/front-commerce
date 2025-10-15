"use client";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export default function Nav() {
  const { user, logout } = useAuth();

  return (
    <nav className="sticky top-0 z-10 flex items-center justify-between border-b bg-white px-6 py-3 shadow-sm">
      <div className="flex items-center gap-4">
        <Link href="/" className="text-lg font-bold text-blue-600">
          ReloadStore
        </Link>
        <Link href="/shop" className="hover:underline">
          Shop
        </Link>

        {user?.role === "ADMIN" && (
          <>
            <Link href="/users" className="hover:underline">
              Users
            </Link>
            <Link href="/products" className="hover:underline">
              Products
            </Link>
          </>
        )}
      </div>

      <div className="flex items-center gap-4">
        {!user ? (
          <>
            <Link href="/auth/login" className="hover:text-blue-600">
              Login
            </Link>
            <Link
              href="/auth/register"
              className="rounded bg-blue-600 px-3 py-1 text-white hover:bg-blue-700"
            >
              Register
            </Link>
          </>
        ) : (
          <>
            {user.role === "CUSTOMER" && (
              <>
                <Link href="/cart">Cart</Link>
                <Link href="/orders">Orders</Link>
              </>
            )}
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/profile">Profile</Link>

            <button
              onClick={logout}
              className="rounded bg-red-500 px-3 py-1 text-white hover:bg-red-600"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
