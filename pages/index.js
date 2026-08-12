import Head from "next/head";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ginanjar Tubagus Gumilar — Full Stack Developer</title>
        <meta
          name="description"
          content="Full stack developer based in Bandung, Indonesia. Building fast, reliable web and desktop applications with Laravel, Django, Next.js and more."
        />
        <meta property="og:title" content="Ginanjar Tubagus Gumilar — Full Stack Developer" />
        <meta
          property="og:description"
          content="Full stack developer based in Bandung, Indonesia. Building fast, reliable web and desktop applications with Laravel, Django, Next.js and more."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ginanjarstuff.my.id" />
        <meta property="og:image" content="/webp/ginanjar.webp" />
      </Head>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
