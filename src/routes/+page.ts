import type { BgResponse } from '../types/images';
import type { PageLoad } from './$types';

export const load = (async () => {
	const response = await fetch('http://localhost:1337/api/bg?populate=images');
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
