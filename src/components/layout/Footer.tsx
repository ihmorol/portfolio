import Link from 'next/link';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  ArrowRight,
  LucideIcon
} from 'lucide-react';
import { layoutData } from '@/data/layout-data';

const iconMap: Record<string, LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  mail: Mail,
};

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { brand, socialLinks, sitemap, resources, newsletter, copyright, legals } = layoutData.footer;

  return (
    <footer className="bg-background-secondary border-t border-border/60 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          
          {/* Brand Section */}
          <div className="md:col-span-4">
            <Link href="/" className="text-2xl font-bold text-text-primary mb-6 block">
              {brand.name}<span className="text-text-muted">.</span>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs mb-8">
              {brand.description}
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = iconMap[social.icon] || Mail;
                // Define hover colors based on platform or just generic
                const socialTitle = social.title.toLowerCase();
                const hoverColorClass = 
                  socialTitle === "github" ? "hover:bg-foreground hover:text-background" :
                  socialTitle === "linkedin" ? "hover:bg-[#0077b5] hover:text-white" :
                  socialTitle === "twitter" ? "hover:bg-[#1DA1F2] hover:text-white" :
                  "hover:bg-foreground hover:text-background";

                return (
                  <a
                    key={social.title}
                    href={social.url}
                    className={`focus-ring w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center text-text-secondary ${hoverColorClass} transition-all`}
                    aria-label={social.title}
                    {...(social.url.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    <Icon size={18} aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2">
            <h4 className="text-text-primary font-bold mb-6">Sitemap</h4>
            <ul className="space-y-4">
              {sitemap.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="md:col-span-2">
            <h4 className="text-text-primary font-bold mb-6">Resources</h4>
            <ul className="space-y-4">
               {resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
               ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-4">
            <h4 className="text-text-primary font-bold mb-6">{newsletter.title}</h4>
            <p className="text-text-secondary text-sm mb-6">
              {newsletter.description}
            </p>
            <form className="relative">
              <input
                type="email"
                placeholder={newsletter.placeholder}
                aria-label={newsletter.placeholder}
                autoComplete="email"
                className="w-full bg-foreground/5 border border-border rounded-full px-5 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-border-strong transition-colors"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="focus-ring absolute right-1 top-1 w-10 h-10 bg-foreground rounded-full flex items-center justify-center text-background hover:bg-foreground/85 transition-colors"
              >
                <ArrowRight size={18} aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/60 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            {copyright.replace('{year}', currentYear.toString())}
          </p>
          <div className="flex gap-6">
            {legals.map((legal) => (
              <Link key={legal.name} href={legal.href} className="text-xs text-text-muted hover:text-text-secondary transition-colors uppercase tracking-wider">
                {legal.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
