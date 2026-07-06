import type { Metadata } from 'next';
import { Spline_Sans, Plus_Jakarta_Sans } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import { Navbar } from '@/components/layout/Navbar';
import { PageTransition } from '@/components/motion/PageTransition';
import './globals.css';
import { cn } from '@/lib/utils';

const splineSans = Spline_Sans({ 
  subsets: ['latin'],
  variable: '--font-spline',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Ikramul Hasan - Portfolio',
    template: '%s | Ikramul Hasan',
  },
  description: 'Portfolio of Ikramul Hasan, CSE student, full-stack developer, and teaching assistant.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        splineSans.variable,
        plusJakarta.variable,
        'scroll-smooth'
      )}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';}if(t==='dark'){document.documentElement.classList.add('dark');}}catch(e){document.documentElement.classList.add('dark');}})();`,
          }}
        />
      </head>
      <body className="bg-background text-text-primary font-body antialiased selection:bg-foreground selection:text-background overflow-x-hidden">
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <Navbar />
        <main className="min-h-screen flex flex-col">
          <PageTransition>{children}</PageTransition>
        </main>
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
