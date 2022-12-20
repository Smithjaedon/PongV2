<script lang="ts">
  import { drkmde, gmstart } from "../stores/store";
  import Game from "./Game.svelte";
  import Score from "./Score.svelte";
</script>

<div class="flex justify-center items-center mt-10 ">
  <div
    class="flex justify-center items-center w-[45rem] h-[30rem] bg-base-content rounded-2xl drop-shadow-lg"
  >
    {#if !$gmstart}
      <button on:click={() => gmstart.set(!$gmstart)} class="btn btn-wide uppercase animate-bounce"
        >play</button
      >
    {/if}
    {#if $gmstart}
      <Game />
    {/if}
  </div>
</div>
{#if $gmstart}
  <Score />
{/if}
