<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	const { images } = data;
</script>

<div class="grid grid-cols-3 gap-4">
	{#each images as image, index (image.id)}
		{@const imageUrl = `http://localhost:1337${image.attributes.url}`}
		<a href={imageUrl}>
			<img
				class="w-[600px] h-[450px] hover:brightness-110 cursor-zoom-in object-cover"
				src={imageUrl}
				alt="svelte"
			/>
		</a>
	{/each}
</div>
