<script>
  import { getEventsAction } from "./utils";
  import { current_component } from "svelte/internal";
  import Icon from "./Icon.svelte";
  import Loader from "./Loader.svelte";
  import Typography from "./Typography.svelte";
  export let title = "";
  export let subtitle = "";
  export let isLoading = false;
  export let status = "primary";
  export let disabled = false;

  const events = getEventsAction(current_component);
</script>

<label class={`aa-fileUpload ${status} ${$$props.class || ''}`}>
  <input type="file" disabled={disabled || isLoading} use:events />
  <div class="iconContainer">
    <Icon
      icon="file"
      status={isLoading || disabled ? 'noactive' : status}
      size={40} />
    <div class="secondaryIcon">
      {#if isLoading}
        <Loader {isLoading} size={15} />
      {:else if status === 'positive'}
        <Icon icon="check" />
      {:else if status === 'negative'}
        <Icon icon="close" />
      {:else}
        <Icon icon="arrow-up" />
      {/if}
    </div>
  </div>
  <div>
    <div class={`title ${isLoading || disabled ? 'noactive' : status}`}>
      {title}
    </div>
    <div class={`subtitle ${isLoading || disabled ? 'noactive' : status}`}>
      {subtitle}
    </div>
  </div>
</label>

<style>
  input {
    display: none;
  }
  .aa-fileUpload {
    display: flex;
    cursor: pointer;
  }
  .aa-fileUpload.noactive{
    cursor: auto;
  }
  .aa-fileUpload:hover .title{
    color: var(--palette-primary-1);
  }
  .iconContainer {
    position: relative;
    margin-right: 8px;
    height: max-content;
  }
  .secondaryIcon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .title {
    font-size: 12px;
    color: var(--palette-primary-2);
    font-family: var(--preferred-font);
  }
  .aa-fileUpload:hover .title.noactive, .title.noactive {
    color: var(--palette-noactive-3);
  }
  .subtitle {
    font-size: 14px;
    color: var(--palette-noactive-3);
    font-family: var(--preferred-font);
  }
  .subtitle.negative {
    color: var(--palette-negative-1);
  }
</style>
