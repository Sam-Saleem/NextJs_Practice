import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? ["https://www.yoursite.com", "https://yoursite.com"]
    : ["http://localhost:3000"];
// Can configure CORS headers in middleware also

// Middleware applies to the every request(even for resources & for pages) to the web application not just the API requests.
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // alternate of config matchers is using conditional

  if (request.url.includes("/api/")) {
    //   put all the code of middleware here
  }
  // OR use regex
  const regex = new RegExp("/api/*");
  if (regex.test(request.url)) {
    //   put all the code of middleware here
  }

  console.log("Middleware!");
  console.log("request.method:   ", request.method);
  console.log("request.url:   ", request.url);

  //   console.log("request.headers:   ", request.headers);
  const origin = request.headers.get("origin");
  console.log("Origin:    ", origin);

  // Conditions for our origin:

  // "For production, we block requests that do not have an origin. However, for development purposes, we allow ThunderClient and Postman requests to bypass this restriction, as they do not have a specific origin.
  if (origin && !allowedOrigins.includes(origin)) {
    return new NextResponse(null, {
      status: 400, //blocked by cors
      statusText: "Bad Request",
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }

  return NextResponse.next();
  //   return NextResponse.redirect(new URL("/home", request.url));
}

export const config = {
  matcher: "/api/:path*",
};
