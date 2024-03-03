import Link from "next/link";

import MailIcon from "@/public/icons/mail.svg";
import GithubIcon from "@/public/icons/github.svg";
import { OWNER } from "@/constants";

export default function Footer() {
  return (
    <footer className="w-full border-t-1 border-solid border-gray-300 py-5 text-sm">
      <div className="flex flex-col items-center gap-2">
        <div className="flex gap-2">
          <Link href="/" aria-label="github">
            <GithubIcon width={28} height={28} />
          </Link>
          <Link href="mailto:" aria-label="gmail">
            <MailIcon width={28} height={28} />
          </Link>
        </div>
        <div>©2024. {OWNER}. All rights reserved</div>
      </div>
    </footer>
  );
}
