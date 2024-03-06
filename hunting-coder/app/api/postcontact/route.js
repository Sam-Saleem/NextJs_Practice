import { writeFile } from "node:fs/promises";
import { readdir } from "node:fs/promises";
const { resolve } = require("node:path");
export async function POST(request) {
  //   const res = await fetch("https://data.mongodb-api.com/...", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "API-Key": process.env.DATA_API_KEY,
  //     },
  //     body: JSON.stringify({ time: new Date().toISOString() }),
  //   });

  //   const data = await res.json();

  //   return Response.json(data);
  const data = await request.json();

  const path = resolve("app/data/contactdata");
  const files = await readdir(path);

  await writeFile(`${path}/${files.length + 1}.json`, JSON.stringify(data));
  return Response.json(
    { message: "Contact added successsfully." },
    { status: 200 }
  );
}
export async function GET(request) {
  return Response.json({ message: "Get contact" }, { status: 201 });
}
