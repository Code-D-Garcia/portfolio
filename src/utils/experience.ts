import type { CollectionEntry } from 'astro:content';

/** Months between two `YYYY-MM` values (end exclusive). */
function monthsBetween(start: string, end: string): number {
	const [sy, sm] = start.split('-').map(Number);
	const [ey, em] = end.split('-').map(Number);
	return (ey - sy) * 12 + (em - sm);
}

/**
 * Whole years of professional experience, summing each job's duration so gaps
 * between jobs don't count. A job without `end` counts up to the build date.
 */
export function experienceYears(jobs: CollectionEntry<'experience'>[], now = new Date()): number {
	const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
	const months = jobs.reduce((total, { data }) => total + monthsBetween(data.start, data.end ?? today), 0);
	return Math.floor(months / 12);
}
