<script>
  import { scale } from "svelte/transition";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let tabs = [];
  export let activeTab;
  const onSelect = id => {
    activeTab = id;
    dispatch("select", id);
  };
</script>

<div class={`aa-tabs ${$$props.class || ''}`}>
  {#each tabs as tab, i (tab.id)}
    <button
      class="aa-tab"
      class:active={activeTab === tab.id}
      on:click={() => onSelect(tab.id)}>
      {tab.text}
      {#if activeTab === tab.id}
        <div class="underline" transition:scale|local />
      {/if}
    </button>
  {/each}

</div>

<style>
  .aa-tabs {
    border-bottom: 1px solid hsla(0, 0%, 74.9%, 0.48);
  }
  .aa-tab {
    cursor: pointer;
    background: none;
    outline: none;
    font-family: var(--preferred-font);
    font-size: 16px;
    color: var(--palette-noactive-3);
    border: none;
    padding: 8px;
    position: relative;
  }
  .underline {
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 2px;
    background: var(--palette-primary-1);
  }

  .active {
    color: var(--palette-main-1);
  }
</style>
