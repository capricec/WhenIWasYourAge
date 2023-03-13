<script>
  import { getEventsAction } from "./utils";
  import { current_component } from "svelte/internal";
  import Icon from "./Icon.svelte";

  export let checked = false;
  export let error = "";
  export let disabled = false;

  const events = getEventsAction(current_component);
</script>

<label class={$$props.class || ''}>
  <input type="checkbox" bind:checked {disabled} use:events />
  <div class="aa-checkbox" class:error class:disabled>
    <div class="checkmark">
      <div class="mark">
        <Icon
          icon="check"
          size={10}
          status={disabled ? 'noactive' : 'disabled'} />
      </div>
    </div>
    <slot />
  </div>
</label>

<style>
  input {
    display: none;
  }
  label {
    display: flex;
  }
  .checkmark {
    width: 16px;
    height: 16px;
    box-sizing: border-box;
    border: 2px solid var(--palette-noactive-2);
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
  }
  .checkmark .mark {
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }
  input:checked + .aa-checkbox .checkmark {
    border-color: var(--palette-primary-1);
  }
  input:checked + .aa-checkbox .mark {
    opacity: 1;
  }
  .aa-checkbox {
    font-family: var(--preferred-font);
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: var(--palette-main-1);
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .aa-checkbox:hover .checkmark {
    border-color: var(--palette-primary-1);
  }
  .error {
    color: var(--palette-negative-1);
  }
  .aa-checkbox.error .checkmark,
  input:checked + .aa-checkbox.error .checkmark {
    border-color: var(--palette-negative-4);
    background: var(--palette-negative-6);
  }
  .disabled {
    color: var(--palette-noactive-2);
  }
  .aa-checkbox.disabled .checkmark,
  input:checked + .aa-checkbox.disabled .checkmark {
    border-color: var(--palette-noactive-2);
    background: var(--palette-noactive-6);
  }
</style>
