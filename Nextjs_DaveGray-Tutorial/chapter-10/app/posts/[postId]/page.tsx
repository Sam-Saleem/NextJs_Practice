import getFormattedDate from "@/lib/getFormattedDate";
import { getPostData, getSortedPostsData } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";

// type Props = { params: { postId: string } };

// Now this page (SSR)server-side renders at runtime but as we know about the possible params(blogposts) so we can change it to SSG(static site generation) using this function:
export function generateStaticParams() {
  const posts = getSortedPostsData();

  return posts.map((post) => ({ postId: post.id }));
}

export function generateMetadata({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData(); //fetch requests are deduped, but if you want to dedupe a function that is not using fetch you can use React cache().
  const { postId } = params;

  const post = posts.find((post) => post.id === postId);
  return {
    title: post ? post.title : "Post Not Found",
  };
}

export default async function Post({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData(); //deduped
  const { postId } = params;

  if (!posts.find((post) => post.id === postId)) {
    notFound();
  }
  const { title, date, contentHtml } = await getPostData(postId);
  const pubDate = getFormattedDate(date);
  return (
    <main className="px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
      <h1 className="text-3xl mt-4 mb-0">{title}</h1>
      <p className="mt-0">{pubDate}</p>
      <article>
        <section dangerouslySetInnerHTML={{ __html: contentHtml }} />

        <p>
          <Link href="/"> ⬅ Back to Home</Link>
        </p>
      </article>
    </main>
  );
}
