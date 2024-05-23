import Image from "next/image";
import Link from "next/link";
export default function Social() {
    return (
        <div className="flex justify-start space-x-2"> 

            <Image src="/twitter.svg" alt="logo" width={25} height={25} />
            <Image src="/square-github.svg" alt="logo" width={25} height={25} />
        </div>
    );
}