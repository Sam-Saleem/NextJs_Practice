import Posts from "./components/Posts";
import MyProfilePic from "./components/MyProfilePic";
// Time-based Revalidation:

// After two requests(clicks/refresh) the new changes will be reflected because at first request it will  triggers the revalidate but when it is revalidating it will still show old data and then the second requests gets the new version

export const revalidate = 86400; //(1 day) for deployement

export default function Home() {
  return (
    <div className="mx-auto">
      <MyProfilePic />
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Hello and Welcome 👋 &nbsp;
        <span className="whitespace-nowrap">
          I'm <span className="font-bold">Sehar</span>.
        </span>
      </p>
      <Posts />
    </div>
  );
}
