<script>
  import Typography from "./Typography.svelte";
  import IconStatus from "./IconStatus.svelte";
  import IconButton from "./IconButton.svelte";
  import { createEventDispatcher } from "svelte";
  import {fade} from 'svelte/transition'

  export let status = "primary";
  export let icon = "attention";
  export let isOpen = true;
  export let closable = false;

  const dispatch = createEventDispatcher();
  const close = () => {
    isOpen = false;
    dispatch("close", "");
  };

  let contentRef = null;
  let descriptionRef = null;
</script>

{#if isOpen === true}
  <div class={`aa-alert ${status} ${$$props.class || ''}`} transition:fade|local>
    <div class="icon">
      <IconStatus {icon} {status} />
    </div>
    <div class="text">
      <div class="title" class:withMargin={!Boolean(descriptionRef)}>
        <slot/>
      </div>
      <div
        class:description={!Boolean(descriptionRef)}
        >
        <slot name="description">
          <div bind:this={descriptionRef} />
        </slot>
      </div>
    </div>
    <div class:content={!Boolean(contentRef)}>
      <slot name="content">
        <div bind:this={contentRef} />
      </slot>
    </div>
    {#if closable}
      <div class="close">
        <IconButton
          on:click={close}
          icon="close"
          size="medium"
          class="closeButton"
          status="noactive" />
      </div>
    {/if}
  </div>
{/if}

<style>
  .aa-alert {
    display: flex;
    padding: 16px;
    border-radius: 8px;
  }
  .aa-alert.primary {
    background-color: var(--palette-primary-7);
  }
  .aa-alert.negative {
    background-color: var(--palette-negative-5);
  }
  .aa-alert.positive {
    background-color: var(--palette-positive-5);
  }
  .aa-alert.warning {
    background-color: var(--palette-warning-2);
  }
  .aa-alert.noactive {
    background-color: var(--palette-noactive-6);
  }
  .text {
    flex-grow: 1;
  }
  .close {
    margin-left: 16px;
  }
  .close :global(.closeButton) {
    width: auto;
    height: auto;
  }
  .content {
    margin-left: 16px;
  }
  .icon {
    height: 24px;
    margin-right: 16px;
  }
  .title {
    font-family: var(--preferred-font);
    font-size: 16px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    color: var(--palette-main-1);
  }
  .title.withMargin {
    margin-bottom: 8px;
  }
  .description {
    font-family: var(--preferred-font);
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: var(--palette-main-1);
  }
  
</style>
