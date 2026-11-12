import type { CollectionEntry } from 'astro:content';

/** `YYYY-MM` as a month count, for easy subtraction. */
const toMonths = (value: string) => {
	const [year, month] = value.split('-').map(Number);
	return year * 12 + (month - 1);
};

/**
 * Whole years since the first job started, up to the latest end date (or the
 * build date while a job is current). Gaps between jobs are included.
 */
export function experienceYears(jobs: CollectionEntry<'experience'>[], now = new Date()): number {
	if (jobs.length === 0) return 0;
	const today = now.getFullYear() * 12 + now.getMonth();
	const first = Math.min(...jobs.map(({ data }) => toMonths(data.start)));
	const last = Math.max(...jobs.map(({ data }) => (data.end ? toMonths(data.end) : today)));
	return Math.floor((last - first) / 12);
}
