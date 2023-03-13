<script>
  export let type = "body1";
  export let block = false;
</script>

<span
  class={`aa-typography ${type.toLowerCase()} ${$$props.class || ''}`}
  class:block
  style={$$props.style || ''}>
  <slot />
</span>

<style>
  .aa-typography {
    font-family: var(--preferred-font);
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
  }
  .block {
    display: block;
  }
  .headline {
    color: var(--palette-main-1);
    font-size: 24px;
    font-weight: 500;
    line-height: 1.5;
  }
  .title {
    font-size: 24px;
    font-weight: 500;
    line-height: 1.5;
    color: var(--palette-main-1);
  }
  .subheader {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.5;
    color: var(--palette-main-1);
  }
  .inputtext {
    font-size: 18px;
    font-style: normal;
    line-height: 1.33;
    color: var(--palette-main-1);
  }
  .infotext {
    font-size: 18px;
    font-style: normal;
    line-height: 1.33;
    color: var(--palette-noactive-4);
  }
  .body1,
  .accent, .white {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    color: var(--palette-main-1);
  }
  .white{
    color: var(--palette-white);
  }
  .body2 {
    font-size: 16px;
    font-style: normal;
    line-height: 1.5;
    color: var(--palette-main-1);
  }
  .body3 {
    font-size: 12px;
    font-weight: normal;
    line-height: 1.5;
    color: var(--palette-noactive-3);
  }
  .button {
    font-size: 14px;
    font-weight: bold;
    line-height: 1.14;
    color: var(--palette-noactive-3);
  }
  .caption {
    font-size: 14px;
    font-weight: normal;
    line-height: 1.5;
    color: var(--palette-noactive-3);
  }
  .tabtitle {
    font-size: 11px;
    font-weight: normal;
    line-height: 1.36;
    color: var(--palette-main-2);
    text-transform: uppercase;
  }
  .linkunderline {
    font-size: 16px;
    font-weight: normal;
    line-height: 1.5;
    color: var(--palette-primary-1);
    text-decoration: underline;
  }
  .link {
    font-size: 16px;
    font-weight: normal;
    line-height: 1.5;
    color: var(--palette-primary-1);
  }
  .tabactive {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    color: var(--palette-main-1);
  }
  .tabdefault {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    color: var(--palette-noactive-3);
  }
</style>
