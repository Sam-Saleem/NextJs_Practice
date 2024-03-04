import React from "react";

const slug = ({ params }) => {
  const { slug } = params;
  return <div>{slug}</div>;
};

export default slug;
