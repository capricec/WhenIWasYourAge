<script>
  import { onMount } from "svelte";
  import { getEventsAction } from "./utils";
  import { current_component } from "svelte/internal";
  import Typography from "./Typography.svelte";
  import IconStatus from "./IconStatus.svelte";
  import Loader from "./Loader.svelte";
  import Spacer from "./Spacer.svelte";
  import Icon from "./Icon.svelte";

  export let disabled = false;
  export let isLoading = false;
  export let title = "Drag file there or";
  export let buttonTitle = "Select file";
  export let activeTitle = "Drop file for upload";
  export let fileLoadingTitle = "File is loading";
  export let fileTitle = "";
  export let error = "";
  export let dropOnPage = false;

  const events = getEventsAction(current_component);
  let isActive = false;
  let overlayRef = null;
  let throttleRef = null;

  const highlight = e => changeHighlight(e, true);
  const unhighlight = e => changeHighlight(e, false);

  const changeHighlight = (e, val) => {
    e.preventDefault();
    e.stopPropagation();
    if (isLoading && disabled) return;
    clearTimeout(throttleRef);
    throttleRef = setTimeout(() => (isActive = val), val ? 0 : 10);
  };

  onMount(() => {
    if (dropOnPage) {
      document.body.addEventListener("dragenter", highlight, false);
      document.body.addEventListener("dragover", highlight, false);
      document.body.addEventListener("dragleave", unhighlight, false);
      document.body.addEventListener("drop", unhighlight, false);
    }
    document.body.appendChild(overlayRef);
    return () => {
      document.body.removeChild(overlayRef);
      document.body.removeEventListener("dragenter", highlight, false);
      document.body.removeEventListener("dragover", highlight, false);
      document.body.removeEventListener("dragleave", unhighlight, false);
      document.body.removeEventListener("drop", unhighlight, false);
    };
  });
</script>

<label
  class={`aa-DropZone ${$$props.class}`}
  class:isActive={isActive && !dropOnPage}
  class:isLoading
  class:disabled
  on:dragenter={highlight}
  on:dragover={highlight}
  on:dragleave={unhighlight}
  on:drop={unhighlight}
  use:events>
  <input type="file" disabled={disabled || isLoading} class="fileInput" />
  {#if isActive && !isLoading && !dropOnPage}
    <Icon icon="download" status="primary" size={40} />
    <Spacer size={16} />
    <Typography type="link">{activeTitle}</Typography>
  {:else if isLoading}
    <Loader status="primary" size={40} />
    <Spacer size={16} />
    <Typography type="link">{fileLoadingTitle}</Typography>
  {:else}
    {#if fileTitle}
      <div class="fileNameContainer">
        <IconStatus
          icon={error ? 'close' : 'check'}
          size={16}
          status={error ? 'negative' : 'positive'} />
        <div class="fileTitle">{fileTitle}</div>
      </div>
      {#if error}
        <Spacer size={8} />
        <div class="error">{error}</div>
      {/if}
    {:else}
      <Typography type="infotext">{title}</Typography>
    {/if}
    <Spacer size={16} />
    <Typography type={disabled ? 'infotext' : 'link'}>{buttonTitle}</Typography>
  {/if}
</label>

<div>
  <div bind:this={overlayRef}>
    {#if isActive && dropOnPage}
      <div class="overlay" />
      <div class="overlayContent" use:events>
        <Icon icon="download" status="white" size={80} />
        <Spacer size={16} />
        <div class="fullPageText">{activeTitle}</div>
      </div>
    {/if}
  </div>
</div>

<style>
  .fullPageText {
    font-family: var(--preferred-font);
    font-size: 24px;
    font-weight: 500;
    text-align: center;
    color: var(--palette-white);
  }
  .aa-DropZone {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--palette-white);
    border: dashed 2px var(--palette-noactive-4);
    min-height: 120px;
    border-radius: 8px;
    padding: 16px;
    cursor: pointer;
  }
  .fileInput {
    display: none;
  }
  .isActive {
    border: dashed 2px var(--palette-primary-1);
    background-color: var(--palette-primary-7);
  }
  .isLoading {
    border: dashed 2px var(--palette-primary-1);
    background-color: var(--palette-primary-7);
    cursor: initial;
  }
  .error {
    font-display: var(--preferred-font);
    font-size: 14px;
    color: var(--palette-negative-1);
  }
  .fileNameContainer {
    display: flex;
    align-items: center;
  }
  .disabled {
    cursor: initial;
    background-color: var(--palette-noactive-6);
  }
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: var(--palette-primary-1);
    opacity: 0.85;
  }
  .overlayContent {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    border: dashed 4px var(--palette-white);
    margin: 16px;
  }
  .fileTitle {
    margin-left: 8px;
    font-size: 14px;
    font-family: var(--preferred-font);
    color: var(--palette-noactive-3);
  }
</style>
