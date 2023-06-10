import type { BgResponse } from '../types/images';
import type { PageLoad } from './$types';

export const load = (async () => {
	const response = await fetch(`${process.env.STRAPI_URL}/api/bg?populate=images`);
	const data: BgResponse = await response.json();
	const images = data.data.attributes.images.data.map((image) => ({
		id: image.id,
		url: image.attributes.url,
		width: image.attributes.width,
		height: image.attributes.height
	}));
	return { images };
}) satisfies PageLoad;

export const prerender = true;
