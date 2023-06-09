import type { ImagesRoot } from '../types/images';
import type { PageLoad } from './$types';

export const load = (async () => {
	const response = await fetch(
		'https://treats-portfolio-cms.fly.dev/api/background-images?populate=images'
	);
	const { data }: ImagesRoot = await response.json();
	const images = data.flatMap((data) => data.attributes.images.data);
	return { images };
}) satisfies PageLoad;

export const prerender = true;
