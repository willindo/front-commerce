// frontend/components/Nav.tsx
import Link from "next/link";
import { useAuth } from "../context/AuthContext";

export default function Nav() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white shadow p-4 flex justify-between">
      <div>
        <Link href="/">
          <a className="font-bold">mono-commerce</a>
        </Link>
      </div>
      <div className="space-x-4">
        <Link href="/products">
          <a>Products</a>
        </Link>
        {user ? (
          <>
            <Link href="/profile">
              <a>Profile</a>
            </Link>
            <button
              onClick={() => logout()}
              className="ml-2 text-sm text-red-500"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/login">
              <a>Login</a>
            </Link>
            <Link href="/register">
              <a>Register</a>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
