import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  BLOG_DESCRIPTION,
  BLOG_NAME,
  GOOGLE_VERIFICATION,
  SERVICE_URL,
} from "@/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SERVICE_URL),
  title: {
    template: `%s | ${BLOG_NAME}`,
    default: `${BLOG_NAME}`,
  },
  description: BLOG_DESCRIPTION,
  verification: { google: GOOGLE_VERIFICATION },
  icons: "/favicon.ico",
  openGraph: {
    type: "website",
    title: {
      template: `%s`,
      default: `${BLOG_NAME}`,
    },
    description: `%s`,
    images: `%s`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Header />
        <main className="my-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
