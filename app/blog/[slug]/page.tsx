import { getPost } from "@lib/get-post";
import { PostBody } from "./components/post-body";
import { notFound } from "next/navigation";
import type { Post } from "@lib/types";
import { Suspense } from "react";
import Loading from "./loading";
export default async function PostPage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const post: Post = await getPost(params.slug);

  if (!post) return <div>{params.slug}</div>;
  // Pass the post contents to MDX
  return (
    <Suspense fallback={<Loading/>}>
      <PostBody>{post?.body}</PostBody>
    </Suspense>
  );
}
