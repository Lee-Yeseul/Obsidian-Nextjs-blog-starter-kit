import { ReactNode } from 'react'

export type CompoundItem = {
  children?: ReactNode
  className?: string
}

export interface CommentList {
  body: string
  created_at: string
}
