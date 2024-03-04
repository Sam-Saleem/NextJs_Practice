"use client";
import React, { useState, useEffect } from "react";
import styles from "../blogpost.module.css";

const BlogPost = async ({ params }) => {
  const { slug } = params;
  const blog = await getData(slug);
  return (
    <div className={styles.blogpost}>
      <h1>Title of the page: '{blog?.title}'</h1>
      <div>{blog?.content}</div>
    </div>
  );
};

export default BlogPost;
// This function can be named anything
async function getData(slug) {
  // const { slug } = params;
  const response = await fetch(
    `http://localhost:3000/api/getblog?slug=${slug}`,
    {
      cache: "no-store",
    }
  );

  const data = await response.json();

  return data.blog;
}
