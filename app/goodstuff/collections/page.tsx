import { Suspense } from "react";
import Poems from "@components/poems";
export default async function Collections() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Poems />
    </Suspense>
  );
}
