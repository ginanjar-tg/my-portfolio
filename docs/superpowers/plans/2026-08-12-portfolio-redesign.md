# Portfolio Redesign 2026 — "Same Engine, New Machine" Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Upgrade the portfolio from Next.js 14 to Next.js 15 (LTS) and fully redesign it from a 2021 template look to a modern dark editorial design — while keeping the Pages Router, React 18, tri-lingual (EN/ID/ZH) support, and single-page structure.

**Architecture:** Next.js 15 Pages Router with React 18.2. The 880-line `contents.js` monolith is split into one component per section (`Navbar`, `Hero`, `About`, `Projects`, `Resume`, `Contact`, `Footer`), all copy/content moves to a single `data/content.js`, and i18n stays in `context/AppContext.js` (simplified to language-only — the site becomes dark-only). Design tokens live in `styles/globals.css` as CSS variables consumed by an extended Tailwind config.

**Tech Stack:** Next.js 15 (Pages Router), React 18.2, Tailwind CSS 3.4, framer-motion, next/font (Space Grotesk + Inter + JetBrains Mono). Hosted on Vercel.

## Global Constraints

- **Never run `next build` locally.** Vercel builds and deploys on push. Local verification is `npm run lint` only.
- Version floors: `next@^15.5.0`, `eslint-config-next@^15.5.0`, `eslint@^8.57.0`, `tailwindcss@^3.4.0`, `react@18.2.0` (unchanged), `framer-motion@^11.18.2` (unchanged).
- Site is **dark-only**: near-black canvas `#0A0A0C`, surface `#121215`, hairline borders `#26262B`, text `#F4F4F5` / muted `#A1A1AA`, single accent acid lime `#BEF264`.
- No light mode. No dark-mode toggle. No mouse-follower, blobs, shine sweeps, or animated gradient text.
- Keep all three languages (EN/ID/ZH) and every existing content item (3 jobs, 6 projects, 10 skills, 3 languages, contact info, 2 CV links).
- Do not modify: `CNAME`, `.github/workflows/auto-merge.yml`, `.gitattributes`, `LICENSE`, `public/favicon.ico`, `postcss.config.js`.
- No comments in code unless a file already uses them in the same place.
- No test framework exists in this repo; verification gates are `npm run lint` (must pass with 0 errors) and, where noted, a quick `next dev` visual check.
- Commit after every task. Push at the end (task 13).

---

### Task 1: Clean up dead files and dependencies, upgrade to Next 15

**Files:**
- Delete: `flat-portofolio-master.zip`, `pages/components/test.txt`, `pages/components/navbar.js`, `pages/components/wave1.js`, `pages/components/wave2.js`, `pages/api/hello.js`, `pages/cv.pdf`, `styles/Home.module.css`, `public/hero-bg.svg`, `public/maxxima.png`, `public/teio.gif`, `public/vercel.svg`, `public/png/` (entire folder)
- Modify: `package.json`, `next.config.js`, `tailwind.config.js`

**Interfaces:**
- Consumes: nothing.
- Produces: cleaned repo; new dependency versions that later tasks rely on.

- [ ] **Step 1: Delete the dead files**

```bash
Remove-Item -LiteralPath "flat-portofolio-master.zip" -Force
Remove-Item -LiteralPath "pages/components/test.txt" -Force
Remove-Item -LiteralPath "pages/components/navbar.js" -Force
Remove-Item -LiteralPath "pages/components/wave1.js" -Force
Remove-Item -LiteralPath "pages/components/wave2.js" -Force
Remove-Item -LiteralPath "pages/api/hello.js" -Force
Remove-Item -LiteralPath "pages/cv.pdf" -Force
Remove-Item -LiteralPath "styles/Home.module.css" -Force
Remove-Item -LiteralPath "public/hero-bg.svg" -Force
Remove-Item -LiteralPath "public/maxxima.png" -Force
Remove-Item -LiteralPath "public/teio.gif" -Force
Remove-Item -LiteralPath "public/vercel.svg" -Force
Remove-Item -LiteralPath "public/png" -Recurse -Force
Remove-Item -LiteralPath "pages/components/navbar.js" -Force
```

