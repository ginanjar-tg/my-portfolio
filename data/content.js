import isekaiStorePic from "../public/webp/isekaistore.webp";
import sintikaPic from "../public/webp/sintika.webp";
import katakanSajaPic from "../public/webp/katakan-saja.webp";
import shunleiPic from "../public/webp/shunlei.webp";
import coskuyPic from "../public/webp/coskuy.webp";
import jajanelingPic from "../public/webp/jajaneling.webp";

export const skills = [
  "PHP/Laravel",
  "Python/Django",
  "JavaScript/Next.js",
  "C#/WPF",
  "PostgreSQL & MySQL",
  "Git",
  "Tailwind CSS",
  "Bootstrap",
  "AWS",
  "Docker",
];

export const languages = [
  {
    name: "Indonesia",
    level: { en: "Native", id: "Bahasa Ibu", zh: "母语" },
  },
  {
    name: "English",
    level: { en: "Fluent", id: "Lancar", zh: "流利" },
  },
  {
    name: "中文 (Mandarin)",
    level: { en: "Basic", id: "Dasar", zh: "基础" },
  },
];

export const workExperience = [
  {
    title: {
      id: "Fullstack Developer",
      en: "Fullstack Developer",
      zh: "全栈开发工程师",
    },
    short: {
      id: "Pengembangan web & desktop, geolokasi berbasis AI, dan pengelolaan penuh infrastruktur server.",
      en: "Web & desktop development, AI-driven geolocation, and full ownership of server infrastructure.",
      zh: "Web和桌面开发、AI地理定位，以及服务器基础设施的全面管理。",
    },
    description: {
      id: "Mengembangkan solusi berbasis ekosistem PHP (Laravel) dan Python (Django), termasuk implementasi fitur geolokasi berbasis AI. Tidak hanya berfokus pada penulisan kode, tetapi juga memegang tanggung jawab penuh atas infrastruktur server, meliputi manajemen database, konfigurasi lingkungan Linux/Docker, dan eksekusi deployment secara mandiri.",
      en: "Developed solutions within the PHP (Laravel) and Python (Django) ecosystems, including the implementation of AI-driven geolocation features. Beyond software development, assumed full responsibility for server infrastructure, encompassing database management, Linux/Docker environment configuration, and independent deployment execution.",
      zh: "开发基于 PHP (Laravel) 和 Python (Django) 生态系统的解决方案，包括实现基于 AI 的地理定位功能。除了代码编写之外，还全面负责服务器基础设施的运维，涵盖数据库管理、Linux/Docker 环境配置以及独立完成部署工作。",
    },
    techStack: ["Laravel", "PostgreSQL", "MySQL", "Nginx", "Docker", "WPF (C#)", "Python", "Django", "AI Geolocation"],
    company: "PT. Maxxima Innovative Engineering",
    year: "2023-2026",
    type: "fulltime",
  },
  {
    title: {
      id: "Web Developer",
      en: "Web Developer",
      zh: "Web开发",
    },
    short: {
      id: "Membangun RESTful API dengan Lumen dan antarmuka ReactJS yang interaktif.",
      en: "Built RESTful APIs with Lumen and interactive ReactJS interfaces.",
      zh: "使用Lumen构建RESTful API，并开发交互式ReactJS界面。",
    },
    description: {
      id: "Berperan sebagai Web Developer Intern, saya merancang dan membangun RESTful API menggunakan Lumen (Laravel). Selain itu, saya mengembangkan antarmuka website yang interaktif dan responsif dengan ReactJS untuk mendukung kebutuhan bisnis perusahaan.",
      en: "As a Web Developer Intern, I designed and built RESTful APIs using Lumen (Laravel). Additionally, I developed interactive and responsive website interfaces with ReactJS to support the company's business needs.",
      zh: "作为Web开发实习生，我使用Lumen（Laravel）设计并开发RESTful API，并利用ReactJS开发了交互性强且响应迅速的网站界面，以支持公司的业务需求。",
    },
    techStack: ["Lumen", "Laravel", "ReactJS"],
    company: "PT. Mediatama Kreasi Informatika",
    year: "2022-2022",
    type: "internship",
  },
  {
    title: {
      id: "IT Support",
      en: "IT Support",
      zh: "IT支持",
    },
    short: {
      id: "Menjaga kelancaran IT kantor — instalasi, pemeliharaan, dan troubleshooting.",
      en: "Kept office IT running — installations, maintenance, and troubleshooting.",
      zh: "保障办公室IT运维——安装、维护和故障排除。",
    },
    description: {
      id: "Sebagai IT Support Intern, saya bertanggung jawab memastikan kelancaran operasional IT di lingkungan kantor, mulai dari instalasi perangkat lunak hingga pemeliharaan perangkat keras. Saya juga menangani troubleshooting berbagai masalah komputer untuk mendukung produktivitas karyawan.",
      en: "As an IT Support Intern, I was responsible for ensuring smooth IT operations in the office environment, from software installation to hardware maintenance. I also handled troubleshooting various computer issues to support employee productivity.",
      zh: "作为IT支持实习生，我负责办公室IT运维，包括软件安装和硬件维护，并处理各类计算机故障，保障员工的工作效率。",
    },
    techStack: null,
    company: "Bank Syariah Indonesia",
    year: "2018-2018",
    type: "internship",
  },
];

