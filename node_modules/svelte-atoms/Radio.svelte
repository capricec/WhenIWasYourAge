<script>
  import { getEventsAction } from "./utils";
  import { current_component } from "svelte/internal";
  export let value = "";
  export let group = "";
  export let error = false;
  export let disabled = false;

  let checked = false;
  function handleChange() {
    group = value;
  }
  $: checked = group === value;
  const events = getEventsAction(current_component);
</script>

<label class={$$props.class || ''} style={$$props.style || ''}>
  <input
    type="radio"
    on:change={handleChange}
    {checked}
    {disabled}
    use:events />
  <div class="aa-radio" class:error class:disabled>
    <div class="markContainer">
      <div class="mark" />
    </div>
    <slot />
  </div>
</label>

<style>
  input {
    display: none;
  }
  .aa-radio {
    display: flex;
    align-items: center;
    font-family: var(--preferred-font);
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: var(--palette-main-1);
  }
  .markContainer {
    border: 2px solid var(--palette-noactive-2);
    border-radius: 50%;
    margin-right: 8px;
    width: 18px;
    height: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    background: var(--palette-white);
  }
  .mark {
    width: 8px;
    height: 8px;
    background: var(--palette-main-1);
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }
  input:checked + .aa-radio .markContainer {
    border-color: var(--palette-primary-1);
  }
  input:checked + .aa-radio .mark {
    opacity: 1;
  }
  .error {
    color: var(--palette-negative-1);
  }
  .aa-radio.error .markContainer,
  input:checked + .aa-radio.error .markContainer {
    border-color: var(--palette-negative-4);
    background: var(--palette-negative-6);
  }
  .disabled {
    color: var(--palette-noactive-2);
  }
  .aa-radio.disabled .markContainer,
  input:checked + .aa-radio.disabled .markContainer {
    border-color: var(--palette-noactive-2);
    background: var(--palette-noactive-6);
  }
</style>
