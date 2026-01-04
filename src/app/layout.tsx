import type { Metadata } from 'next';
import { Spline_Sans, Plus_Jakarta_Sans } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import { Navbar } from '@/components/layout/Navbar';
// import { Footer } from '@/components/layout/Footer'; // Will be created next
import { ScrollIndicator } from '@/components/layout/ScrollIndicator';
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
  description: 'Senior Product Designer & Creative Lead Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(splineSans.variable, plusJakarta.variable, 'dark scroll-smooth')}>
      <body className="bg-background text-text-primary font-display antialiased selection:bg-white selection:text-black overflow-x-hidden">
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <Navbar />
        <main className="min-h-screen flex flex-col">
          {children}
        </main>
        {/* <Footer /> */}
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
