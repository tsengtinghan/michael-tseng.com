import Link from "next/link";
export default function Homepage() {
  return (
    <div>
      still searching my{" "}
      <Link
        href={"https://www.youtube.com/watch?v=PUv66718DII"}
        className="underline"
      >
        principles
      </Link>
      <span className="typewriter"> </span>
    </div>
  );
}
