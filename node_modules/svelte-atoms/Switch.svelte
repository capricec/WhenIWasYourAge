<script>
  import { getEventsAction } from "./utils";
  import { current_component } from "svelte/internal";
  import Loader from "./Loader.svelte";

  export let checked = false;
  export let type = "primary";
  export let disabled = false;
  export let title = "";
  export let left = "";
  export let right = "";
  export let isLoading = false;
  const events = getEventsAction(current_component);
</script>

<label class={$$props.class || ''} style={$$props.style || ''}>
  {#if title}
    <div class="title">{title}</div>
  {/if}
  <div class="container">
    {#if left}
      <div class="left">{left}</div>
    {/if}
    <input type="checkbox" bind:checked {disabled} use:events />
    <div class={`aa-switch ${type}`} class:disabled>
      <div class="toggler" />
      {#if isLoading}
        <div class="loader">
          <Loader size={16} />
        </div>
      {/if}
    </div>
    {#if right}
      <div class="right">{right}</div>
    {/if}
  </div>
</label>

<style>
  .title {
    font-family: var(--preferred-font);
    font-size: 14px;
    line-height: 1;
    color: var(--palette-noactive-3);
    margin-bottom: 8px;
  }
  .container {
    display: flex;
    align-items: center;
  }
  .left,
  .right {
    font-family: var(--preferred-font);
    font-size: 16px;
    line-height: 1.5;
    color: var(--palette-main-1);
  }
  .left {
    margin-right: 8px;
  }
  .right {
    margin-left: 8px;
  }
  input {
    display: none;
  }
  .aa-switch {
    width: 48px;
    height: 24px;
    border-radius: 37px;
    border: solid 2px var(--palette-noactive-4);
    background-color: var(--palette-white);
    position: relative;
  }
  .toggler {
    position: absolute;
    left: 4px;
    top: 4px;
    width: 16px;
    height: 16px;
    border-radius: 22px;
    box-shadow: 2px 2px 4px 0 rgba(53, 142, 215, 0.33);
    background-color: var(--palette-primary-1);
    transition: left 0.2s ease-in-out;
  }
  input:checked + .aa-switch .toggler {
    left: 28px;
  }
  input:checked + .aa-switch.primary {
    box-shadow: inset 0 1px 1px 0 var(--palette-primary-3);
    background-color: var(--palette-primary-1);
  }
  input:checked + .aa-switch.primary .toggler {
    box-shadow: 2px 2px 4px 0 var(--palette-primary-5);
    background-color: var(--palette-white);
  }
  .aa-switch.disabled .toggler,
  input:checked + .aa-switch.primary.disabled .toggler {
    background-color: var(--palette-noactive-3);
    box-shadow: none;
  }
  input:checked + .aa-switch.disabled {
    background-color: var(--palette-noactive-6);
    box-shadow: none;
  }
  .loader {
    position: absolute;
    left: 28px;
    top: 4px;
  }
  input:checked + .aa-switch .loader {
    left: 4px;
  }
</style>
