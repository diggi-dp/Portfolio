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
    default:
      'Digpal Singh Mandloi | Full-Stack Engineer — React.js, Next.js, Node.js',
    template: '%s | Digpal Singh Mandloi',
  },
  description:
    'Portfolio of Digpal Singh Mandloi — Full-Stack Software Engineer with 3+ years building high-performance web applications and real-time operational platforms using React.js, Next.js, Node.js, and Three.js. Currently engineering shipment & logistics systems at Sciens Logistics.',
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
    'Logistics Software Engineer',
    'Shipment Tracking Systems',
    'TanStack Query Developer',
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
    title: 'Digpal Singh Mandloi | Full-Stack Engineer Portfolio',
    description:
      'Explore the interactive cinematic portfolio of Digpal Singh Mandloi — 3+ years engineering scalable frontend & backend systems, from enterprise experience platforms to real-time logistics infrastructure.',
    url: siteConfig.url,
    siteName: 'Digpal Singh Mandloi Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digpal Singh Mandloi | Full-Stack Engineer',
    description:
      'Full-Stack & Frontend Engineer specializing in React.js, Next.js, Node.js, and real-time operational systems.',
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
        jobTitle: 'Full-Stack Developer',
        worksFor: {
          '@type': 'Organization',
          name: 'Sciens Logistics',
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
          'TanStack Query',
          'Tailwind CSS',
          'RESTful APIs',
          'Frontend Engineering',
          'State Management',
          'Performance Optimization',
          'Shipment Tracking Systems',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: 'Digpal Singh Mandloi Portfolio',
        description:
          'Official Interactive Portfolio of Digpal Singh Mandloi - Full-Stack Engineer.',
        author: {
          '@id': `${siteConfig.url}/#person`,
        },
      },
    ],
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${cinzel.variable} ${outfit.variable} ${jetbrainsMono.variable} dark`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="bg-obsidian-900 text-slate-100 font-sans antialiased overflow-x-hidden"
      >
        {/* CRT Scanline & Vignette Overlay Layers */}
        <div className="scanline-overlay" aria-hidden="true" />
        <div className="vignette-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
