<script>
	import { fade } from 'svelte/transition';
	export let show = false;
</script>

{#if show}
	<div in:fade={{ duration: 300 }}>
		<div>
			<slot />
		</div>
	</div>
{/if}
