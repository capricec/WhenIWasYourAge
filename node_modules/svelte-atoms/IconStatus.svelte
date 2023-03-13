<script>
  import { getSVGIconObjet } from "./utils";

  export let icon = "";
  export let size = 24;
  export let status = "primary";
  export let type = "flat";

  $: iconObject = getSVGIconObjet(icon);

  $: viewBoxAdjusted = iconObject.viewbox + 6;
  $: translate = (viewBoxAdjusted - iconObject.viewbox * 0.8) / 2;
</script>

<svg
  width={size}
  height={size}
  viewBox="0 0 {viewBoxAdjusted}
  {viewBoxAdjusted}"
  class={`aa-iconStatus ${$$props.class || ''}`}
  style={$$props.style || ''}>
  <circle
    cx={viewBoxAdjusted / 2}
    cy={viewBoxAdjusted / 2}
    r={(viewBoxAdjusted - 2) / 2}
    class={`${status} ${type}`}
    stroke-width="2" />
  <g
    transform="translate({translate},{translate}) scale(0.8)"
    class={`icon ${type}`}>
    {#each iconObject.pathes as { path, color }}
      <path style={color ? `fill: ${color}` : null} d={path} />
    {/each}
  </g>
</svg>

<style>
  circle {
    fill: none;
  }
  .icon.flat {
    fill: var(--palette-main-1);
  }
  .icon.filled {
    fill: var(--palette-white);
  }
  .primary {
    stroke: var(--palette-primary-1);
  }
  .positive {
    stroke: var(--palette-positive-1);
  }
  .negative {
    stroke: var(--palette-negative-1);
  }
  .disabled {
    stroke: var(--palette-main-1);
  }
  .noactive {
    stroke: var(--palette-noactive-3);
  }
  .warning {
    stroke: var(--palette-warning-1);
  }
  .primary.filled {
    fill: var(--palette-primary-1);
  }
  .positive.filled {
    fill: var(--palette-positive-1);
  }
  .negative.filled {
    fill: var(--palette-negative-1);
  }

  .disabled.filled {
    fill: var(--palette-main-1);
  }
  .noactive.filled {
    fill: var(--palette-noactive-3);
  }
  .warning.filled {
    fill: var(--palette-warning-1);
  }
</style>
