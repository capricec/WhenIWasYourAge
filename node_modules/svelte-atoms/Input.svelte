<script>
  import { getEventsAction } from "./utils";
  import { current_component } from "svelte/internal";
  import Loader from "./Loader.svelte";
  import Icon from "./Icon.svelte";
  import IconStatus from "./IconStatus.svelte";
  import Tooltip from "./Tooltip.svelte";

  export let title = null;
  export let placeholder = "";
  export let size = "big";
  export let value = "";
  export let error = null;
  export let successful = false;
  export let disabled = false;
  export let required = false;
  export let isLoading = false;
  export let icon = null;
  export let iconStatus = "primary";
  export let type = "text";
  export let hint = "";
  export let textarea = false;
  export let rows = 3;
  export let maxlength = "";

  const onInput = e => {
    const type = e.target.type;
    const val = e.target.value;
    if (type === "number" || type === "range")
      value = val === "" ? undefined : +val;
    else value = val;
  };

  const events = getEventsAction(current_component);
</script>

<div class={`aa-input ${$$props.class || ''}`} style={$$props.style || ''}>
  {#if title && size === 'big'}
    <div class="title" class:required>{title}</div>
  {/if}
  {#if textarea}
    <textarea
      {placeholder}
      class:noTitle={!title}
      class={size}
      class:error
      class:successful
      class:disabled
      {disabled}
      {type}
      class:withRightElement={error || successful || icon}
      on:input={onInput}
      use:events
      {rows}
      {value}
      {maxlength} />
  {:else}
    <input
      {placeholder}
      class:noTitle={!title}
      class={size}
      class:error
      class:successful
      class:disabled
      {value}
      {disabled}
      {type}
      class:withRightElement={error || successful || icon}
      on:input={onInput}
      use:events
      {maxlength} />
  {/if}

  <div class="rigtElement">

    {#if isLoading}
      <Loader size={24} />
    {:else if error}
      <Tooltip text={error}>
        <IconStatus status="negative" icon="attention" />
      </Tooltip>
    {:else if successful}
      <IconStatus status="positive" icon="check" />
    {:else if hint}
      <Tooltip text={hint} delay={0}>
        <IconStatus status="noactive" icon="question" />
      </Tooltip>
    {:else if icon}
      <Icon {icon} status={iconStatus} />
    {:else}
      <slot />
    {/if}

  </div>
</div>

<style>
  .aa-input {
    position: relative;
    font-family: var(--preferred-font);
  }
  input,
  textarea {
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
    color: var(--palette-main-1);
    width: 100%;
    line-height: 24px;
    box-sizing: border-box;
    text-overflow: ellipsis;
    outline: none;
    box-shadow: inset 0 0 0 2px #d7dadc;
    border: none;
    padding: 24px 16px 16px 16px;
    border-radius: 8px;
  }
  .noTitle {
    padding: 24px 16px;
  }
  .medium {
    padding: 16px;
  }
  .small {
    padding: 8px 16px;
  }
  input:focus {
    box-shadow: inset 0 0 0 2px #b9d8f1, 0 0 7px #b9d8f1;
  }
  .title {
    position: absolute;
    top: 8px;
    left: 16px;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: normal;
    color: var(--palette-noactive-3);
  }
  .error {
    background-color: #fde7e9;
    box-shadow: inset 0 0 0 2px #f9a1a8;
  }
  .error:focus {
    box-shadow: inset 0 0 0 2px #f9a1a8, 0 0 7px 0 #f9a1a8;
  }
  .successful {
    box-shadow: inset 0 0 0 2px #b2e47a;
  }
  .successful:focus {
    box-shadow: inset 0 0 0 2px #b2e47a, 0 0 7px 0 #b2e47a;
  }
  .disabled {
    background: var(--palette-noactive-6);
  }
  .required:after {
    content: "*";
    display: inline-block;
    color: var(--palette-negative-1);
    padding-left: 2px;
  }
  .rigtElement {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
  }
  .withRightElement {
    padding-right: 40px;
  }
</style>
