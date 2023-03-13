<script context="module">
  let addNotificationCallback = null;
  export function sendNotification(text, options) {
    if (!addNotificationCallback)
      console.warn("<Notification /> component wasn`t used in the app");
    options = options || {};
    options.text = text;
    addNotificationCallback(options);
  }
</script>

<script>
  import { onMount } from "svelte";
  import { slide } from "svelte/transition";
  import IconButton from "./IconButton.svelte";
  import IconStatus from "./IconStatus.svelte";
  import { createEventDispatcher } from "svelte";

  export let notifications = [];
  export let delay = 4000;
  export let type = "dark";

  const dispatch = createEventDispatcher();

  let containerRef;
  onMount(() => {
    document.body.appendChild(containerRef);
    addNotificationCallback = notificationObject =>
      (notifications = [...notifications, notificationObject]);

    return () => {
      document.body.removeChild(containerRef);
      addNotificationCallback = null;
    };
  });

  const close = notificationObject => {
    notifications = notifications.filter(item => item !== notificationObject);
  };
  const autoClose = (node, notificationObject) => {
    const timer = setTimeout(
      () => close(notificationObject),
      notificationObject.delay || delay
    );
    return {
      destroy() {
        clearTimeout(timer);
      }
    };
  };
</script>

<div>
  <div
    bind:this={containerRef}
    class="container"
    class:light={type === 'light'}>
    {#each notifications as notification, i (notification)}
      <div
        class={`aa-notification ${notification.status || type} ${$$props.class || ''}`}
        transition:slide|local
        use:autoClose={notification}
        on:outroend={() => dispatch('close', notification)}>
        {#if notification.status && !notification.noIcon}
          <div class="statusIcon"><IconStatus icon={notification.icon || "attention"} status={notification.status} size={16}/></div>
        {/if}
        <div class="text">{notification.text}</div>
        <IconButton
          icon="close"
          status="noactive"
          class="closeButton"
          on:click={() => close(notification)} />
      </div>
    {/each}
  </div>
</div>

<style>
  .container {
    position: fixed;
    top: 0;
    right: 16px;
    width: 448px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    box-shadow: 3px 3px 18px 0 rgba(54, 71, 79, 0.2);
    overflow: hidden;
  }
  .aa-notification {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 8px 16px 8px 16px;
    font-family: var(--preferred-font);
    font-size: 16px;
    line-height: 1.5;
    /* margin-top: -8px; */
  }
  .aa-notification :global(.closeButton){
    width: auto;
    height: auto;
    margin-top: 4px;
  }
  .text {
    flex-grow: 1;
    padding-right: 8px;
  }
  .light {
    box-shadow: 3px 3px 18px 0 rgba(54, 71, 79, 0.2);
  }
  .statusIcon{
    margin: 3px 8px 0 0;

  }
  .aa-notification.light {
    background-color: var(--palette-white);
    color: var(--palette-main-1);
  }
  .aa-notification.dark {
    background-color: var(--palette-main-1);
    color: var(--palette-white);
  }
  .aa-notification.negative {
    background-color: var(--palette-negative-5);
    color: var(--palette-main-1);
  }
  .aa-notification.warning {
    background-color: var(--palette-warning-2);
    color: var(--palette-main-1);
  }
  .aa-notification.primary {
    background-color: var(--palette-primary-7);
    color: var(--palette-main-1);
  }
  .aa-notification.positive {
    background-color: var(--palette-positive-5);
    color: var(--palette-main-1);
  }
  @media (max-width: 680px) {
    .container {
      width: 100%;
      right: 0px;
    }
  }
</style>
