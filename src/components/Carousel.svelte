<script lang="ts">
	import type { Image } from '$lib/types/image';

	export let images: Image[] = [];

	let currentIndex = 0;

	function previousImage() {
		currentIndex = (currentIndex - 1 + images.length) % images.length;
	}

	function nextImage() {
		currentIndex = (currentIndex + 1) % images.length;
	}

	function selectImage(index: number) {
		currentIndex = index;
	}
</script>

<div class="carousel">
	<div class="image-container">
		{#each images as image, index}
			<img
				src={image.url}
				alt={image.name}
				class={index === currentIndex
					? 'active object-cover h-[650px] w-full'
					: 'object-cover h-[650px] w-full'}
			/>
		{/each}
	</div>
	<button class="previous text-black font-bold" on:click={previousImage}>Previous</button>
	<button class="next text-black font-bold" on:click={nextImage}>Next</button>
	<div class="thumbnails overflow-x-scroll">
		{#each images as image, index}
			<img
				src={image.url}
				alt={image.name}
				on:keypress={() => selectImage(index)}
				class="thumbnail object-cover"
				on:click={() => selectImage(index)}
			/>
		{/each}
	</div>
</div>

<style>
	.carousel {
		position: relative;
	}

	.image-container {
		position: relative;
		overflow: hidden;
		width: 100%;
		height: 650px; /* Set the fixed height for the image container */
	}

	.image-container > img {
		position: absolute;
		top: 0;
		left: 0;
		opacity: 0;
		transition: opacity 0.75s;
	}

	img.active {
		opacity: 1;
	}

	.previous,
	.next {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		background: rgba(255, 255, 255, 0.5);
		border: none;
		padding: 10px;
		cursor: pointer;
	}

	.previous {
		left: 10px;
	}

	.next {
		right: 10px;
	}

	.thumbnails {
		display: flex;
		justify-content: center;
		margin-top: 10px;
		width: auto;
	}

	.thumbnail {
		width: 50px;
		height: auto;
		margin: 0 5px;
		cursor: pointer;
	}
</style>
