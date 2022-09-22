import Contents from "./components/contents.js";
import { useEffect, useRef, useState, useLayoutEffect } from "react";
import Head from "next/head.js";
import gsap from "gsap";
import loading from "../public/teio.gif";
import Image from "next/image";

// fungsi untuk fetch data
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        <>
          <Head />
          <Contents />
        </>,
      ]);
    }, 3000);
  });
}

// fungsi utama
export default function Home() {
  const el = useRef();

  const [data, setData] = useState([]);
  const [loadingState, setLoadingState] = useState();

  useEffect(() => {
    if (loadingState !== "start") return;

    const loadData = async () => {
      const data = await fetchData();
      setData(data);
      setLoadingState("complete");
    };
    loadData();
  }, [loadingState]);

  useLayoutEffect(() => {
    if (loadingState !== "complete") return;
  }, [loadingState]);

  return (
    <div ref={el}>
      {!loadingState ? setLoadingState("start") : null}
      {loadingState === "start" ? (
        <div className="flex h-screen w-screen">
          <div className="m-auto">
            <Image src={loading} alt="loading..." />
          </div>
        </div>
      ) : null}
      {data.map(() => (
        <>
          <Head>
            <title>GinanjarTG Portfolio</title>
          </Head>
          <div className="bg-gray-900">
            <Contents />
          </div>
        </>
      ))}
    </div>
  );
}
