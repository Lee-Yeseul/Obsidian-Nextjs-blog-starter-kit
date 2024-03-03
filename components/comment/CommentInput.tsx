'use client'

import { FormEvent, useState } from 'react'

interface CommentInputProps {
  createComment: (comment: string) => void
}

export default function CommentInput({ createComment }: CommentInputProps) {
  const [comment, setComment] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault()
      if (!comment) return
      createComment(comment)
      setComment('')
    } catch (err) {
      throw new Error(`Failed to create: ${err}`)
    }
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="my-5 flex h-24 justify-between rounded-md border-1 border-solid border-gray-300 p-4 shadow-md">
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-11/12 resize-none hover:border-none focus:outline-none"
          placeholder="Please enter your comment."
        />
        <button type="submit">➤</button>
      </div>
    </form>
  )
}
