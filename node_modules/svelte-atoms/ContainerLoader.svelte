<script>
  import { fade } from "svelte/transition";
  import Loader from "./Loader.svelte";

  export let title = "Загрузка";
  export let isLoading = false;
</script>

<div class={`aa-containerLoader ${$$props.class || ''}`}>
  <div class:blur={isLoading} class="content">
    <slot />
  </div>
  {#if isLoading}
    <div class="loader" transition:fade|local>
      <Loader>{title}</Loader>
    </div>
  {/if}
</div>

<style>
  .content {
    transition: filter 0.3s easy-in-out;
  }
  .aa-containerLoader {
    position: relative;
  }
  .loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .blur {
    filter: blur(2px);
    pointer-events: none;
  }
</style>
