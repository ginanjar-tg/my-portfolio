import { createContext, useContext, useState, useEffect } from 'react';

// Create context
const AppContext = createContext();

// Language translations
const translations = {
  en: {
    // Navigation
    home: "Home",
    about: "About",
    skills: "Languages",
    projects: "Projects",
    contact: "Contact",
    
    // Home section
    greeting: "Hello, I'm",
    tagline: "Full Stack Developer",
    basedIn: "Based in Bandung, Indonesia",
    
    // About section
    aboutTitle: "About Me",
    aboutMe: "Hi there! I'm a passionate Full Stack Developer with a strong focus on creating efficient, scalable, and user-friendly web applications. With expertise in both frontend and backend technologies, I love turning complex problems into simple, beautiful, and intuitive designs.",
    aboutMe2: "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a cup of coffee while reading tech blogs.",
    skillsTitle: "My Skills",
    
    // Projects section
    projectsTitle: "My Projects",
    workExperience: "Work Experience",
    personalProjects: "Personal Projects",
    viewProject: "View Project",
    techStack: "Tech Stack",
    viewAllProjects: "View All Projects on GitHub",
    
    // Resume section
    resume: "My Resume",
    downloadCV: "Download my CV to learn more details about me.",
    experienceSummary: "Latest Experience Summary",
    present: "Present",
    webMobileDev: "Web and mobile application development for various clients",
    backendIntern: "Backend Developer Intern",
    apiDevelopment: "API development and system integration",
    downloadCVInfo: "Download CV for complete information",
    
    // Contact section
    contactTitle: "Get In Touch",
    contactDesc: "Feel free to reach out if you're looking for a developer, have a question, or just want to connect.",
    nameLabel: "Your Name",
    emailLabel: "Your Email",
    messageLabel: "Your Message",
    submitButton: "Send Message",
    letsCollaborate: "Let's Collaborate!",
    contactMe: "Contact me for project inquiries or just to say hello.",
    letsConnect: "Let's Connect!",
    
    // Footer
    madeWith: "Made with",
    inBandung: "in Bandung, Indonesia",
    
    // Dark mode
    darkMode: "Dark Mode",
    lightMode: "Light Mode"
  },
  id: {
    // Navigation
    home: "Beranda",
    about: "Tentang",
    skills: "Bahasa",
    projects: "Proyek",
    contact: "Kontak",
    
    // Home section
    greeting: "Halo, Saya",
    tagline: "Full Stack Developer",
    basedIn: "Berdomisili di Bandung, Indonesia",
    
    // About section
    aboutTitle: "Tentang Saya",
    aboutMe: "Hai! Saya adalah Full Stack Developer yang bersemangat dengan fokus kuat pada pembuatan aplikasi web yang efisien, dapat diskalakan, dan ramah pengguna. Dengan keahlian dalam teknologi frontend dan backend, saya suka mengubah masalah kompleks menjadi desain yang sederhana, indah, dan intuitif.",
    aboutMe2: "Ketika tidak sedang coding, Anda dapat menemukan saya mengeksplorasi teknologi baru, berkontribusi pada proyek open-source, atau menikmati secangkir kopi sambil membaca blog teknologi.",
    skillsTitle: "Keahlian Saya",
    
    // Projects section
    projectsTitle: "Proyek Saya",
    workExperience: "Pengalaman Kerja",
    personalProjects: "Proyek Pribadi",
    viewProject: "Lihat Proyek",
    techStack: "Teknologi",
    viewAllProjects: "Lihat Semua Proyek di GitHub",
    
    // Resume section
    resume: "Resume Saya",
    downloadCV: "Download CV untuk mengetahui lebih detail tentang saya.",
    experienceSummary: "Ringkasan Pengalaman Terbaru",
    present: "Sekarang",
    webMobileDev: "Pengembangan aplikasi web dan mobile untuk berbagai klien",
    backendIntern: "Backend Developer Intern",
    apiDevelopment: "Pengembangan API dan integrasi sistem",
    downloadCVInfo: "Download CV untuk informasi lengkap",
    
    // Contact section
    contactTitle: "Hubungi Saya",
    contactDesc: "Jangan ragu untuk menghubungi jika Anda mencari pengembang, memiliki pertanyaan, atau hanya ingin terhubung.",
    nameLabel: "Nama Anda",
    emailLabel: "Email Anda",
    messageLabel: "Pesan Anda",
    submitButton: "Kirim Pesan",
    letsCollaborate: "Mari Berkolaborasi!",
    contactMe: "Hubungi saya untuk keperluan project atau hanya sekedar untuk menyapa.",
    letsConnect: "Mari Terhubung!",
    
    // Footer
    madeWith: "Dibuat dengan",
    inBandung: "di Bandung, Indonesia",
    
    // Dark mode
    darkMode: "Mode Gelap",
    lightMode: "Mode Terang"
  },
  zh: {
    // Navigation - Basic Mandarin
    home: "首页",
    about: "关于",
    skills: "语言",
    projects: "项目",
    contact: "联系",
    
    // Home section
    greeting: "你好，我是",
    tagline: "全栈开发工程师",
    basedIn: "印度尼西亚 万隆",
    
    // About section
    aboutTitle: "关于我",
    aboutMe: "你好！我是一位热情的全栈开发工程师，专注于创建高效、可扩展和用户友好的网络应用。凭借前端和后端技术的专业知识，我喜欢将复杂问题转化为简单、美观和直观的设计。",
    aboutMe2: "当我不编程时，你可以发现我在探索新技术，为开源项目做贡献，或者一边喝咖啡一边阅读技术博客。",
    skillsTitle: "我的技能",
    
    // Projects section
    projectsTitle: "我的项目",
    workExperience: "工作经验",
    personalProjects: "个人项目",
    viewProject: "查看项目",
    techStack: "技术栈",
    viewAllProjects: "在GitHub上查看所有项目",
    
    // Resume section
    resume: "我的简历",
    downloadCV: "下载我的简历以了解我的详细经历。",
    experienceSummary: "最新经验概述",
    present: "至今",
    webMobileDev: "为各种客户开发网络和移动应用程序",
    backendIntern: "后端开发实习生",
    apiDevelopment: "API开发和系统集成",
    downloadCVInfo: "下载简历获取完整信息",
    
    // Contact section
    contactTitle: "联系我",
    contactDesc: "如果您正在寻找开发人员，有问题，或只是想交流，请随时联系我。",
    nameLabel: "您的姓名",
    emailLabel: "您的邮箱",
    messageLabel: "您的留言",
    submitButton: "发送留言",
    letsCollaborate: "让我们合作！",
    contactMe: "联系我进行项目咨询或只是打个招呼。",
    letsConnect: "让我们连接！",
    
    // Footer
    madeWith: "制作于",
    inBandung: "印度尼西亚 万隆",
    
    // Dark mode
    darkMode: "暗黑模式",
    lightMode: "明亮模式"
  }
};

