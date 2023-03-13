<script>
  import { getEventsAction } from "./utils";
  import { current_component } from "svelte/internal";
  import Icon from "./Icon.svelte";

  export let icon = "";
  export let status = "primary";
  export let type = "flat";
  export let size = "large";
  export let disabled = false;

  const sizes = {
    large: 16,
    medium: 14,
    small: 10
  };
  const events = getEventsAction(current_component);
</script>

<button
  type="button"
  style={$$props.style || ''}
  class={`aa-iconButton ${disabled ? 'noactive' : status} ${type} ${size} ${$$props.class || ''}`}
  {disabled}
  use:events>
  <Icon
    {icon}
    status={type === 'filled' ? 'white' : status}
    size={sizes[size]} />
</button>

<style>
  .aa-iconButton {
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 50%;
    margin: 0;
    padding: 0;
  }
  .large {
    width: 40px;
    height: 40px;
  }
  .medium {
    width: 30px;
    height: 30px;
  }
  .small {
    width: 20px;
    height: 20px;
  }
  .aa-iconButton.filled.primary {
    box-shadow: 3px 4px 17px 0 rgba(53, 142, 215, 0.3);
    background: var(--palette-primary-1);
  }
  .aa-iconButton.filled.positive {
    box-shadow: 3px 4px 17px 0 rgba(126, 211, 33, 0.55);
    background: var(--palette-positive-1);
  }
  .aa-iconButton.filled.negative {
    box-shadow: 3px 4px 17px 0 rgba(240, 21, 38, 0.3);
    background: var(--palette-negative-1);
  }
  .aa-iconButton.filled.noactive {
    background: var(--palette-noactive-2);
  }
</style>
