import { readDbCollections } from "@lib/notion/read";
export default async function Poems() {
  const poems = await readDbCollections();
  return (
    <div>
      {poems.map((poem, index) => (
        <div key={index} className="mb-32 noto-serif-tc">
          <pre className="whitespace-pre-wrap break-words max-w-full noto-serif-tc mb-4">
            {poem.text}
          </pre>
          <p className="mb-2">{poem.name}</p>
        </div>
      ))}
    </div>
  );
}
