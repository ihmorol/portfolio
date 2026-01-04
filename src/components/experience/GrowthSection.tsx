import { cn } from "@/lib/utils";

interface Skill {
  name: string;
  percentage: number;
  colorClass: string; // e.g., "bg-accent-pink" or custom hex if needed, but tailwind classes preferred
}

interface GrowthSectionProps {
  title: string;
  skills: Skill[];
  className?: string;
}

export function GrowthSection({
  title,
  skills,
  className,
}: GrowthSectionProps) {
  return (
    <div className={cn("bg-background-secondary rounded-card p-6 border border-white/5 h-full flex flex-col", className)}>
      <h3 className="text-lg font-bold text-white mb-6">{title}</h3>
      <div className="space-y-5 flex-grow">
        {skills.map((skill, idx) => (
          <div key={idx}>
            <div className="flex justify-between text-xs font-bold text-text-secondary mb-2 uppercase">
              <span>{skill.name}</span>
              <span>{skill.percentage}%</span>
            </div>
            <div className="w-full bg-background-tertiary rounded-full h-2">
              <div 
                className={cn("h-2 rounded-full", skill.colorClass)} 
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
