import matter from "gray-matter";
import dynamic from "next/dynamic";

import CommentLoading from "@/components/comment/CommentLoading";
import MarkdownViewer from "@/components/markdown-viewer";
import Tag from "@/components/common/Tag";

import { getRawPosts } from "@/app/api/github-rest-api";
import { formatDateToLongString } from "@/utils";
import { BLOG_PATH } from "@/constants";

interface PostDetailProps {
  params: { path: string };
}

export async function generateMetadata({ params: { path } }: PostDetailProps) {
  const decodedPath = decodeURIComponent(path);
  const postingData = await getRawPosts(`${BLOG_PATH}/${decodedPath}.md`);

  const { data: metadata } = matter(postingData as unknown as string);
  const { title, summary, thumbnail } = metadata;

  return {
    title: path,
    openGraph: {
      title,
      description: summary,
      images: [{ url: thumbnail, width: 1200, height: 900 }],
    },
  };
}

const DynamicCommentBox = dynamic(
  () => import("@/components/comment/CommentBox"),
  {
    ssr: false,
    loading: () => <CommentLoading />,
  }
);

export default async function Post({ params: { path } }: PostDetailProps) {
  const decodedPath = decodeURIComponent(path);

  const postingData = await getRawPosts(`${BLOG_PATH}/${decodedPath}.md`);

  const { data: metadata, content } = matter(postingData as unknown as string);
  const { createDate, title, tags } = metadata;
  const formattedDate = formatDateToLongString(createDate);

  return (
    <>
      <section className="flex min-h-[75vh] w-full flex-col items-center justify-center pt-10">
        <article className="sm:w-3/4 md:w-3/4 lg:w-3/5 xl:w-1/2">
          <h2 className="text-4xl font-bold sm:text-2xl md:text-2xl lg:text-4xl xl:text-4xl">
            {title}
          </h2>
          <div className="mt-4 text-base font-medium text-gray-500">
            {formattedDate ?? ""}
          </div>
          <div className="mt-4 flex gap-4">
            {tags.map((value: string, index: number) => (
              <Tag key={index} value={value} index={index} />
            ))}
          </div>
          <div className="mt-8">
            <MarkdownViewer content={content} />
          </div>
        </article>
        <hr className="my-20 h-px bg-gray-300 sm:w-3/4 md:w-3/4 lg:w-3/5 xl:w-1/2 "></hr>
        <DynamicCommentBox path={path} />
      </section>
    </>
  );
}
