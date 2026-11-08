/**
 * Content wrapper: the editable source of truth is project-details-data.json,
 * maintained through Portfolio Admin. Export names and shapes are unchanged.
 */
import data from './project-details-data.json';

/**
 * Case-study data for every project detail page. Every claim here is grounded
 * in the corresponding GitHub repository (README, file listing, commit history)
 * as of November 2026. Nothing is asserted beyond what the repos show.
 */

export interface ProjectFeature {
  title: string;
  icon: string;
  iconColor: string;
  iconBg: string;
  description?: string;
  list?: string[];
}

export interface ProjectMetric {
  icon: string;
  val: string;
  label: string;
  color: string;
  bg: string;
}

export interface ProjectDetail {
  title: string;
  subtitle: string;
  description: string;
  heroDescription: string;
  heroImage: string;
  tags: string[];
  screens: string[];
  role: string;
  duration: string;
  date: string;
  client: string;
  stats: { label: string; value: string }[];
  features: ProjectFeature[];
  impact: {
    title: string;
    description: string;
    metrics: ProjectMetric[];
    testimonials?: { quote: string; author: string }[];
  };
  links?: { label: string; url: string; primary?: boolean }[];
}

export const projectDetailsData: Record<string, ProjectDetail> = data;
