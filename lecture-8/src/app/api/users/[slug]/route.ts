import { NextResponse } from "next/server";

export function GET(request: Request, { params }: any) {
  console.log("request", params.slug);
  return NextResponse.json({ message: "ok" });
}
