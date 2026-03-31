# Personal Portfolio Website

一个现代化的个人简历/作品集网站，采用 **Data Terminal Noir** 设计风格。

## 🎨 设计特性

- **主题**：深空黑底 + 青色全息光效 + 琥珀色点缀
- **字体**：Syne (标题) + JetBrains Mono (代码感)
- **背景**：动态网格拓扑 + 双色星云光晕
- **卡片**：玻璃拟态 + 全息流光边框
- **动效**：编排式入场动画 + 悬浮光效 + 脉冲时间线节点

## ✨ 新版 UI 优化

| 模块 | 特性 |
|------|------|
| Hero | 打字机效果 + 终端样式 + 漂浮粒子 |
| Navigation | 毛玻璃 + 滚动进度条 + 发光链接 |
| Projects | 玻璃拟态卡片 + 全息边框 + 悬浮光效 |
| Skills | 技能熟练度进度条 + 分类发光 |
| Experience | 脉冲时间线节点 + 渐变连线 |
| Contact | 图标光效 + 终端风格签名 |

## 🚀 技术栈

- **框架**：Next.js 16 + Turbopack
- **样式**：Tailwind CSS 4
- **动画**：Framer Motion 12
- **字体**：Google Fonts (Syne, JetBrains Mono)

## 📦 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 代码检查
npm run lint
```

## 📁 项目结构

```
├── app/
│   ├── globals.css      # 全局样式 + CSS 变量
│   ├── layout.tsx       # 根布局
│   └── page.tsx         # 首页
├── components/
│   ├── Hero.tsx         # Hero 区域
│   ├── Navigation.tsx    # 导航栏
│   ├── About.tsx        # 关于
│   ├── Education.tsx     # 教育经历
│   ├── Experience.tsx    # 工作经历
│   ├── Projects.tsx      # 项目作品
│   ├── Skills.tsx        # 技能展示
│   ├── Contact.tsx       # 联系方式
│   ├── StarField.tsx     # 星空背景
│   └── SectionWrapper.tsx # 区块封装
├── lib/
│   └── resume-data.ts    # 简历数据
└── types/
    └── resume.ts         # TypeScript 类型
```

## 📝 数据配置

编辑 `lib/resume-data.ts` 自定义个人信息。

## 🔧 构建

```bash
# 生产构建
npm run build

# 启动生产服务器
npm start
```
