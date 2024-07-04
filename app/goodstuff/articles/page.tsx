import { readDbArticles } from "@lib/notion/read";
import ArticleList from "@components/articles";
export default async function Articles() {
  const articles = await readDbArticles("48f850f1585b475fa4b7674ac22d1c78");
  console.log(articles);
  return (
    <div className="container mx-auto px-4 py-8">
      <ArticleList articles={articles} />
    </div>
  );
}
