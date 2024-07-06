const { Client } = require("@notionhq/client");
const { NotionToMarkdown } = require("notion-to-md");

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const n2m = new NotionToMarkdown({ notionClient: notion });

export const readBlock = async (id: string) => {
  const blockId = id
  const response = await notion.blocks.children.list({
    block_id: blockId,
  });
}

type Block = {
  type: string,
  blockId: string,
  parent: string,
  children: Block[]  
};

export const pageToMd = async (id: string) => {
  const mdblocks: Block[] = await n2m.pageToMarkdown(id);
  const page = mdblocks.map(block => {
    return block.parent
  }).join("\n");
  console.log(page)
}

export const readDbCollections = async () => {
  const databaseId = "746262ce0f194773b093e8121473b30f"; 
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
    });
    const poems = response.results;
    console.log(poems[1])
    pageToMd(poems[1].id)
    const poemsList = poems.map((poem: any) => {
      const name = poem.properties.Name.title[0]?.plain_text || 'No name';
      return { name };
    });
    return poemsList;
  } catch (error) {
    console.log("error: ", error);
    return [];
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


