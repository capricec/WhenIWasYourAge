<script>
  import { onMount } from "svelte";

  const ARROW_SIZE = 8;

  export let text = null;
  export let html = null;
  export let delay = 500;
  let isVisible = false;
  let isRendered = false;
  let style = "";
  let tooltip;
  let tooltipClass = "top";
  let timeToutId = null;

  const start = e => {
    isRendered = true;
    const {
      top,
      right,
      left,
      bottom,
      width,
      height
    } = e.target.getBoundingClientRect();
    timeToutId = setTimeout(() => {
      const { offsetWidth, offsetHeight } = tooltip;
      const { innerWidth, innerHeight } = window;
      isRendered = true;
      if (
        ARROW_SIZE + offsetHeight < top &&
        (offsetWidth - width) / 2 < innerWidth - right
      ) {
        // on top
        tooltipClass = "top";
        style = `top:${top - offsetHeight - ARROW_SIZE}px; left:${left +
          width / 2}px`;
      } else if (ARROW_SIZE + offsetWidth < innerWidth - left - width) {
        //on rigth
        tooltipClass = "right";
        style = `top:${top + height / 2}px; left:${right + ARROW_SIZE}px`;
      } else if (
        ARROW_SIZE + offsetHeight < innerHeight - top - height &&
        (offsetWidth - width) / 2 < innerWidth - right
      ) {
        // on bottom
        tooltipClass = "bottom";
        style = `top:${bottom + ARROW_SIZE}px; left:${left + width / 2}px`;
      } else {
        // on left
        tooltipClass = "left";
        style = `top:${top + height / 2}px; left:${left -
          ARROW_SIZE -
          offsetWidth}px`;
      }
    }, delay);
  };

  const end = () => {
    clearTimeout(timeToutId);
    style = "";
    isRendered = false;
    isVisible = false;
  };

  onMount(() => {
    document.body.appendChild(tooltip);
    return () => {
      document.body.removeChild(tooltip);
      clearTimeout(timeToutId);
    }
  });
</script>

<div class="content" on:mouseenter={start} on:mouseleave={end}>
  <slot />
</div>
<div>
  <div
    class={`aa-tooltip ${tooltipClass} ${$$props.class || ''}`}
    {style}
    bind:this={tooltip}
    class:isRendered
    class:isVisible={style}>
    {text || ''}
    {@html html}
  </div>
</div>

<style>
  .content {
    display: inline-block;
  }
  .aa-tooltip {
    opacity: 0;
    transition: opacity 0.3s;
    top: -99px;
    position: fixed;
    max-width: 320px;
    border-radius: 4px;
    font-family: var(--preferred-font);
    font-size: 14px;
    line-height: 1.43;
    text-align: center;
    padding: 4px 8px;
    background-color: var(--palette-main-1);
    display: none;
    color: var(--palette-white);
  }
  .aa-tooltip:before {
    content: "";
    width: 12px;
    height: 12px;
    background-color: var(--palette-main-1);
    display: inline-block;
    position: absolute;
    border-radius: 2px;
  }
  .aa-tooltip.right {
    transform: translateY(-50%);
  }
  .aa-tooltip.right:before {
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
    left: -5px;
  }
  .aa-tooltip.top {
    transform: translateX(-50%);
  }
  .aa-tooltip.top:before {
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    bottom: -5px;
  }
  .aa-tooltip.bottom {
    transform: translateX(-50%);
  }
  .aa-tooltip.bottom:before {
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    top: -5px;
  }
  .aa-tooltip.left {
    transform: translateY(-50%);
  }
  .aa-tooltip.left:before {
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
    right: -5px;
  }
  .isVisible {
    opacity: 1;
  }
  .isRendered {
    display: inline-block;
  }
</style>
