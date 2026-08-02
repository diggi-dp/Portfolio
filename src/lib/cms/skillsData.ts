export interface SkillNodeData {
  id: string;
  name: string;
  category: 'Frontend' | 'Backend' | 'State & Data' | 'Tools & DevOps';
  position: [number, number, number];
  connections: string[];
  masteryYears: number;
}

export const skillsData: SkillNodeData[] = [
  {
    id: 'react',
    name: 'React.js',
    category: 'Frontend',
    position: [-6, 4, 0],
    connections: ['nextjs', 'redux', 'typescript'],
    masteryYears: 3,
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'Frontend',
    position: [-2, 6, 0],
    connections: ['react', 'typescript', 'tailwind'],
    masteryYears: 3,
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'Frontend',
    position: [2, 5, 0],
    connections: ['react', 'nextjs', 'nodejs'],
    masteryYears: 3,
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'Frontend',
    position: [-4, 1, 0],
    connections: ['nextjs', 'react'],
    masteryYears: 3,
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'Backend',
    position: [6, 4, 0],
    connections: ['express', 'typescript', 'postgresql'],
    masteryYears: 3,
  },
  {
    id: 'express',
    name: 'Express.js',
    category: 'Backend',
    position: [8, 1, 0],
    connections: ['nodejs', 'postgresql'],
    masteryYears: 3,
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL & Prisma',
    category: 'Backend',
    position: [4, -2, 0],
    connections: ['nodejs', 'express'],
    masteryYears: 2,
  },
  {
    id: 'redux',
    name: 'Redux Toolkit',
    category: 'State & Data',
    position: [-6, -2, 0],
    connections: ['react', 'aggrid'],
    masteryYears: 3,
  },
  {
    id: 'aggrid',
    name: 'AG Grid Virtualization',
    category: 'State & Data',
    position: [-2, -4, 0],
    connections: ['redux', 'react'],
    masteryYears: 2,
  },
  {
    id: 'threejs',
    name: 'Three.js & R3F',
    category: 'Frontend',
    position: [0, 0, 0],
    connections: ['react', 'nextjs'],
    masteryYears: 2,
  },
];
