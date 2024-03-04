import React from "react";
import styles from "./blog.module.css";
import Link from "next/link";

const Blog = () => {
  return (
    <div className={styles.blogs}>
      <h2>Blogs</h2>
      <div>
        <Link href={`/blogpost/learn-javascript`}>
          <h3>How to learn Javascript in 2022?</h3>
        </Link>
        <p>JavaScript is the language used to design logic for the web.</p>
      </div>
      <div className="blogItem">
        <h3>How to learn Javascript in 2022?</h3>
        <p>JavaScript is the language used to design logic for the web.</p>
      </div>
      <div className="blogItem">
        <h3>How to learn Javascript in 2022?</h3>
        <p>JavaScript is the language used to design logic for the web.</p>
      </div>
    </div>
  );
};

export default Blog;
