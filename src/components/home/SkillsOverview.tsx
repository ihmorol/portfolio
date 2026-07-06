'use client';

import { homeData } from '@/data/home-data';

export function SkillsOverview() {
  const { title, description, cta, categories } = homeData.skills;

  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16">
        <div className="glass-light relative flex flex-col justify-center overflow-hidden rounded-3xl p-8 lg:col-span-5">
            <h2 className="text-3xl font-bold text-text-primary mb-4">{title}</h2>
            <p className="text-text-muted leading-relaxed mb-6">
                {description}
            </p>
            <button className="focus-ring bg-foreground text-background px-8 py-3 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-foreground/85 transition-colors w-max">
                {cta}
            </button>
            <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
                <span aria-hidden="true" className="material-symbols-outlined text-[200px] text-text-primary">terminal</span>
            </div>
        </div>
        <div className="glass-dark relative rounded-3xl p-8 lg:col-span-7 flex flex-col justify-center border border-border/60">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {categories.map((category) => (
                    <div key={category.name}>
                        <h4 className="text-text-primary font-bold mb-4 flex items-center gap-2">
                            <span className={`w-2 h-2 ${category.colorClass} rounded-full`}></span> {category.name}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill) => (
                                <SkillBadge key={skill}>{skill}</SkillBadge>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}

function SkillBadge({ children }: { children: React.ReactNode }) {
    return (
        <span className="bg-background-tertiary text-text-secondary px-3 py-1.5 rounded-lg text-xs font-medium border border-border/60">
            {children}
        </span>
    );
}
