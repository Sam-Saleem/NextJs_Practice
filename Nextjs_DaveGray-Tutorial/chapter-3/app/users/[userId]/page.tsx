import getUser from "@/lib/getUser";
import getUserPosts from "@/lib/getUserPosts";
import { Suspense } from "react";
import UserPosts from "./components/UserPosts";
import { Metadata } from "next";
// Parameters from the url are always string
type Params = { params: { userId: string } };

export async function generateMetadata({
  params: { userId },
}: Params): Promise<Metadata> {
  const userData: Promise<User> = getUser(userId);
  const user: User = await userData;

  return { title: user.name, description: `This is the page of ${user.name}` };
}

export default async function UserPage({ params: { userId } }: Params) {
  const userData: Promise<User> = getUser(userId);
  const user = await userData;
  const userPostsData: Promise<Post[]> = getUserPosts(userId);
  // const userPosts = await userPostsData;
  //   const [user, userPosts] = await Promise.all([userData, userPostsData]);
  return (
    <>
      <h2>{user.name}</h2>
      <br />
      <Suspense fallback={<h2>Loading...</h2>}>
        {/* <UserPosts posts={userPosts} /> */}
        {/* @ts-expect-error Server Component */}
        <UserPosts promise={userPostsData} />
      </Suspense>
    </>
  );
}
