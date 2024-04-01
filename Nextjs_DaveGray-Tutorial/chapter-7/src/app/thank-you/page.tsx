import Link from "next/link";
export default function Thankyou() {
  return (
    <main className="grid place-content-center min-h-screen">
      <h1 className="text-3xl ">Thank you for your feedback!</h1>
      <Link
        className="underline text-blue-600 hover:text-blue-500 mx-auto"
        href="/"
      >
        Back to Home
      </Link>
    </main>
  );
}
