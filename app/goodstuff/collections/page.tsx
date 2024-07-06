import { readDbCollections } from "@lib/notion/read";
export default function Collections(){
    readDbCollections();
    return (
        <div>
            hi
        </div>
    );
}