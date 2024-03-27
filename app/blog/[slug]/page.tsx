import { getPost } from '@lib/get-post'
import { PostBody } from './components/post-body'
import { notFound } from 'next/navigation'
import type { Post } from '@lib/types'
export default async function PostPage({
  params,
}: {
  params: {
    slug: string
  }
}) {
  const post : Post = await getPost(params.slug)
  // notFound is a Next.js utility
  if (!post) return notFound()
  // Pass the post contents to MDX
  return <PostBody>{post?.body}</PostBody>
}