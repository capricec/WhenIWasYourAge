<script>
  export let type = "block1";
</script>

<div
  class={`aa-block ${type.toLowerCase()} ${$$props.class || ''}`}
  style={$$props.style || ''}>
  <slot />
</div>

<style>
  .aa-block {
    padding: 16px;
    border-radius: 8px;
    background-color: var(--palette-white);
  }
  .disabled {
    box-shadow: 2px 2px 6px 0 var(--palette-noactive-6);
    background-color: var(--palette-noactive-8);
  }

  .block2 {
    box-shadow: 6px 6px 18px 0 rgba(54, 71, 79, 0.1);
  }
  .block3 {
    box-shadow: 3px 3px 18px 0 rgba(54, 71, 79, 0.2);
  }
  .popup {
    box-shadow: 2px 6px 16px 0 rgba(54, 71, 79, 0.4);
  }
  .add {
    border: dashed 2px var(--palette-noactive-5);
    background-color: var(--palette-main-3);
  }
  .alert {
    background-color: var(--palette-noactive-6);
  }
  .selected {
    border: solid 2px var(--palette-primary-1);
  }
  .dark {
    box-shadow: 3px 3px 18px 0 rgba(54, 71, 79, 0.2);
    background-color: var(--palette-main-1);
    color: var(--palette-white);
  }
</style>
