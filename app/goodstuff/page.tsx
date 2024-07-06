import { readPage } from "@lib/notion/read";
import Link from "next/link";
export default function GoodStuffPage() {
  readPage();
  return (
    <div className="flex flex-col">
      <ul className="list-disc list-inside">
        <li><Link href={"/articles"}> blog posts & articles</Link></li>
        <li><Link href={"/collections"}> 收藏 </Link></li>
        <li><Link href={"/quotes"}> quotes </Link></li>
        <li><Link href={"/books"}> books </Link></li>
      </ul>
    </div>
  );
  
}