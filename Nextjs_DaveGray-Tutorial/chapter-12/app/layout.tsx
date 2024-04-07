import Navbar from "./components/Navbar";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sehar's Blog",
  description: "Created by Sehar Saleem",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800">
        <Navbar />
        <main className="p-4 md:p-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
