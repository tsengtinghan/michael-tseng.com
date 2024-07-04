const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export const readPage = async () => {
    const blockId = '788a976f93f04367a280964f2bae00ba';
    try {
        const response = await notion.blocks.children.list({
            block_id: blockId,
          });
          console.log(response);
    } catch (error) {
        console.error('Error fetching page:', error);
    }
};

