import Experience from '@/components/Experience';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import { FloatingNav } from '@/components/ui/floating-navbar';
import { NavItems } from '@/lib/data';

export default function Home() {
  return (
    <main className="relative mx-auto flex flex-col items-center justify-center overflow-hidden bg-black-100">
      <div className="w-full">
        <FloatingNav navItems={NavItems} />
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
