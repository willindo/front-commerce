"use client";

type Props = {
  role: string;
  onRoleChange: (role: string) => void;
};

export default function UserFilters({ role, onRoleChange }: Props) {
  return (
    <div className="mb-4 flex gap-2">
      <label>Filter by role:</label>
      // app/users/components/UserFilters.tsx
      <select value={role} onChange={(e) => onRoleChange(e.target.value)}>
        <option value="">All</option>
        <option value="ADMIN">Admin</option>
        <option value="CUSTOMER">Customer</option>
      </select>
    </div>
  );
}
