<!-- svelte-ignore a11y-click-events-have-key-events -->
<script src="https://kit.fontawesome.com/804fd39ec1.js" crossorigin="anonymous">
  import { drkmde } from "../stores/store";

  const themeSwitch = () => {
    drkmde.set(!$drkmde);
    document.body.classList.toggle("drk");
  };
</script>

<div
  class:drkNav={$drkmde}
  class="flex justify-center items-center py-5 bg-[var(--dsecon)] place-content-center"
>
  <h1 class:text-[var(--dsecon)]={$drkmde} class="text-3xl font-semibold uppercase font-['Oswald']">
    Pong
  </h1>
  <div class="flex justify-center items-center absolute right-5 ">
    {#if !$drkmde}
      <i on:click={themeSwitch} class="fa-xl fa-solid fa-circle-half-stroke" />
    {/if}
    {#if $drkmde}
      <i on:click={themeSwitch} class="invert fa-xl fa-solid fa-circle-half-stroke " />
    {/if}
  </div>
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Oswald&display=swap");

  :global(.drk) {
    background-color: var(--dsecon);
  }

  :global(.drkNav) {
    background-color: var(--prim);
  }
</style>
