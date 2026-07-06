import React from 'react';
import { researchData } from '@/data/research-data';

export const PublicationList = () => {
  const { title, items } = researchData.publications;

  return (
    <div className="md:col-span-8 bg-surface rounded-3xl p-6 border border-border flex flex-col h-full">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center shrink-0">
          <span className="material-symbols-outlined text-text-primary text-xl">article</span>
        </div>
        <div>
          <h3 className="text-xl font-bold text-text-primary">{title}</h3>
        </div>
      </div>
      <div className="space-y-6">
        {items.map((pub, index) => (
          <div key={index} className="flex flex-col gap-2 p-4 rounded-2xl hover:bg-surface-light/50 transition-colors border border-transparent hover:border-border">
            <div className="flex justify-between items-start">
              <h4 className="text-base font-bold text-text-primary leading-tight">{pub.title}</h4>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${pub.statusColor}`}>{pub.status}</span>
            </div>
            <p className="text-xs text-text-secondary">
              {pub.authors.map((author, i) => (
                <span key={i}>
                  {author.isMe ? <span className="text-text-primary font-semibold">{author.name}*</span> : `${author.name}*`}
                  {i < pub.authors.length - 1 ? ", " : ""}
                </span>
              ))}
            </p>
            <p className="text-xs text-text-muted italic">{pub.venue}</p>
            <p className="text-xs text-text-secondary mt-2 line-clamp-2 font-body">{pub.description}</p>
            <div className="flex gap-3 mt-3">
              {pub.links.map((link: { label: string; icon: string; url?: string }) => (
                <a key={link.label} href={link.url || '/research'} className="flex items-center gap-1 text-[10px] font-bold text-text-secondary hover:text-text-primary transition-colors">
                  <span className="material-symbols-outlined text-sm">{link.icon}</span> {link.label}
                </a>
              ))}
              {pub.citations && (
                <span className="ml-auto text-[10px] text-text-muted flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs">format_quote</span> {pub.citations} citations
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-auto pt-4">
        <button className="w-full py-3 rounded-full border border-border hover:bg-surface-light text-xs font-bold text-text-primary transition-colors flex items-center justify-center gap-2">
          View All Publications <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};
