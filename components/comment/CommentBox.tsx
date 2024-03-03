"use client";

import { useEffect, useState } from "react";

import CommentInput from "@/components/comment/CommentInput";
import Comment from "@/components/comment/Comment";

import {
  createIssue,
  createIssueComment,
  getCommentListByIssueNumber,
  getIssueList,
} from "@/app/api/github-rest-api/issue";
import { CommentList } from "@/types";

interface CommentProps {
  path: string;
}

export default function CommentBox({ path }: CommentProps) {
  const [commentList, setCommentList] = useState<CommentList[]>([]);
  const [issueNumber, setIssueNumber] = useState<number>(-1);

  const getIssueNumber = async () => {
    const issueList = await getIssueList();
    if (!issueList) return;
    const curIssue = issueList.find((value) => {
      return value.title === path;
    });

    if (curIssue) {
      setIssueNumber(curIssue.number);
      return;
    }

    const createdIssue = await createIssue(path, path);
    if (!createdIssue) return;
    setIssueNumber(createdIssue.number);
    return;
  };

  const getCommentList = async (issueNumber: number) => {
    if (issueNumber < 0) return;
    const curIssueCommentList = await getCommentListByIssueNumber(issueNumber);
    if (!curIssueCommentList) return;

    setCommentList(() => curIssueCommentList.toReversed());
  };

  const createComment = async (comment: string) => {
    await createIssueComment(issueNumber, comment);
    await getCommentList(issueNumber);
  };

  useEffect(() => {
    getIssueNumber();
  }, []);

  useEffect(() => {
    getCommentList(issueNumber);
  }, [issueNumber]);

  return (
    <section className="sm:w-3/4 md:w-3/4 lg:w-3/5 xl:w-1/2">
      <div className="text-xl font-bold">comments ({commentList.length})</div>
      <CommentInput createComment={(comment) => createComment(comment)} />
      <div className="flex flex-col gap-2">
        {commentList.map(({ created_at, body }, index) => (
          <Comment key={index} created_at={created_at} body={body} />
        ))}
      </div>
    </section>
  );
}
