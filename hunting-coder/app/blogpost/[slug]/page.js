import React from "react";
import styles from "../blogpost.module.css";

const slug = ({ params }) => {
  const { slug } = params;
  return (
    <div className={styles.blogpost}>
      <h1>Title of the page: '{slug}'</h1>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nam
        beatae provident amet, corrupti, ipsum eum quaerat culpa odit fugit modi
        unde expedita quia sequi quae doloribus, in veniam? Esse, magni qui
        necessitatibus cupiditate voluptates commodi, reiciendis rem aut
        architecto provident doloribus officiis at? Quis, mollitia! Nihil
        architecto blanditiis molestias tempore cumque aperiam, sequi ab soluta
        quis vero consequuntur libero cum totam molestiae doloremque?
      </div>
    </div>
  );
};

export default slug;
