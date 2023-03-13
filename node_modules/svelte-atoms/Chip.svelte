<script>
  import Icon from "./Icon.svelte";
  import IconButton from "./IconButton.svelte";
  export let selected = false;
  export let text = "";
  export let iconLeft = "";
  export let iconRight = "";
  export let onClose = null;
  export let editable = false;
  export let onChange = () => {};

  let textContent = text;
  let textRef = {};
  $: {
    textContent = text;
  }
  let isEditing = false;
  const onFocus = () => {
    isEditing = true;
  };
  const onBlur = () => {
    isEditing = false;
    setTimeout(() => (textContent = text), 10);
  };
  const onConfirm = () => {
    text = textContent;
    onChange(textContent);
  };

  function handleKeydown(event) {
    if (!isEditing) return;
    if (event.keyCode === 13) {
      event.preventDefault();
      onConfirm();
      textRef.blur();
    } else if (event.keyCode === 27) {
      onBlur();
      textRef.blur();
    }
  }
</script>

<div
  class={`aa-chip ${$$props.class || ''}`}
  class:selected
  class:isEditing
  class:editable>
  <div class="wrapper">
    {#if iconLeft}
      <Icon icon={iconLeft} status={selected ? 'white' : 'disabled'} />
    {/if}
    <div
      class="text"
      class:withLeftIcon={iconLeft}
      class:withRightIcon={iconRight || onClose || isEditing}>
      {#if editable}
        <span
          contenteditable="true"
          bind:textContent
          on:focus={onFocus}
          on:blur={onBlur}
          bind:this={textRef}>
          {textContent}
        </span>
      {:else}
        <span>{textContent}</span>
      {/if}
    </div>
    {#if isEditing}
      <IconButton
        icon="check"
        size="small"
        class="iconButton"
        status="noactive"
        on:mousedown={onConfirm} />
    {:else if onClose}
      <IconButton
        icon="close"
        size="small"
        class="iconButton"
        status="noactive"
        on:click={onClose} />
    {:else if iconRight}
      <Icon icon={iconRight} status={selected ? 'white' : 'disabled'} />
    {/if}
  </div>
</div>

<svelte:window on:keydown={handleKeydown} />

<style>
  .aa-chip {
    display: inline-block;
    align-items: center;
    border-radius: 20px;
    background: var(--palette-white);
    border: solid 1px var(--palette-noactive-5);
    padding: 4px 8px;
    font-size: 12px;
    font-weight: normal;
    font-family: var(--preferred-font);
    cursor: pointer;
  }
  .aa-chip :global(.iconButton) {
    width: auto;
    height: auto;
  }
  .aa-chip :global(.iconButton:hover .aa-icon) {
    fill: var(--palette-primary-1);
  }
  .wrapper {
    display: flex;
    align-items: center;
  }
  .aa-chip:hover {
    border-color: var(--palette-primary-1);
  }
  .selected {
    background-color: var(--palette-primary-1);
    border-color: var(--palette-primary-1);
    color: var(--palette-white);
  }
  .withLeftIcon {
    margin-left: 8px;
  }
  .withRightIcon {
    margin-right: 8px;
  }
  .text span {
    outline: none;
  }
  .isEditing {
    border-color: var(--palette-primary-1);
  }
  .editable:not(.isEditing):hover {
    background-color: var(--palette-noactive-5);
    border-color: var(--palette-noactive-5);
  }
</style>
