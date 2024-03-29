export default async function getUserPosts(userId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
    { next: { revalidate: 60 } }
  );
  // By default the fetch request works with the option {cache:"force-cache"}

  // {cache:"no-store"} this is the option for dynamic routes which needs the data to be fetched again as it is changing.
  // - ISR (Incremental Static Regeneration):
  // { next: {revalidate:60} }: fetch the data after the specifie time(60s)
  // Show the data for 60 sec before you revalidate to check to see if there's new data
  if (!res.ok) return undefined; //throw new Error("Failed to fetch the user's posts.");

  return res.json();
}
