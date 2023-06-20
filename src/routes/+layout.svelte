<script>
  import "../app.css";
</script>

<svelte:head>
  <title>laura norwood</title>
  <meta name="description" content="Portfolio of laura norwood" />
</svelte:head>

<nav class="float-left w-64 flex-col gap-4 sticky top-4 hidden md:flex">
  <a class="hover:underline underline-offset-8" href="/">bg</a>
  <a class="hover:underline underline-offset-8" href="/visdev">sketchbook</a>
  <a class="hover:underline underline-offset-8" href="/contact">contact</a>
</nav>

<slot />
