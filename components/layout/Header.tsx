import Link from "next/link";

import ArrowOutward from "@/public/icons/arrow_outward.svg";
import { BLOG_NAME } from "@/constants";

export default function Header() {
  return (
    <header className="fixed left-0 top-0 z-10 h-16 w-full border-b-1 border-solid border-gray-300 bg-white">
      <div className="flex h-full items-center justify-between px-10">
        <Link href="/" className="text-xl font-bold">
          {BLOG_NAME}
        </Link>
        <Link
          href="/"
          className="flex items-center font-semibold hover:text-gray-500 hover:underline"
        >
          Other link
          <ArrowOutward width={20} fill="gray" />
        </Link>
      </div>
    </header>
  );
}
