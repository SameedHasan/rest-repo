import { NextResponse } from "next/server";

let users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Alice Johnson" },
  { id: 4, name: "Bob Brown" },
  { id: 5, name: "Charlie Davis" },
];

export function GET() {
  return NextResponse.json(users);
}

export async function POST(request: Request) {
  const data = await request.json();
  users.push({ id: users.length + 1, name: data.name });
  return NextResponse.json({ message: `Hello ${data.name}`, users: users });
}
