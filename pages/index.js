import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Navbar from "./components/navbar.js";

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        <>
          <Head />
          <Navbar />
        </>,
      ]);
    }, 3000);
  });
}

export default function Home() {
  const [data, setData] = useState([]);
  const [loadingState, setLoadingState] = useState();
  const loaderRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (loadingState !== "start") return;
    const loadData = async () => {
      const data = await fetchData();
      setData(data);
      setLoadingState("complete");
    };
    loadData();
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [loadingState]);

  useEffect(() => {
    if (loadingState !== "complete" || !loaderRef.current) return;
    const loader = loaderRef.current;
    loader.classList.add("fade-out");
    setTimeout(() => {
      loader.style.display = "none";
    }, 1000);
  }, [loadingState]);

  return (
    <div>
      {!loadingState ? setLoadingState("start") : null}
      {loadingState === "start" && (
        <div ref={loaderRef} className="fixed inset-0 flex flex-col items-center justify-center bg-[#141C2B] z-50 overflow-hidden">
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            <div className="code-icon mb-8">
              <div className="bracket left">{`{`}</div>
              <div className="bracket right">{`}`}</div>
            </div>
            <div className="text-white text-3xl font-['Roboto_Mono',monospace] mb-8 tracking-wide">
              Initializing...
            </div>
            <div className="relative w-64 h-2 bg-[#2A3654] rounded-full overflow-hidden">
              <div 
                className="absolute top-0 left-0 h-full bg-white transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      )}
      {data.map(() => (
        <>
          <Head>
            <title>GinanjarTG Portfolio</title>
            <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet" />
          </Head>
          <div className="bg-[#141C2B]">
            <Navbar />
          </div>
        </>
      ))}
      <style jsx>{`
        .code-icon {
          font-size: 64px;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .bracket {
          font-weight: bold;
          opacity: 0.8;
          animation: pulse 2s infinite;
        }
        .bracket.left {
          margin-right: 16px;
        }
        .bracket.right {
          margin-left: 16px;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 0.4; }
        }
        .fade-out {
          animation: fadeOut 1s forwards;
        }
        @keyframes fadeOut {
          to { opacity: 0; }
        }
      `}</style>
    </div>
  );
}