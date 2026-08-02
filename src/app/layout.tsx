import type { Metadata, Viewport } from 'next';
import { Cinzel, Outfit, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/lib/config/site.config';

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#05070a',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Digpal Singh Mandloi | Software Developer & Full-Stack Engineer',
    template: '%s | Digpal Singh Mandloi',
  },
  description:
    'Official Portfolio of Digpal Singh Mandloi - Software Developer with 3+ years of experience engineering high-performance web applications using React.js, Next.js, Node.js, Express.js, and Three.js.',
  authors: [{ name: 'Digpal Singh Mandloi', url: siteConfig.url }],
  creator: 'Digpal Singh Mandloi',
  publisher: 'Digpal Singh Mandloi',
  keywords: [
    'Digpal Singh Mandloi',
    'Software Developer',
    'Full Stack Engineer',
    'React.js Developer',
    'Next.js Specialist',
    'Node.js Engineer',
    'Indore Software Engineer',
    'Three.js Developer',
    'WebGL Portfolio',
    'TypeScript Developer',
    'Frontend Architect',
    'Software Engineer India',
    'Web Performance Optimization',
    'Redux Toolkit Specialist',
    'Tailwind CSS',
    'Shadcn UI',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Digpal Singh Mandloi | Software Developer Portfolio',
    description:
      'Explore the interactive cinematic portfolio of Digpal Singh Mandloi - 3+ years experience crafting scalable enterprise frontend & backend applications.',
    url: siteConfig.url,
    siteName: 'Digpal Singh Mandloi Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digpal Singh Mandloi | Software Developer',
    description:
      'Full-Stack & Frontend Engineer specializing in React.js, Next.js, Node.js, and high-performance WebGL experiences.',
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${siteConfig.url}/#person`,
        name: 'Digpal Singh Mandloi',
        jobTitle: 'Software Developer',
        worksFor: {
          '@type': 'Organization',
          name: 'Inara Consultancy Services',
        },
        url: siteConfig.url,
        email: 'mailto:digpalsinghmandloi1@gmail.com',
        telephone: '+918878810839',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Indore',
          addressRegion: 'M.P.',
          addressCountry: 'India',
        },
        sameAs: [
          'https://linkedin.com/in/digpal-singh-mandloi',
          'https://github.com/diggi-dp',
        ],
        knowsAbout: [
          'React.js',
          'Next.js',
          'Node.js',
          'Express.js',
          'JavaScript',
          'TypeScript',
          'Three.js',
          'Redux Toolkit',
          'Tailwind CSS',
          'RESTful APIs',
          'Frontend Engineering',
          'State Management',
          'Performance Optimization',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: 'Digpal Singh Mandloi Portfolio',
        description:
          'Official Interactive Portfolio of Digpal Singh Mandloi - Software Developer.',
        author: {
          '@id': `${siteConfig.url}/#person`,
        },
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${outfit.variable} ${jetbrainsMono.variable} dark`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-obsidian-900 text-slate-100 font-sans antialiased overflow-x-hidden">
        {/* CRT Scanline & Vignette Overlay Layers */}
        <div className="scanline-overlay" aria-hidden="true" />
        <div className="vignette-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
