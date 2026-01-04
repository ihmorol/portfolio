'use client';

import { Card } from '@/components/ui/Card';

const journeyItems = [
  {
    period: '2021 - Present',
    role: 'Senior Product Designer',
    company: 'TechFlow Systems',
    description: 'Leading design systems and UX strategy for enterprise SaaS products.',
    color: 'bg-[#6BCB77]',
    textColor: 'text-[#6BCB77]',
    active: true
  },
  {
    period: '2018 - 2021',
    role: 'UI Designer',
    company: 'Creative Agency X',
    description: 'Delivered high-fidelity UI for fintech mobile apps and marketing sites.',
    color: 'bg-[#4D96FF]',
    textColor: 'group-hover:text-[#4D96FF]',
    active: false
  },
   {
    period: '2019',
    role: 'Best UX Award',
    company: 'Awwwards',
    description: 'Recognized for outstanding user experience design on the FinGo project.',
    color: 'bg-[#FFD93D]',
    textColor: 'group-hover:text-[#FFD93D]',
    active: false
  },
   {
    period: '2014 - 2018',
    role: 'BFA Interaction Design',
    company: 'California College of the Arts',
    description: 'Specialized in Human-Computer Interaction and visual storytelling.',
    color: 'bg-[#FF6B6B]',
    textColor: 'group-hover:text-[#FF6B6B]',
    active: false
  },
];

export function JourneyTimeline() {
  return (
    <section className="container mx-auto px-6 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
             {/* Philosophy */}
             <div className="lg:col-span-4">
                 <Card className="glass-dark h-full p-8 flex flex-col justify-between group hover:border-white/10 transition-colors relative overflow-hidden">
                    <div className="relative z-10">
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 text-black shadow-lg">
                            <span className="font-serif text-3xl font-bold">&quot;</span>
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-white">Philosophy</h3>
                        <blockquote className="text-lg font-medium italic text-gray-300 mb-4">
                            &quot;Good design is obvious. Great design is transparent.&quot;
                        </blockquote>
                        <div className="text-sm text-text-secondary leading-relaxed">
                            I strive to create experiences where the interface disappears, leaving only the solution and the user&apos;s intent.
                        </div>
                    </div>
                </Card>
             </div>

             {/* Timeline */}
             <div className="lg:col-span-8">
                <Card className="glass-dark p-8 border border-white/5">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-2xl font-bold text-white">My Journey</h3>
                    </div>
                    
                    <div className="relative pl-4">
                         {/* Vertical Line */}
                        <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-white/20 via-white/10 to-transparent"></div>
                        
                        <div className="space-y-10">
                            {journeyItems.map((item, index) => (
                                <div key={index} className="relative pl-10 group">
                                    <div className={`absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-[3px] border-card-dark z-10 transition-colors ${item.active ? item.color : 'bg-white group-hover:' + item.color}`}></div>
                                    <span className={`text-[10px] font-bold uppercase tracking-widest mb-1 block ${item.active ? item.textColor : 'text-text-muted'}`}>
                                        {item.period}
                                    </span>
                                    <h4 className={`text-base font-bold text-white transition-colors ${!item.active && item.textColor}`}>
                                        {item.role}
                                    </h4>
                                    <p className="text-xs text-text-secondary mt-1">{item.company}</p>
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
