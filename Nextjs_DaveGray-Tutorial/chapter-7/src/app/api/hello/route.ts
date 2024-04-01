import { NextResponse } from "next/server";

// Static Route

export async function GET() {
  return NextResponse.json({ message: "Hello, Next.js!" });
}
