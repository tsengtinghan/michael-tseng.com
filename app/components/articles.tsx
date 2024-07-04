import React from 'react';
import { ExternalLink } from 'lucide-react';

const ArticleList = ({ articles }) => {
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">My Reading List</h2>
      <ul className="space-y-6">
        {articles.map((article, index) => (
          <li key={index} className="border-b border-gray-200 pb-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-700">{article.name}</h3>
              {article.url && (
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600"
                >
                  <ExternalLink size={18} />
                </a>
              )}
            </div>
            {article.thoughts && (
              <p className="mt-2 text-sm text-gray-600 italic">
                Thoughts: {article.thoughts}
              </p>
            )}
            {article.quotes && (
              <blockquote className="mt-2 pl-4 border-l-2 border-gray-300 text-sm text-gray-600">
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