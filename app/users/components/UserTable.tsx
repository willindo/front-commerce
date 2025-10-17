import { User } from "@/lib/types/users";

export default function UserTable({ users }: { users: User[] }) {
  if (users.length === 0)
    return <p className="p-4 text-gray-500">No users found.</p>;

  return (
    <table className="min-w-full border border-gray-300 rounded">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-2 border">ID</th>
          <th className="p-2 border">Name</th>
          <th className="p-2 border">Email</th>
          <th className="p-2 border">Role</th>
        </tr>
      </thead>
      <tbody>
        {users.map((u) => (
          <tr key={u.id} className="hover:bg-gray-50">
            <td className="p-2 border text-sm">{u.id}</td>
            <td className="p-2 border">{u.name || "-"}</td>
            <td className="p-2 border">{u.email}</td>
            <td className="p-2 border">{u.role}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
