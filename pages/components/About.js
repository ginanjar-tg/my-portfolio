import Image from "next/image";
import { motion } from "framer-motion";
import pixelPic from "../../public/webp/pixel.webp";
import { useAppContext } from "../../context/AppContext";
import { skills, languages } from "../../data/content";
import SectionHeading from "./SectionHeading";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay } },
});

export default function About() {
  const { t, language } = useAppContext();

  return (
    <section id="about" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="01" title={t("aboutTitle")} />

        <div className="mt-14 grid gap-16 md:grid-cols-2">
          <motion.div
            variants={fadeUp()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-lg leading-relaxed text-muted">{t("aboutP1")}</p>
            <p className="mt-4 text-lg leading-relaxed text-muted">{t("aboutP2")}</p>
            <div className="panel mt-10 p-6">
              <h3 className="eyebrow mb-4">{t("educationTitle")}</h3>
              <p className="font-medium text-ink">{t("universityName")}</p>
              <p className="mt-1 text-sm text-muted">{t("universityMajor")}</p>
              <p className="mt-1 font-mono text-xs text-muted">{t("educationYears")}</p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp(0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="w-full max-w-sm overflow-hidden rounded-xl border border-line">
              <Image
                src={pixelPic}
                alt="Pixel-art portrait of Ginanjar"
                width={800}
                height={800}
                className="h-auto w-full"
              />
            </div>
            <h3 className="eyebrow mb-4 mt-10">{t("technicalSkillsTitle")}</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="chip">
                  {skill}
                </span>
              ))}
            </div>
            <h3 className="eyebrow mb-4 mt-10">{t("languagesTitle")}</h3>
            <ul className="divide-y divide-line border-y border-line">
              {languages.map((lang) => (
                <li key={lang.name} className="flex items-center justify-between py-3">
                  <span className="text-sm text-ink">{lang.name}</span>
                  <span className="font-mono text-xs text-muted">{lang.level[language]}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
