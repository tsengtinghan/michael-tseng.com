import Image from "next/image";
import Link from "next/link";
export default function Social() {
  return (
    <div className="flex justify-start space-x-2">
      <Link href="https://x.com/michaeltseng_">
        <Image src="/twitter.svg" alt="logo" width={25} height={25} />
      </Link>
      <Link href="https://github.com/tsengtinghan">
        <Image src="/square-github.svg" alt="logo" width={25} height={25} />
      </Link>
    </div>
  );
}
