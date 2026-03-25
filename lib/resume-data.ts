import { ResumeData } from '@/types/resume';

export const resumeData: ResumeData = {
  name: 'Your Name',
  title: 'Software Engineer',
  tagline: 'Building the future, one commit at a time',
  about: 'Passionate about backend technologies with deep understanding of cloud-native and distributed systems. Good programming habits and coding style, skilled at solving complex technical problems.',
  education: [
    {
      degree: "Bachelor's · Design",
      institution: 'Your University',
      year: '2016 - 2020',
      description: 'CET-4',
    },
  ],
  experience: [
    {
      role: 'LLM Application Engineer / Data Engineer',
      company: 'Tech Company A',
      yearRange: '2022 - Present',
      bullets: [
        'Participated in data warehouse project requirements analysis',
        'Responsible for mapping documentation and requirement whitepapers',
        'Daily ETL script development, data testing, production operations',
      ],
    },
    {
      role: 'Data Engineer',
      company: 'Tech Company B',
      yearRange: '2021 - 2022',
      bullets: [
        'Participated in data platform migration project',
        'Daily production script iteration and maintenance',
      ],
    },
    {
      role: 'ETL Engineer',
      company: 'Tech Company C',
      yearRange: '2021',
      bullets: [
        'Participated in banking system project development',
        'Daily stored procedures and Shell script development',
      ],
    },
  ],
  projects: [
    {
      title: 'LangChain-based Data Lake Agent',
      description: 'An agent system based on LangChain for automating data lake entry processes. Intelligently parses data dictionaries and generates DDL and ETL scripts.',
      techTags: ['LangChain', 'LLM', 'Python'],
      githubUrl: '',
    },
    {
      title: 'LangGraph-based NL2SQL System',
      description: 'Converts natural language queries into executable SQL using NL2SQL technology for Impala and Hive data warehouses.',
      techTags: ['LangGraph', 'RAG', 'NL2SQL', 'Chroma'],
      githubUrl: '',
    },
    {
      title: 'RAG-based Enterprise Knowledge Base',
      description: 'AI training and Q&A platform for enterprise employees, integrating business knowledge through RAG technology.',
      techTags: ['RAG', 'LangChain', 'Vector Search'],
      githubUrl: '',
    },
    {
      title: 'Enterprise Credit System Project',
      description: 'Data warehouse support for enterprise credit system transformation.',
      techTags: ['Python', 'Perl', 'GaussDB', 'SQL', 'Shell'],
      githubUrl: '',
    },
    {
      title: 'Banking Core System 3.0',
      description: 'Accounting engine system construction for transaction-accounting separation.',
      techTags: ['Python', 'Perl', 'GaussDB', 'Teradata', 'SQL'],
      githubUrl: '',
    },
    {
      title: 'Data Platform Migration',
      description: 'Migrated data warehouse from Teradata to GaussDB platform.',
      techTags: ['Teradata', 'GaussDB', 'ETL', 'Shell'],
      githubUrl: '',
    },
  ],
  skills: [
    // AI/LLM
    { name: 'LangChain', category: 'AI/LLM' },
    { name: 'LangGraph', category: 'AI/LLM' },
    { name: 'RAG', category: 'AI/LLM' },
    { name: 'Agent', category: 'AI/LLM' },
    { name: 'Prompt Engineering', category: 'AI/LLM' },
    { name: 'PyTorch', category: 'AI/LLM' },
    { name: 'LoRA Fine-tuning', category: 'AI/LLM' },
    // Programming
    { name: 'Python', category: 'Programming' },
    { name: 'Shell', category: 'Programming' },
    { name: 'Perl', category: 'Programming' },
    { name: 'SQL', category: 'Programming' },
    // Database
    { name: 'Oracle', category: 'Database' },
    { name: 'Teradata', category: 'Database' },
    { name: 'GaussDB', category: 'Database' },
    { name: 'MySQL', category: 'Database' },
    // Big Data
    { name: 'HDFS', category: 'Big Data' },
    { name: 'Impala', category: 'Big Data' },
    { name: 'Hive', category: 'Big Data' },
    { name: 'Kafka', category: 'Big Data' },
    // Tools
    { name: 'Linux', category: 'Tools' },
    { name: 'Git', category: 'Tools' },
  ],
  email: 'your.email@example.com',
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
};
