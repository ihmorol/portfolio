'use client';

import { Card } from '@/components/ui/Card';
import { homeData } from '@/data/home-data';

export function StatsSection() {
  const { stats } = homeData;
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {stats.map((stat, index) => (
          <div key={index} className="glass-dark p-6 rounded-3xl text-center border border-border/60 hover:border-border-strong transition-colors">
            <div className="text-3xl md:text-4xl font-bold text-text-primary mb-2">{stat.value}</div>
            <div className="text-xs text-text-muted uppercase tracking-wider font-semibold">{stat.label}</div>
          </div>
        ))}
    </section>
  );
}
