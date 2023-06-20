<script lang="ts">
  import type { Image } from "$lib/types/image";

  export let images: Image[] = [];
</script>

<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
  {#each images as image (image.id)}
    <img
      class="w-[600px] h-[450px] hover:brightness-110 cursor-zoom-in object-cover"
      src={image.url}
      alt={image.name}
      width={image.width}
      height={image.height}
    />
  {/each}
</div>
