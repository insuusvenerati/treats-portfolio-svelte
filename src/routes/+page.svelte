<script lang="ts">
	import Modal from '../components/Modal.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const { images } = data;
</script>

<Modal {images} />
<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
	{#each images as image, i}
		<img
			class="w-[600px] h-[450px] hover:brightness-110 cursor-zoom-in object-cover"
			src={image.url}
			alt="svelte"
		/>
	{/each}
</div>
