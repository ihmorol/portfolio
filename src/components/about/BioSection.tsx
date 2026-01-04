'use client';

import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Download } from 'lucide-react';
import Image from 'next/image';

export function BioSection() {
  return (
    <section className="container mx-auto px-6 mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Bio Content */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <Card className="bg-white text-black p-8 md:p-12 relative overflow-hidden group border-none">
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <Badge className="bg-black/5 text-gray-800 hover:bg-black/10 border-none">Introduction</Badge>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">Ikramul Hasan</h2>
                <p className="text-xl font-medium text-gray-500 mb-6">Senior Product Designer & Creative Lead</p>
                <div className="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base mb-8">
                  <p>
                    My journey into the world of design began not with pixels, but with a pencil and a blank sheet of paper. What started as sketching architectural wonders in my notebook during high school evolved into a profound passion for structuring information in digital spaces. I believe that good design is invisible—it facilitates user goals without drawing attention to itself.
                  </p>
                  <p>
                    Over the past decade, I have had the privilege of working with diverse teams ranging from agile startups to Fortune 500 companies. My approach blends analytical thinking with creative intuition, ensuring that every interface I craft is not only visually stunning but also functionally robust and accessible.
                  </p>
                </div>
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-4">Key Highlights</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm font-medium text-gray-700">
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-black rounded-full"></span>10+ Years of Experience</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-black rounded-full"></span>Award-Winning Projects</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-black rounded-full"></span>Design Systems Expert</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-black rounded-full"></span>Mentor & Speaker</li>
                  </ul>
                </div>
              </div>
              
              {/* Profile Image Column (Desktop) */}
              <div className="w-full md:w-64 flex-shrink-0 hidden md:block">
                 <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl relative mb-6">
                    <Image 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmcDR1B5QKJangtQ7-76aszJjgzp7PN3BTZo1r6GNZguOWYok8vtZxkYMa_M4neJDdi0Csy-h-f-25iQjxXTFZA4BX2JsYz_t89lG5KnK69EX5c74IUsO5CjKxl1xcwnwtI5_-txBCWY0QCZnWc5ekZ8yapY5M8WLu7tCJSDxED7mu9uvZIjDOVvqskq5lF9hEZTjyOxmTFH2WGUrHATBO5B9GW7lJNKUSpJy2lAQUmgBr2B_fuVnq0Yl9UT1XiL-RkWH_1k0f0uY"
                        alt="Portrait of Alex"
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                 </div>
                 <Button className="w-full bg-black text-white hover:bg-gray-800">
                    Download CV <Download size={16} className="ml-2" />
                 </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Column: Values */}
        <div className="lg:col-span-4 flex flex-col gap-6">
           {/* Values Cards */}
           <div className="grid grid-cols-1 gap-6 h-full">
                <Card className="glass-dark p-6 hover:border-white/20 transition-all group">
                    <div className="w-10 h-10 bg-[#FF6B6B] rounded-xl flex items-center justify-center mb-4 text-black group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined font-bold">V</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-white">Clarity</h3>
                    <p className="text-text-secondary text-xs leading-relaxed">
                        Eliminating ambiguity to create interfaces that are intuitive and easy to navigate for everyone.
                    </p>
                </Card>
                 <Card className="glass-dark p-6 hover:border-white/20 transition-all group">
                    <div className="w-10 h-10 bg-[#4D96FF] rounded-xl flex items-center justify-center mb-4 text-black group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined font-bold">E</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-white">Empathy</h3>
                    <p className="text-text-secondary text-xs leading-relaxed">
                        Understanding the user&apos;s needs deeply to design solutions that solve real problems.
                    </p>
                </Card>
                 <Card className="glass-dark p-6 hover:border-white/20 transition-all group">
                    <div className="w-10 h-10 bg-[#6BCB77] rounded-xl flex items-center justify-center mb-4 text-black group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined font-bold">I</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-white">Integrity</h3>
                    <p className="text-text-secondary text-xs leading-relaxed">
                        Committing to ethical design standards and transparency in every step of the process.
                    </p>
                </Card>
           </div>
        </div>
      </div>
    </section>
  );
}
