import Link from "next/link";

export default function Navbar() {
  return (
    <div className="mb-10">
      <Link href="/">
        <h1>
          michael-tseng.com
        </h1>
      </Link>
      <nav className="flex flex-row space-x-4 underline">
        <Link href="/about">about</Link>
        <Link href="/blog">blog</Link>
        <Link href="/projects">projects</Link>
        <Link href="/goodstuff">good stuff</Link>
        <Link href="/moments">moments</Link>
      </nav>
    </div>
  );
}
