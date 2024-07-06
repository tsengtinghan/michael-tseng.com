import ArticleList from "@components/articles";
import { Suspense } from "react";
export default async function Articles() {
  return (
    <div className="container mx-auto">
      <Suspense fallback={<p>Loading...</p>}>
        <ArticleList />
      </Suspense>
    </div>
  );
}
