<script lang="ts">
	import Carousel from './Carousel.svelte';
	import type { Image } from '$lib/types/image';

	export let images: Image[] = [];
	let dialog: HTMLDialogElement;
	function showModal() {
		dialog.showModal();
	}
</script>

<button on:click={showModal}>Open Modal</button>
<dialog bind:this={dialog} class="modal w-[800px]">
	<Carousel {images} />
</dialog>

<style>
	.modal {
		background-color: black;
		padding: 1rem;
		border-radius: 0.5rem;
	}

	dialog.modal::backdrop {
		background-color: rgba(0, 0, 0, 0.5);
		backdrop-filter: blur(5px);
	}
</style>
