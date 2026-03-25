# 个人网站实现计划 — 星际穿越主题

> **面向 Agent 工作者：** 建议使用 superpowers:subagent-driven-development 或 superpowers:executing-plans 分任务执行。步骤使用复选框（`- [ ]`）语法跟踪。

**目标：** 构建一个单页滚动式个人简历网站，深空蓝渐变背景、星空动画、滚动触发动画，六个标准简历模块。

**架构：** Next.js 16.2.1 + App Router，Tailwind CSS v4 + Framer Motion。单页垂直滚动，每个模块独立组件，星点背景全局复用。

**技术栈：** Next.js 16.2.1, React 19, Tailwind CSS v4, Framer Motion, TypeScript

---

## 文件结构

```
app/
  globals.css          # 全局样式：CSS 变量、星空动画、背景渐变
  layout.tsx           # 根布局：Meta、字体、全局提供商
  page.tsx             # 主页面：组装所有模块

components/
  Navigation.tsx       # 固定顶部导航栏
  StarField.tsx         # 星空背景组件（绝对定位，覆盖视口）
  Hero.tsx             # 全屏首页：姓名、头衔、一句话简介
  SectionWrapper.tsx    # 滚动触发动画包装组件（Framer Motion）
  About.tsx             # 关于我模块
  Education.tsx         # 教育经历：时间线
  Experience.tsx        # 工作经历：时间线
  Projects.tsx          # 项目经验：卡片网格
  Skills.tsx            # 技能列表：标签云
  Contact.tsx           # 联系方式：图标链接

lib/
  resume-data.ts        # 简历数据占位（用户替换）
  animation.ts          # Framer Motion 动画变体

types/
  resume.ts             # TypeScript 类型定义
```

---

## 前置任务

- [ ] **安装 Framer Motion**

  ```bash
  npm install framer-motion
  ```

---

## 任务 1：全局样式与主题

**文件：**
- 修改：`app/globals.css`

- [ ] **Step 1: 添加 CSS 变量与全局样式**

  ```css
  @import "tailwindcss";

  :root {
    --color-bg-start: #0d1b2a;
    --color-bg-mid: #1b263b;
    --color-bg-end: #0d1b2a;
    --color-text-primary: #e0f4ff;
    --color-text-secondary: #778da9;
    --color-accent: #4cc9f0;
    --color-glow: rgba(76, 201, 240, 0.4);
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: linear-gradient(160deg, var(--color-bg-start) 0%, var(--color-bg-mid) 50%, var(--color-bg-end) 100%);
    color: var(--color-text-primary);
    min-height: 100vh;
  }

  /* 星空关键帧动画 */
  @keyframes twinkle {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 1; }
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
  ```

- [ ] **Step 2: 添加星空背景样式**

  ```css
  .star-field {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0;
    overflow: hidden;
  }

  .star {
    position: absolute;
    width: 2px;
    height: 2px;
    background: white;
    border-radius: 50%;
    animation: twinkle var(--duration, 3s) ease-in-out infinite;
    animation-delay: var(--delay, 0s);
  }

  .star.large {
    width: 3px;
    height: 3px;
    box-shadow: 0 0 6px 1px rgba(255, 255, 255, 0.6);
  }
  ```

- [ ] **Step 3: 提交**

  ```bash
  git add app/globals.css
  git commit -m "feat: add global CSS variables and star field styles"
  ```

---

## 任务 2：TypeScript 类型与数据

**文件：**
- 创建：`types/resume.ts`
- 创建：`lib/resume-data.ts`
- 创建：`lib/animation.ts`

- [ ] **Step 1: 创建简历类型定义**

  **文件：** `types/resume.ts`

  ```typescript
  export interface Education {
    degree: string;
    institution: string;
    year: string;
    description?: string;
  }

  export interface Experience {
    role: string;
    company: string;
    yearRange: string;
    bullets?: string[];
  }

  export interface Project {
    title: string;
    description: string;
    techTags: string[];
    githubUrl?: string;
    liveUrl?: string;
  }

  export interface Skill {
    name: string;
    category: 'Frontend' | 'Backend' | 'Tools' | 'Other';
  }

  export interface ResumeData {
    name: string;
    title: string;
    tagline: string;
    about: string;
    education: Education[];
    experience: Experience[];
    projects: Project[];
    skills: Skill[];
    email: string;
    github: string;
    linkedin: string;
  }
  ```

