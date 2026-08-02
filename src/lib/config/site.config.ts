export interface ProjectConfigData {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  relicGeometry: 'icosahedron' | 'cube' | 'octahedron' | 'dodecahedron';
  color: string;
  architecture: string;
  challenges: string[];
  stack: string[];
  timeline: string;
  metrics: { label: string; value: string }[];
  lessonsLearned: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const siteConfig = {
  name: 'Digpal Singh Mandloi | SOFTWARE ENGINEER',
  shortName: 'Digpal Mandloi',
  description:
    'An interactive 3D cinematic experience showcasing high-performance distributed systems, WebGL architecture, and real-time graphics engineering.',
  url: 'https://digpalmandloi.com',
  ogImage: '/og-image.jpg',
  author: 'Digpal Singh Mandloi',
  developer: {
    name: 'DIGPAL SINGH MANDLOI',
    shortName: 'Digpal Mandloi',
    title: 'SOFTWARE ENGINEER',
    subtitle: 'FULL-STACK DEVELOPER (REACT.JS || NEXT.JS || NODE.JS)',
    bio: 'Results-driven Software Developer with a strong focus on frontend technologies coupled with backend expertise, boasting 3+ years of experience in crafting scalable web applications using React.js, Next.js, Node.js and Express.js.',
    location: 'Indore, M.P., India',
    coordinates: "64°08'N 21°56'W",
  },
  links: {
    github: 'https://github.com/diggi-dp/',
    linkedin: 'https://www.linkedin.com/in/digpal-singh-mandloi-91b865268/',
    email: 'digpalsinghmandloi1@gmail.com',
    phone: '+91 88788 10839',
    resume: '/resume.pdf',
  },
  hero: {
    badge: 'SOFTWARE ENGINEER || INDORE, INDIA',
    scrollDirective: '[ SCROLL DOWN TO TRAVEL THROUGH CHAPTERS ]',
  },
  chapters: {
    chapter1: {
      tag: '[ CHAPTER I: THE FROZEN RIDGE ]',
      title: 'DIGPAL SINGH MANDLOI',
      subtitle: 'FULL-STACK DEVELOPER',
    },
    chapter2: {
      tag: '[ CHAPTER II: THE CHAMBER OF EQUILIBRIUM ]',
      title: 'ENGINEERING MINDSET & PHILOSOPHY',
      subtitle:
        'Engineering is the resolution of complex challenges into intuitive, scalable software.',
      cards: [
        {
          id: 'puzzle-1',
          title: 'REUSABLE UI ARCHITECTURE',
          subtitle: 'Component Reusability & Efficiency',
          description:
            'Reduced frontend development time by 30% and time-to-market for UI updates by 40% through modular component architecture.',
        },
        {
          id: 'puzzle-2',
          title: 'ENTERPRISE DATA VIRTUALIZATION',
          subtitle: 'AG Grid & High-Speed Rendering',
          description:
            'Optimized large enterprise datasets (>50,000 rows) with zero scroll latency, boosting data visualization efficiency by 40%.',
        },
        {
          id: 'puzzle-3',
          title: 'LIVE WEB INJECTOR ENGINE',
          subtitle: 'Manifest V3 Chrome Extension',
          description:
            'Designed sub-second live script injection extension syncing with Adobe Target, AEM, & Contentful for real-time validation.',
        },
      ],
    },
    chapter3: {
      tag: '[ CHAPTER III: CHRONICLES OF CREATION ]',
      title: 'THE DIMENSIONAL ARCHIVES',
      subtitle:
        'Select any project below to launch its full 3D interactive world, live metrics, and enterprise architecture blueprint.',
    },
    chapter4: {
      tag: '[ CHAPTER IV: THE TRIAL OF MASTERY ]',
      title: 'TECHNOLOGY CONSTELLATION & MASTERY',
      subtitle:
        'A comprehensive breakdown of core engineering proficiencies powering modern web applications and tools.',
      categories: [
        {
          title: 'FRONTEND DEVELOPMENT',
          skills: [
            'JavaScript',
            'React.js',
            'Redux',
            'Next.js',
            'Tailwind CSS',
            'Ant Design',
            'Shadcn UI',
            'Material UI',
          ],
        },
        {
          title: 'STATE & DATA FETCHING',
          skills: [
            'Redux Toolkit',
            'TanStack Query',
            'RESTful APIs',
            'Performance Optimization',
            'Code Refactoring',
          ],
        },
        {
          title: 'BACKEND & SECURITY',
          skills: [
            'Node.js',
            'Express.js',
            'Auth0',
            'RBAC',
            'MongoDB',
            'PostgreSQL',
          ],
        },
        {
          title: 'TOOLS & INTEGRATIONS',
          skills: [
            'Git',
            'Webpack',
            'Vite',
            'VS Code',
            'Adobe Target',
            'AEM',
            'Contentful',
          ],
        },
      ],
    },
    chapter5: {
      tag: '[ CHAPTER V: TRANSMISSION NEXUS ]',
      title: 'INITIATE SIGNAL TRANSMISSION',
      subtitle:
        'Ready to collaborate on high-impact full-stack web platforms or enterprise tools? Send a direct message below.',
    },
  },
  experiences: [
    {
      company: 'Inara Consultancy Services',
      role: 'Software Engineer',
      period: 'Sep 2023 - Present',
      highlights: [
        'Led frontend development for the Stride experience management platform, enabling teams to author, preview, and validate personalized web experiences and offers.',
        'Built reusable, modular UI components and implemented Redux for predictable state management across the editor and dashboard.',
        'Designed and implemented a Chrome extension for real-time preview and editing on live and staging sites; owned development, deployment, and maintenance.',
        'Integrated with third-party systems including Adobe Target, AEM, Contentful, and GitHub to enable content sync and deployment workflows.',
        'Optimized data fetching and caching strategies, reducing redundant API requests by 25% and improving editor load times by 50%.',
        'Increased overall workflow efficiency and reduced time-to-market for UI updates by 40% through component reuse and editor improvements.',
        'Delivered high client satisfaction through rapid iteration and responsive support.',
        'Implemented Auth0-based authentication, managing multiple organizations and user roles efficiently.',
      ],
    },
    {
      company: 'Creative Encode Technologies',
      role: 'Software Engineer',
      period: 'April 2023 – Sep 2023',
      highlights: [
        'Built and maintained UI components using React.js and Next.js.',
        'Implemented TanStack Query to optimize data fetching and caching, reducing redundant API calls by 50%.',
        'Improved state management and reduced unnecessary re-renders, enhancing app performance and maintainability.',
        'Built a React Native quiz app to increase mobile engagement and cross-platform reach.',
      ],
    },
  ],
  achievements: [
    'Top Performer at Inara Consultancy Services for delivering high-quality software solutions.',
    'Recognized for reducing frontend development time by 30% through optimized component reusability.',
  ],
  projects: [
    {
      id: 'stride-platform',
      title: 'STRIDE EXPERIENCE MANAGEMENT PLATFORM',
      subtitle:
        'Enterprise Multi-Tenant Experience Management & Live Authoring Engine',
      image: '/assets/images/stride.png',
      relicGeometry: 'icosahedron',
      color: '#dfa84a',
      architecture:
        'Developed a scalable template and experience management system enabling teams to author, preview, and validate targeted web interactions and manage offers.',
      challenges: [
        'Managing high-frequency live authoring state without UI re-render bottlenecks.',
        'Optimizing management of large enterprise datasets (>50,000 rows) using AG Grid, improving data visualization efficiency by 40%.',
        'Implementing role-based access and multi-organization support using Auth0 and RBAC.',
      ],
      stack: [
        'React.js',
        'Next.js',
        'Redux',
        'Node.js',
        'AG Grid',
        'Auth0',
        'RBAC',
        'Nx Monorepo',
        'Tailwind CSS',
      ],
      timeline: 'Sep 2023 - Present',
      metrics: [
        { label: 'Data Visualization Efficiency Boost', value: '40%' },
        { label: 'User Workflow Efficiency Boost', value: '35%' },
        { label: 'Redundant API Call Reduction', value: '25%' },
      ],
      lessonsLearned:
        'Decoupling heavy state management from UI presentation layers and virtualizing massive datasets is paramount when building enterprise platforms.',
      liveUrl: 'https://stridetech.io',
    },
    {
      id: 'stride-extension',
      title: 'STRIDE CHROME EXTENSION',
      subtitle: 'Real-Time Live Web Injector & Adobe Target / Contentful Lens',
      image: '/assets/images/extension.png',
      relicGeometry: 'cube',
      color: '#4ef2d2',
      architecture:
        'Designed and implemented a Manifest V3 Chrome extension enabling real-time editing and preview of personalized experiences and offers on live and staging sites.',
      challenges: [
        'Enabling dynamic script injection and retrieval from APIs to support live updates without manual deployment.',
        'Integrating with Adobe Target, AEM, Contentful, and GitHub to allow content sync and instant previews.',
        'Single-handedly owning development and client support, contributing to strong client satisfaction.',
      ],
      stack: [
        'JavaScript ES6+',
        'Chrome Extension V3',
        'Adobe Target',
        'AEM',
        'Contentful',
        'GitHub API',
        'REST API',
      ],
      timeline: 'Sep 2023 - Present',
      metrics: [
        {
          label: 'Template Modification & Validation Time Reduction',
          value: '40%',
        },
        { label: 'Editing Responsiveness Boost', value: '50%' },
        { label: 'Client Support Rating', value: '100%' },
      ],
      lessonsLearned:
        'Single-handed tool ownership requires hyper-defensive script injection architecture and seamless third-party API integration.',
      liveUrl:
        'https://chromewebstore.google.com/detail/stride/aecikcpamgflkkblnoidcilcilkbfaff',
    },
    {
      id: 'breadit',
      title: 'BREADIT COMMUNITY PLATFORM',
      subtitle: 'Full-Stack Next.js Relational Community Platform',
      image: '/assets/images/breadit.png',
      relicGeometry: 'octahedron',
      color: '#00ff9d',
      architecture:
        'Full-Stack Next.js App Router architecture utilizing React Server Components, Prisma ORM, PostgreSQL database indexing, and NextAuth.js authentication.',
      challenges: [
        'Optimizing data fetching and caching using TanStack Query and React Server Components.',
        'Implementing secure type-safe database queries across relational community entities.',
      ],
      stack: [
        'Next.js',
        'React.js',
        'TypeScript',
        'Prisma ORM',
        'PostgreSQL',
        'Tailwind CSS',
        'Shadcn UI',
      ],
      timeline: 'Personal Project',
      metrics: [
        { label: 'Type Safety Across Client-Server', value: '100%' },
        { label: 'Server-Side Render Latency', value: '< 100ms' },
      ],
      lessonsLearned:
        'Server Components dramatically simplify state synchronization while delivering superior performance.',
      liveUrl: 'https://thebreadit.vercel.app/',
    },
    {
      id: 'dashboard-dp',
      title: 'DASHBOARD DP VISUALIZATION ENGINE',
      subtitle: 'High-Performance Real-Time Analytics & Data Grid Engine',
      image: '/assets/images/dashboard.png',
      relicGeometry: 'dodecahedron',
      color: '#3df6ff',
      architecture:
        'Modular React dashboard engine built with Vite, TypeScript, Shadcn UI, and Tailwind CSS, featuring high-speed state management and responsive data grids.',
      challenges: [
        'Maintaining 60 FPS UI rendering speed while updating real-time chart data feeds.',
        'Implementing TanStack Query to optimize data fetching and caching, reducing redundant API calls by 50%.',
      ],
      stack: [
        'React.js',
        'Vite',
        'TypeScript',
        'Tailwind CSS',
        'Shadcn UI',
        'Recharts',
      ],
      timeline: 'Personal Project',
      metrics: [
        { label: 'Chart Animation Rendering Speed', value: '60 FPS' },
        { label: 'Redundant API Call Reduction', value: '50%' },
      ],
      lessonsLearned:
        'Vite + TypeScript provides unmatched developer feedback velocity and lightning-fast production bundle speeds.',
      liveUrl: 'https://dashboard-dp.vercel.app',
    },
  ] as ProjectConfigData[],
  themeColors: {
    obsidian: '#030712',
    amber: '#f59e0b',
    cyan: '#06b6d4',
    emerald: '#10b981',
    slate: '#1e293b',
  },
} as const;

export type SiteConfig = typeof siteConfig;
