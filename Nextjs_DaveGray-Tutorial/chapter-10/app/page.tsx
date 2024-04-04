import Posts from "./components/Posts";
// Time-based Revalidation:

// After two requests(clicks/refresh) the new changes will be reflected because at first request it will  triggers the revalidate but when it is revalidating it will still show old data and then the second requests gets the new version

// export const revalidate = 10; //86400(1 day) for deployement

export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Hello and Welcome 👋 &nbsp;
        <span className="whitespace-nowrap">
          I&apos;m <span className="font-bold">Sehar</span>.
        </span>
      </p>
      <Posts />
    </main>
  );
}
