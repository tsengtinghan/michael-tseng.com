const { Client } = require("@notionhq/client");
import { article } from "@lib/types";

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export const readDbCollections = async () => {
  const blockId = "788a976f93f04367a280964f2bae00ba";
  try {
    const response = await notion.blocks.children.list({
      block_id: blockId,
    });
    const childPages = response.results.filter(
      (block) => block.type === "child_page" || block.type === "child_database"
    );
    console.log(childPages);
  } catch (error) {
    console.error("Error fetching page:", error);
  }
};

export const readDbArticles = async (id: string) => {
  const databaseId = id;
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
    });
    const articles = response.results;
    const articlesList = articles.map((article: any) => {
      const name = article.properties.Name.title[0]?.plain_text || 'No name';
      const url = article.properties.url?.url;
      const thoughts = article.properties.thoughts?.rich_text[0]?.plain_text;
      const quotes = article.properties.quotes?.rich_text[0]?.plain_text;
      return { name, url, thoughts, quotes };
    });
    return articlesList;
  } catch (error) {
    console.log("error: ", error);
    return [];
  }
};


