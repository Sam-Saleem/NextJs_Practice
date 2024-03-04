import React from "react";

const post = ({ params }) => {
  console.log(params);
  const { pid } = params;
  return <h1>Post: {pid}</h1>;
};

export default post;
