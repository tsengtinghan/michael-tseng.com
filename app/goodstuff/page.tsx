import Link from "next/link";
export default function GoodStuffPage() {
  return (
    <div className="flex flex-col">
      <ul className="list-disc list-inside">
        <li><Link href={"/goodstuff/articles"}> blog posts & articles</Link></li>
        <li><Link href={"/goodstuff/collections"}> 收藏 </Link></li>
        <li><Link href={"/goodstuff/quotes"}> quotes </Link></li>
        <li><Link href={"/goodstuff/books"}> books </Link></li>
      </ul>
    </div>
  );
  
}