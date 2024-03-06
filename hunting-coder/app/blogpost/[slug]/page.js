import styles from "../blogpost.module.css";
const { readFile } = require("node:fs/promises");
const { resolve } = require("node:path");

const BlogPost = async ({ params }) => {
  const { slug } = params;
  const blog = await getData(slug);

  function markup(content) {
    return { __html: content };
  }
  return (
    <div className={styles.blogpost}>
      <h1>Title of the page: {blog?.title}</h1>
      <div dangerouslySetInnerHTML={markup(blog?.content)}></div>
    </div>
  );
};

export default BlogPost;
// Server Side Rendering
// This function can be named anything
// async function getData(slug) {
//   const response = await fetch(
//     `http://localhost:3000/api/getblog?slug=${slug}`,
//     {
//       cache: "no-store",
//     }
//   );

//   const data = await response.json();

//   return data.blog;
// }

// Static Site Generation:
export async function generateStaticParams() {
  return [
    { slug: "how-to-learn-javascript" },
    { slug: "how-to-learn-nextjs" },
    { slug: "how-to-learn-react" },
    { slug: "how-to-learn-typescript" },
  ];
}
async function getData(slug) {
  // const response = await fetch(
  //   `http://localhost:3000/api/getblog?slug=${slug}`
  // );
  // // In the app directory, data fetching with fetch() will default to cache: 'force-cache', which will cache the request data until manually invalidated. This is similar to getStaticProps in the pages directory.
  // const data = await response.json();

  // return data.blog;

  const filePath = resolve(`app/data/blogdata/${slug}.json`);
  const data = await readFile(filePath, { encoding: "utf8" });
  const blog = JSON.parse(data);
  return blog;
}
