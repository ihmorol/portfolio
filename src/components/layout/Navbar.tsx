'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Menu, X, ChevronDown } from 'lucide-react';
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

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // While the mobile menu is open: lock background scroll, close on Escape,
  // and auto-close if the viewport grows to desktop so the lock can't leak.
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMobileMenuOpen(false);
    };
    const desktopQuery = window.matchMedia('(min-width: 1024px)');
    const handleViewportChange = () => {
      if (desktopQuery.matches) setIsMobileMenuOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    desktopQuery.addEventListener('change', handleViewportChange);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      desktopQuery.removeEventListener('change', handleViewportChange);
    };
  }, [isMobileMenuOpen]);

  const { brand, cta, menuItems, moreItems } = layoutData.navbar;
  const isMoreActive = moreItems.some(
    (link) => pathname === link.href || pathname.startsWith(`${link.href}/`)
  );
  // Mobile keeps an explicit Home link; the desktop bar relies on the brand link.
  const mobileMenuItems = [{ name: 'Home', href: '/' }, ...menuItems, ...moreItems];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none'
      )}
    >
      {/* Tighter gutters on phones: the fixed pill row must fit 320-430px
          viewports or the burger button gets clipped by overflow-x-hidden. */}
      <nav className="container mx-auto px-3 sm:px-6 py-4 md:py-6 flex items-center justify-between pointer-events-auto">
        {/* Left Group: Brand + CTA (brand/CTA scale down below sm so the
            whole row still fits next to the theme toggle + burger). */}
        <div className="flex items-center gap-0.5 sm:gap-1 p-1 bg-background-secondary/70 backdrop-blur-md border border-border rounded-full shadow-lg z-50">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="focus-ring rounded-full pl-2.5 pr-2 sm:pl-4 sm:pr-3 text-[15px] sm:text-lg font-bold text-text-primary whitespace-nowrap">
            {brand}
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="focus-ring inline-flex items-center justify-center rounded-full bg-foreground text-background hover:bg-foreground/85 font-medium h-9 sm:h-10 px-2.5 sm:px-5 text-[10px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest transition-colors"
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
                <DropdownMenu.Root>
                  <DropdownMenu.Trigger asChild>
                    <button
                      aria-label="More pages"
                      className={cn(
                        'focus-ring group relative inline-flex items-center px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-colors duration-300',
                        isMoreActive
                          ? 'text-background'
                          : 'text-text-secondary hover:text-text-primary hover:bg-foreground/10'
                      )}
                    >
                      {isMoreActive && (
                        <motion.span
                          layoutId="navbar-active-pill"
                          className="absolute inset-0 bg-foreground rounded-full shadow-lg"
                          transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                          aria-hidden="true"
                        />
                      )}
                      <span className="relative z-10 inline-flex items-center gap-1.5">
                        More
                        <ChevronDown
                          size={14}
                          aria-hidden="true"
                          className="transition-transform duration-200 group-data-[state=open]:rotate-180"
                        />
                      </span>
                    </button>
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Portal>
                    <DropdownMenu.Content
                      align="end"
                      sideOffset={10}
                      className="z-50 min-w-[170px] p-1.5 rounded-2xl bg-background-secondary/95 backdrop-blur-md border border-border shadow-lg"
                    >
                      {moreItems.map((link) => (
                        <DropdownMenu.Item key={link.name} asChild>
                          <Link
                            href={link.href}
                            className={cn(
                              'block px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-full transition-colors duration-200',
                              pathname === link.href
                                ? 'text-text-primary bg-foreground/10'
                                : 'text-text-secondary hover:text-text-primary hover:bg-foreground/10'
                            )}
                          >
                            {link.name}
                          </Link>
                        </DropdownMenu.Item>
                      ))}
                    </DropdownMenu.Content>
                  </DropdownMenu.Portal>
                </DropdownMenu.Root>
            </div>
            <ThemeToggle />
        </div>

        {/* Mobile: Theme Toggle + Menu Toggle */}
        <div className="lg:hidden z-50 flex items-center gap-1.5 sm:gap-2">
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
            className="fixed inset-0 z-40 overflow-y-auto overscroll-contain bg-background/95 backdrop-blur-xl pt-24 px-6 pb-8 lg:hidden pointer-events-auto"
          >
            <div className="flex flex-col gap-6 items-center">
              {mobileMenuItems.map((link) => (
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