Verify: none of those paths exist anymore. `pages/` contains only `index.js`, `_app.js`, `_document.js`, `components/contents.js`, `components/ThemeLanguageControls.js`.

- [ ] **Step 2: Rewrite `package.json`** (remove daisyui, tw-elements, flowbite, gsap, react-spring, react-zoom-pan-pinch, next-image-zoom, react-image-zooom, react-intersection-observer; remove the `export` script; bump next/eslint)

```json
{
  "name": "my-portfolio",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "framer-motion": "^11.18.2",
    "next": "^15.5.0",
    "react": "18.2.0",
    "react-dom": "18.2.0"
  },
  "devDependencies": {
    "autoprefixer": "^10.4.7",
    "eslint": "^8.57.0",
    "eslint-config-next": "^15.5.0",
    "postcss": "^8.4.14",
    "tailwindcss": "^3.4.0"
  }
}
```

- [ ] **Step 3: Install dependencies**

```bash
npm install
```

Expected: install completes, `npm ls next` shows next 15.x, no peer dependency errors. If a peer error mentions eslint/react versions, run `npm install` again after clearing `node_modules` and `package-lock.json`.

- [ ] **Step 4: Verify lint still works**

Run: `npm run lint`
Expected: lint completes (may report no errors since nothing changed yet, or only pre-existing warnings — not a blocker at this stage).

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "chore: remove template cruft and upgrade to Next 15"
```

---

### Task 2: Config and global layout (next.config, _app, _document, tailwind)

**Files:**
- Modify: `next.config.js`, `pages/_app.js`, `pages/_document.js`, `tailwind.config.js`

**Interfaces:**
- Consumes: task 1 dependencies.
- Produces: `--font-display`, `--font-body`, `--font-mono` CSS variables set on a wrapper div in `_app.js`; Tailwind colors `canvas/surface/surface-2/line/ink/muted/lime`; font utilities `font-display/font-body/font-mono`. All later components use these.

- [ ] **Step 1: Rewrite `next.config.js`** (remove any `output`/`images` settings — none exist today, keep it minimal; standard build for Vercel)

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;
```

- [ ] **Step 2: Rewrite `pages/_app.js`** — remove tw-elements init and all dark-mode logic; load fonts via next/font and expose them as CSS variables:

```jsx
import "../styles/globals.css";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { AppProvider } from "../context/AppContext";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });
const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

function MyApp({ Component, pageProps }) {
  return (
    <div className={`${spaceGrotesk.variable} ${inter.variable} ${jetBrainsMono.variable}`}>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </div>
  );
}

export default MyApp;
```

- [ ] **Step 3: Rewrite `pages/_document.js`** — drop the Google Fonts link and the broken tw-elements `<Script>`:

```jsx
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
```

- [ ] **Step 4: Rewrite `tailwind.config.js`** — remove daisyui/tw-elements plugins, map new tokens:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "var(--canvas)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        line: "var(--line)",
        ink: "var(--ink)",
        muted: "var(--ink-muted)",
        lime: "var(--lime)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
```

- [ ] **Step 5: Commit**

```bash
git add next.config.js pages/_app.js pages/_document.js tailwind.config.js
git commit -m "chore: wire Next 15 config, self-hosted fonts, new tailwind tokens"
```

---

### Task 3: Design tokens and base styles (globals.css)

**Files:**
- Modify: `styles/globals.css` (full rewrite)

**Interfaces:**
- Produces: CSS classes `dot-grid`, `panel`, `chip`, `eyebrow`; `--canvas/--surface/--surface-2/--line/--ink/--ink-muted/--lime` variables; base body styles; focus-visible rings; reduced-motion support. Used by every component.

- [ ] **Step 1: Rewrite `styles/globals.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --canvas: #0A0A0C;
  --surface: #121215;
  --surface-2: #1A1A1F;
  --line: #26262B;
  --ink: #F4F4F5;
  --ink-muted: #A1A1AA;
  --lime: #BEF264;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--canvas);
  color: var(--ink);
  font-family: var(--font-body), ui-sans-serif, system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

