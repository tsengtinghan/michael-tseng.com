import Link from "next/link";
export default function Homepage() {
  return (
    <div>
      building
      <Link href={"https://pupaai.com/"}> Pupa ai</Link>
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
