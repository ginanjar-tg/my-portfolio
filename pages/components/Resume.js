import { motion } from "framer-motion";
import { useAppContext } from "../../context/AppContext";
import { contact, workExperience } from "../../data/content";
import SectionHeading from "./SectionHeading";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const downloadIcon = (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
  </svg>
);

export default function Resume() {
  const { t, language } = useAppContext();

  return (
    <section id="resume" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="03" title={t("resumeTitle")} />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-6"
        >
          <p className="max-w-xl text-muted">
            {t("resumeSub")} {t("cvNote")}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={contact.cvEn}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-lime px-5 py-2.5 font-mono text-sm font-medium text-[#0A0A0C] transition-opacity hover:opacity-90"
            >
              {t("downloadCvEn")} {downloadIcon}
            </a>
            <a
              href={contact.cvId}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-line px-5 py-2.5 font-mono text-sm text-ink transition-colors hover:border-lime hover:text-lime"
            >
              {t("downloadCvId")} {downloadIcon}
            </a>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16"
        >
          <h3 className="eyebrow mb-8">{t("latestExperience")}</h3>
          <ol className="border-l border-line pl-8">
            {workExperience.map((job, index) => (
              <li key={job.company} className={`relative ${index < workExperience.length - 1 ? "pb-10" : ""}`}>
                <span className="absolute left-[-36px] top-1.5 h-2 w-2 rounded-full bg-lime" aria-hidden="true" />
                <h4 className="font-medium text-ink">{job.title[language]}</h4>
                <p className="mt-1 font-mono text-xs text-muted">
                  {job.company} &middot; {job.year}
                </p>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">{job.short[language]}</p>
              </li>
            ))}
          </ol>
        </motion.div>
      </div>
    </section>
  );
}
