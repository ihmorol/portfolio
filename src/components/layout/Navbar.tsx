'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { layoutData } from '@/data/layout-data';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { brand, cta, menuItems } = layoutData.navbar;

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none'
      )}
    >
      <nav className="container mx-auto px-6 py-4 md:py-6 flex items-center justify-between pointer-events-auto">
        {/* Left Group: Brand + CTA */}
        <div className="flex items-center gap-1 p-1 bg-white/5 backdrop-blur-md border border-white/5 rounded-full shadow-lg z-50">
          <Link href="/" className="pl-4 pr-3 text-lg font-bold text-white whitespace-nowrap">
            {brand}
          </Link>
          <Button 
            variant="white" 
            className="rounded-full bg-white text-black hover:bg-gray-200 font-medium px-5"
          >
            {cta}
          </Button>
        </div>

        {/* Right Side: Desktop Navigation */}
        <div className="hidden lg:block relative">
             <div className="bg-white/5 backdrop-blur-md border border-white/5 rounded-full px-2 py-1.5 flex items-center gap-1 shadow-lg">
                {menuItems.map((link) => (
                <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                    'px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-300',
                    pathname === link.href
                        ? 'bg-white text-black shadow-glow'
                        : 'text-text-secondary hover:text-white hover:bg-white/10'
                    )}
                >
                    {link.name}
                </Link>
                ))}
            </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden z-50 p-2 text-white bg-white/10 rounded-full backdrop-blur-md border border-white/5"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-24 px-6 lg:hidden pointer-events-auto"
          >
            <div className="flex flex-col gap-6 items-center">
              {menuItems.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    'text-2xl font-bold tracking-tight',
                    pathname === link.href ? 'text-white' : 'text-gray-500'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Button className="mt-8 w-full max-w-xs" variant="white">{cta}</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