::selection {
  background: var(--lime);
  color: #0A0A0C;
}

:focus-visible {
  outline: 2px solid var(--lime);
  outline-offset: 2px;
}

.dot-grid {
  background-image: radial-gradient(circle, rgba(190, 242, 100, 0.14) 1px, transparent 1px);
  background-size: 28px 28px;
  -webkit-mask-image: radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 75%);
  mask-image: radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 75%);
}

.panel {
  background-color: var(--surface);
  border: 1px solid var(--line);
  border-radius: 0.75rem;
}

.chip {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.625rem;
  font-family: var(--font-mono), monospace;
  font-size: 0.6875rem;
  letter-spacing: 0.03em;
  color: var(--ink-muted);
  border: 1px solid var(--line);
  border-radius: 9999px;
  white-space: nowrap;
}

.eyebrow {
  font-family: var(--font-mono), monospace;
  font-size: 0.75rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--lime);
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add styles/globals.css
git commit -m "style: rebuild design tokens for dark editorial theme"
```

---

### Task 4: Content data file (data/content.js)

**Files:**
- Create: `data/content.js`

**Interfaces:**
- Produces exports used by later components: `skills` (string[]), `languages` (array of `{ name, level: {en,id,zh} }`), `workExperience` (array of `{ title, short, description: {en,id,zh}, techStack, company, year, type }`), `personalProjects` (array of `{ title: {en,id,zh}, description: {en,id,zh}, techStack, image, link }`), `contact` (object with `email, phone, linkedin, github, instagram, cvEn, cvId`).

- [ ] **Step 1: Create `data/content.js`** — copy the existing data verbatim from `pages/components/contents.js` (keep every title/description/techStack/company/year/type/link/image identical), add the new `short` field to each job, and add the contact object:

```js
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
```

- [ ] **Step 2: Commit**

```bash
git add data/content.js
git commit -m "feat: extract site content into data module"
```

---

### Task 5: Simplify AppContext to language-only with full translations

**Files:**
- Modify: `context/AppContext.js` (full rewrite)

**Interfaces:**
- Produces: `useAppContext()` returning `{ language, t, changeLanguage }`. `t(key)` returns the string for the current language, falling back to the key itself. Every component uses `t()` for UI strings and `language` for content-field selection.

- [ ] **Step 1: Rewrite `context/AppContext.js`** — remove darkMode state, add the full key set for EN/ID/ZH (all existing UI keys plus new ones; note the previously-missing `fulltime`/`internship` keys are now provided):

```js
import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

