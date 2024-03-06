const { readFile } = require("node:fs/promises");
const { resolve } = require("node:path");
import { NextResponse } from "next/server";
// http://localhost:3000/api/getblog?slug=how-to-learn-javascript
export async function GET(request, { params }) {
  // URL QUERY PARAMETERS:
  // const searchParams = request.nextUrl.searchParams;
  // const slug = searchParams.get("slug");
  // Dynamic routes:
  // const slug = params.slug;
  const slug = "how-to-learn-javascript";
  try {
    const filePath = resolve(`app/data/blogdata/${slug}.json`);
    const data = await readFile(filePath, { encoding: "utf8" });
    const blog = JSON.parse(data);

    return NextResponse.json({ blog }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Blog not found!" }, { status: 404 });
  }
}
