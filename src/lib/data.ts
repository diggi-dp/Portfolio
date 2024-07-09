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
  SiMui,
  SiTailwindcss,
  SiShadcnui,
  SiPrisma,
  SiFramer,
  SiAntdesign,
} from 'react-icons/si';
import { CgWorkAlt } from 'react-icons/cg';
import { GiSkills } from 'react-icons/gi';

const iconMap = {
  home: FaHome,
  skill: GiSkills,
  work: MdOutlineWorkOutline,
  experience: FaBusinessTime,
  contact: MdContactMail,
  react: FaReact,
  nodejs: FaNodeJs,
  html: FaHtml5,
  tailwind: SiTailwindcss,
  shadcn: SiShadcnui,
  css: FaCss3,
  js: FaJs,
  mui: SiMui,
  antdesign: SiAntdesign,
  prisma: SiPrisma,
  git: FaGitAlt,
  nextjs: SiNextdotjs,
  typescript: SiTypescript,
  graphql: SiGraphql,
  nestjs: SiNestjs,
  redux: SiRedux,
  framer: SiFramer,
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
  { name: 'Skills', link: '#skills', icon: createIcon('skill') },
  { name: 'Projects', link: '#projects', icon: createIcon('work') },
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
    icon: createIcon('nextjs', { color: '#fff', size: 22 }),
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
  {
    name: 'Ant Design',
    icon: createIcon('antdesign', { color: '#F05032', size: 22 }),
  },
  {
    name: 'Material UI',
    icon: createIcon('mui', { color: '#007FFF', size: 22 }),
  },
  {
    name: 'Tailwind CSS',
    icon: createIcon('tailwind', { color: '#06B6D4', size: 22 }),
  },
  { name: 'Shadcn', icon: createIcon('shadcn', { color: '#fff', size: 22 }) },
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

export const ProjectsData = [
  {
    name: 'Breadit',
    description:
      'Breadit is a cutting-edge nextJs-13 full stack application utilizing app-router, designed to provide a seamless user experience. Leveraging the power of React, Next.js, Tailwind, Shadcn, Prisma, JavaScript, and TypeScript, this project showcases a robust and scalable architecture.',
    liveLink: 'https://thebreadit.vercel.app',
    techStack: [
      createIcon('react', { color: '#61DAFB', size: 24 }),
      createIcon('nextjs', { color: '#000000', size: 24 }),
      createIcon('tailwind', { color: '#06B6D4', size: 24 }),
      createIcon('shadcn', { color: '#fff', size: 24 }),
      createIcon('prisma', { color: '#2D3748', size: 24 }),
      createIcon('typescript', { color: '#3178C6', size: 24 }),
    ],
  },
  {
    name: 'Portfolio',
    description:
      'This portfolio website is a testament to my skills in front-end development, built using HTML, CSS, and JavaScript. With a focus on clean design and intuitive navigation, this project demonstrates my ability to craft engaging user interfaces and deliver a smooth user experience.',
    liveLink: 'digpalsingh.vercel.app',
    techStack: [
      createIcon('react', { color: '#61DAFB', size: 24 }),
      createIcon('nextjs', { color: '#000000', size: 24 }),
      createIcon('typescript', { color: '#3178C6', size: 24 }),
      createIcon('tailwind', { color: '#06B6D4', size: 24 }),
      createIcon('framer', { color: '#fff', size: 24 }),
    ],
  },
  {
    name: 'Crypto Tracer',
    description:
      'Crypto Tracer is a cryptocurrency tracking application built with React, JavaScript, and MUI. This project allows users to monitor market trends and track their favorite cryptocurrencies.',
    liveLink: 'https://crypto-tracer-1aa32.firebaseapp.com/',
    techStack: [
      createIcon('react', { color: '#61DAFB', size: 24 }),
      createIcon('js', { color: '#F7DF1E', size: 24 }),
      createIcon('mui', { color: '#007FFF', size: 24 }),
    ],
  },
  {
    name: 'Admin Dashboard UI',
    description:
      'The Admin Dashboard UI is a custom-built administrative interface designed to streamline workflows and enhance productivity. Built using React, JavaScript, CSS, and HTML, this project features a responsive design, intuitive navigation, and a robust set of features to help administrators manage their tasks efficiently.',
    liveLink: 'https://admin-penal-83e55.firebaseapp.com/',
    techStack: [
      createIcon('react', { color: '#61DAFB', size: 24 }),
      createIcon('js', { color: '#F7DF1E', size: 24 }),
      createIcon('css', { color: '#1572B6', size: 24 }),
      createIcon('html', { color: '#E34F26', size: 24 }),
    ],
  },
  {
    name: 'Kafene',
    description:
      'Kafene Kafene is a simple store management system built using React, designed to provide an intuitive and user-friendly experience for store owners and managers. This project demonstrates my ability to craft functional and efficient applications that meet the needs of users.',
    liveLink: 'https://kafene---store-management.firebaseapp.com/',
    techStack: [
      createIcon('react', { color: '#61DAFB', size: 24 }),
      createIcon('js', { color: '#F7DF1E', size: 24 }),
      createIcon('css', { color: '#1572B6', size: 24 }),
    ],
  },
];
