import Image from "next/image";
import styles from "./page.module.css";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.title}> Hunting Coder</h1>
        <Image
          className={styles.myImg}
          src="/homeimg.jpg"
          width={518}
          height={345}
          alt="Home Image"
        />
        <p className={styles.description}>
          A blog for hunting coders by a hunting coder.
        </p>

        <div className={styles.blogs}>
          <h2>Latest Blogs</h2>
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
