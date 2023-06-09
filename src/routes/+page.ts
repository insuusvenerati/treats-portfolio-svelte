import type { ImagesRoot } from '../types/images';
import type { PageLoad } from './$types';

export const load = (async () => {
	const response = await fetch('http://localhost:1337/api/background-images?populate=images');
	const { data }: ImagesRoot = await response.json();
	const images = data.flatMap((data) => data.attributes.images.data);
	return { images };
}) satisfies PageLoad;

export const prerender = true;
