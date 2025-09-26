// frontend/pages/profile.tsx
import { useEffect } from "react";
import Nav from "../../components/Nav";
import { useRouter } from "next/router";
import { useAuth } from "@/context/AuthContext";

export default function ProfilePage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/login");
    }
  }, [loading, user]);

  if (loading || !user) return <div className="p-8">Loading...</div>;

  return (
    <>
      <Nav />
      <main className="max-w-2xl mx-auto mt-12 bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-semibold mb-4">Profile</h1>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Name:</strong> {user.name ?? "—"}
        </p>
        <p>
          <strong>Role:</strong> {user.role ?? "CUSTOMER"}
        </p>
      </main>
    </>
  );
}
