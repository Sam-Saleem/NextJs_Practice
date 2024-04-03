import { limiter } from "../config/limiter";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const origin = request.headers.get("origin");

  // We had to use the limiter inside the route files as it has a node dependency that won't run in the Edge Runtime
  const remaining = await limiter.removeTokens(1);
  console.log("remaining: ", remaining);
  if (remaining < 0) {
    return new NextResponse(null, {
      status: 429, //limited requests
      statusText: "Too many Requests",
      headers: {
        "Access-Control-Allow-Origin": origin || "*",
        "Content-Type": "text/plain",
      },
    });
  }
  return new Response("Hello, Next.js!");
}
