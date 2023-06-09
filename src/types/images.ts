export interface ImagesRoot {
	data: Daum[];
	meta: Meta;
}

export interface Daum {
	id: number;
	attributes: Attributes;
}

export interface Attributes {
	createdAt: string;
	updatedAt: string;
	images: Images;
}

export interface Images {
	data: Daum2[];
}

export interface Daum2 {
	id: number;
	attributes: Attributes2;
}

export interface Attributes2 {
	name: string;
	alternativeText: string;
	caption: string;
	width: number;
	height: number;
	formats: Formats;
	hash: string;
	ext: string;
	mime: string;
	size: number;
	url: string;
	previewUrl: string;
	provider: string;
	provider_metadata: any;
	createdAt: string;
	updatedAt: string;
	blurhash: string;
}

export interface Formats {
	small: Small;
	medium: Medium;
	thumbnail: Thumbnail;
	large?: Large;
}

export interface Small {
	ext: string;
	url: string;
	hash: string;
	mime: string;
	name: string;
	path: string;
	size: number;
	width: number;
	height: number;
}

export interface Medium {
	ext: string;
	url: string;
	hash: string;
	mime: string;
	name: string;
	path: string;
	size: number;
	width: number;
	height: number;
}

export interface Thumbnail {
	ext: string;
	url: string;
	hash: string;
	mime: string;
	name: string;
	path: string;
	size: number;
	width: number;
	height: number;
}

export interface Large {
	ext: string;
	url: string;
	hash: string;
	mime: string;
	name: string;
	path: string;
	size: number;
	width: number;
	height: number;
}

export interface Meta {
	pagination: Pagination;
}

export interface Pagination {
	page: number;
	pageSize: number;
	pageCount: number;
	total: number;
}
