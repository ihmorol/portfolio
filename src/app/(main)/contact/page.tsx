import { 
  MessageCircle, 
  Calendar, 
  Video, 
  User, 
  Plus, 
  Play, 
  Mail, 
  Linkedin,
  Github
} from 'lucide-react';
import Link from 'next/link';
import { Footer } from '@/components/layout/Footer';
import { PageLeftSideBar } from '@/components/shared/page-left-sidebar';
import { VerticalSocialLinks } from '@/components/shared/vertical-social-links';
import { PageHeader } from '@/components/shared/PageHeader';
import { Reveal } from '@/components/motion/Reveal';
import { layoutData } from '@/data/layout-data';
import { contactData } from '@/data/contact-data';

export default function ContactPage() {
  const { socialLinks } = layoutData.footer;
  const { header, scheduleMeeting, email, sendMessage, newsletter, socialChannels } = contactData;

  return (
    <>
      <main className="section-shell page-padding-y flex-grow flex flex-col items-center relative min-h-screen">
        <PageLeftSideBar title="CONTACT" />
        <VerticalSocialLinks items={socialLinks} />
        <Reveal>
          <PageHeader
            titlePrefix={header.title}
            icon=""
            titleSuffix={header.titleSuffix}
            customIcon={
              <MessageCircle className="text-accent-yellow w-12 h-12 md:w-16 md:h-16 stroke-[2.5]" />
            }
            description="Email, a quick call, or a message from this page. Pick whichever suits you."
          />
        </Reveal>

        <Reveal delay={0.05} className="w-full max-w-[1200px]">
          <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 pb-12 md:pb-16 mx-auto">
            
            {/* Schedule Meeting Card */}
            <div className="md:col-span-12 bg-background-secondary border border-border rounded-[2.5rem] p-2 md:p-3 flex flex-col md:flex-row overflow-hidden min-h-[420px]">
                <div className="p-8 md:p-14 flex flex-col justify-center flex-1">
                    <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 tracking-tight">{scheduleMeeting.title}</h2>
                    <p className="text-text-muted text-sm md:text-base mb-10 max-w-md leading-relaxed font-body">
                        {scheduleMeeting.description}
                    </p>
                    <button className="focus-ring bg-foreground hover:bg-foreground/85 text-background type-micro py-4 px-10 rounded-full transition-all w-full md:w-fit text-center shadow-lg">
                        {scheduleMeeting.buttonText}
                    </button>
                </div>
                <div className="bg-background-tertiary rounded-[2rem] flex-1 relative min-h-[300px] md:min-h-auto overflow-hidden flex items-center justify-center">
                    <div className="relative w-full h-full flex flex-col items-center justify-center gap-6 p-8">
                        <div className="flex gap-6 items-center">
                            <div className="bg-accent-red rounded-3xl w-20 h-20 flex items-center justify-center shadow-xl shadow-red-200">
                                <Calendar className="text-white w-10 h-10" />
                            </div>
                            <div className="bg-blue-600 rounded-full py-4 px-6 shadow-xl shadow-blue-200 min-w-[140px]">
                                <div className="h-2.5 w-24 bg-white/40 rounded-full mb-2.5"></div>
                                <div className="h-2.5 w-16 bg-white/40 rounded-full"></div>
                            </div>
                            <div className="bg-blue-600 rounded-full w-20 h-20 flex items-center justify-center shadow-xl shadow-blue-200 relative">
                                <Video className="text-white w-10 h-10" />
                                <div className="absolute top-0 right-0 w-5 h-5 bg-green-400 border-4 border-background-tertiary rounded-full"></div>
                            </div>
                        </div>
                        <div className="flex gap-6 items-center translate-x-4">
                            <div className="bg-blue-600 rounded-full py-4 px-8 shadow-xl shadow-blue-200 relative min-w-[160px]">
                                <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-blue-600 transform rotate-45 rounded-sm"></div>
                                <div className="absolute -left-10 top-1/2 -translate-y-1/2 bg-accent-red rounded-full p-2 border-4 border-background-tertiary">
                                  <User className="text-white w-6 h-6" />
                                </div>
                                <div className="h-2.5 w-32 bg-white/40 rounded-full mb-2.5"></div>
                                <div className="h-2.5 w-20 bg-white/40 rounded-full"></div>
                            </div>
                            <div className="bg-cyan-200 rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer">
                                <Plus className="text-cyan-800 w-6 h-6 stroke-[3]" />
                            </div>
                        </div>
                        <div className="w-[85%] bg-cyan-50 rounded-full p-2.5 flex items-center gap-4 shadow-sm border border-cyan-100 mt-2">
                            <div className="bg-blue-600 rounded-full w-10 h-10 flex items-center justify-center shrink-0 shadow-md">
                                <Play className="text-white w-5 h-5 ml-1 fill-current" />
                            </div>
                            <div className="flex-1 flex items-center justify-between gap-1 h-8 px-2">
                                {[...Array(15)].map((_, i) => (
                                    <div
                                      key={i}
                                      className={`w-1 rounded-full ${i % 2 === 0 ? 'bg-blue-300' : 'bg-blue-500'}`}
                                      style={{
                                        height: `${Math.random() * 60 + 20}%`,
                                      }}
                                    ></div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Email Card */}
            <div className="md:col-span-4 bg-background-secondary rounded-[2.5rem] p-1.5 flex flex-col h-full border border-border/60 group hover:border-border transition-all duration-300">
                <div className="flex-grow p-8 flex flex-col items-center justify-center min-h-[220px]">
                    <div className="w-36 h-36 relative mb-4">
                         <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-32 h-24 bg-green-600 rounded-lg shadow-2xl z-20 flex items-center justify-center overflow-hidden">
                            <div className="absolute top-0 left-0 w-0 h-0 border-l-[64px] border-l-transparent border-r-[64px] border-r-transparent border-t-[40px] border-t-green-800/40 z-30"></div>
                            <div className="absolute bottom-0 w-full h-full bg-gradient-to-tr from-green-600 to-green-500"></div>
                        </div>
                         <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-28 h-24 bg-white rounded-t-lg shadow-md z-10 transition-transform group-hover:translate-y-[-10px]"></div>
                    </div>
                </div>
                <div className="bg-background-tertiary p-8 rounded-3xl mt-auto relative overflow-hidden">
                     <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background-secondary to-transparent opacity-50"></div>
                    <h3 className="text-2xl font-bold text-text-primary mb-3">{email.title}</h3>
                    <p className="text-xs text-text-secondary mb-8 leading-relaxed font-body">{email.description}</p>
                     <a href={`mailto:${email.emailAddress}`} className="focus-ring block w-full bg-foreground hover:bg-foreground/85 text-background type-micro py-4 px-4 rounded-full transition-all text-center">
                        {email.buttonText}
                    </a>
                </div>
            </div>

            {/* Send Message Card */}
            <div className="md:col-span-4 bg-background-secondary rounded-[2.5rem] p-1.5 flex flex-col h-full border border-border/60 group hover:border-border transition-all duration-300">
                <div className="flex-grow p-8 flex flex-col items-center justify-center min-h-[220px]">
                     <div className="relative w-40 h-32 flex items-center justify-center">
                        <div className="absolute top-0 left-2 w-24 h-24 bg-blue-600 rounded-full rounded-bl-sm flex items-center justify-center shadow-lg z-20 group-hover:scale-105 transition-transform">
                             <div className="flex gap-1.5">
                                <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                                <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                                <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                            </div>
                        </div>
                        <div className="absolute bottom-0 right-4 w-20 h-20 bg-cyan-300 rounded-full rounded-tr-sm shadow-lg z-10 group-hover:rotate-12 transition-transform"></div>
                    </div>
                </div>
                <div className="bg-background-tertiary p-8 rounded-3xl mt-auto relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background-secondary to-transparent opacity-50"></div>
                     <h3 className="text-2xl font-bold text-text-primary mb-3">{sendMessage.title}</h3>
                    <p className="text-xs text-text-secondary mb-8 leading-relaxed font-body">{sendMessage.description}</p>
                     <button className="focus-ring block w-full bg-foreground hover:bg-foreground/85 text-background type-micro py-4 px-4 rounded-full transition-all text-center">
                        {sendMessage.buttonText}
                    </button>
                </div>
            </div>

            {/* Newsletter Card */}
            <div className="md:col-span-4 bg-background-secondary rounded-[2.5rem] p-8 border border-border/60 flex flex-col h-full hover:border-border transition-colors">
                <div className="flex items-start gap-5 mb-8">
                    <div className="w-14 h-14 bg-accent-red rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-red-900/20">
                        <Mail className="text-white w-7 h-7" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-text-primary leading-tight mt-1">{newsletter.title}</h3>
                    </div>
                </div>
                <p className="text-[11px] text-text-secondary mb-8 leading-relaxed font-body">
                    {newsletter.description}
                </p>
                <form action="" className="space-y-4 mt-auto">
                    <input type="text" placeholder={newsletter.namePlaceholder} className="w-full bg-transparent border border-border rounded-full px-6 py-4 text-xs text-text-primary placeholder:text-text-muted focus:border-border-strong focus:ring-0 transition-colors" />
                    <input type="email" placeholder={newsletter.emailPlaceholder} className="w-full bg-transparent border border-border rounded-full px-6 py-4 text-xs text-text-primary placeholder:text-text-muted focus:border-border-strong focus:ring-0 transition-colors" />
                    <button type="submit" className="focus-ring w-full bg-foreground hover:bg-foreground/85 text-background type-micro py-4 rounded-full transition-all mt-2 flex items-center justify-center gap-2">
                        {newsletter.buttonText}
                    </button>
                </form>
            </div>

            {/* Social Channels */}
            <div className="md:col-span-12 bg-background-secondary rounded-[2.5rem] p-8 md:px-12 md:py-10 border border-border/60 flex flex-col md:flex-row items-center justify-between gap-8 hover:border-border transition-colors">
                 <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold text-text-primary mb-2">{socialChannels.title}</h3>
                    <p className="text-xs text-text-secondary font-body max-w-sm">{socialChannels.description}</p>
                </div>
                <div className="flex items-center gap-3 md:gap-5 flex-wrap justify-center">
                     <a href="https://linkedin.com/in/ihmorol" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-background-tertiary flex items-center justify-center transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                        <Linkedin className="text-blue-600 group-hover:text-blue-500 w-5 h-5" />
                    </a>
                     <a href="https://github.com/ihmorol" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-background-tertiary flex items-center justify-center transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                        <Github className="text-text-secondary group-hover:text-text-primary w-5 h-5" />
                    </a>
                     <a href="mailto:ihmorol@gmail.com" className="w-12 h-12 rounded-full bg-background-tertiary flex items-center justify-center transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                        <Mail className="text-red-400 group-hover:text-red-300 w-5 h-5" />
                    </a>
                </div>
            </div>

        </div>
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
