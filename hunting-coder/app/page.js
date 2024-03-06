// "use client";
// import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1 className={styles.title}>&lt; Hunting Coder /&gt;</h1>
          {/* <Image
          className={styles.myImg}
          src="/homeimg.jpg"
          width={518}
          height={345}
          alt="Home Image"
        /> */}
          <img
            className={styles.myImg}
            src="/homeimg.jpg"
            width={518}
            height={345}
            alt="Home Image"
          />
          <p className={styles.description}>
            A blog for hunting coders by a hunting coder. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Nulla nesciunt ipsam error iusto
            officia repellendus eos? Illo excepturi labore ab commodi, magnam
            quibusdam!
          </p>
        </div>
        <div className={styles.blogs}>
          <h2>Latest Blogs</h2>
          <div>
            <h3>How to learn Javascript in 2022?</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consectetur enim, error vel vero accusamus sunt! Ab nulla ratione
              voluptates tempora nesciunt, voluptatibus eligendi ex error
              quaerat voluptatum incidunt soluta consequuntur eum provident
              mollitia vitae! Necessitatibus?
            </p>
            <button>Read More</button>
          </div>
          <div>
            <h3>How to learn Typescript in 2022?</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consectetur enim, error vel vero accusamus sunt! Ab nulla ratione
              voluptates tempora nesciunt, voluptatibus eligendi ex error
              quaerat voluptatum incidunt soluta consequuntur eum provident
              mollitia vitae! Necessitatibus?
            </p>
            <button>Read More</button>
          </div>
          <div>
            <h3>How to learn React in 2022?</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consectetur enim, error vel vero accusamus sunt! Ab nulla ratione
              voluptates tempora nesciunt, voluptatibus eligendi ex error
              quaerat voluptatum incidunt soluta consequuntur eum provident
              mollitia vitae! Necessitatibus?
            </p>
            <button>Read More</button>
          </div>
        </div>
      </main>
    </>
  );
}
