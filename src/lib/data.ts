import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';

type Experience = {
  title: string;
  company: string;
  description: string[];
  icon: React.ReactNode;
  date: string;
};

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
    icon: React.createElement(CgWorkAlt, { size: 40 }),
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
    icon: React.createElement(CgWorkAlt, { size: 40 }),
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
    icon: React.createElement(CgWorkAlt, { size: 40 }),
    date: '2023 - Present',
  },
];
