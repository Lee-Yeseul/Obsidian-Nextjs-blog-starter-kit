"use client";

import Link from "next/link";

export default function Error() {
  return (
    <section className="flex min-h-[75vh] flex-col items-center justify-center">
      <h2 className="text-center font-bold">
        <div>
          <span className="text-5xl text-black">Error</span>
        </div>
        <div className="mt-4 text-xl">{"sorry, something error occured"}</div>
      </h2>
      <div className="mt-8 rounded-md bg-black px-6 py-3 text-xl font-bold text-white transition duration-200 ease-in-out hover:translate-y-0.5 hover:scale-105">
        <Link href={"/"}>Back to Home</Link>
      </div>
    </section>
  );
}
