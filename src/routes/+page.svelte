<script lang="ts">
  import ImagesGrid from "../components/ImagesGrid.svelte";
  import Modal from "../components/Modal.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
  const { images } = data;
</script>

<Modal {images} />
<ImagesGrid {images} />
