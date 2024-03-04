import Image from "next/image";
import styles from "./page.module.css";
import Script from "next/script";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <Script src="./scripts/script1.js" strategy="lazyOnload" /> */}
      <div className={styles.title}>

      <h1 > Hunting Coder
        </h1>
        
       <p>A blog for hunting coders by a hunting coder.</p>
      </div>
       {/*<div className={styles.description}>
       

        
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div> 
        
      </div>*/}

      {/* <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div> */}

      {/* <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore starter templates for Next.js.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */}
      <div className="blogs">
        <h2>
          Popular Blogs
        </h2>
        <div className="blogItem">
          <h3>How to learn Javascript in 2022?</h3>
          <p>
            JavaScript is the language used to design logic for the web.
          </p>
        </div>
        <div className="blogItem">
          <h3>How to learn Javascript in 2022?</h3>
          <p>
            JavaScript is the language used to design logic for the web.
          </p>
        </div>
        <div className="blogItem">
          <h3>How to learn Javascript in 2022?</h3>
          <p>
            JavaScript is the language used to design logic for the web.
          </p>
        </div>
      </div>
    </main>
  );
}
