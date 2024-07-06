import React from 'react';
import { readDbArticles } from '@lib/notion/read';
import { article } from '@lib/types';


const ArticleList = async () => {
  const articles = await readDbArticles("48f850f1585b475fa4b7674ac22d1c78");
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-l mb-4 text-gray-800">Writing</h2>
      <ul className="space-y-3">
        {articles.map((article: article, index: number) => (
          <li key={index} className="border-b border-gray-200 pb-3">
            <div className="flex items-center justify-between">
              {article.url && (
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                    {article.name}
                </a>
              )}
            </div>
            {article.thoughts && (
              <p className="mt-2 ml-4 text-sm text-gray-600 italic">
                {article.thoughts}
              </p>
            )}
            {article.quotes && (
              <blockquote className="mt-2 ml-4 pl-4 border-l-2 border-gray-500 text-sm text-gray-600">
                {article.quotes}
              </blockquote>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleList;