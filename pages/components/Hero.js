import Image from "next/image";
import { motion } from "framer-motion";
import ginanjarPic from "../../public/webp/pixel.webp";
import { useAppContext } from "../../context/AppContext";
import { contact } from "../../data/content";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay } },
});

const socials = [
  {
    name: "GitHub",
    href: contact.github,
    path: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
  },
  {
    name: "LinkedIn",
    href: contact.linkedin,
    path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
  },
  {
    name: "Instagram",
    href: contact.instagram,
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  },
];

export default function Hero() {
  const { t } = useAppContext();

  return (
    <section id="home" className="relative flex min-h-screen items-center pt-16">
      <div className="dot-grid absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto grid w-full max-w-6xl gap-16 px-6 py-24 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <motion.p variants={fadeUp()} initial="hidden" animate="visible" className="eyebrow mb-6">
            {t("heroEyebrow")}
          </motion.p>
          <motion.h1
            variants={fadeUp(0.1)}
            initial="hidden"
            animate="visible"
            className="font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl"
          >
            Ginanjar Tubagus <span className="text-lime">Gumilar</span>
          </motion.h1>
          <motion.p
            variants={fadeUp(0.2)}
            initial="hidden"
            animate="visible"
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
          >
            {t("heroIntro")}
          </motion.p>
          <motion.div variants={fadeUp(0.3)} initial="hidden" animate="visible" className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-lime px-6 py-3 font-mono text-sm font-medium text-[#0A0A0C] transition-opacity hover:opacity-90"
            >
              {t("ctaProjects")} &rarr;
            </a>
            <a
              href={contact.cvEn}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-line px-6 py-3 font-mono text-sm text-ink transition-colors hover:border-lime hover:text-lime"
            >
              {t("ctaResume")}
            </a>
          </motion.div>
          <motion.div variants={fadeUp(0.4)} initial="hidden" animate="visible" className="mt-12 flex items-center gap-6">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="text-muted transition-colors hover:text-lime"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </motion.div>
        </div>
        <motion.figure
          variants={fadeUp(0.35)}
          initial="hidden"
          animate="visible"
          className="hidden md:block"
        >
          <div className="w-52 overflow-hidden rounded-xl border border-line">
            <Image
              src={ginanjarPic}
              alt="Portrait of Ginanjar Tubagus Gumilar"
              width={800}
              height={800}
              draggable={false}
              className="h-auto w-full"
            />
          </div>
        </motion.figure>
      </div>
    </section>
  );
}
