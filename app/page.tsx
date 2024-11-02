import Link from "next/link";
export default function Homepage() {
  return (
    <div>
      building
      <Link href={"https://ipmakerv2.vercel.app/"}> ipmaker</Link>
      <br />
      <br />
      still searching my{" "}
      <Link
        href={"https://www.youtube.com/watch?v=PUv66718DII"}
      >
        principles
      </Link>
      <span className="typewriter"> </span>
    </div>
  );
}
