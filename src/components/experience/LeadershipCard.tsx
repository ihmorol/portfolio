import { cn } from "@/lib/utils";

interface LeadershipCardProps {
  role: string;
  period: string;
  context: string;
  description: string;
  impactTitle?: string;
  impact?: string;
  tags?: string[];
  className?: string;
}

export function LeadershipCard({
  role,
  period,
  context,
  description,
  impactTitle = "Impact",
  impact,
  tags,
  className,
}: LeadershipCardProps) {
  return (
    <div className={cn("bg-background-secondary rounded-card p-6 border border-white/5 hover:border-white/20 transition-all h-full flex flex-col", className)}>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
        <h3 className="text-xl font-bold text-white">{role}</h3>
        <span className="text-xs font-bold text-text-secondary bg-background-tertiary px-3 py-1 rounded-full border border-white/5">
          {period}
        </span>
      </div>
      <p className="text-accent-blue text-sm font-medium mb-4">{context}</p>
      <p className="text-gray-300 mb-6 font-display text-sm leading-relaxed">
        {description}
      </p>
      
      {impact && (
        <div className="bg-background-tertiary/50 rounded-2xl p-4 border border-white/5 mb-4 m-0">
          <h4 className="text-xs font-bold text-white mb-2 uppercase tracking-wider">{impactTitle}</h4>
          <p className="text-text-secondary text-sm font-display">{impact}</p>
        </div>
      )}
      
      {tags && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, idx) => (
            <span key={idx} className="px-2 py-1 bg-accent-blue/10 text-accent-blue rounded-md text-xs font-bold uppercase">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
