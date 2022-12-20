<script lang="ts">
  import { p1count, p2count } from "../stores/store";
</script>

<div class="flex justify-center items-center mt-16">
  <div
    class="w-[10rem] h-[3.5rem] bg-[var(--dsecon)] rounded-2xl flex justify-center items-center shadow-md"
  >
    <div class="countdown font-['Oswald'] text-4xl pr-5 border-r-2">
      <span style="--value:{$p1count}" />
    </div>
    <div class="countdown font-['Oswald'] text-4xl pl-5"><span style="--value:{$p2count}" /></div>
  </div>
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Oswald&display=swap");
</style>
