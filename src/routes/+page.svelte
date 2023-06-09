<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	const { images } = data;
</script>

<div class="grid grid-cols-3 gap-4">
	{#each images as image, index (image.id)}
		<img src={`http://localhost:1337${image.attributes.url}`} alt="svelte" />
	{/each}
</div>
