import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 text-white p-6 text-center font-mono">
      <h1 className="text-6xl font-serif font-bold text-amber-400 mb-4">404</h1>
      <p className="text-xl text-slate-300 mb-8">
        [ SIGNAL LOST: SECTOR NOT FOUND ]
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-full bg-cyan-500/20 border border-cyan-500/50 text-cyan-300 hover:bg-cyan-400 hover:text-slate-950 transition-all text-sm uppercase tracking-widest font-bold"
      >
        RETURN TO NEXUS ARCHIVE
      </Link>
    </div>
  );
}
