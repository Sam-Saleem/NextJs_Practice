import React from "react";
import styles from "./blog.module.css";
import Link from "next/link";

const Blog = async () => {
  const blogs = await getData();
  return (
    <div className={styles.blogs}>
      <h2>Blogs</h2>
      {blogs?.map((blog, index) => {
        return (
          <div key={index} className={styles.blogItem}>
            <Link href={`/blogpost/${blog.slug}`}>
              <h3>{blog.title}</h3>
            </Link>
            <p>{blog.content.substr(0, 400)}........</p>
          </div>
        );
      })}
    </div>
  );
};

export default Blog;
// This function can be named anything
async function getData() {
  const response = await fetch("http://localhost:3000/api/blogs", {
    cache: "no-store",
  });
  const data = await response.json();
  return data.blogs;
}
