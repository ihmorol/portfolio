import { cn } from "@/lib/utils";

interface Section {
  title: string;
  items: string[];
  icon?: string;
  iconColor?: string;
}

interface ExperienceCardProps {
  role: string;
  company: string;
  location: string;
  type: string;
  period: string;
  description: string;
  sections?: Section[];
  tags?: string[];
  className?: string;
}

export function ExperienceCard({
  role,
  company,
  location,
  type,
  period,
  description,
  sections,
  tags,
  className,
}: ExperienceCardProps) {
  return (
    <div className={cn("bg-background-secondary rounded-card p-6 md:p-8 border border-border/60 hover:border-border-strong transition-all group", className)}>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-text-primary group-hover:text-accent-yellow transition-colors">{role}</h3>
          <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-text-secondary font-display">
            <span className="flex items-center gap-1"><span className="material-symbols-outlined text-base">apartment</span> {company}</span>
            <span className="w-1 h-1 bg-border-strong rounded-full"></span>
            <span className="flex items-center gap-1"><span className="material-symbols-outlined text-base">location_on</span> {location}</span>
            <span className="w-1 h-1 bg-border-strong rounded-full"></span>
            <span className="text-accent-yellow font-medium">{type}</span>
          </div>
        </div>
        <div className="bg-background-tertiary px-4 py-2 rounded-full border border-border/60">
          <span className="text-xs font-bold text-text-primary uppercase tracking-wider">{period}</span>
        </div>
      </div>
      
      <p className="text-text-secondary mb-6 font-display leading-relaxed">
        {description}
      </p>
      
      {sections && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {sections.map((section, idx) => (
            <div key={idx}>
              <h4 className="text-sm font-bold text-text-primary mb-3 uppercase tracking-wider">{section.title}</h4>
              <ul className="space-y-2 text-sm text-text-secondary font-display">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    {section.icon && (
                      <span className={cn("material-symbols-outlined text-base mt-0.5", section.iconColor || "text-accent-green")}>
                        {section.icon}
                      </span>
                    )}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {tags && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, idx) => (
            <span key={idx} className="px-3 py-1 bg-background-tertiary border border-border/60 rounded-full text-xs text-text-secondary">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