export function AppProvider({ children }) {
  // Check if we're in a browser environment
  const isBrowser = typeof window !== 'undefined';
  
  // Initialize with default language first to avoid hydration errors
  const [language, setLanguage] = useState('en');
  
  // Then update language from localStorage after hydration
  useEffect(() => {
    if (isBrowser) {
      const savedLanguage = localStorage.getItem('language');
      if (savedLanguage) {
        setLanguage(savedLanguage);
      }
    }
  }, [isBrowser]);
  
  const [darkMode, setDarkMode] = useState(() => {
    if (isBrowser) {
      const savedTheme = localStorage.getItem('darkMode');
      return savedTheme === 'true' || false;
    }
    return false;
  });

  // Initial dark mode setup based on saved preferences or system preference
  useEffect(() => {
    if (isBrowser) {
      const savedDarkMode = localStorage.getItem('darkMode');
      if (savedDarkMode === 'true') {
        setDarkMode(true);
        document.documentElement.classList.add('dark');
      } else if (savedDarkMode === 'false') {
        setDarkMode(false);
        document.documentElement.classList.remove('dark');
      } else {
        // If no saved preference, check system preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setDarkMode(prefersDark);
        if (prefersDark) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
        // Save the initial preference
        localStorage.setItem('darkMode', prefersDark.toString());
      }
    }
  }, [isBrowser]);

  // Update localStorage when preferences change
  useEffect(() => {
    if (isBrowser) {
      localStorage.setItem('language', language);
      localStorage.setItem('darkMode', darkMode.toString());
      
      // Apply dark mode to the document
      if (darkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      
      // Force a repaint to ensure CSS variables are applied
      document.body.style.transition = 'background-color 0.3s ease';
      document.body.style.backgroundColor = darkMode ? 'var(--bg-color)' : 'var(--bg-color)';
    }
  }, [language, darkMode, isBrowser]);

  // Translation helper function
  const t = (key) => {
    return translations[language][key] || key;
  };

  // Toggle theme function
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    
    // Immediately apply the change to prevent flicker
    if (isBrowser) {
      if (newDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      localStorage.setItem('darkMode', newDarkMode.toString());
    }
  };

  // Change language function
  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  // Context value
  const contextValue = {
    language,
    darkMode,
    t,
    toggleDarkMode,
    changeLanguage
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}

// Custom hook for using the context
export function useAppContext() {
  return useContext(AppContext);
}
