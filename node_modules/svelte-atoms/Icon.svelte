<script>
  import { getSVGIconObjet } from "./utils";

  export let icon = "";
  export let size = 16;
  export let status = "";

  $: iconObject = getSVGIconObjet(icon);
</script>

<svg
  width={size}
  height={size}
  viewBox="0 0 {iconObject.viewbox}
  {iconObject.viewbox}"
  class={`aa-icon ${status} ${$$props.class || ''}`}
  style={$$props.style || null}>
  <g>
    {#each iconObject.pathes as { path, color }}
      <path style={color ? `fill: ${color}` : null} d={path} />
    {/each}
  </g>
</svg>

<style>
  .aa-icon {
    fill: var(--palette-main-1);
  }
  .aa-icon.primary {
    fill: var(--palette-primary-1);
  }
  .aa-icon.positive {
    fill: var(--palette-positive-1);
  }
  .aa-icon.negative {
    fill: var(--palette-negative-1);
  }
  .aa-icon.white {
    fill: var(--palette-white);
  }
  .aa-icon.disabled {
    fill: var(--palette-main-1);
  }
  .aa-icon.noactive {
    fill: var(--palette-noactive-3);
  }
</style>
