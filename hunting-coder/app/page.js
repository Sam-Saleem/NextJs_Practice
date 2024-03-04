import Image from "next/image";
import styles from "./page.module.css";
import Script from "next/script";
import Link from "next/link";
// import "./styles.css";
export default function Home() {
  return (
    <>
      {/* <Script src="./scripts/script1.js" strategy="lazyOnload" /> */}
      {/* <style jsx>
        {`
          .dummy {
            backgroundcolor: yellow;
          }
        `}
      </style> */}
      <nav className={styles.mainnav}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <main className={styles.main}>
        <h1 className={styles.title}> Hunting Coder</h1>

        <p className={styles.description}>
          A blog for hunting coders by a hunting coder.
        </p>

        <div className="blogs">
          <h2>Popular Blogs</h2>
          <div className="blogItem">
            <h3>How to learn Javascript in 2022?</h3>
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
      </main>
    </>
  );
}