export const personalProjects = [
  {
    title: { id: "Isekai Store", en: "Isekai Store", zh: "Isekai Store" },
    description: {
      id: "Landing page untuk marketplace bertema fantasi.",
      en: "Landing page for a fantasy-inspired marketplace.",
      zh: "以奇幻为主题的市场落地页。",
    },
    techStack: ["Next.js", "TailwindCSS"],
    image: isekaiStorePic,
    link: "https://isekaistore.vercel.app/",
  },
  {
    title: { id: "Sintika", en: "Sintika", zh: "Sintika" },
    description: {
      id: "Landing page untuk grup Vtuber Sintika.",
      en: "Landing page for the Sintika Vtuber group.",
      zh: "Vtuber团体Sintika的落地页。",
    },
    techStack: ["Next.js", "TailwindCSS"],
    image: sintikaPic,
    link: "https://sintika.vercel.app/",
  },
  {
    title: { id: "Katakan Saja", en: "Katakan Saja", zh: "Katakan Saja" },
    description: {
      id: "Landing page untuk jasa curhat yang aman, nyaman, dan terjangkau.",
      en: "Landing page for a safe, comfortable, and affordable sharing service.",
      zh: "一个安全、舒适且实惠的倾诉服务落地页。",
    },
    techStack: ["Next.js", "TailwindCSS", "shadcn"],
    image: katakanSajaPic,
    link: "https://katakan-saja.vercel.app/",
  },
  {
    title: { id: "Shunlei", en: "Shunlei", zh: "Shunlei" },
    description: {
      id: "Landing page perusahaan software untuk kultur jejepangan di Indonesia (cosplayer, idol, itasha).",
      en: "Landing page for a software company focused on Japanese pop culture in Indonesia (cosplayer, idol, itasha).",
      zh: "专注于印尼日本流行文化（coser、偶像、痛车）的软件公司落地页。",
    },
    techStack: ["Next.js", "TailwindCSS"],
    image: shunleiPic,
    link: "https://www.shunlei.my.id/",
  },
  {
    title: { id: "Coskuy", en: "Coskuy", zh: "Coskuy" },
    description: {
      id: "Landing page aplikasi android to do app untuk cosplayer.",
      en: "Landing page for an Android to-do app for cosplayers.",
      zh: "为coser设计的安卓待办应用落地页。",
    },
    techStack: ["Next.js", "TailwindCSS"],
    image: coskuyPic,
    link: "https://coskuy-landing-page.vercel.app/",
  },
  {
    title: { id: "Jajaneling", en: "Jajaneling", zh: "Jajaneling" },
    description: {
      id: "Sebuah platform untuk mempermudah transaksi antara pedagang kaki lima dan pembeli. Proyek skripsi, tidak ada web publik.",
      en: "A platform to simplify transactions between street vendors and buyers. My thesis project, no public web.",
      zh: "一个用于简化街头小贩和买家交易的平台。我的毕业设计，无公开网页。",
    },
    techStack: ["PHP Native"],
    image: jajanelingPic,
    link: null,
  },
];

export const contact = {
  email: "ginanjar0822@gmail.com",
  phone: "+62 813-6135-4486",
  linkedin: "https://www.linkedin.com/in/ginanjar-tubagus-gumilar-a4638b1b6/",
  github: "https://github.com/ginanjar-tg",
  instagram: "https://www.instagram.com/ginanjartg",
  cvEn: "https://drive.google.com/file/d/1xwWRG7UNC_fbZ6342_FeN1BpB5mAUvPC/view?usp=sharing",
  cvId: "https://drive.google.com/file/d/1RC43hSrvEQ7p0MhlRcsoTi03nQKagYly/view?usp=sharing",
};
