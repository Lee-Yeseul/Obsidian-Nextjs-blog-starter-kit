export default function CommentLoading() {
  return (
    <div className="sm:w-3/4 md:w-3/4 lg:w-3/5 xl:w-1/2">
      <div className="flex w-full items-center justify-center">
        <div className="max-h-40 min-h-16 w-full animate-pulse overflow-auto rounded-md border-1 border-solid border-gray-400 p-4">
          <div className="flex items-center gap-5">
            <div className="h-5 w-36 rounded-md bg-gray-200"></div>
          </div>
          <div className="mt-2 h-10 w-full rounded-md bg-gray-200"></div>
        </div>
      </div>
    </div>
  )
}
