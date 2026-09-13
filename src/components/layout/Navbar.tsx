'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { layoutData } from '@/data/layout-data';
import { ThemeToggle } from '@/components/layout/ThemeToggle';
import { cn } from '@/lib/utils';

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
        <div className="flex items-center gap-1 p-1 bg-background-secondary/70 backdrop-blur-md border border-border rounded-full shadow-lg z-50">
          <Link href="/" className="focus-ring rounded-full pl-4 pr-3 text-lg font-bold text-text-primary whitespace-nowrap">
            {brand}
          </Link>
          <Link
            href="/contact"
            className="focus-ring inline-flex items-center justify-center rounded-full bg-foreground text-background hover:bg-foreground/85 font-medium px-5 h-10 text-xs font-bold uppercase tracking-widest transition-colors"
          >
            {cta}
          </Link>
        </div>

        {/* Right Side: Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-3 relative">
             <div className="bg-background-secondary/70 backdrop-blur-md border border-border rounded-full px-2 py-1.5 flex items-center gap-1 shadow-lg">
                {menuItems.map((link) => {
                const isActive = pathname === link.href;
                return (
                <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                    'focus-ring relative px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-colors duration-300',
                    isActive
                        ? 'text-background'
                        : 'text-text-secondary hover:text-text-primary hover:bg-foreground/10'
                    )}
                >
                    {isActive && (
                      <motion.span
                        layoutId="navbar-active-pill"
                        className="absolute inset-0 bg-foreground rounded-full shadow-lg"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                        aria-hidden="true"
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                </Link>
                );
                })}
            </div>
            <ThemeToggle />
        </div>

        {/* Mobile: Theme Toggle + Menu Toggle */}
        <div className="lg:hidden z-50 flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            className="focus-ring p-2 text-text-primary bg-foreground/10 rounded-full backdrop-blur-md border border-border"
          >
            {isMobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
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
                    pathname === link.href ? 'text-text-primary' : 'text-text-muted'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-8 w-full max-w-xs inline-flex items-center justify-center rounded-full bg-foreground text-background hover:bg-foreground/85 h-10 text-xs font-bold uppercase tracking-widest transition-colors"
              >
                {cta}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
