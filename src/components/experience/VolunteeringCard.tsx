import { cn } from "@/lib/utils";

interface VolunteeringCardProps {
  role: string;
  organization: string;
  period: string;
  description: string;
  tags?: string[];
  className?: string;
}

export function VolunteeringCard({
  role,
  organization,
  period,
  description,
  tags,
  className,
}: VolunteeringCardProps) {
  return (
    <div className={cn("bg-background-secondary rounded-card p-6 border border-white/5 hover:border-white/20 transition-all flex flex-col", className)}>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-3">
        <div>
          <h3 className="text-lg font-bold text-white">{role}</h3>
          <p className="text-accent-green text-sm font-medium">{organization}</p>
        </div>
        <span className="text-xs font-bold text-text-secondary bg-background-tertiary px-3 py-1 rounded-full border border-white/5 whitespace-nowrap self-start">
          {period}
        </span>
      </div>
      <p className="text-gray-300 mb-4 font-display text-sm leading-relaxed flex-grow">
        {description}
      </p>
      
      {tags && (
        <div className="pt-4 border-t border-white/5 mt-auto">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, idx) => (
              <span key={idx} className="px-2 py-1 bg-accent-green/10 text-accent-green rounded-md text-[10px] font-bold uppercase">
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
