'use client';

import { Card } from '@/components/ui/Card';
import { aboutData } from '@/data/about-data';

export function JourneyTimeline() {
  const { philosophy, journey } = aboutData;

  return (
    <section className="container mx-auto px-6 mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-4">
          <Card className="glass-dark h-full p-8 border border-white/10 rounded-3xl">
            <h3 className="text-xl font-bold mb-4 text-white">{philosophy.title}</h3>
            <blockquote className="text-lg font-medium italic text-gray-300 mb-4">
              &quot;{philosophy.quote}&quot;
            </blockquote>
            <p className="text-sm text-gray-400 leading-relaxed">{philosophy.description}</p>
          </Card>
        </div>

        <div className="lg:col-span-8">
          <Card className="glass-dark p-8 border border-white/10 rounded-3xl">
            <h3 className="text-2xl font-bold text-white mb-8">{journey.title}</h3>

            <div className="relative pl-4">
              <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-white/20 via-white/10 to-transparent" />

              <div className="space-y-8">
                {journey.items.map((item, index) => (
                  <div key={index} className="relative pl-10">
                    <div className={`absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-[3px] border-card-dark ${item.active ? item.color : 'bg-white/70'}`} />
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">{item.period}</p>
                    <h4 className="text-base font-bold text-white">{item.role}</h4>
                    <p className="text-xs text-gray-400 mt-1">{item.company}</p>
                    <p className="text-xs text-gray-500 mt-2 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
