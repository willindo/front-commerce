"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "@/lib/api/users";
import UserTable from "./components/UserTable";
import UserFilters from "./components/UserFilters";

export default function UsersPage() {
  const [page, setPage] = useState(1);
  const [role, setRole] = useState("");

  const { data, isLoading, error } = useQuery({
    queryKey: ["users", page, role],
    queryFn: () => fetchUsers(page, 10, role),
  });

  if (isLoading) return <p>Loading users...</p>;
  if (error instanceof Error) return <p>Error: {error.message}</p>;

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Users</h1>
      <UserFilters role={role} onRoleChange={setRole} />
      <UserTable users={data ?? []} />

      <div className="mt-4 flex gap-2">
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Prev
        </button>
        <span>Page {page}</span>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
}
