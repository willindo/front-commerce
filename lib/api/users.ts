export type User = {
  id: number;
  name: string;
  email: string;
  role: string;
};

export async function fetchUsers(
  page = 1,
  limit = 10,
  role?: string
): Promise<User[]> {
  const params = new URLSearchParams({
    page: String(page),
    limit: String(limit),
  });
  if (role) params.append("role", role);

  const res = await fetch(`http://localhost:3000/users?${params.toString()}`);
  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
}
