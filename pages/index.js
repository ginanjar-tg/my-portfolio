import Contents from "./component_pages/contents.js";
import { useEffect, useState } from "react";
import Head from "next/head.js";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return (
    isLoaded && (
      <>
        <Head>
          <title>GinanjarTG Portfolio</title>
        </Head>
        <div className="bg-gray-900">
          <Contents />
        </div>
      </>
    )
  );
}
