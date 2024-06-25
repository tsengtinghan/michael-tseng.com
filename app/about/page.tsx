import Link from "next/link";
import Social from "@components/social";
export default function About() {
  return (
    <div>
      <p>
        19, building for the{" "}
        <Link href={"/blog/singularity-is-near-1"}>singularity</Link>
      </p>
      <p>
        @ 🌉 I love startups!
        <br /> currently learning web dev and ai to build something useful
        <br />
      </p>
      <br />
      <p className="pb-8">
        I grew up in Hsinchu, Taiwan, a city where the wind never stops blowing.
        The thriving semiconductor industry there inspired me to pursue a path
        in STEM, so I picked up C++ upon entering high school. I later became
        interested in machine learning and started working on side projects and
        doing computer vision research at a local university. After reading Paul Graham&apos;s 
        essays, I became fascinated by tech startups and moved to SF to learn more about them.
        Today, I&apos;m a student and hack on side projects on nights &amp; weekends.
      </p>
      <Social />
    </div>
  );
}
