import { readPage } from "@lib/notion/read";
export default function GoodStuffPage() {
  readPage();
  return (
    <div>
      <h1>good stuff coming soon...</h1>
    </div>
  );
}