- [ ] **Step 2: 创建简历数据占位符**

  **文件：** `lib/resume-data.ts`

  ```typescript
  import { ResumeData } from '@/types/resume';

  export const resumeData: ResumeData = {
    name: 'Your Name',
    title: 'Software Engineer',
    tagline: 'Building the future, one commit at a time.',
    about: 'A brief introduction about yourself...',
    education: [
      {
        degree: 'Bachelor of Science in Computer Science',
        institution: 'University Name',
        year: '2018 - 2022',
        description: 'Relevant coursework: Data Structures, Algorithms, Operating Systems.',
      },
    ],
    experience: [
      {
        role: 'Software Engineer',
        company: 'Company Name',
        yearRange: '2022 - Present',
        bullets: [
          'Led development of...',
          'Improved system performance by...',
        ],
      },
    ],
    projects: [
      {
        title: 'Project Name',
        description: 'A brief description of what this project does and your role.',
        techTags: ['React', 'Node.js', 'PostgreSQL'],
        githubUrl: 'https://github.com/username/repo',
      },
    ],
    skills: [
      { name: 'TypeScript', category: 'Frontend' },
      { name: 'React', category: 'Frontend' },
      { name: 'Node.js', category: 'Backend' },
      { name: 'PostgreSQL', category: 'Backend' },
      { name: 'Git', category: 'Tools' },
    ],
    email: 'your.email@example.com',
    github: 'https://github.com/username',
    linkedin: 'https://linkedin.com/in/username',
  };
  ```

- [ ] **Step 3: 创建 Framer Motion 动画变体**

  **文件：** `lib/animation.ts`

  ```typescript
  import { Variants } from 'framer-motion';

  export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  export const staggerContainer: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  };

  export const navLinkHover: Variants = {
    rest: { y: 0, textShadow: '0 0 0px transparent' },
    hover: {
      y: -2,
      textShadow: '0 0 10px var(--color-glow)',
      transition: { duration: 0.2 },
    },
  };
  ```

- [ ] **Step 4: 提交**

  ```bash
  git add types/resume.ts lib/resume-data.ts lib/animation.ts
  git commit -m "feat: add TypeScript types and resume data placeholder"
  ```

---

## 任务 3：星空背景组件（含鼠标视差）

**文件：**
- 创建：`components/StarField.tsx`

- [ ] **Step 1: 创建 StarField 组件（含视差）**

  **文件：** `components/StarField.tsx`

  ```typescript
  'use client';

  import { useEffect, useRef } from 'react';

  export default function StarField() {
    const starsRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (!starsRef.current) return;

      const stars = starsRef.current;
      const starCount = 120;

      for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = `star ${Math.random() > 0.8 ? 'large' : ''}`;

        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.setProperty('--duration', `${2 + Math.random() * 3}s`);
        star.style.setProperty('--delay', `${Math.random() * 3}s`);

        // 存储视差系数（不同层的星有不同程度的位移）
        const depth = 0.2 + Math.random() * 0.3;
        (star as HTMLElement & { dataset: { depth: string } }).dataset.depth = String(depth);

        stars.appendChild(star);
      }

      // 鼠标视差效果
      const handleMouseMove = (e: MouseEvent) => {
        if (!starsRef.current) return;
        const stars = starsRef.current.querySelectorAll('.star');
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;

        stars.forEach((star) => {
          const depth = parseFloat((star as HTMLElement & { dataset: { depth: string } }).dataset.depth || '0.3');
          const moveX = mouseX * depth * 0.2; // 最大位移 20px
          const moveY = mouseY * depth * 0.2;
          (star as HTMLElement).style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
      };

      window.addEventListener('mousemove', handleMouseMove);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        if (starsRef.current) {
          starsRef.current.innerHTML = '';
        }
      };
    }, []);

    return <div ref={containerRef} className="star-field" />;
  }
  ```

  **关键实现点：**
  - 每个星点存储 `data-depth` 属性（0.2–0.5），控制视差强度
  - 鼠标移动时，根据 `depth * 20px` 计算最大位移
  - 不同深度的星点位移量不同，产生立体感

