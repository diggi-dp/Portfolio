import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme.provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Digpal Singh Mandloi | Portfolio',
  description: 'Software Developer with expertise in ReactJS',
  keywords: [
    'reactjs',
    'software developer',
    'portfolio',
    'nextjs',
    'nextjs portfolio',
    'nextjs with tailwindcss',
  ],
  authors: [{ name: 'Digpal Singh Mandloi' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Digpal Singh Mandloi | Portfolio',
    description: 'Software Developer with expertise in ReactJS',
    url: 'https://digpalsingh.vercel.app',
    siteName: 'Digpal Singh Mandloi',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
