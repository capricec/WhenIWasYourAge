<script>
  export let min = 0;
  export let max = 100;
  export let value = 0;
  export let status = "primary";
  $: width = ((value - min) / (max - min)) * 100;
</script>

<div class={`aa-progress ${status} ${$$props.class || ''}`}>

  <div class="progressContainer">
    <div class="progressBar" style={`width: ${width}%`} />
  </div>
  <div class="title">
    <slot />
  </div>
</div>

<style>
  .title {
    font-family: var(--preferred-font);
    font-size: 14px;
    line-height: 1.5;
    color: var(--palette-noactive-3);
  }
  .progressContainer {
    height: 4px;
    border-radius: 2px;
    background-color: var(--palette-noactive-5);
  }
  .progressBar {
    border-radius: 2px;
    height: 4px;
  }
  .primary .progressBar {
    background-color: var(--palette-primary-1);
  }
  .positive .progressBar {
    background-color: var(--palette-positive-1);
  }
  .negative .progressBar {
    background-color: var(--palette-negative-1);
  }
  .warning .progressBar {
    background-color: var(--palette-warning-1);
  }
  .noactive .progressBar {
    background-color: var(--palette-noactive-3);
  }
</style>
