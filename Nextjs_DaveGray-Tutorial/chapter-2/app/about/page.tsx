import React from "react";
import Link from "next/link";
import { error } from "console";

export default function About() {
  // throw new Error("Not today!!!");
  return (
    <div>
      <h1>About Page</h1>
      <Link href="/">Link to home page</Link>
    </div>
  );
}
