<script>
  import Icon from "./Icon.svelte";
  import Typography from "./Typography.svelte";

  export let size = 40;
  export let status = "noactive";
</script>

<div class={`aa-loader ${$$props.class || ''}`} style={$$props.style || ''}>
  <svg class="icon" width={size} height={size} viewBox="25 25 50 50">
    <circle
      class={`path ${status}`}
      cx="50"
      cy="50"
      r="20"
      fill="none"
      stroke-width="6"
      stroke-miter-limit="10" />
  </svg>
  <Typography>
    <slot />
  </Typography>
</div>

<style>
  .aa-loader {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .icon {
    animation: rotate 2s linear infinite;
    transform-origin: center;
  }
  .path {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    animation: dash 1.5s ease-in-out infinite;
    stroke: var(--palette-noactive-1);
    stroke-linecap: round;
  }
  .path.primary {
    stroke: var(--palette-primary-1);
  }
  .path.positive {
    stroke: var(--palette-positive-1);
  }
  .path.negative {
    stroke: var(--palette-negative-1);
  }
  .path.white {
    stroke: var(--palette-white);
  }
  .path.disabled {
    stroke: var(--palette-main-1);
  }
  .path.noactive {
    stroke: var(--palette-noactive-3);
  }
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -35px;
    }

    100% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -124px;
    }
  }
</style>
