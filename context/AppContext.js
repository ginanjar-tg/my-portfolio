import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

const translations = {
  en: {
    home: "Home",
    about: "About",
    projects: "Projects",
    resume: "Resume",
    contact: "Contact",
    heroEyebrow: "Full-Stack Developer · Bandung",
    heroIntro: "I build fast, reliable web and desktop applications — from Laravel and Django to Next.js and WPF — and own the infrastructure that runs them.",
    ctaProjects: "View Projects",
    ctaResume: "Download CV",
    aboutTitle: "About Me",
    educationTitle: "Education",
    educationYears: "2019 — 2023",
    universityName: "Universitas Komputer Indonesia",
    universityMajor: "Informatics Engineering",
    aboutP1: "I'm a full-stack developer who adapts quickly to whatever a project needs — I've built web and desktop applications, integrated AI-driven geolocation features, and shipped on tight deadlines.",
    aboutP2: "Beyond writing code, I take full responsibility for the stack that runs it: database management, Linux and Docker environments, and production deployments. I also train teams to operate the systems I build.",
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
    resumeSub: "For the full details — roles, responsibilities, and dates.",
    cvNote: "Two versions of my CV are available — pick your language.",
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
    heroEyebrow: "Full-Stack Developer · Bandung",
    heroIntro: "Saya membangun aplikasi web dan desktop yang cepat dan andal — dari Laravel dan Django hingga Next.js dan WPF — serta mengelola infrastruktur yang menjalankannya.",
    ctaProjects: "Lihat Proyek",
    ctaResume: "Unduh CV",
    aboutTitle: "Tentang Saya",
    educationTitle: "Pendidikan",
    educationYears: "2019 — 2023",
    universityName: "Universitas Komputer Indonesia",
    universityMajor: "Teknik Informatika",
    aboutP1: "Saya full-stack developer yang cepat beradaptasi dengan teknologi apa pun yang dibutuhkan proyek — pernah membangun aplikasi web dan desktop, mengintegrasikan fitur geolokasi berbasis AI, dan mengejar tenggat yang ketat.",
    aboutP2: "Selain menulis kode, saya memegang tanggung jawab penuh atas infrastruktur yang menjalankannya: manajemen database, lingkungan Linux dan Docker, serta deployment produksi. Saya juga melatih tim untuk mengoperasikan sistem yang saya bangun.",
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
    resumeSub: "Untuk detail lengkap — peran, tanggung jawab, dan tanggal.",
    cvNote: "Tersedia dua versi CV — pilih bahasamu.",
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
    heroIntro: "我构建快速可靠的Web和桌面应用程序——从Laravel和Django到Next.js和WPF——并负责运行这些应用的基础设施。",
    ctaProjects: "查看项目",
    ctaResume: "下载简历",
    aboutTitle: "关于我",
    educationTitle: "教育背景",
    educationYears: "2019 — 2023",
    universityName: "Universitas Komputer Indonesia",
    universityMajor: "信息技术",
    aboutP1: "我是一名全栈开发工程师，能快速适应项目的各种技术需求——曾构建Web和桌面应用、集成AI地理定位功能，并在紧迫的期限内交付。",
    aboutP2: "除了编写代码，我还全面负责运行系统的基础设施：数据库管理、Linux和Docker环境以及生产部署。我也会培训团队使用我构建的系统。",
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
    resumeSub: "完整详情——职位、职责和时间。",
    cvNote: "提供两个版本的简历——请选择你的语言。",
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
