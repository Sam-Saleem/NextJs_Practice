import { readdir } from "node:fs/promises";
const { readFile } = require("node:fs/promises");
const { resolve } = require("node:path");
import { NextResponse } from "next/server";

export async function GET(request) {
  // URL QUERY PARAMETERS:
  const searchParams = request.nextUrl.searchParams;
  const count = searchParams.get("count");

  const path = resolve("app/data/blogdata");
  let files = await readdir(path);
  const total = files.length;
  files = files.slice(0, count);
  const blogs = [];
  for (const file of files) {
    const data = await readFile(`${path}/${file}`, { encoding: "utf8" });
    blogs.push(JSON.parse(data));
  }

  return NextResponse.json({ blogs, total }, { status: 200 });
}
