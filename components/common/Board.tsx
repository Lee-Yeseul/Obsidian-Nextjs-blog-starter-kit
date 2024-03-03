import Link from "next/link";
import Image from "next/image";

import matter from "gray-matter";

import Card from "@/components/common/Card";
import Tag from "@/components/common/Tag";
import { getPostBlobData } from "@/app/api/github-rest-api";
import { formatDateToLongString } from "@/utils";

interface BoardProps {
  sha: string;
  title: string;
}

export default async function Board({ sha, title }: BoardProps) {
  const postingTitle = title.slice(0, -3);
  const blobData = await getPostBlobData(sha);

  if (!blobData) return;

  const MarkdownViewer = Buffer.from(blobData.content, "base64").toString(
    "utf-8"
  );

  const { data: metadata } = matter(MarkdownViewer);

  const { createDate, title: metaTitle, summary, tags, thumbnail } = metadata;
  const formattedDate = formatDateToLongString(createDate);

  return (
    <div>
      <Link href={`/posts/${postingTitle}`}>
        <Card className="bg-white">
          <Card.Images>
            <div className="relative h-[25vh] w-full object-cover">
              {thumbnail ? (
                <Image src={thumbnail} fill alt="thumbnail_image" priority />
              ) : (
                <div className="flex h-full items-center justify-center bg-blue-200 p-8 text-xl font-bold">
                  {metaTitle}
                </div>
              )}
            </div>
          </Card.Images>
          <Card.Description>
            <div className="my-1 text-sm font-semibold text-gray-500">
              {formattedDate}
            </div>
            <h6 className="my-1 text-lg font-bold tracking-wide">
              {metaTitle}
            </h6>
            <p className="h-10 text-sm text-gray-500">
              {summary ? summary : metaTitle}
            </p>
            <div className="mt-4 flex gap-2 text-xs font-bold">
              {tags.map((value: string, index: number) => (
                <Tag key={index} value={value} index={index} />
              ))}
            </div>
          </Card.Description>
        </Card>
      </Link>
    </div>
  );
}
