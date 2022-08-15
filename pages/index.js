import Contents from "./component_pages/contents.js";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return (
    isLoaded && (
      <>
        <head>
          <title>GinanjarTG Portfolio</title>
        </head>
        <div className="bg-gray-900">
          <Contents />
        </div>
      </>
    )
  );
}