- [ ] **Step 2: 提交**

  ```bash
  git add components/StarField.tsx
  git commit -m "feat: add StarField component with twinkling animation"
  ```

---

## 任务 4：SectionWrapper 组件

**文件：**
- 创建：`components/SectionWrapper.tsx`

- [ ] **Step 1: 创建 SectionWrapper**

  **文件：** `components/SectionWrapper.tsx`

  ```typescript
  'use client';

  import { motion } from 'framer-motion';
  import { ReactNode } from 'react';

  interface SectionWrapperProps {
    children: ReactNode;
    className?: string;
  }

  export default function SectionWrapper({ children, className = '' }: SectionWrapperProps) {
    return (
      <motion.div
        className={className}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
          },
        }}
      >
        {children}
      </motion.div>
    );
  }
  ```

- [ ] **Step 2: 提交**

  ```bash
  git add components/SectionWrapper.tsx
  git commit -m "feat: add SectionWrapper with scroll-triggered reveal"
  ```

---

## 任务 5：Navigation 组件（含汉堡菜单）

**文件：**
- 创建：`components/Navigation.tsx`

- [ ] **Step 1: 创建 Navigation 组件（含移动端汉堡菜单）**

  **文件：** `components/Navigation.tsx`

  ```typescript
  'use client';

  import { useState, useEffect } from 'react';
  import { motion, AnimatePresence } from 'framer-motion';
  import { resumeData } from '@/lib/resume-data';

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  export default function Navigation() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = () => {
      setMobileMenuOpen(false);
    };

    return (
      <>
        <motion.nav
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled ? 'bg-[#0d1b2a]/90 backdrop-blur-md' : 'bg-transparent'
          }`}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <motion.span
              className="text-lg font-light tracking-widest text-[#e0f4ff]"
              whileHover={{ textShadow: '0 0 15px var(--color-glow)' }}
            >
              {resumeData.name}
            </motion.span>

            {/* 桌面端导航 */}
            <div className="hidden md:flex gap-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-[#778da9] hover:text-[#4cc9f0] transition-colors"
                  whileHover={{ y: -2, textShadow: '0 0 10px var(--color-glow)' }}
                  transition={{ duration: 0.2 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>

            {/* 移动端汉堡菜单按钮 */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-0.5 bg-[#e0f4ff] transition-transform duration-300 ${
                  mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-[#e0f4ff] transition-opacity duration-300 ${
                  mobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-[#e0f4ff] transition-transform duration-300 ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </button>
          </div>
        </motion.nav>

        {/* 移动端菜单面板 */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="fixed inset-0 z-40 bg-[#0d1b2a]/95 backdrop-blur-md flex flex-col items-center justify-center gap-8 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="text-2xl text-[#e0f4ff]"
                  onClick={handleNavClick}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ textShadow: '0 0 15px var(--color-glow)' }}
                >
                  {item.label}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  }
  ```

  **关键实现点：**
  - 桌面端：水平导航栏，`hidden md:flex`
  - 移动端：三横线汉堡按钮，点击展开全屏菜单
  - `AnimatePresence` 实现菜单的淡入淡出
  - 汉堡按钮三条线变换成 X 动画

- [ ] **Step 2: 提交**

  ```bash
  git add components/Navigation.tsx
  git commit -m "feat: add Navigation with hamburger menu for mobile"
  ```

---

## 任务 6：Hero 组件

**文件：**
- 创建：`components/Hero.tsx`

- [ ] **Step 1: 创建 Hero 组件**

  **文件：** `components/Hero.tsx`

  ```typescript
  'use client';

  import { motion } from 'framer-motion';
  import { resumeData } from '@/lib/resume-data';

  export default function Hero() {
    return (
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6">
        <motion.h1
          className="text-5xl md:text-7xl font-extralight tracking-widest text-[#e0f4ff] mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {resumeData.name}
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-[#4cc9f0] tracking-widest mb-6 font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {resumeData.title}
        </motion.p>

        <motion.p
          className="text-lg text-[#778da9] max-w-xl font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {resumeData.tagline}
        </motion.p>

        <motion.div
          className="absolute bottom-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1.2, duration: 0.5 },
            y: { delay: 1.2, duration: 1.5, repeat: Infinity, ease: 'easeInOut' },
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#4cc9f0"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </section>
    );
  }
  ```

- [ ] **Step 2: 提交**

  ```bash
  git add components/Hero.tsx
  git commit -m "feat: add Hero section with animated entrance"
  ```

---

## 任务 7：About 组件

**文件：**
- 创建：`components/About.tsx`

- [ ] **Step 1: 创建 About 组件**

  **文件：** `components/About.tsx`

  ```typescript
  'use client';

  import SectionWrapper from './SectionWrapper';
  import { resumeData } from '@/lib/resume-data';

  export default function About() {
    return (
      <SectionWrapper id="about" className="relative z-10 py-32 px-6 max-w-3xl mx-auto">
        <div className="mb-8">
          <span className="text-xs tracking-[0.3em] text-[#4cc9f0] uppercase font-mono">
            01
          </span>
          <h2 className="text-3xl font-light tracking-widest text-[#e0f4ff] mt-2">
            About
          </h2>
        </div>
        <p className="text-lg leading-relaxed text-[#778da9] font-light">
          {resumeData.about}
        </p>
      </SectionWrapper>
    );
  }
  ```

- [ ] **Step 2: 提交**

  ```bash
  git add components/About.tsx
  git commit -m "feat: add About section"
  ```

---

## 任务 8：Education 和 Experience 组件（含时间线顺序点亮）

**文件：**
- 创建：`components/Education.tsx`
- 创建：`components/Experience.tsx`

- [ ] **Step 1: 创建 Education 组件（含节点顺序点亮动画）**

  **文件：** `components/Education.tsx`

  ```typescript
  'use client';

  import SectionWrapper from './SectionWrapper';
  import { resumeData } from '@/lib/resume-data';
  import { motion } from 'framer-motion';

  const timelineItem = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  const nodeAnimation = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.3, type: 'spring', stiffness: 200 },
    },
  };

  export default function Education() {
    return (
      <SectionWrapper id="education" className="relative z-10 py-32 px-6 max-w-3xl mx-auto">
        <div className="mb-12">
          <span className="text-xs tracking-[0.3em] text-[#4cc9f0] uppercase font-mono">
            02
          </span>
          <h2 className="text-3xl font-light tracking-widest text-[#e0f4ff] mt-2">
            Education
          </h2>
        </div>

        <div className="relative border-l border-[#1b263b] ml-4 pl-8">
          {resumeData.education.map((edu, index) => (
            <motion.div
              key={index}
              className="relative mb-12 last:mb-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.2 } },
              }}
            >
              {/* 时间线节点 - 顺序点亮 */}
              <motion.div
                className="absolute -left-[37px] w-3 h-3 rounded-full bg-[#0d1b2a] border-2 border-[#4cc9f0]"
                style={{
                  boxShadow: '0 0 10px var(--color-glow), 0 0 20px var(--color-glow)',
                }}
                variants={nodeAnimation}
              />
              <motion.div variants={timelineItem}>
                <span className="text-xs text-[#4cc9f0] font-mono">{edu.year}</span>
                <h3 className="text-xl text-[#e0f4ff] mt-1">{edu.degree}</h3>
                <p className="text-[#778da9] mt-1">{edu.institution}</p>
                {edu.description && (
                  <p className="text-sm text-[#778da9]/80 mt-3 leading-relaxed">
                    {edu.description}
                  </p>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    );
  }
  ```

- [ ] **Step 2: 创建 Experience 组件（含节点顺序点亮动画）**

  **文件：** `components/Experience.tsx`

  ```typescript
  'use client';

  import SectionWrapper from './SectionWrapper';
  import { resumeData } from '@/lib/resume-data';
  import { motion } from 'framer-motion';

  const timelineItem = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  const nodeAnimation = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.3, type: 'spring', stiffness: 200 },
    },
  };

  export default function Experience() {
    return (
      <SectionWrapper id="experience" className="relative z-10 py-32 px-6 max-w-3xl mx-auto">
        <div className="mb-12">
          <span className="text-xs tracking-[0.3em] text-[#4cc9f0] uppercase font-mono">
            03
          </span>
          <h2 className="text-3xl font-light tracking-widest text-[#e0f4ff] mt-2">
            Experience
          </h2>
        </div>

        <div className="relative border-l border-[#1b263b] ml-4 pl-8">
          {resumeData.experience.map((exp, index) => (
            <motion.div
              key={index}
              className="relative mb-12 last:mb-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.2 } },
              }}
            >
              {/* 时间线节点 - 顺序点亮 */}
              <motion.div
                className="absolute -left-[37px] w-3 h-3 rounded-full bg-[#0d1b2a] border-2 border-[#4cc9f0]"
                style={{
                  boxShadow: '0 0 10px var(--color-glow), 0 0 20px var(--color-glow)',
                }}
                variants={nodeAnimation}
              />
              <motion.div variants={timelineItem}>
                <span className="text-xs text-[#4cc9f0] font-mono">{exp.yearRange}</span>
                <h3 className="text-xl text-[#e0f4ff] mt-1">{exp.role}</h3>
                <p className="text-[#778da9] mt-1">{exp.company}</p>
                {exp.bullets && exp.bullets.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="text-sm text-[#778da9]/80 leading-relaxed">
                        • {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    );
  }
  ```

  **关键实现点：**
  - `staggerChildren: 0.2` 让每个时间线条目延迟 0.2s 依次出现
  - `nodeAnimation` 使用 spring 动画让节点从 scale(0) 弹入
  - `whileInView` 确保滚动到视口时才触发动画
  - `once: true` 确保动画只触发一次

---

## 任务 9：Projects 组件

**文件：**
- 创建：`components/Projects.tsx`

- [ ] **Step 1: 创建 Projects 组件**

  **文件：** `components/Projects.tsx`

  ```typescript
  'use client';

  import SectionWrapper from './SectionWrapper';
  import { resumeData } from '@/lib/resume-data';

  export default function Projects() {
    return (
      <SectionWrapper id="projects" className="relative z-10 py-32 px-6 max-w-5xl mx-auto">
        <div className="mb-12">
          <span className="text-xs tracking-[0.3em] text-[#4cc9f0] uppercase font-mono">
            04
          </span>
          <h2 className="text-3xl font-light tracking-widest text-[#e0f4ff] mt-2">
            Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resumeData.projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-[#1b263b]/50 border border-[#1b263b] rounded-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#4cc9f0]/50 hover:shadow-[0_0_30px_rgba(76,201,240,0.15)]"
            >
              <h3 className="text-xl text-[#e0f4ff] mb-2">{project.title}</h3>
              <p className="text-[#778da9] text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techTags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-[#0d1b2a] text-[#4cc9f0] border border-[#4cc9f0]/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#778da9] hover:text-[#4cc9f0] transition-colors"
                  >
                    GitHub
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#778da9] hover:text-[#4cc9f0] transition-colors"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>
    );
  }
  ```

- [ ] **Step 2: 提交**

  ```bash
  git add components/Projects.tsx
  git commit -m "feat: add Projects card grid with hover effects"
  ```

---

## 任务 10：Skills 组件

**文件：**
- 创建：`components/Skills.tsx`

- [ ] **Step 1: 创建 Skills 组件**

  **文件：** `components/Skills.tsx`

  ```typescript
  'use client';

  import SectionWrapper from './SectionWrapper';
  import { resumeData } from '@/lib/resume-data';

  const categoryColors = {
    Frontend: 'text-[#4cc9f0] border-[#4cc9f0]/30 bg-[#4cc9f0]/10',
    Backend: 'text-[#a78bfa] border-[#a78bfa]/30 bg-[#a78bfa]/10',
    Tools: 'text-[#34d399] border-[#34d399]/30 bg-[#34d399]/10',
    Other: 'text-[#fbbf24] border-[#fbbf24]/30 bg-[#fbbf24]/10',
  };

  export default function Skills() {
    const categories = ['Frontend', 'Backend', 'Tools', 'Other'] as const;

    return (
      <SectionWrapper id="skills" className="relative z-10 py-32 px-6 max-w-3xl mx-auto">
        <div className="mb-12">
          <span className="text-xs tracking-[0.3em] text-[#4cc9f0] uppercase font-mono">
            05
          </span>
          <h2 className="text-3xl font-light tracking-widest text-[#e0f4ff] mt-2">
            Skills
          </h2>
        </div>

        <div className="space-y-8">
          {categories.map((category) => {
            const skills = resumeData.skills.filter((s) => s.category === category);
            if (skills.length === 0) return null;

            return (
              <div key={category}>
                <h3 className="text-sm text-[#778da9] mb-3 uppercase tracking-wider">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`px-4 py-2 rounded-full text-sm border transition-all duration-200 ${categoryColors[category]}`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </SectionWrapper>
    );
  }
  ```

- [ ] **Step 2: 提交**

  ```bash
  git add components/Skills.tsx
  git commit -m "feat: add Skills tag cloud with category colors"
  ```

---

## 任务 11：Contact 组件（含下划线动画）

**文件：**
- 创建：`components/Contact.tsx`

- [ ] **Step 1: 创建 Contact 组件（含下划线绘制动画）**

  **文件：** `components/Contact.tsx`

  ```typescript
  'use client';

  import SectionWrapper from './SectionWrapper';
  import { resumeData } from '@/lib/resume-data';
  import { motion } from 'framer-motion';

  const underlineAnimation = {
    rest: { scaleX: 0 },
    hover: {
      scaleX: 1,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  const iconAnimation = {
    rest: {
      borderColor: 'rgba(76, 201, 240, 0.3)',
      boxShadow: '0 0 0px transparent',
    },
    hover: {
      borderColor: 'rgba(76, 201, 240, 1)',
      boxShadow: '0 0 20px rgba(76, 201, 240, 0.4)',
      transition: { duration: 0.3 },
    },
  };

  const contactLinks = [
    {
      href: `mailto:${resumeData.email}`,
      label: 'Email',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4cc9f0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
    },
    {
      href: resumeData.github,
      label: 'GitHub',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4cc9f0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      ),
    },
    {
      href: resumeData.linkedin,
      label: 'LinkedIn',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4cc9f0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
  ];

  export default function Contact() {
    return (
      <SectionWrapper id="contact" className="relative z-10 py-32 px-6 max-w-3xl mx-auto text-center">
        <div className="mb-12">
          <span className="text-xs tracking-[0.3em] text-[#4cc9f0] uppercase font-mono">
            06
          </span>
          <h2 className="text-3xl font-light tracking-widest text-[#e0f4ff] mt-2">
            Contact
          </h2>
        </div>

        <p className="text-[#778da9] mb-12 font-light">
          欢迎联系我，期待与您的合作。
        </p>

        <div className="flex justify-center gap-12">
          {contactLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 group"
              initial="rest"
              whileHover="hover"
            >
              {/* 图标圆形背景 */}
              <motion.div
                className="w-14 h-14 rounded-full border-2 bg-[#0d1b2a]/50 flex items-center justify-center"
                variants={iconAnimation}
              >
                {link.icon}
              </motion.div>

              {/* 标签文字 */}
              <span className="text-sm text-[#778da9] group-hover:text-[#4cc9f0] transition-colors relative">
                {link.label}
                {/* 下划线绘制动画 */}
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-px bg-[#4cc9f0] origin-left"
                  variants={underlineAnimation}
                />
              </span>
            </motion.a>
          ))}
        </div>
      </SectionWrapper>
    );
  }
  ```

  **关键实现点：**
  - `underlineAnimation`: `scaleX: 0 → 1` 实现下划线从左向右绘制
  - `iconAnimation`: 边框颜色和光晕效果的变化
  - `whileHover="hover"` 触发子元素的 variants 动画
  - 使用 `origin-left` 让下划线从左端点开始绘制

- [ ] **Step 2: 提交**

  ```bash
  git add components/Contact.tsx
  git commit -m "feat: add Contact section with icon links"
  ```

---

## 任务 12：主页面组装

**文件：**
- 修改：`app/layout.tsx`
- 修改：`app/page.tsx`

- [ ] **Step 1: 更新 layout.tsx**

  **文件：** `app/layout.tsx`

  ```typescript
  import type { Metadata } from 'next';
  import { Geist, Geist_Mono } from 'next/font/google';
  import './globals.css';

  const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
  });

  const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
  });

  export const metadata: Metadata = {
    title: 'Your Name | Software Engineer',
    description: 'Personal website showcasing my work and experience.',
  };

  export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="zh-CN" className={`${geistSans.variable} ${geistMono.variable}`}>
        <body className="min-h-full">{children}</body>
      </html>
    );
  }
  ```

- [ ] **Step 2: 创建主页面 page.tsx**

  **文件：** `app/page.tsx`

  ```typescript
  import Navigation from '@/components/Navigation';
  import StarField from '@/components/StarField';
  import Hero from '@/components/Hero';
  import About from '@/components/About';
  import Education from '@/components/Education';
  import Experience from '@/components/Experience';
  import Projects from '@/components/Projects';
  import Skills from '@/components/Skills';
  import Contact from '@/components/Contact';

  export default function Home() {
    return (
      <main className="relative">
        <StarField />
        <Navigation />
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    );
  }
  ```

- [ ] **Step 3: 提交**

  ```bash
  git add app/layout.tsx app/page.tsx
  git commit -m "feat: assemble main page with all sections"
  ```

---

## 任务 13：测试与验证

- [ ] **Step 1: 启动开发服务器**

  ```bash
  npm run dev
  ```

  预期：服务器在 http://localhost:3000 启动

- [ ] **Step 2: 验证页面加载**

  打开浏览器访问 http://localhost:3000，检查：
  1. 星空背景是否正常显示（闪烁动画）
  2. 导航栏是否固定在顶部
  3. Hero 区域是否全屏显示姓名、头衔
  4. 六个模块是否垂直排列
  5. 滚动时动画是否触发

- [ ] **Step 3: 验证响应式**

  调整浏览器窗口大小，检查：
  1. 移动端（<768px）导航栏是否正常
  2. 项目卡片是否从双列变为单列

- [ ] **Step 4: 提交**

  ```bash
  git add -A
  git commit -m "feat: complete personal website with interstellar theme

  - Star field with twinkling animation
  - Single-page scrolling layout
  - Six resume modules with scroll-triggered reveals
  - Responsive design for mobile/tablet/desktop
  - Contact section with email, GitHub, LinkedIn links"
  ```

---

## 任务 14：内容填充

**重要：** 网站上线前需要替换占位内容。

- [ ] **Step 1: 更新简历数据**

  编辑 `lib/resume-data.ts`，替换以下内容：
  - `name`: 你的姓名
  - `title`: 你的职位头衔
  - `tagline`: 一句话简介
  - `about`: 个人简介
  - `education`: 教育经历
  - `experience`: 工作经历
  - `projects`: 项目经验
  - `skills`: 技能列表
  - `email`, `github`, `linkedin`: 联系方式

- [ ] **Step 2: 更新网站标题**

  编辑 `app/layout.tsx` 中的 `metadata.title`

- [ ] **Step 3: 最终提交**

  ```bash
  git add lib/resume-data.ts app/layout.tsx
  git commit -m "content: update resume data and metadata"
  ```