const translations = {
  en: {
    home: "Home",
    about: "About",
    projects: "Projects",
    resume: "Resume",
    contact: "Contact",
    heroEyebrow: "Full-Stack Developer · Batam",
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
    heroEyebrow: "Full-Stack Developer · Batam",
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
```

- [ ] **Step 2: Verify**

Run: `npm run lint`
Expected: 0 errors.

- [ ] **Step 3: Commit**

```bash
git add context/AppContext.js
git commit -m "feat: simplify context to language-only with full translations"
```

---

### Task 6: Shared components — SectionHeading + restyled ThemeLanguageControls

**Files:**
- Create: `pages/components/SectionHeading.js`
- Modify: `pages/components/ThemeLanguageControls.js` (full rewrite)

**Interfaces:**
- Produces: `<SectionHeading index="01" title="About Me" />` (renders mono eyebrow `/{index}`, display title, trailing hairline) and `<ThemeLanguageControls />` (dark-styled EN/ID/ZH dropdown only — no theme toggle). Used by Navbar, About, Projects, Resume, Contact.

- [ ] **Step 1: Create `pages/components/SectionHeading.js`**

```jsx
export default function SectionHeading({ index, title }) {
  return (
    <div className="flex items-baseline gap-4">
      <span className="eyebrow">/{index}</span>
      <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">{title}</h2>
      <span className="h-px flex-1 bg-line" aria-hidden="true" />
    </div>
  );
}
```

- [ ] **Step 2: Rewrite `pages/components/ThemeLanguageControls.js`**

```jsx
import { useState, useEffect } from "react";
import { useAppContext } from "../../context/AppContext";

const languages = [
  { code: "en", name: "English" },
  { code: "id", name: "Indonesia" },
  { code: "zh", name: "中文 (简体)" },
];

export default function ThemeLanguageControls() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const { language, changeLanguage } = useAppContext();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (open && !event.target.closest(".lang-switcher")) setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const label = mounted ? language.toUpperCase() : "EN";

  return (
    <div className="lang-switcher relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-lg border border-line bg-surface px-3 py-2 font-mono text-xs text-ink transition-colors hover:border-lime/60"
        aria-label="Change language"
        aria-expanded={open}
      >
        {label}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute right-0 top-full z-50 mt-2 w-40 overflow-hidden rounded-lg border border-line bg-surface shadow-xl">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                changeLanguage(lang.code);
                setOpen(false);
              }}
              className={`block w-full px-4 py-2 text-left font-mono text-xs transition-colors ${
                language === lang.code
                  ? "bg-lime/10 text-lime"
                  : "text-muted hover:bg-surface-2 hover:text-ink"
              }`}
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
```

- [ ] **Step 3: Verify**

Run: `npm run lint`
Expected: 0 errors.

- [ ] **Step 4: Commit**

```bash
git add pages/components/SectionHeading.js pages/components/ThemeLanguageControls.js
git commit -m "feat: add section heading and restyle language switcher"
```

---

### Task 7: Navbar

**Files:**
- Create: `pages/components/Navbar.js`

**Interfaces:**
- Consumes: `useAppContext()` → `t`, `<ThemeLanguageControls />`.
- Produces: fixed navbar with scroll-spy (IntersectionObserver on section ids `home`, `about`, `projects`, `resume`, `contact`) and mobile slide-down menu. Rendered by `index.js`.

- [ ] **Step 1: Create `pages/components/Navbar.js`**

```jsx
import { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext";
import ThemeLanguageControls from "./ThemeLanguageControls";

const links = [
  { id: "home", key: "home" },
  { id: "about", key: "about" },
  { id: "projects", key: "projects" },
  { id: "resume", key: "resume" },
  { id: "contact", key: "contact" },
];

export default function Navbar() {
  const { t } = useAppContext();
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-line bg-canvas/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#home" className="font-mono text-sm text-ink">
          <span className="text-lime">g.</span>tg
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map(({ id, key }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`font-mono text-xs tracking-wide transition-colors ${
                active === id ? "text-lime" : "text-muted hover:text-ink"
              }`}
            >
              {t(key)}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeLanguageControls />
          <button
            className="text-ink md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav className="border-t border-line bg-canvas px-6 py-6 md:hidden">
          <ul className="flex flex-col gap-4">
            {links.map(({ id, key }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setMenuOpen(false)}
                  className={`font-mono text-sm ${active === id ? "text-lime" : "text-muted"}`}
                >
                  {t(key)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
```

- [ ] **Step 2: Verify**

Run: `npm run lint`
Expected: 0 errors.

- [ ] **Step 3: Commit**

```bash
git add pages/components/Navbar.js
git commit -m "feat: add navbar with scroll spy and mobile menu"
```

---

### Task 8: Hero

**Files:**
- Create: `pages/components/Hero.js`

**Interfaces:**
- Consumes: `useAppContext()` → `t`; `contact` from `data/content.js`; `ginanjarPic` from `../../public/webp/pixel.webp`.
- Produces: full-height hero with dot grid, eyebrow, display name, intro line, CTAs, social row, framed photo at `md+`. Rendered by `index.js`.

- [ ] **Step 1: Create `pages/components/Hero.js`**

```jsx
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
          <div className="w-72 overflow-hidden rounded-xl border border-line">
            <Image
              src={ginanjarPic}
              alt="Portrait of Ginanjar Tubagus Gumilar"
              width={288}
              height={360}
              className="h-[360px] w-full object-cover"
            />
          </div>
        </motion.figure>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify**

Run: `npm run lint`
Expected: 0 errors.

- [ ] **Step 3: Commit**

```bash
git add pages/components/Hero.js
git commit -m "feat: add editorial hero section"
```

---

### Task 9: About

**Files:**
- Create: `pages/components/About.js`

**Interfaces:**
- Consumes: `useAppContext()` → `t`, `language`; `skills`, `languages` from `data/content.js`; `pixelPic` from `../../public/webp/pixel.webp`; `<SectionHeading />`.
- Produces: about section with profile paragraphs, education panel, pixel photo, skill chips, language list. Rendered by `index.js`.

- [ ] **Step 1: Create `pages/components/About.js`**

```jsx
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
            <div className="overflow-hidden rounded-xl border border-line">
              <Image
                src={pixelPic}
                alt="Pixel-art portrait of Ginanjar"
                width={480}
                height={320}
                className="w-full object-cover transition-transform duration-500 hover:scale-105"
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
```

- [ ] **Step 2: Verify**

Run: `npm run lint`
Expected: 0 errors.

- [ ] **Step 3: Commit**

```bash
git add pages/components/About.js
git commit -m "feat: add about section with skills and languages"
```

---

### Task 10: Projects

**Files:**
- Create: `pages/components/Projects.js`

**Interfaces:**
- Consumes: `useAppContext()` → `t`, `language`; `workExperience`, `personalProjects`, `contact` from `data/content.js`; `<SectionHeading />`.
- Produces: work experience panels (mono tech list, type tag, year) + personal project card grid with images and hover states. Rendered by `index.js`.

- [ ] **Step 1: Create `pages/components/Projects.js`**

```jsx
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
```

- [ ] **Step 2: Verify**

Run: `npm run lint`
Expected: 0 errors.

- [ ] **Step 3: Commit**

```bash
git add pages/components/Projects.js
git commit -m "feat: add projects section with work and personal grids"
```

---

### Task 11: Resume

**Files:**
- Create: `pages/components/Resume.js`

**Interfaces:**
- Consumes: `useAppContext()` → `t`, `language`; `contact`, `workExperience` from `data/content.js`; `<SectionHeading />`.
- Produces: resume section with CV download buttons (left) and experience timeline (right). Rendered by `index.js`.

- [ ] **Step 1: Create `pages/components/Resume.js`**

```jsx
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
            className="panel flex flex-col justify-between p-8"
          >
            <div>
              <h3 className="eyebrow">{t("resumeSub")}</h3>
            </div>
            <div className="mt-8 space-y-3">
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
```

- [ ] **Step 2: Verify**

Run: `npm run lint`
Expected: 0 errors.

- [ ] **Step 3: Commit**

```bash
git add pages/components/Resume.js
git commit -m "feat: add resume section with CV downloads and timeline"
```

---

### Task 12: Contact + Footer

**Files:**
- Create: `pages/components/Contact.js`, `pages/components/Footer.js`

**Interfaces:**
- Consumes: `useAppContext()` → `t`; `contact` from `data/content.js`.
- Produces: contact section (email/phone/LinkedIn rows, social icons) and footer. Rendered by `index.js`.

- [ ] **Step 1: Create `pages/components/Contact.js`**

```jsx
import { motion } from "framer-motion";
import { useAppContext } from "../../context/AppContext";
import { contact } from "../../data/content";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut", delay } },
});

const channels = [
  {
    key: "email",
    value: contact.email,
    href: `mailto:${contact.email}`,
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    key: "phone",
    value: contact.phone,
    href: `tel:${contact.phone.replace(/\s/g, "")}`,
    icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
  },
  {
    key: "linkedin",
    value: "linkedin.com/in/ginanjar-tubagus-gumilar",
    href: contact.linkedin,
    icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
  },
];

const socials = [
  { name: "GitHub", href: contact.github, path: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" },
  { name: "Instagram", href: contact.instagram, path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
];

export default function Contact() {
  const { t } = useAppContext();

  return (
    <section id="contact" className="py-28">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <span className="eyebrow">/04</span>
        <h2 className="mt-6 font-display text-4xl font-semibold tracking-tight md:text-6xl">
          {t("contactTitle")}
        </h2>
        <p className="mt-4 text-muted">{t("contactSub")}</p>

        <div className="mx-auto mt-14 grid max-w-3xl gap-4 text-left">
          {channels.map((channel) => (
            <motion.a
              key={channel.key}
              href={channel.href}
              target={channel.href.startsWith("http") ? "_blank" : undefined}
              rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
              variants={fadeUp()}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="panel flex items-center gap-4 p-5 transition-colors hover:border-lime/60"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-line">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-lime">
                  <path strokeLinecap="round" strokeLinejoin="round" d={channel.icon} />
                </svg>
              </span>
              <span className="font-mono text-xs text-muted">{t(channel.key)}</span>
              <span className="ml-auto font-mono text-sm text-ink">{channel.value}</span>
            </motion.a>
          ))}
        </div>

        <motion.div
          variants={fadeUp(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-14"
        >
          <p className="eyebrow">{t("letsConnect")}</p>
          <div className="mt-6 flex justify-center gap-8">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="text-muted transition-colors hover:text-lime"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Create `pages/components/Footer.js`**

```jsx
import { useAppContext } from "../../context/AppContext";

export default function Footer() {
  const { t } = useAppContext();

  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <p className="font-mono text-xs text-muted">
          <span className="text-lime">g.</span>tg
        </p>
        <p className="font-mono text-xs text-muted">
          &copy; {new Date().getFullYear()} Ginanjar Tubagus Gumilar &middot; {t("footerRights")}
        </p>
        <p className="font-mono text-xs text-muted">{t("builtWith")}</p>
      </div>
    </footer>
  );
}
```

- [ ] **Step 3: Verify**

Run: `npm run lint`
Expected: 0 errors.

- [ ] **Step 4: Commit**

```bash
git add pages/components/Contact.js pages/components/Footer.js
git commit -m "feat: add contact section and footer"
```

---

### Task 13: Assemble index.js with SEO, delete contents.js, final verification, push

**Files:**
- Modify: `pages/index.js` (full rewrite)
- Delete: `pages/components/contents.js`

**Interfaces:**
- Consumes: all components from tasks 6-12.
- Produces: the final page. Ends the project.

- [ ] **Step 1: Rewrite `pages/index.js`** with SEO meta tags, assembling the sections:

```jsx
import Head from "next/head";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ginanjar Tubagus Gumilar — Full Stack Developer</title>
        <meta
          name="description"
          content="Full stack developer based in Batam, Indonesia. Building fast, reliable web and desktop applications with Laravel, Django, Next.js and more."
        />
        <meta property="og:title" content="Ginanjar Tubagus Gumilar — Full Stack Developer" />
        <meta
          property="og:description"
          content="Full stack developer based in Batam, Indonesia. Building fast, reliable web and desktop applications with Laravel, Django, Next.js and more."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ginanjarstuff.my.id" />
        <meta property="og:image" content="/webp/pixel.webp" />
      </Head>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Delete the monolith**

```bash
Remove-Item -LiteralPath "pages/components/contents.js" -Force
```

- [ ] **Step 3: Final verification**

Run: `npm run lint`
Expected: 0 errors, 0 warnings.

Optional visual smoke check (user permission not required, but do not run `next build`):

```bash
npm run dev
```

Expected: page renders at `http://localhost:3000` with dark theme, hero dot grid, lime accents, working anchors and language switcher. Kill the dev server after checking.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: assemble redesigned portfolio with SEO"
```

- [ ] **Step 5: Push**

```bash
git push
```

Expected: push succeeds; Vercel picks up the push and builds/deploys automatically. Done.
