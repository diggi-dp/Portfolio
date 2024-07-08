import Experience from '@/components/Experience';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import { FloatingNav } from '@/components/ui/floating-navbar';
import { FaHome } from 'react-icons/fa';

const navItems = [
  { name: 'Home', link: '#home', icon: <FaHome /> },
  { name: 'Work', link: '#work', icon: <FaHome /> },
  { name: 'Experience', link: '#experience', icon: <FaHome /> },
  { name: 'Contact', link: '#contact', icon: <FaHome /> },
];

export default function Home() {
  return (
    <main className="relative mx-auto flex flex-col items-center justify-center overflow-hidden bg-black-100">
      <div className="w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <div className="relative -top-10 flex h-20 items-center justify-center">
          <div className="absolute inset-y-0 w-1 bg-slate-500"></div>
        </div>
        <Skills />
        <Experience />
      </div>
    </main>
  );
}
