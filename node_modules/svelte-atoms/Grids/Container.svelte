<script>
  export let fluid = false;
</script>

<div class={`aa-сontainer ${fluid ? '' : 'aa-сontainer--withMaxWidth'} ${$$props.class || ''}`}>
  <slot />
</div>

<style>
  .aa-container {
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding-right: 16px;
    padding-left: 16px;
    box-sizing: border-box;
  }
  @media (min-width: 768px) {
    .aa-container {
      padding-right: 24px;
      padding-left: 24px;
    }
  }
  @media (min-width: 1024px) {
    .aa-container {
      padding-right: 24px;
      padding-left: 24px;
    }
  }
  @media (min-width: 1280px) {
    .aa-container {
      padding-right: 32px;
      padding-left: 32px;
    }
  }
  @media (min-width: 1920px) {
    .aa-container {
      padding-right: 56px;
      padding-left: 56px;
    }
  }
  .aa-container--withMaxWidth {
    max-width: 288px;
  }
  @media (min-width: 768px) {
    .aa-container--withMaxWidth {
      max-width: 672px;
    }
  }
  @media (min-width: 1024px) {
    .aa-container--withMaxWidth {
      max-width: 960px;
    }
  }
  @media (min-width: 1280px) {
    .aa-container--withMaxWidth {
      max-width: 1152px;
    }
  }
  @media (min-width: 1920px) {
    .aa-container--withMaxWidth {
      max-width: 1728px;
    }
  }
</style>
