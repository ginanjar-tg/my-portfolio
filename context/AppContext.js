import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

const translations = {
  en: {
    home: "Home",
    about: "About",
    projects: "Projects",
    resume: "Resume",
    contact: "Contact",
    heroEyebrow: "Full-Stack Developer",
    heroIntro: "I'm a full-stack developer who builds web and desktop applications, from Laravel and Django backends to React and Next.js frontends, and takes them all the way to production, servers included.",
    ctaProjects: "View Projects",
    ctaResume: "Download CV",
    aboutTitle: "About Me",
    educationTitle: "Education",
    educationYears: "2019-2023",
    universityName: "Universitas Komputer Indonesia",
    universityMajor: "Informatics Engineering",
    aboutP1: "I've spent the last few years working as a full-stack developer across web and desktop projects. I've built features like AI-powered geolocation, shipped on tight schedules, and learned to pick up whatever stack a project needs.",
    aboutP2: "My job doesn't end when the code is done. I've also been responsible for keeping things running after launch, managing databases and Linux and Docker environments, handling deployments, and training the people who use the systems.",
    technicalSkillsTitle: "Technical Skills",
    languagesTitle: "Languages",
    projectsTitle: "Projects",
    workExperience: "Work Experience",
    personalProjects: "Personal Projects",
    fulltime: "FULL-TIME",
    internship: "INTERNSHIP",
    techStack: "Tech Stack",
    viewProject: "View Project",
    viewAllProjects: "View all projects on GitHub",
    resumeTitle: "Resume",
    resumeSub: "For the full details: roles, responsibilities, and dates.",
    cvNote: "Two versions of my CV are available; pick your language.",
    downloadCvEn: "Download CV [EN]",
    downloadCvId: "Unduh CV [ID]",
    latestExperience: "Latest Experience",
    contactTitle: "Let's Collaborate",
    contactSub: "For project inquiries or just to say hello.",
    email: "Email",
    phone: "Phone",
    linkedin: "LinkedIn",
    letsConnect: "Find me elsewhere",
    footerRights: "All rights reserved.",
    builtWith: "Built with Next.js",
  },
  id: {
    home: "Beranda",
    about: "Tentang",
    projects: "Proyek",
    resume: "Resume",
    contact: "Kontak",
    heroEyebrow: "Full-Stack Developer",
    heroIntro: "Saya full-stack developer yang membangun aplikasi web dan desktop, dari backend Laravel dan Django hingga frontend React dan Next.js, dan membawanya sampai produksi, termasuk server yang menjalankannya.",
    ctaProjects: "Lihat Proyek",
    ctaResume: "Unduh CV",
    aboutTitle: "Tentang Saya",
    educationTitle: "Pendidikan",
    educationYears: "2019-2023",
    universityName: "Universitas Komputer Indonesia",
    universityMajor: "Teknik Informatika",
    aboutP1: "Beberapa tahun terakhir saya bekerja sebagai full-stack developer di berbagai proyek web dan desktop. Saya pernah membangun fitur seperti geolokasi berbasis AI, mengerjakan proyek dengan tenggat yang ketat, dan terbiasa cepat beradaptasi dengan teknologi apa pun yang dibutuhkan proyek.",
    aboutP2: "Pekerjaan saya tidak selesai saat kode selesai. Saya juga bertanggung jawab menjaga sistem tetap berjalan setelah rilis, mengelola database serta lingkungan Linux dan Docker, menangani deployment, dan melatih pengguna yang memakai sistem tersebut.",
    technicalSkillsTitle: "Keahlian Teknis",
    languagesTitle: "Bahasa",
    projectsTitle: "Proyek",
    workExperience: "Pengalaman Kerja",
    personalProjects: "Proyek Pribadi",
    fulltime: "FULL-TIME",
    internship: "INTERNSHIP",
    techStack: "Teknologi",
    viewProject: "Lihat Proyek",
    viewAllProjects: "Lihat semua proyek di GitHub",
    resumeTitle: "Resume",
    resumeSub: "Untuk detail lengkap: peran, tanggung jawab, dan tanggal.",
    cvNote: "Tersedia dua versi CV; pilih bahasamu.",
    downloadCvEn: "Download CV [EN]",
    downloadCvId: "Unduh CV [ID]",
    latestExperience: "Pengalaman Terbaru",
    contactTitle: "Mari Berkolaborasi",
    contactSub: "Untuk keperluan proyek atau sekadar menyapa.",
    email: "Email",
    phone: "Telepon",
    linkedin: "LinkedIn",
    letsConnect: "Temukan saya di platform lain",
    footerRights: "Hak cipta dilindungi.",
    builtWith: "Dibuat dengan Next.js",
  },
  zh: {
    home: "首页",
    about: "关于",
    projects: "项目",
    resume: "简历",
    contact: "联系",
    heroEyebrow: "全栈开发工程师 · 万隆",
    heroIntro: "我是一名全栈开发工程师，负责从Laravel和Django后端到React和Next.js前端的Web和桌面应用开发，并一直负责到生产环境，包括运行它们的服务器。",
    ctaProjects: "查看项目",
    ctaResume: "下载简历",
    aboutTitle: "关于我",
    educationTitle: "教育背景",
    educationYears: "2019-2023",
    universityName: "Universitas Komputer Indonesia",
    universityMajor: "信息技术",
    aboutP1: "过去几年，我作为全栈开发工程师参与了各种Web和桌面项目。我构建过AI地理定位等功能，在紧迫的期限下按时交付，也能快速适应项目所需的任何技术。",
    aboutP2: "我的工作不会在代码完成后结束。我还负责系统上线后的稳定运行，管理数据库和Linux、Docker环境，处理部署工作，并培训使用这些系统的团队。",
    technicalSkillsTitle: "技术能力",
    languagesTitle: "语言",
    projectsTitle: "项目",
    workExperience: "工作经验",
    personalProjects: "个人项目",
    fulltime: "全职",
    internship: "实习",
    techStack: "技术栈",
    viewProject: "查看项目",
    viewAllProjects: "在GitHub上查看所有项目",
    resumeTitle: "简历",
    resumeSub: "完整详情：职位、职责和时间。",
    cvNote: "提供两个版本的简历；请选择你的语言。",
    downloadCvEn: "下载简历 [EN]",
    downloadCvId: "下载简历 [ID]",
    latestExperience: "最新经验",
    contactTitle: "让我们合作",
    contactSub: "项目咨询或打个招呼。",
    email: "邮箱",
    phone: "电话",
    linkedin: "领英",
    letsConnect: "其他平台",
    footerRights: "版权所有。",
    builtWith: "使用Next.js构建",
  },
};

export function AppProvider({ children }) {
  const isBrowser = typeof window !== "undefined";
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    if (isBrowser) {
      const saved = localStorage.getItem("language");
      if (saved) setLanguage(saved);
    }
  }, [isBrowser]);

  useEffect(() => {
    if (isBrowser) localStorage.setItem("language", language);
  }, [language, isBrowser]);

  const t = (key) => translations[language][key] || key;

  const changeLanguage = (lang) => setLanguage(lang);

  return (
    <AppContext.Provider value={{ language, t, changeLanguage }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
