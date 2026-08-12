import { motion } from "framer-motion";
import { useAppContext } from "../../context/AppContext";
import { contact, workExperience } from "../../data/content";
import SectionHeading from "./SectionHeading";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut", delay } },
});

export default function Resume() {
  const { t, language } = useAppContext();

  return (
    <section id="resume" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="03" title={t("resumeTitle")} />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <motion.div
            variants={fadeUp()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="panel flex flex-col p-8"
          >
            <div>
              <h3 className="eyebrow">{t("resumeSub")}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">{t("cvNote")}</p>
            </div>
            <div className="mt-auto space-y-3 pt-8">
              <a
                href={contact.cvEn}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-lg bg-lime px-6 py-3 font-mono text-sm font-medium text-[#0A0A0C] transition-opacity hover:opacity-90"
              >
                {t("downloadCvEn")} <span>&darr;</span>
              </a>
              <a
                href={contact.cvId}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-lg border border-line px-6 py-3 font-mono text-sm text-ink transition-colors hover:border-lime hover:text-lime"
              >
                {t("downloadCvId")} <span>&darr;</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp(0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="panel p-8"
          >
            <h3 className="eyebrow mb-8">{t("latestExperience")}</h3>
            <ol className="space-y-8">
              {workExperience.map((job, index) => (
                <li key={job.company} className="relative pl-6">
                  <span className="absolute left-0 top-1.5 h-2 w-2 rounded-full bg-lime" />
                  {index < workExperience.length - 1 && (
                    <span className="absolute bottom-[-1.5rem] left-[3px] top-4 w-px bg-line" aria-hidden="true" />
                  )}
                  <h4 className="font-medium text-ink">{job.title[language]}</h4>
                  <p className="mt-1 font-mono text-xs text-muted">
                    {job.company} &middot; {job.year}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{job.short[language]}</p>
                </li>
              ))}
            </ol>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
