/**
 * Generated cover-art palette per project slug, used by ProjectCover wherever
 * project thumbnails render without screenshots. `materialIcon` is only used
 * by surfaces that render Material Symbols (home featured cards).
 *
 * Content wrapper: the editable source of truth is project-covers.json,
 * maintained through Portfolio Admin.
 */
import coversData from './project-covers.json';

export interface ProjectCoverConfig {
  from: string;
  to: string;
  materialIcon?: string;
}

export const projectCovers: Record<string, ProjectCoverConfig> =
  coversData.covers;

export const DEFAULT_COVER: ProjectCoverConfig = coversData.defaultCover;

/** Cover palette for a project slug, or DEFAULT_COVER with a dev-time warning. */
export function getProjectCover(slug: string): ProjectCoverConfig {
  const cover = projectCovers[slug];
  if (!cover) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(
        `[project-covers] No cover palette for slug "${slug}", using DEFAULT_COVER. Add one in src/data/project-covers.json.`
      );
    }
    return DEFAULT_COVER;
  }
  return cover;
}
