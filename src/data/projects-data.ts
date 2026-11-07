/**
 * Content wrapper: the editable source of truth is projects-data.json,
 * maintained through Portfolio Admin. Icons are stored as name strings in
 * JSON and resolved to Lucide components here.
 */
import {
  Activity,
  BookOpen,
  Bot,
  Brain,
  Database,
  Filter,
  FlaskConical,
  Globe,
  Layout,
  Link2,
  Mail,
  Mic,
  Orbit,
  Printer,
  Radar,
  Scale,
  ScanSearch,
  Shapes,
  ShieldCheck,
  Smartphone,
  Users,
  Video,
  Waves,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

import data from './projects-data.json';

const icons: Record<string, LucideIcon> = {
  Activity,
  BookOpen,
  Bot,
  Brain,
  Database,
  Filter,
  FlaskConical,
  Globe,
  Layout,
  Link2,
  Mail,
  Mic,
  Orbit,
  Printer,
  Radar,
  Scale,
  ScanSearch,
  Shapes,
  ShieldCheck,
  Smartphone,
  Users,
  Video,
  Waves,
};

export const projectsData = {
  ...data,
  projects: data.projects.map((project) => ({
    ...project,
    icon: icons[project.icon],
  })),
};
