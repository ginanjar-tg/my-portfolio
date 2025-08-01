import Image from "next/image";
import ginanjarPic from "../../public/webp/ginanjar.webp";
import pixelPic from "../../public/webp/pixel.webp";
import isekaiStorePic from "../../public/webp/isekaistore.webp";
import jajanelingPic from "../../public/webp/jajaneling.webp";
import sintikaPic from "../../public/webp/sintika.webp";
import katakanSajaPic from "../../public/webp/katakan-saja.webp";
import shunleiPic from "../../public/webp/shunlei.webp";
import coskuyPic from "../../public/webp/coskuy.webp";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useAppContext } from "../../context/AppContext";
import ThemeLanguageControls from "./ThemeLanguageControls";

export default function Contents() {
  // Access the app context for language and theme
  const { t, darkMode, language } = useAppContext();
  
  // State untuk animasi mouse follower
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // State untuk mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Setup animasi untuk section yang di-scroll
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  // Fungsi untuk melacak posisi mouse
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Skills array untuk ditampilkan di section about
  const skills = [
    { name: "PHP/Laravel", color: "bg-red-500 text-white" },
    { name: "Python/Django", color: "bg-green-800 text-white" },
    { name: "JavaScript/Next.js", color: "bg-black text-white" },
    { name: "C#/WPF", color: "bg-purple-500 text-white" },
    { name: "PostgreSQL & MySQL", color: "bg-blue-700 text-white" },
    { name: "Git", color: "bg-gray-900 text-white" },
    { name: "Tailwind", color: "bg-sky-500 text-white" },
    { name: "Bootstrap", color: "bg-indigo-500 text-white" },
    { name: "AWS", color: "bg-orange-500 text-white" },
    { name: "Docker", color: "bg-blue-900 text-white" },
    { name: "Ansible", color: "bg-red-500 text-white" },
    { name: "Jenkins", color: "bg-blue-400 text-white" },
  ];
  
  // Project data separated by category
   const workExperience = [
    {
      title: {
        id: "Fullstack Developer",
        en: "Fullstack Developer",
        zh: "全栈开发工程师"
      },
      description: {
        id: "Berawal sebagai full-stack developer, saya bekerja dengan Laravel, PostgreSQL, MySQL, Nginx, dan Docker. Kemudian beralih ke pengembangan aplikasi desktop dengan WPF (C#), sebelum akhirnya fokus pada Python (Django) untuk fitur geolokasi berbasis AI.",
        en: "Started as a full-stack developer, working with tools like Laravel, PostgreSQL, MySQL, Nginx, and Docker. Transitioned to WPF (C#) for desktop apps before moving to Python (Django) to develop AI-driven geolocation features.",
        zh: "最初担任全栈开发，使用Laravel、PostgreSQL、MySQL、Nginx和Docker等工具。随后转向WPF (C#) 桌面应用开发，最后专注于用Python (Django) 开发AI地理定位功能。"
      },
      techStack: ["Laravel", "PostgreSQL", "MySQL", "Nginx", "Docker", "WPF (C#)", "Python", "Django", "AI Geolocation"],
      company: "PT. Maxxima Innovative Engineering",
      year: "2023-2026",
      type: "fulltime"
    },
    {
      title: {
        id: "Web Developer",
        en: "Web Developer",
        zh: "Web开发"
      },
      description: {
        id: "Berperan sebagai Web Developer Intern, saya merancang dan membangun RESTful API menggunakan Lumen (Laravel). Selain itu, saya mengembangkan antarmuka website yang interaktif dan responsif dengan ReactJS untuk mendukung kebutuhan bisnis perusahaan.",
        en: "As a Web Developer Intern, I designed and built RESTful APIs using Lumen (Laravel). Additionally, I developed interactive and responsive website interfaces with ReactJS to support the company's business needs.",
        zh: "作为Web开发实习生，我使用Lumen（Laravel）设计并开发RESTful API，并利用ReactJS开发了交互性强且响应迅速的网站界面，以支持公司的业务需求。"
      },
      techStack: ["Lumen", "Laravel", "ReactJS"],
      company: "PT. Mediatama Kreasi Informatika",
      year: "2022-2022",
      type: "internship"
    },
    {
      title: {
        id: "IT Support",
        en: "IT Support",
        zh: "IT支持"
      },
      description: {
        id: "Sebagai IT Support Intern, saya bertanggung jawab memastikan kelancaran operasional IT di lingkungan kantor, mulai dari instalasi perangkat lunak hingga pemeliharaan perangkat keras. Saya juga menangani troubleshooting berbagai masalah komputer untuk mendukung produktivitas karyawan.",
        en: "As an IT Support Intern, I was responsible for ensuring smooth IT operations in the office environment, from software installation to hardware maintenance. I also handled troubleshooting various computer issues to support employee productivity.",
        zh: "作为IT支持实习生，我负责办公室IT运维，包括软件安装和硬件维护，并处理各类计算机故障，保障员工的工作效率。"
      },
      techStack: null,
      company: "Bank Syariah Indonesia",
      year: "2018-2018",
      type: "internship"
    }
  ];

  const personalProjects = [
    {
      title: {
        id: "Isekai Store",
        en: "Isekai Store",
        zh: "Isekai Store"
      },
      description: {
        id: "Landing page untuk marketplace bertema fantasi.",
        en: "Landing page for a fantasy-inspired marketplace.",
        zh: "以奇幻为主题的市场落地页。"
      },
      techStack: ["Next.js", "TailwindCSS"],
      image: isekaiStorePic,
      link: "https://isekaistore.vercel.app/"
    },
    {
      title: {
        id: "Sintika",
        en: "Sintika",
        zh: "Sintika"
      },
      description: {
        id: "Landing page untuk grup Vtuber Sintika.",
        en: "Landing page for the Sintika Vtuber group.",
        zh: "Vtuber团体Sintika的落地页。"
      },
      techStack: ["Next.js", "TailwindCSS"],
      image: sintikaPic,
      link: "https://sintika.vercel.app/"
    },
    {
      title: {
        id: "Katakan Saja",
        en: "Katakan Saja",
        zh: "Katakan Saja"
      },
      description: {
        id: "Landing page untuk jasa curhat yang aman, nyaman, dan terjangkau.",
        en: "Landing page for a safe, comfortable, and affordable sharing service.",
        zh: "一个安全、舒适且实惠的倾诉服务落地页。"
      },
      techStack: ["Next.js", "TailwindCSS", "shadcn"],
      image: katakanSajaPic,
      link: "https://katakan-saja.vercel.app/"
    },
    {
      title: {
        id: "Shunlei",
        en: "Shunlei",
        zh: "Shunlei"
      },
      description: {
        id: "Landing page perusahaan software untuk kultur jejepangan di Indonesia (cosplayer, idol, itasha).",
        en: "Landing page for a software company focused on Japanese pop culture in Indonesia (cosplayer, idol, itasha).",
        zh: "专注于印尼日本流行文化（coser、偶像、痛车）的软件公司落地页。"
      },
      techStack: ["Next.js", "TailwindCSS"],
      image: shunleiPic,
      link: "https://www.shunlei.my.id/"
    },
    {
      title: {
        id: "Coskuy",
        en: "Coskuy",
        zh: "Coskuy"
      },
      description: {
        id: "Landing page aplikasi android to do app untuk cosplayer.",
        en: "Landing page for an Android to-do app for cosplayers.",
        zh: "为coser设计的安卓待办应用落地页。"
      },
      techStack: ["Next.js", "TailwindCSS"],
      image: coskuyPic,
      link: "https://www.coskuy.my.id/"
    },
    {
      title: {
        id: "Jajaneling",
        en: "Jajaneling",
        zh: "Jajaneling"
      },
      description: {
        id: "Sebuah platform untuk mempermudah transaksi antara pedagang kaki lima dan pembeli. Proyek skripsi, tidak ada web publik.",
        en: "A platform to simplify transactions between street vendors and buyers. My thesis project, no public web.",
        zh: "一个用于简化街头小贩和买家交易的平台。我的毕业设计，无公开网页。"
      },
      techStack: ["PHP Native"],
      image: jajanelingPic,
      link: null
    }
  ];

  return (
    <div className="overflow-x-hidden relative bg-bg-color text-text-color transition-colors duration-300">
      {/* Fixed Header/Navbar with Language and Theme Controls */}
      <header className="fixed top-0 left-0 w-full bg-gray-900 z-50 shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            {/* Mobile hamburger moved to the left */}
            <div className="md:hidden flex items-center">
              <button
                className="text-white focus:outline-none"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
            <a href="#" className="text-xl font-bold gradient-text">Ginanjar<span className="text-secondary-color">TG</span></a>
          </div>
          
          {/* Desktop nav */}
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex">
              <ul className="flex gap-6">
                <li><a href="#home" className="text-white hover:text-primary-color transition-colors">{t('home')}</a></li>
                <li><a href="#about" className="text-white hover:text-primary-color transition-colors">{t('about')}</a></li>
                <li><a href="#projects" className="text-white hover:text-primary-color transition-colors">{t('projects')}</a></li>
                <li><a href="#contact" className="text-white hover:text-primary-color transition-colors">{t('contact')}</a></li>
              </ul>
            </nav>

            <ThemeLanguageControls className="ml-4" />
          </div>
        </div>

        {/* Mobile Drawer/Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-black/70 flex justify-end">
            <div className="w-3/4 max-w-xs bg-gray-900 h-full shadow-lg flex flex-col p-6 animate-slide-in">
              <div className="flex justify-between items-center mb-8">
                <span className="text-xl font-bold gradient-text">Menu</span>
                <button
                  className="text-white focus:outline-none"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <nav>
                <ul className="flex flex-col gap-6">
                  <li><a href="#home" className="text-white text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>{t('home')}</a></li>
                  <li><a href="#about" className="text-white text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>{t('about')}</a></li>
                  <li><a href="#projects" className="text-white text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>{t('projects')}</a></li>
                  <li><a href="#contact" className="text-white text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>{t('contact')}</a></li>
                </ul>
              </nav>
            </div>
            <div className="flex-1" onClick={() => setMobileMenuOpen(false)} />
          </div>
        )}
      </header>

      {/* Mouse follower effect */}
      
      {/* Mouse follower effect - only shown on desktop */}
      <div 
        className="mouse-follower hidden md:block" 
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      />
      
      <section id="home" className="min-h-screen flex items-center justify-center bg-[url('/hero-bg.svg')] bg-cover bg-center relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 to-blue-900/70 z-0"></div>
        
        {/* Animated floating circles */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/20 rounded-full filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500/20 rounded-full filter blur-xl animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-40 left-1/3 w-24 h-24 bg-teal-500/20 rounded-full filter blur-xl animate-blob animation-delay-6000"></div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1, 
            ease: "easeOut",
            staggerChildren: 0.2 
          }}
          className="text-center z-10 px-4 relative"
        >
          <div className="relative">
            <div className="h-40 w-40 md:h-64 md:w-64 relative mx-auto mb-8 shine-effect floating">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-color to-secondary-color p-1">
                <div className="absolute inset-0 rounded-full bg-gray-900 flex items-center justify-center">
                  <Image
                    src={ginanjarPic}
                    alt="Ginanjar&apos;s Photo"
                    fill
                    sizes="(max-width: 768px) 160px, 256px"
                    style={{ objectFit: 'cover' }}
                    className="rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-poppins text-4xl md:text-6xl text-white font-bold mb-4"
          >
            <span className="gradient-text">Ginanjar Tubagus Gumilar</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8"
          >
            <p className="font-poppins text-xl md:text-2xl text-gray-200 bg-gray-800/50 px-4 py-2 rounded-full">
              <span className="text-secondary-color">&#60;</span> Full Stack Developer <span className="text-secondary-color">&#47;&#62;</span>
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex gap-4 justify-center mt-8"
          >
            <a href="#about" className="btn glass-card text-white px-6 py-3 rounded-full hover:bg-white/10 transition duration-300 flex items-center gap-2">
              {t('about')}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
            <a href="#projects" className="btn bg-secondary-color hover:bg-secondary-color/80 text-white px-6 py-3 rounded-full transition duration-300 flex items-center gap-2">
              {t('projects')}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </section>

      <section id="about" className="min-h-screen relative py-20 bg-bg-secondary transition-colors duration-300">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5 pattern-grid z-0"></div>
        
        <div className="container mx-auto px-4 py-16 relative z-20">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="flex flex-col items-center"
          >
            <h2 className="md:pb-16 pb-8 font-bold text-3xl md:text-5xl mb-6 text-text-color text-center relative inline-block">
              <span className="relative z-10">{t('aboutTitle')}</span>
              <div className="absolute -bottom-2 left-0 w-full h-3 bg-secondary-color/30 rounded-lg -z-10 transform -rotate-1"></div>
            </h2>
            
            {/* <p className="text-text-secondary max-w-lg text-center mb-16">{t('aboutMe')}</p> */}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="glass-card bg-white/90 p-8 rounded-xl shadow-xl"
              >
                <div className="flex flex-col h-full">
                  <h3 className="text-2xl font-bold text-text-color mb-4 flex items-center transition-colors">
                    <span className="text-primary-color mr-2">👨‍💻</span> {language === 'id' ? 'Profil Singkat' : language === 'zh' ? '简介' : 'Brief Profile'}
                  </h3>
                  <p className="text-base leading-relaxed text-text-secondary mb-6 transition-colors">
                    {language === 'id' ? 'Sebagai Full Stack Developer, saya cepat beradaptasi dengan berbagai teknologi untuk memenuhi kebutuhan project dengan waktu delivery yang tinggi. Berpengalaman dalam pengembangan aplikasi web dan desktop, dengan fokus pada integrasi teknologi geolokasi dan AI.' : language === 'zh' ? '作为全栈开发工程师，我能够快速适应各种技术，满足高交付时间的项目需求。在Web和桌面应用开发方面经验丰富，专注于地理定位技术和人工智能集成。' : 'As a Full Stack Developer, I quickly adapt to various technologies to meet project needs with high delivery times. Experienced in web and desktop application development, with a focus on geolocation technology and AI integration.'}
                  </p>
                  <p className="text-base leading-relaxed text-text-secondary mb-6 transition-colors">
                    {language === 'id' ? 'Saya juga sering bertanggung jawab dalam mengelola proses deployment produksi dan melatih pengguna untuk mengoperasikan sistem yang kompleks.' : language === 'zh' ? '我还经常负责管理生产部署过程，并培训用户操作复杂系统。' : 'I am also often responsible for managing production deployment processes and training users to operate complex systems.'}
                  </p>
                  
                  <div className="mt-auto">
                    <h4 className="text-lg font-semibold text-text-color mb-3">
                      {language === 'id' ? 'Pendidikan:' : language === 'zh' ? '教育背景:' : 'Education:'}
                    </h4>
                    <div className="bg-card-bg border border-card-border p-4 rounded-lg transition-colors">
                      <p className="font-medium">
                        {language === 'id' ? 'Universitas Komputer Indonesia' : language === 'zh' ? '印尼计算机大学' : 'Universitas Komputer Indonesia'}
                      </p>
                      <p className="text-text-secondary">
                        {language === 'id' ? 'Teknik Informatika' : language === 'zh' ? '信息技术' : 'Informatics Engineering'}
                      </p>
                      <p className="text-text-secondary text-sm">2019-2023</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col"
              >
                <div className="flex justify-center mb-6">
                  <div className="h-48 w-48 relative overflow-hidden rounded-xl shadow-lg shine-effect">
                    <Image
                      src={pixelPic}
                      alt="Ginanjar&apos;s Pixel Photo"
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-xl transform transition duration-700 hover:scale-110"
                    />
                  </div>
                </div>
                
                <div className="glass-card bg-white/90 p-6 rounded-xl shadow-xl">
                  <h3 className="text-xl font-bold text-text-color mb-4 flex items-center transition-colors">
                    <span className="text-primary-color mr-2">🛠️</span> {language === 'id' ? 'Keahlian Teknis' : language === 'zh' ? '技术能力' : 'Technical Skills'}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {skills.map((skill, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 * index }}
                        viewport={{ once: true }}
                        className={`skill-pill ${skill.color}`}
                      >
                        {skill.name}
                      </motion.span>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-bold text-text-color mb-4 flex items-center transition-colors">
                    <span className="text-primary-color mr-2">🌐</span> {t('skills')}
                  </h3>
                  
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">Indonesia</span>
                        <span>Native</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-primary-color h-2 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">English</span>
                        <span>Fluent</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-primary-color h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">中文 (Mandarin)</span>
                        <span>Basic</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-primary-color h-2 rounded-full" style={{ width: '30%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <section id="projects" className="min-h-screen relative py-20 overflow-hidden bg-gradient-to-b from-gray-900 to-blue-900 z-10 w-full">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-blue-500/10 to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full filter blur-3xl"></div>
        
        <div className="container mx-auto px-4 py-16 relative z-20">
          <motion.div
            className="projects-motion-container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="w-full text-center md:text-left font-bold text-3xl md:text-5xl mb-6 md:mb-16 text-white relative inline-block mx-auto md:mx-0">
              <span className="relative z-10">{t('projectsTitle')}</span>
              <div className="absolute -bottom-2 left-0 w-full h-3 bg-primary-color/30 rounded-lg -z-10 transform -rotate-1"></div>
            </h2>
            
            {/* Work Experience Section */}
            <div className="mb-20">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-secondary-color" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>{t('workExperience')}</span>
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                {workExperience.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="glass-card bg-white/5 backdrop-blur-md p-6 rounded-xl hover:bg-white/10 transition-all duration-300 border border-white/10 h-full flex flex-col"
                  >
                    <div className="mb-3 flex items-center justify-between">
                      <h4 className="text-xl font-bold text-white">{project.title[language]}</h4>
                      <div className="flex items-center">
                        {project.type && (
                          <span className={`text-xs px-2 py-1 rounded mr-2 ${project.type === 'fulltime' ? 'bg-green-600' : 'bg-blue-600'}`}>
                            {project.type === 'fulltime' ? t('fulltime') : t('internship')}
                          </span>
                        )}
                        <span className="text-sm text-gray-300">{project.year}</span>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4 flex-grow">{project.description[language]}</p>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">{t('techStack')}:</p>
                      {Array.isArray(project.techStack) && project.techStack.length > 0 ? (
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech, techIndex) => (
                            <span key={techIndex} className="bg-blue-800 text-white text-xs px-2 py-1 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <span className="text-gray-500 text-xs">-</span>
                      )}
                      <div className="mt-4 pt-4 border-t border-white/10">
                        <p className="text-secondary-color font-medium">{project.company}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Personal Projects Section */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-secondary-color" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <span>{t('personalProjects')}</span>
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                {personalProjects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="glass-card bg-white/5 backdrop-blur-md p-6 rounded-xl hover:bg-white/10 transition-all duration-300 border border-white/10 h-full flex flex-col"
                  >
                    <div className="relative h-40 mb-4 overflow-hidden rounded-lg">
                      <Image
                        src={project.image}
                        alt={project.title[language]}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">{project.title[language]}</h4>
                    <p className="text-gray-300 mb-4 flex-grow">{project.description[language]}</p>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">{t('techStack')}:</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.techStack.map((tech, techIndex) => (
                          <span key={techIndex} className="bg-blue-800 text-white text-xs px-2 py-1 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                      {project.link ? (
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-secondary-color hover:text-white transition-colors"
                        >
                          {t('viewProject')}
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </a>
                      ) : null}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <motion.a
                href="https://github.com/ginanjar-tg" 
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-6 rounded-full transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                {t('viewAllProjects')}
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

    <section id="resume" className="min-h-screen relative py-20 bg-bg-secondary overflow-hidden transition-colors duration-300">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary-color/5 transform skew-x-12"></div>
      <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-500/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-text-color transition-colors">
            {language === 'id' ? 'Resume' : language === 'zh' ? '简历' : 'Resume'}
          </h2>
          <div className="w-20 h-1 bg-primary-color mx-auto mb-8 rounded-full"></div>
          
          <p className="text-center text-text-secondary max-w-3xl mx-auto mb-12 transition-colors">
            {language === 'id' ? 'Download CV untuk mengetahui lebih detail tentang saya.' : language === 'zh' ? '下载我的简历以了解我的详细经历。' : 'Download my CV to learn more details about me.'}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto mb-12">
            {/* Left Column - Quote and Download Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="glass-card bg-card-bg border border-card-border rounded-2xl shadow-xl overflow-hidden relative transition-colors flex flex-col justify-between h-full"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-primary-color"></div>
              <div className="text-center p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold mb-6 text-text-color transition-colors italic">
                  {language === 'id' ? '"Tak kenal maka tak sayang"' : language === 'zh' ? '“每一段联系，皆始于介绍。”' : '"Every connection starts with an introduction."'}
                </h3>
                <p className="text-text-secondary text-sm md:text-base transition-colors mb-8">
                  {language === 'id' ? 'Download CV saya untuk mengetahui lebih detail tentang saya.' : 
                   language === 'zh' ? '下载我的简历以了解我的详细经历。' : 
                   'Download my CV to learn more details about me.'}
                </p>
                
                <div className="flex flex-col space-y-3">
                  <a
                    href="https://drive.google.com/file/d/110AfyqkpM6qXNIe1q6RIy6mWylz2dUpJ/view?usp=sharing"
                    className="inline-flex items-center justify-center gap-2 font-bold px-4 py-3 text-sm md:text-base text-white bg-primary-color rounded-full hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300 ease-in-out"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Download CV [ENG]
                  </a>
                  <a
                    href="https://drive.google.com/file/d/1UYpMkSd-BirvImNBxJU59b0coKGNjzT7/view?usp=sharing"
                    className="inline-flex items-center justify-center gap-2 font-bold px-4 py-3 text-sm md:text-base text-white bg-secondary-color rounded-full hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300 ease-in-out"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Unduh CV [ID]
                  </a>
                </div>
              </div>
            </motion.div>
            
            {/* Right Column - Experience Summary */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-card bg-card-bg border border-card-border rounded-2xl shadow-xl overflow-hidden relative transition-colors"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-primary-color"></div>
              <div className="text-left p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold mb-6 text-text-color flex items-center transition-colors">
                  <span className="text-primary-color mr-3">📃</span> 
                  {language === 'id' ? 'Ringkasan Pengalaman Terbaru' : language === 'zh' ? '最新经验概述' : 'Latest Experience Summary'}
                </h3>
                
                <div className="space-y-6">
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-primary-color"></div>
                    <h4 className="text-base md:text-lg font-semibold text-text-color transition-colors">{t('tagline')}</h4>
                    <p className="text-sm md:text-base text-text-secondary transition-colors">{language === 'id' ? '2023 - 2026' : language === 'zh' ? '2023 - 2026' : '2023 - 2026'}</p>
                    <p className="text-sm md:text-base text-text-secondary mt-2 transition-colors">
                      {language === 'id' ? 'Pengembangan aplikasi web dan desktop untuk berbagai klien' : 
                       language === 'zh' ? '为各种客户开发网络和桌面应用程序' : 
                       'Web and desktop application development for various clients'}
                    </p>
                  </div>
                  
                  <div className="relative pl-8 mt-4">
                    <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-primary-color"></div>
                    <h4 className="text-base md:text-lg font-semibold text-text-color transition-colors">
                      {language === 'id' ? 'Backend Developer Intern' : language === 'zh' ? '后端开发实习生' : 'Backend Developer Intern'}
                    </h4>
                    <p className="text-sm md:text-base text-text-secondary transition-colors">2022 - 2022</p>
                    <p className="text-sm md:text-base text-text-secondary mt-2 transition-colors">
                      {language === 'id' ? 'Pengembangan API dan integrasi sistem' : 
                       language === 'zh' ? 'API开发和系统集成' : 
                       'API development and system integration'}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>

    <section id="contact" className="min-h-screen flex items-center relative py-20 overflow-hidden bg-gradient-to-b from-gray-900 to-blue-900">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-purple-500/10 to-transparent"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-40 h-40 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
        
        <div className="container mx-auto px-4 py-16 relative z-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="text-center"
          >
            <h2 className="font-bold text-3xl md:text-5xl mb-6 text-white relative inline-block">
              <span className="relative z-10">{t('letsCollaborate')}</span>
              <div className="absolute -bottom-2 left-0 w-full h-3 bg-accent-color/30 rounded-lg -z-10 transform -rotate-1"></div>
            </h2>
            <p className="text-lg mb-12 text-gray-300 max-w-xl mx-auto">
              {t('contactMe')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="glass-card bg-white/5 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="bg-accent-color/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent-color" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                <a href="mailto:ginanjar0822@gmail.com" className="text-gray-300 hover:text-accent-color transition-colors duration-300 inline-block">
                  ginanjar0822@gmail.com
                </a>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="glass-card bg-white/5 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="bg-primary-color/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-color" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Telepon</h3>
                <p className="text-gray-300">
                  +62 813-6135-4486
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="glass-card bg-white/5 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="bg-secondary-color/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary-color" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">LinkedIn</h3>
                <a href="https://www.linkedin.com/in/ginanjar-tubagus-gumilar-a4638b1b6/" className="text-gray-300 hover:text-secondary-color transition-colors duration-300 inline-block" target="_blank" rel="noopener noreferrer">
                  Ginanjar Tubagus Gumilar
                </a>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-16 max-w-3xl mx-auto glass-card bg-white/5 p-8 rounded-2xl backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">{t('letsConnect')}</h3>
              
              <div className="flex justify-center space-x-6">
                <a href="https://github.com/ginanjar-tg" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300 hover:scale-110 transform inline-block">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                
                <a href="https://www.instagram.com/ginanjartg" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-500 transition-colors duration-300 hover:scale-110 transform inline-block">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <footer className="bg-card-bg text-text-color border-t border-card-border py-8 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold mb-2 gradient-text">Ginanjar<span className="text-secondary-color">TG</span></h3>
              <p className="text-text-secondary">{t('tagline')}</p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-text-secondary mb-2">Copyright © {new Date().getFullYear()} Ginanjar Tubagus Gumilar</p>
              <p className="text-text-secondary text-sm">{t('madeWith')} <span className="text-red-500">❤️</span> {t('inBandung')}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
