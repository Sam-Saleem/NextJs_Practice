"use client";
import React, { useEffect, useState } from "react";
import styles from "./blog.module.css";
import Link from "next/link";
// import { readdir } from "node:fs/promises";
// const { readFile } = require("node:fs/promises");
// const { resolve } = require("node:path");
import InfiniteScroll from "react-infinite-scroll-component";

const Blog = () => {
  // const blogs = await getData();
  const [blogs, setBlogs] = useState();
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      `http://localhost:3000/api/blogs/?count=${count + 2}`
    );
    setCount(count + 2);
    const data = await response.json();
    console.log(data);
    setBlogs(data.blogs);
    setTotal(data.total);
  };
  return (
    <div className={styles.blogs}>
      {blogs && (
        <InfiniteScroll
          dataLength={blogs?.length} //This is important field to render the next data
          next={fetchData}
          hasMore={blogs?.length < total}
          loader={
            <h4 style={{ textAlign: "center", color: "blue" }}>Loading...</h4>
          }
          endMessage={
            <p style={{ textAlign: "center", color: "blue" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <h2>Blogs</h2>
          {blogs?.map((blog, index) => {
            return (
              <div key={index} className={styles.blogItem}>
                <Link href={`/blogpost/${blog.slug}`}>
                  <h3>{blog.title}</h3>
                </Link>
                <p>{blog.content.substr(0, 400)}........</p>
                <Link href={`/blogpost/${blog.slug}`}>
                  <button>Read More</button>
                </Link>
              </div>
            );
          })}
        </InfiniteScroll>
      )}
    </div>
  );
};

export default Blog;

// Server Side Rendering:

// This function can be named anything
// async function getData() {
//   const response = await fetch("http://localhost:3000/api/blogs", {
//     cache: "no-store",
//   });
//   const data = await response.json();
//   return data.blogs;
// }

// Static Site Generation:

// async function getData() {
//   // const response = await fetch("http://localhost:3000/api/blogs");
//   // // In the app directory, data fetching with fetch() will default to cache: 'force-cache', which will cache the request data until manually invalidated. This is similar to getStaticProps in the pages directory.
//   // const data = await response.json();
//   // return data.blogs;

//   const path = resolve("app/data/blogdata");
//   const files = await readdir(path);
//   const blogs = [];
//   for (const file of files) {
//     const data = await readFile(`${path}/${file}`, { encoding: "utf8" });
//     blogs.push(JSON.parse(data));
//   }
//   return blogs;
// }
