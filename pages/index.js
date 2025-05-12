import Head from "next/head";
import Contents from "./components/contents.js";

export default function Home() {
  return (
    <>
      <Head>
        <title>GinanjarTG Portfolio</title>
        <meta name="description" content="Ginanjar Tubagus Gumilar's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Contents />
    </>
  );
}