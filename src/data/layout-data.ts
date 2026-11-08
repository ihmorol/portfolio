/**
 * Content wrapper: the editable source of truth is layout-data.json,
 * maintained through Portfolio Admin. Export names and shapes are unchanged.
 */
import data from './layout-data.json';

interface LegalLink {
  name: string;
  href: string;
}

export const layoutData = data as Omit<typeof data, 'footer'> & {
  footer: Omit<typeof data.footer, 'legals'> & { legals: LegalLink[] };
};
