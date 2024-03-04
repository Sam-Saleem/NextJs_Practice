import { readdir } from "node:fs/promises";
const { readFile } = require("node:fs/promises");
const { resolve } = require("node:path");
import { NextResponse } from "next/server";

export async function GET(request) {
  const path = resolve("app/data/blogdata");

  const files = await readdir(path);

  const blogs = [];

  for (const file of files) {
    const data = await readFile(`${path}/${file}`, { encoding: "utf8" });
    blogs.push(JSON.parse(data));
  }

  return NextResponse.json({ blogs }, { status: 200 });
}
