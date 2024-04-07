// https://<your-site.com>/api/revalidate?secret=<token>
// http://localhost:3000/api/revalidate?path=/&secret=6679a3f9d66fd5da7dd13b94d4ed3762
import { NextApiRequest, NextApiResponse } from "next";

// This will only works in a build not in dev mode.
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
    return res.status(401).json({ message: "Invalid Token!!!" });
  }
  const path = req.query.path as string;

  await res.revalidate(path);

  return res.json({ revalidated: true });
}
