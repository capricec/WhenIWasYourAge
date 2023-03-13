<script>
  export let noGutters = false;
  export let verticalPadding = 0;
  export let topPadding = 0;
  export let bottomPadding = 0;
</script>

<div
  class={`aa-row ${noGutters ? 'aa-row--noGutters' : ''} ${$$props.class || ''}`}
  style={`padding-top: ${verticalPadding || topPadding}px; padding-bottom: ${verticalPadding || bottomPadding}px`}>
  <slot />
</div>

<style>
  .aa-row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -8px;
    margin-left: -8px;
  }
  .aa-row--noGutters {
    margin-right: 0;
    margin-left: 0;
  }
  .aa-row--noGutters > .aa-cell {
    padding-right: 0;
    padding-left: 0;
  }
  .aa-row--noGutters > [class*="aa-cell-"] {
    padding-right: 0;
    padding-left: 0;
  }
</style>
