import { readDbCollections } from "@lib/notion/read";
export default async function Poems() {
  const poems = await readDbCollections();
  return (
    <div>
      {poems.map((poem, index) => (
        <div key={index} className="mb-32 noto-serif-tc ">
          <p className="mb-2">{poem.name}</p>
          <pre className="whitespace noto-serif-tc">{poem.text}</pre>
        </div>
      ))}
    </div>
  );
}
