import { getPosts } from "@lib/get-post"; 
import Link from "next/link";

export default async function PostsPage() {
  const posts = await getPosts();
  return (
    <div>
      <h1 className="text-2xl font-bold text-center text-gray-900 mt-8 mb-4">
        Blog Posts
      </h1>
      <ul>
        {posts.map((post, index) => (
          <li
            key={index}
            className="bg-white shadow overflow-hidden rounded-md px-6 py-4 my-2"
          >
            <Link href={`/blog/${post?.slug}`}>
              <h2 className="text-xl font-semibold text-gray-800">
                {post?.title}
              </h2>
              <p className="text-gray-600 text-sm">{post?.description}</p>
              {/* Render other post details as needed */}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
