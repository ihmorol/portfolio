/**
 * Generated cover-art palette per project slug, used by ProjectCover wherever
 * project thumbnails render without screenshots. `materialIcon` is only used
 * by surfaces that render Material Symbols (home featured cards).
 */
export interface ProjectCoverConfig {
  from: string;
  to: string;
  materialIcon?: string;
}

export const projectCovers: Record<string, ProjectCoverConfig> = {
  advyon: { from: '#6366f1', to: '#a855f7', materialIcon: 'gavel' },
  'elearning-platform': { from: '#a855f7', to: '#ec4899', materialIcon: 'school' },
  'unsw-nb15-ids': { from: '#22c55e', to: '#14b8a6', materialIcon: 'security' },
  'lorenz-ann-thesis': { from: '#3b82f6', to: '#22d3ee' },
  'ann-nanofluid-model': { from: '#06b6d4', to: '#3b82f6' },
  'meme-research-console': { from: '#d946ef', to: '#a855f7' },
  briefli: { from: '#f59e0b', to: '#f97316' },
  'fall-detection-wearable': { from: '#ef4444', to: '#fb7185' },
  printslot: { from: '#14b8a6', to: '#10b981' },
  'skill-paradox': { from: '#f97316', to: '#f59e0b' },
  voicekey: { from: '#10b981', to: '#22c55e' },
  'paradox-prism': { from: '#ec4899', to: '#f97316' },
  'task-manager-mobile': { from: '#0ea5e9', to: '#3b82f6' },
  'email-template-generator': { from: '#eab308', to: '#f59e0b' },
  'portfolio-website': { from: '#71717a', to: '#a1a1aa' },
};
