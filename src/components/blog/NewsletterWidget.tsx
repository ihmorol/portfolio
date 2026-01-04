'use client';

import { Mail } from 'lucide-react';
import { blogData } from '@/data/blog-data';

export function NewsletterWidget() {
  const { newsletter } = blogData;

  return (
    <div className="md:col-span-4 bg-[#1a1b1e] rounded-3xl p-6 border border-[#333333] flex flex-col h-full group hover:border-white/20 transition-colors relative overflow-hidden">
      <div className="absolute -right-6 -top-6 w-32 h-32 bg-[#ff6b6b]/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="flex items-start gap-4 mb-6 z-10">
        <div className="w-12 h-12 bg-[#ff6b6b] rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-[#ff6b6b]/20">
          <Mail className="text-white w-6 h-6" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-white leading-tight">{newsletter.title.replace(' Newsletter', '')}<br/>Newsletter</h3>
        </div>
      </div>
      
      <p className="text-[10px] text-gray-400 mb-6 leading-relaxed font-[family-name:var(--font-spline)] z-10">
        {newsletter.description}
      </p>
      
      <form className="space-y-3 mt-auto z-10" onSubmit={(e) => e.preventDefault()}>
        <div className="relative">
          <Mail className="absolute left-4 top-3 text-gray-500 w-4 h-4" />
          <input 
            type="email" 
            placeholder={newsletter.placeholder}
            className="w-full bg-[#2c2d31] border border-[#333333] rounded-full pl-10 pr-4 py-3 text-xs text-white placeholder-gray-500 focus:border-white focus:ring-0 transition-colors"
          />
        </div>
        <button 
            type="submit"
            className="w-full bg-white hover:bg-gray-200 text-black text-[10px] font-bold py-3 rounded-full transition-all uppercase tracking-wider mt-2 flex justify-center items-center gap-2"
        >
          {newsletter.buttonText}
        </button>
      </form>
    </div>
  );
}
