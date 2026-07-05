'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { aboutData } from '@/data/about-data';

export function BioSection() {
  const { intro } = aboutData;

  return (
    <section className="container mx-auto px-6 mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8">
          <Card className="bg-white text-black p-8 md:p-10 border-none rounded-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">{intro.name}</h2>
            <p className="text-lg text-gray-600 mb-6">{intro.title}</p>

            <div className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-base mb-8">
              {intro.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-sm font-bold uppercase tracking-widest mb-4">{intro.highlights.title}</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm font-medium text-gray-700">
                {intro.highlights.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-black rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </div>

        <div className="lg:col-span-4">
          <Card className="glass-dark p-5 rounded-3xl h-full border border-white/10 flex flex-col">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4">
              <Image src={intro.profileImage} alt={intro.name} fill className="object-cover" />
            </div>
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-2">Location</p>
            <p className="text-sm text-white mb-4">{intro.location}</p>
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto w-full text-center bg-white text-black px-5 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors"
            >
              {intro.cvButton}
            </Link>
          </Card>
        </div>
      </div>
    </section>
  );
}
