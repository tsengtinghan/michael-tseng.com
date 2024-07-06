import Link from "next/link";

export default function Navbar() {
  return (
    <div className="mb-10">
      <Link href="/">
        <h1 className="text-base inline">
          michael-tseng.com
        </h1>
      </Link>
      <nav className="flex flex-wrap underline">
        <Link className="pr-3" href="/about">about</Link>
        <Link className="pr-3" href="/blog">blog</Link>
        <Link className="pr-3" href="/projects">projects</Link>
        <Link className="pr-3" href="/goodstuff">goodstuff</Link>
        <Link href="/moments">moments</Link>
      </nav>
    </div>
  );
}
