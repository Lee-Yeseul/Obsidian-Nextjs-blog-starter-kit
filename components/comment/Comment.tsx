import { CommentList } from "@/types";
import { calculateTimeAgo } from "@/utils";

export default function Comment({ created_at, body }: CommentList) {
  return (
    <div className="max-h-40 min-h-16 w-full overflow-auto rounded-md border-1 border-solid border-gray-400 p-4 text-base">
      <div className="flex items-center gap-5">
        <div className="font-bold">anonymous</div>
        <div className="text-sm">{calculateTimeAgo(created_at)}</div>
      </div>
      <div className="mt-1">{body}</div>
    </div>
  );
}
