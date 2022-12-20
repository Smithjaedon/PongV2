<script lang="ts">
  import Card from "./lib/Card.svelte";
  import Header from "./lib/Header.svelte";
</script>

<main>
  <Header />
  <div class="h-screen">
    <Card />
  </div>
</main>

<style>
  :global(body) {
    background-color: var(--prim);
  }
</style>
