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
  isClassified?: boolean;
}

export interface CareerEntry {
  status: 'active' | 'archived';
  role: string;
  company: string;
  period: string;
  description: string;
}

export const siteConfig = {
  name: 'Digpal Singh Mandloi | FULL-STACK ENGINEER',
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
    subtitle:
      'FULL-STACK DEVELOPER — FRONTEND-FIRST (REACT.JS || NEXT.JS || NODE.JS)',
    bio: 'Full-stack developer who leads with frontend — React.js and Next.js are first instinct, Node.js and Express.js close the loop when a feature needs to own its own data. 3+ years shipping production systems: an enterprise experience-authoring platform, a live Chrome injection engine, and now a real-time shipment and courier-tracking platform running end-to-end logistics operations.',
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
    badge: 'SOFTWARE ENGINEER || SCIENS LOGISTICS || INDORE, INDIA',
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
        {
          id: 'puzzle-4',
          title: 'REAL-TIME LOGISTICS CONTROL',
          subtitle: 'Shipment, OBC & Milestone Systems',
          description:
            'Architected multi-leg shipment workflows — stages, legs, layovers, and onboard-courier assignment — plus Halo, a courier-facing app for live milestone updates from the field.',
        },
      ],
    },
    chapter3: {
      tag: '[ CHAPTER III: THE SUPPLY LINE ]',
      title: 'CAREER TRANSMISSION LOG',
      subtitle:
        'Operational history — active deployments and archived missions.',
      careers: [
        {
          status: 'active',
          role: 'FULL-STACK DEVELOPER',
          company: 'SCIENS LOGISTICS',
          period: 'SEP 2026 — PRESENT',
          description:
            'Building the core shipment management platform for a global freight-forwarding operation: shipment creation, multi-leg stage/leg/layover configuration, and OBC (Onboard Courier) assignment. Designed and built Halo, the courier-facing app for real-time milestone updates from the field. Using TanStack Query to keep shipment data in sync across the UI as it changes.',
        },
        {
          status: 'archived',
          role: 'SOFTWARE ENGINEER',
          company: 'INARA CONSULTANCY SERVICES',
          period: 'SEP 2023 — AUG 2026',
          description:
            'Led frontend development for Stride, an enterprise experience-management platform enabling non-technical teams to author and preview live web experiences. Built the Stride Chrome Extension — a Manifest V3 live web injector syncing with Adobe Target, AEM, and Contentful. Cut redundant API calls 25%, editor load times 50%, and UI time-to-market 40%.',
        },
      ] as CareerEntry[],
    },
    chapter4: {
      tag: '[ CHAPTER IV: CHRONICLES OF CREATION ]',
      title: 'THE DIMENSIONAL ARCHIVES',
      subtitle:
        'Select any project below to launch its full 3D interactive world, live metrics, and enterprise architecture blueprint.',
    },
    chapter5: {
      tag: '[ CHAPTER V: THE TRIAL OF MASTERY ]',
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
            'TanStack Query',
            'Redux Toolkit',
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
    chapter6: {
      tag: '[ CHAPTER VI: TRANSMISSION NEXUS ]',
      title: 'INITIATE SIGNAL TRANSMISSION',
      subtitle:
        'Ready to collaborate on high-impact full-stack platforms — from enterprise authoring tools to real-time logistics systems? Send a direct message below.',
    },
  },
  experiences: [
    {
      company: 'Sciens Logistics',
      role: 'Full-Stack Developer',
      period: 'Sep 2026 - Present',
      highlights: [
        'Building the core shipment management platform for a global freight-forwarding operation.',
        'Architected multi-leg shipment workflows — stages, legs, layovers, and OBC assignment.',
        'Designed and built Halo, the courier-facing app for real-time milestone updates from the field.',
        'Using TanStack Query to keep shipment data in sync across the UI as it changes.',
      ],
    },
    {
      company: 'Inara Consultancy Services',
      role: 'Software Engineer',
      period: 'Sep 2023 - Aug 2026',
      highlights: [
        'Led frontend development for Stride, an enterprise experience-management platform enabling non-technical teams to author and preview live web experiences.',
        'Built the Stride Chrome Extension — a Manifest V3 live web injector syncing with Adobe Target, AEM, and Contentful.',
        'Cut redundant API calls 25%, editor load times 50%, and UI time-to-market 40%.',
        'Built reusable, modular UI components and implemented Redux for predictable state management.',
        'Implemented Auth0-based authentication, managing multiple organizations and user roles efficiently.',
      ],
    },
  ],
  achievements: [
    'Top Performer at Inara Consultancy Services for delivering high-quality software solutions.',
    'Recognized for reducing frontend development time by 30% through optimized component reusability.',
    'Architected the core shipment management platform at Sciens Logistics.',
  ],
  projects: [
    {
      id: 'shipment-obc-platform',
      title: 'SHIPMENT & OBC ORCHESTRATION PLATFORM',
      subtitle: 'Real-Time Multi-Leg Shipment & Courier Assignment Engine',
      image: '/assets/images/stride.png',
      relicGeometry: 'icosahedron',
      color: '#4ef2d2',
      architecture:
        'Architected the core shipment management platform for a global freight-forwarding operation — shipment creation, multi-leg stage/leg/layover configuration, and OBC (Onboard Courier) assignment.',
      challenges: [
        'Designing multi-leg shipment workflows with dynamic stage/leg/layover configuration.',
        'Building real-time OBC assignment and tracking across distributed courier networks.',
        'Keeping shipment data in sync across the UI using TanStack Query.',
      ],
      stack: [
        'React.js',
        'Next.js',
        'TypeScript',
        'TanStack Query',
        'Node.js',
        'Tailwind CSS',
        'Shadcn UI',
      ],
      timeline: 'Sep 2026 - Present',
      metrics: [
        { label: 'Multi-Leg Workflow Automation', value: '100%' },
        { label: 'Real-Time Data Sync Latency', value: '<200ms' },
      ],
      lessonsLearned:
        'TanStack Query mutation/invalidation patterns are essential for keeping complex multi-entity UIs in sync without manual cache management.',
      isClassified: true,
    },
    {
      id: 'halo-obc-app',
      title: 'HALO — OBC FIELD APPLICATION',
      subtitle: 'Courier-Facing Real-Time Milestone Update Interface',
      image: '/assets/images/stride.png',
      relicGeometry: 'cube',
      color: '#dfa84a',
      architecture:
        'Designed and built Halo, a mobile-first courier-facing application for real-time milestone updates from the field, integrated with the shipment management platform.',
      challenges: [
        'Building a mobile-first interface optimized for field couriers with unreliable connectivity.',
        'Implementing real-time milestone update workflows with offline-first data sync.',
        'Integrating with the shipment platform for live status propagation.',
      ],
      stack: [
        'React.js',
        'TypeScript',
        'TanStack Query',
        'Tailwind CSS',
        'Shadcn UI',
        'PWA',
      ],
      timeline: 'Sep 2026 - Present',
      metrics: [
        { label: 'Milestone Update Speed', value: 'Real-Time' },
        { label: 'Mobile-First Coverage', value: '100%' },
      ],
      lessonsLearned:
        'Mobile-first field applications demand aggressive offline-first strategies and graceful degradation for unreliable network conditions.',
      isClassified: true,
    },
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
      timeline: 'Sep 2023 - Aug 2026',
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
      timeline: 'Sep 2023 - Aug 2026',
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
