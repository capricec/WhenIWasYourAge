<script>
  import Typography from "./Typography.svelte";
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";
  import { createEventDispatcher } from "svelte";

  export let header = "";
  export let isOpen = false;

  let popupRef;
  let footerRef = null;
  let headerRef = null;
  let overflowState = "";
  const dispatch = createEventDispatcher();
  const close = () => {
    dispatch("close", "");
  };

  const handleKeyDown = event => {
    if (event.keyCode === 27) close();
  };

  onMount(() => {
    window.addEventListener("keydown", handleKeyDown);
    document.body.appendChild(popupRef);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.removeChild(popupRef);
    };
  });
  $: {
    if (typeof window !== "undefined") {
      if (isOpen) {
        overflowState = document.body.style.overflow;
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = overflowState;
      }
    }
  }
</script>

<div>
  <div bind:this={popupRef}>
    {#if isOpen}
      <div
        class={`overlay ${$$props.class || ''}`}
        transition:fade|local
        on:click={close}>
        <div
          class="aa-popup"
          transition:fly|local={{ duration: 300, y: -500, opacity: 0.9 }}
          on:click={(e)=>e.stopPropagation()}>
          <div class:header={header || !Boolean(headerRef)}>
            {#if header}
              <Typography type="headline">{header}</Typography>
            {:else}
              <slot name="header">
                <div bind:this={headerRef} />
              </slot>
            {/if}
          </div>

          <div class="content">
            <Typography>
              <slot />
            </Typography>
          </div>
          <div class:footer={!Boolean(footerRef)}>
            <slot name="footer">
              <div bind:this={footerRef} />
            </slot>
          </div>
        </div>
      </div>
    {/if}
  </div>
</div>

<style>
  .overlay {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);

    z-index: 99;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .aa-popup {
    border-radius: 16px;
    box-shadow: 3px 3px 17px 0 rgba(0, 0, 0, 0.17);
    background-color: #ffffff;
    min-width: 200px;
    animation-fill-mode: forwards;
    max-height: calc(100% - 32px);
    max-width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .content {
    margin: 24px;
    overflow: auto;
  }
  .footer {
    margin: 0 24px 24px 24px;
    display: flex;
    justify-content: flex-end;
  }
  .header {
    margin: 24px 24px 0 24px;
  }
  @media (max-width: 480px) {
    .popup {
      height: calc(100% - 32px);
      width: calc(100% - 32px);
    }
  }
</style>
