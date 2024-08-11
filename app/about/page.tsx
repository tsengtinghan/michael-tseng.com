import Image from "next/image";
import Link from "next/link";
import Social from "@components/social";

export default function About() {
  return (
    <div className="relative max-w-3xl mx-auto">
      <div className="float-left mr-6 w-1/3 overflow-x-auto snap-x snap-mandatory">
        <div className="flex w-full">
          <div className="flex-shrink-0 w-full snap-center">
            <Image
              src="/profile2.jpg"
              alt="Profile picture 1"
              width={300}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="flex-shrink-0 w-full snap-center">
            <Image
              src="/me.jpg"
              alt="Profile picture 2"
              width={300}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
          {/* Add more images here if needed */}
        </div>
      </div>
      <div className="prose-sm">
        <p>
          19, building for the{" "}
          <Link href={"/blog/singularity-is-near-1"}>singularity</Link>
        </p>
        <p>
          @ 🌉 I love startups!
          <br /> currently learning web dev and ai to build something useful
        </p>
        <p>
          I grew up in Hsinchu, Taiwan, a city where the wind never stops
          blowing. The thriving semiconductor industry there inspired me to
          pursue a path in STEM, so I picked up C++ upon entering high school. I
          later became interested in machine learning and started working on
          side projects and doing computer vision research at a local
          university. After reading Paul Graham&apos;s essays, I became
          fascinated by tech startups and moved to SF to learn more about them.
          Today, I&apos;m a student and hack on side projects on nights &amp;
          weekends.
        </p>
      </div>
      <div className="clear-both pt-8">
        <Social />
      </div>
    </div>
  );
}