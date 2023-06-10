<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	const { images } = data;
	let index = 0;
	const next = () => (index = (index + 1) % images.length);
	const prev = () => (index = (index - 1 + images.length) % images.length);
</script>

<div class="grid grid-cols-3 gap-4">
	{#each images as image, i}
		{@const imageUrl = `http://localhost:1337${image.url}`}
		<button>
			<img
				class="w-[600px] h-[450px] hover:brightness-110 cursor-zoom-in object-cover"
				src={imageUrl}
				alt="svelte"
			/>
		</button>
	{/each}
</div>
