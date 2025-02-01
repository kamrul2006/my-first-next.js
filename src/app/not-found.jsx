"use client";

import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-900 text-white text-center">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-lg mt-4">Oops! The page {`you're`} looking for{` doesn't`} exist.</p>
      
      <Link href="/" className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
        Go Home
      </Link>
    </div>
  );
}
