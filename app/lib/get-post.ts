import matter from "gray-matter";
import path from "path";
import type { Post } from "./types";
import fs from "fs/promises";
import { cache } from "react";

// `cache` is a React 18 feature that allows you to cache a function for the lifetime of a request.
// this means getPosts() will only be called once per page build, even though we may call it multiple times
// when rendering the page.

export const getPosts = cache(async () => {
  try {
    const posts = await fs.readdir(path.join(process.cwd(), "./posts/"));
    console.log("Posts directory:", posts);

    return Promise.all(
      posts
        .filter(
          (file) =>
            path.extname(file) === ".mdx" || path.extname(file) === ".md"
        )
        .map(async (file) => {
          const filePath = `./posts/${file}`;
          const postContent = await fs.readFile(filePath, "utf8");
          const { data, content } = matter(postContent);
          console.log("Post data:", data);
          console.log("Post content:", content);

          if (data.published === false) {
            return null;
          }

          const post = { ...data, body: content } as Post;
          console.log("Returning post:", post);
          return post;
        })
    );
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
});

export async function getPost(slug: string) {
  const posts = await getPosts();
  console.log("All posts:", posts);

  const post = posts.find((post) => post?.slug === slug);
  console.log("Found post:", post);

  return post as Post;
}

export default getPosts;
