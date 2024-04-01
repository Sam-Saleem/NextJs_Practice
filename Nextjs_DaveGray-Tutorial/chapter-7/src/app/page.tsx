import Link from "next/link";
export default function Home() {
  return (
    <main className="min-h-screen grid place-content-center">
      <h1 className="text-3xl ">Hello World!</h1>
      <Link
        className="underline text-blue-600 hover:text-blue-500 mx-auto"
        href="/feedback"
      >
        Send Feedback
      </Link>
    </main>
  );
}
