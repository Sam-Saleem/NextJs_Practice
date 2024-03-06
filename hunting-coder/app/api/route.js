import { NextResponse } from "next/server";
export async function GET(request) {
  //   console.log("Response:------->", response);
  //   return new Response("Hello, Next.js!", {
  //     status: 200,
  //     json: { name: "John Doe" },
  //   });
  return NextResponse.json({ message: "Hello, Next.js!" }, { status: 200 });
}
// export default function handler(req, res) {
//   res.status(200).json({ name: "John Doe" });
// }
