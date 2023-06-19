import type { BgResponse } from '../types/images';
import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
	const response = await fetch(`${import.meta.env.VITE_STRAPI_URL}/api/bg?populate=images`);
	const data: BgResponse = await response.json();
	const images = data.data.attributes.images.data.map((image, i) => ({
		index: i,
		id: image.id,
		url: image.attributes.url,
		width: image.attributes.width,
		height: image.attributes.height,
		name: image.attributes.name
	}));
	return { images };
}) satisfies PageLoad;

export const prerender = true;
