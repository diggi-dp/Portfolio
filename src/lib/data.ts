import React from 'react';
import {
  FaHome,
  FaBusinessTime,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3,
  FaJs,
  FaGitAlt,
} from 'react-icons/fa';
import { MdOutlineWorkOutline, MdContactMail } from 'react-icons/md';
import {
  SiNextdotjs,
  SiTypescript,
  SiGraphql,
  SiNestjs,
  SiRedux,
} from 'react-icons/si';
import { CgWorkAlt } from 'react-icons/cg';

const iconMap = {
  home: FaHome,
  work: MdOutlineWorkOutline,
  experience: FaBusinessTime,
  contact: MdContactMail,
  react: FaReact,
  nodejs: FaNodeJs,
  html: FaHtml5,
  css: FaCss3,
  js: FaJs,
  git: FaGitAlt,
  nextjs: SiNextdotjs,
  typescript: SiTypescript,
  graphql: SiGraphql,
  nestjs: SiNestjs,
  redux: SiRedux,
  workAlt: CgWorkAlt,
};

type Experience = {
  title: string;
  company: string;
  description: string[];
  icon: React.ReactNode;
  date: string;
};

export type Skills = {
  name: string;
  icon: React.ReactNode;
};

const createIcon = (iconName: keyof typeof iconMap, props?: object) =>
  React.createElement(iconMap[iconName], props);

export const NavItems = [
  { name: 'Home', link: '#home', icon: createIcon('home') },
  { name: 'Work', link: '#work', icon: createIcon('work') },
  { name: 'Experience', link: '#experience', icon: createIcon('experience') },
  { name: 'Contact', link: '#contact', icon: createIcon('contact') },
];

export const SkillsData = [
  {
    name: 'JavaScript',
    icon: createIcon('js', { color: '#F7DF1E', size: 22 }),
  },
  { name: 'React', icon: createIcon('react', { color: '#61DAFB', size: 22 }) },
  { name: 'Redux', icon: createIcon('redux', { color: '#764ABC', size: 22 }) },
  {
    name: 'Next.js',
    icon: createIcon('nextjs', { color: '#000000', size: 22 }),
  },
  {
    name: 'Node.js',
    icon: createIcon('nodejs', { color: '#339933', size: 22 }),
  },
  {
    name: 'GraphQL',
    icon: createIcon('graphql', { color: '#E10098', size: 22 }),
  },
  {
    name: 'Nest.js',
    icon: createIcon('nestjs', { color: '#E0234E', size: 22 }),
  },
  {
    name: 'TypeScript',
    icon: createIcon('typescript', { color: '#3178C6', size: 22 }),
  },
  { name: 'HTML', icon: createIcon('html', { color: '#E34F26', size: 22 }) },
  { name: 'CSS', icon: createIcon('css', { color: '#1572B6', size: 22 }) },
  { name: 'GIT', icon: createIcon('git', { color: '#F05032', size: 22 }) },
];

export const experiencesData: Experience[] = [
  {
    title: 'ReactJS Developer',
    company: 'Soft Spectrum Technology',
    description: [
      '🚀 Worked on developing and maintaining the Mechanic24 project using ReactJS, Redux, MUI.',
      '🔩 Built reusable components.',
      '💡 Conducted user requirements analysis to design and program applications.',
      '📋 Worked with and wrote semantic HTML tags.',
      '🌐 Extensively worked with APIs.',
    ],
    icon: createIcon('workAlt', { size: 40 }),
    date: '2021 - 2023',
  },
  {
    title: 'Software Engineer',
    company: 'CreativeEncode technology',
    description: [
      '🚀 Developed and maintained UI components using modern React libraries',
      '📱 Implemented responsive design for mobile and web applications.',
      '📚 Learned Next.js and created an admin panel.',
      '📊 Created a quiz app using React Native.',
    ],
    icon: createIcon('workAlt', { size: 40 }),
    date: '2023 - 2023',
  },
  {
    title: 'Software Engineer',
    company: 'Inara Consultancy Services',
    description: [
      '🚀 Developed and maintained PMS and Wave-microservice projects using NextJs, Antd, NodeJs, Nx.',
      '🎨 Used UI libraries such as Ant Design.',
      '🌐 Designed and implemented RESTful APIs using Node.js, NestJS, and Express.js',
      '💻 Implemented various features and delivered high-quality code.',
      '🔧 Refactored existing code to improve performance and maintainability',
      '🔗 Collaborated with backend developers to integrate RESTful APIs.',
      '🕷️ Fixed defects communicated by testers.',
      '💻 Developed code based on requirements analysis, bug fixing, and product maintenance.',
      '📊 Used various CMS such as keystoneJS, TinaCMS',
      '📈 Worked on multiple projects such as Atlantis Health, Swerve, WaweBites and updates.',
    ],
    icon: createIcon('workAlt', { size: 40 }),
    date: '2023 - Present',
  },
];
