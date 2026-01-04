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
    <footer className="bg-black border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          
          {/* Brand Section */}
          <div className="md:col-span-4">
            <Link href="/" className="text-2xl font-bold text-white mb-6 block">
              {brand.name}<span className="text-gray-500">.</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-8">
              {brand.description}
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = iconMap[social.icon] || Mail;
                // Define hover colors based on platform or just generic
                const hoverColorClass = 
                  social.title === "Github" ? "hover:bg-white hover:text-black" :
                  social.title === "Linkedin" ? "hover:bg-[#0077b5] hover:text-white" :
                  social.title === "Twitter" ? "hover:bg-[#1DA1F2] hover:text-white" :
                  "hover:bg-white hover:text-black";

                return (
                  <a 
                    key={social.title}
                    href={social.url} 
                    className={`w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 ${hoverColorClass} transition-all`}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2">
            <h4 className="text-white font-bold mb-6">Sitemap</h4>
            <ul className="space-y-4">
              {sitemap.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="md:col-span-2">
            <h4 className="text-white font-bold mb-6">Resources</h4>
            <ul className="space-y-4">
               {resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
               ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-4">
            <h4 className="text-white font-bold mb-6">{newsletter.title}</h4>
            <p className="text-gray-400 text-sm mb-6">
              {newsletter.description}
            </p>
            <form className="relative">
              <input 
                type="email" 
                placeholder={newsletter.placeholder} 
                className="w-full bg-white/5 border border-white/10 rounded-full px-5 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-white/20 transition-colors"
              />
              <button 
                type="submit" 
                className="absolute right-1 top-1 w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-colors"
              >
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            {copyright.replace('{year}', currentYear.toString())}
          </p>
          <div className="flex gap-6">
            {legals.map((legal) => (
              <Link key={legal.name} href={legal.href} className="text-xs text-gray-600 hover:text-gray-400 transition-colors uppercase tracking-wider">
                {legal.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
