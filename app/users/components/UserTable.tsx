import { User } from "@/lib/api/users";

export default function UserTable({ users }: { users: User[] }) {
  return (
    <table className="min-w-full border border-gray-300">
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
          <tr key={u.id}>
            <td className="p-2 border">{u.id}</td>
            <td className="p-2 border">{u.name}</td>
            <td className="p-2 border">{u.email}</td>
            <td className="p-2 border">{u.role}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
