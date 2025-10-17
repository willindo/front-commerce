"use client";

type Props = {
  role: string;
  onRoleChange: (role: string) => void;
};

export default function UserFilters({ role, onRoleChange }: Props) {
  return (
    <div className="mb-4 flex gap-2 items-center">
      <label className="font-medium">Filter by role:</label>
      <select
        className="border rounded px-2 py-1"
        value={role}
        onChange={(e) => onRoleChange(e.target.value)}
      >
        <option value="">All</option>
        <option value="ADMIN">Admin</option>
        <option value="CUSTOMER">Customer</option>
      </select>
    </div>
  );
}
