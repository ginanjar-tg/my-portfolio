import Image from "next/image";
import { motion } from "framer-motion";
import { useAppContext } from "../../context/AppContext";
import { workExperience, personalProjects, contact } from "../../data/content";
import SectionHeading from "./SectionHeading";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Projects() {
  const { t, language } = useAppContext();

  return (
    <section id="projects" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="02" title={t("projectsTitle")} />

        <h3 className="eyebrow mb-6 mt-16">{t("workExperience")}</h3>
        <div className="space-y-4">
          {workExperience.map((job) => (
            <motion.article
              key={job.company}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="panel group p-6 transition-colors hover:border-lime/60"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h4 className="font-display text-xl font-semibold">{job.title[language]}</h4>
                <div className="flex items-center gap-3">
                  <span className={`chip ${job.type === "fulltime" ? "border-lime/40 text-lime" : ""}`}>
                    {t(job.type)}
                  </span>
                  <span className="font-mono text-xs text-muted">{job.year}</span>
                </div>
              </div>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
                {job.description[language]}
              </p>
              <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                {Array.isArray(job.techStack) &&
                  job.techStack.map((tech) => (
                    <span key={tech} className="font-mono text-xs text-muted">
                      {tech}
                    </span>
                  ))}
              </div>
              <p className="mt-5 border-t border-line pt-4 font-mono text-xs text-lime">
                {job.company}
              </p>
            </motion.article>
          ))}
        </div>

        <h3 className="eyebrow mb-6 mt-20">{t("personalProjects")}</h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {personalProjects.map((project) => (
            <motion.article
              key={project.title.en}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="panel group flex flex-col overflow-hidden transition-colors hover:border-lime/60"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title[language]}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h4 className="font-display text-lg font-semibold">{project.title[language]}</h4>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {project.description[language]}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="chip">
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1 font-mono text-xs text-lime hover:underline"
                  >
                    {t("viewProject")} &nearr;
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm text-muted transition-colors hover:text-lime"
          >
            [github.com/ginanjar-tg] {t("viewAllProjects")}
          </a>
        </div>
      </div>
    </section>
  );
}
