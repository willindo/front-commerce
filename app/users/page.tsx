"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "@/lib/api/users";
import UserTable from "./components/UserTable";
import UserFilters from "./components/UserFilters";
import { Role } from "@/lib/types/users";
import { useAdminRoute } from "@/hooks/useAdminRoute";

export default function UsersPage() {
  const { user, loading } = useAdminRoute();
  const [page, setPage] = useState(1);
  const [role, setRole] = useState("");

  const roleUnion: Role | undefined =
    role === "ADMIN" ? "ADMIN" : role === "CUSTOMER" ? "CUSTOMER" : undefined;

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["users", page, role],
    queryFn: () => fetchUsers(page, 10, roleUnion),
    enabled: !!user && user.role === "ADMIN",
    retry: false,
  });

  if (loading) return <p className="p-6">Checking access...</p>;
  if (!user) return null; // avoid flicker
  if (user.role !== "ADMIN") return <p className="p-6">Access denied</p>;

  if (isLoading) return <p className="p-6">Loading users...</p>;
  if (isError)
    return (
      <div className="p-6">
        <p className="text-red-600 mb-2">Error: {(error as Error).message}</p>
        <button
          onClick={() => refetch()}
          className="border px-4 py-2 rounded hover:bg-gray-100"
        >
          Retry
        </button>
      </div>
    );

  const totalPages = Math.ceil((data?.total ?? 0) / (data?.limit ?? 10));

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Users</h1>
        <span className="text-gray-500">Total: {data?.total ?? 0} users</span>
      </div>

      <UserFilters role={role} onRoleChange={setRole} />
      <UserTable users={data?.data ?? []} />

      <div className="mt-6 flex justify-center items-center gap-3">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span>
          Page {page} / {totalPages || 1}
        </span>
        <button
          disabled={page >= totalPages}
          onClick={() => setPage((p) => p + 1)}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
