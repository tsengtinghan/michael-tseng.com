import Image from "next/image";
export default function Social() {
    return (
        <div className="flex justify-start"> 
            <Image src="/twitter.svg" alt="logo" width={25} height={25} />
            <Image src="/square-github.svg" alt="logo" width={25} height={25} />
        </div>
    );
}