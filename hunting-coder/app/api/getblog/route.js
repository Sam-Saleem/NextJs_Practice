const { readFile } = require("node:fs/promises");
const { resolve } = require("node:path");
import { NextResponse } from "next/server";
// http://localhost:3000/api/getblog?slug=how-to-learn-javascript
export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const slug = searchParams.get("slug");
  try {
    const filePath = resolve(`app/data/blogdata/${slug}.json`);
    const data = await readFile(filePath, { encoding: "utf8" });
    const blog = JSON.parse(data);

    return NextResponse.json({ blog }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Blog not found!" }, { status: 404 });
  }
}
