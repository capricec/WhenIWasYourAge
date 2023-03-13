<script>
  
  export let verticalPadding = 0;
  export let topPadding = 0;
  export let bottomPadding = 0;

  const sizes = ["xs", "sm", "md", "lg", "xl"];
  const sizeClasses = sizes
    .map(size => {
      const sizeProp = $$props[size];
      return sizeProp
        ? `aa-cell${size === "xs" ? "" : "-" + size}-${sizeProp}`
        : "";
    })
    .join(" ");

  const hiddenClasses = sizes
    .map(size => {
      const sizeProp = $$props[`${size}Hidden`];
      return sizeProp ? `aa-cell-${size}-hidden` : "";
    })
    .join(" ");

  const autoClasses = sizes
    .map(size => {
      const sizeProp = $$props[`${size}Auto`];
      return sizeProp ? `aa-cell${size === "xs" ? "" : "-" + size}-auto` : "";
    })
    .join(" ");

  const offsetClasses = sizes
    .map(size => {
      const sizeProp = $$props[`${size}Offset`];
      return sizeProp
        ? `aa-cell-offset${size === "xs" ? "" : "-" + size}-${sizeProp}`
        : "";
    })
    .join(" ");

  const style = `paddingTop: ${verticalPadding ||
    topPadding}px; paddingBottom: ${verticalPadding || bottomPadding}px`;
</script>

<div
  {style}
  class={`aa-cell ${sizeClasses} ${hiddenClasses} ${autoClasses} ${offsetClasses} ${$$props.class || ''}`}>
  <slot />
</div>

<style>
  .aa-cell-xl,
  .aa-cell-xl-auto,
  .aa-cell-xl-12,
  .aa-cell-xl-11,
  .aa-cell-xl-10,
  .aa-cell-xl-9,
  .aa-cell-xl-8,
  .aa-cell-xl-7,
  .aa-cell-xl-6,
  .aa-cell-xl-5,
  .aa-cell-xl-4,
  .aa-cell-xl-3,
  .aa-cell-xl-2,
  .aa-cell-xl-1,
  .aa-cell-lg,
  .aa-cell-lg-auto,
  .aa-cell-lg-12,
  .aa-cell-lg-11,
  .aa-cell-lg-10,
  .aa-cell-lg-9,
  .aa-cell-lg-8,
  .aa-cell-lg-7,
  .aa-cell-lg-6,
  .aa-cell-lg-5,
  .aa-cell-lg-4,
  .aa-cell-lg-3,
  .aa-cell-lg-2,
  .aa-cell-lg-1,
  .aa-cell-md,
  .aa-cell-md-auto,
  .aa-cell-md-12,
  .aa-cell-md-11,
  .aa-cell-md-10,
  .aa-cell-md-9,
  .aa-cell-md-8,
  .aa-cell-md-7,
  .aa-cell-md-6,
  .aa-cell-md-5,
  .aa-cell-md-4,
  .aa-cell-md-3,
  .aa-cell-md-2,
  .aa-cell-md-1,
  .aa-cell-sm,
  .aa-cell-sm-auto,
  .aa-cell-sm-12,
  .aa-cell-sm-11,
  .aa-cell-sm-10,
  .aa-cell-sm-9,
  .aa-cell-sm-8,
  .aa-cell-sm-7,
  .aa-cell-sm-6,
  .aa-cell-sm-5,
  .aa-cell-sm-4,
  .aa-cell-sm-3,
  .aa-cell-sm-2,
  .aa-cell-sm-1,
  .aa-cell,
  .aa-cell-auto,
  .aa-cell-12,
  .aa-cell-11,
  .aa-cell-10,
  .aa-cell-9,
  .aa-cell-8,
  .aa-cell-7,
  .aa-cell-6,
  .aa-cell-5,
  .aa-cell-4,
  .aa-cell-3,
  .aa-cell-2,
  .aa-cell-1 {
    position: relative;
    width: 100%;
    padding-right: 8px;
    padding-left: 8px;
    box-sizing: border-box;
  }

  .aa-cell {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }

  .aa-cell-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
  }

  .aa-cell-1 {
    flex: 0 0 8.3333333333%;
    max-width: 8.3333333333%;
  }

  .aa-cell-2 {
    flex: 0 0 16.6666666667%;
    max-width: 16.6666666667%;
  }

  .aa-cell-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .aa-cell-4 {
    flex: 0 0 33.3333333333%;
    max-width: 33.3333333333%;
  }

  .aa-cell-5 {
    flex: 0 0 41.6666666667%;
    max-width: 41.6666666667%;
  }

  .aa-cell-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .aa-cell-7 {
    flex: 0 0 58.3333333333%;
    max-width: 58.3333333333%;
  }

  .aa-cell-8 {
    flex: 0 0 66.6666666667%;
    max-width: 66.6666666667%;
  }

  .aa-cell-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }

  .aa-cell-10 {
    flex: 0 0 83.3333333333%;
    max-width: 83.3333333333%;
  }

  .aa-cell-11 {
    flex: 0 0 91.6666666667%;
    max-width: 91.6666666667%;
  }

  .aa-cell-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .aa-cell-offset-1 {
    margin-left: 8.3333333333%;
  }

  .aa-cell-offset-2 {
    margin-left: 16.6666666667%;
  }

  .aa-cell-offset-3 {
    margin-left: 25%;
  }

  .aa-cell-offset-4 {
    margin-left: 33.3333333333%;
  }

  .aa-cell-offset-5 {
    margin-left: 41.6666666667%;
  }

  .aa-cell-offset-6 {
    margin-left: 50%;
  }

  .aa-cell-offset-7 {
    margin-left: 58.3333333333%;
  }

  .aa-cell-offset-8 {
    margin-left: 66.6666666667%;
  }

  .aa-cell-offset-9 {
    margin-left: 75%;
  }

  .aa-cell-offset-10 {
    margin-left: 83.3333333333%;
  }

  .aa-cell-offset-11 {
    margin-left: 91.6666666667%;
  }

  @media (min-width: 768px) {
    .aa-cell-sm {
      flex-basis: 0;
      flex-grow: 1;
      max-width: 100%;
    }

    .aa-cell-sm-auto {
      flex: 0 0 auto;
      width: auto;
      max-width: 100%;
    }

    .aa-cell-sm-1 {
      flex: 0 0 8.3333333333%;
      max-width: 8.3333333333%;
    }

    .aa-cell-sm-2 {
      flex: 0 0 16.6666666667%;
      max-width: 16.6666666667%;
    }

    .aa-cell-sm-3 {
      flex: 0 0 25%;
      max-width: 25%;
    }

    .aa-cell-sm-4 {
      flex: 0 0 33.3333333333%;
      max-width: 33.3333333333%;
    }

    .aa-cell-sm-5 {
      flex: 0 0 41.6666666667%;
      max-width: 41.6666666667%;
    }

    .aa-cell-sm-6 {
      flex: 0 0 50%;
      max-width: 50%;
    }

    .aa-cell-sm-7 {
      flex: 0 0 58.3333333333%;
      max-width: 58.3333333333%;
    }

    .aa-cell-sm-8 {
      flex: 0 0 66.6666666667%;
      max-width: 66.6666666667%;
    }

    .aa-cell-sm-9 {
      flex: 0 0 75%;
      max-width: 75%;
    }

    .aa-cell-sm-10 {
      flex: 0 0 83.3333333333%;
      max-width: 83.3333333333%;
    }

    .aa-cell-sm-11 {
      flex: 0 0 91.6666666667%;
      max-width: 91.6666666667%;
    }

    .aa-cell-sm-12 {
      flex: 0 0 100%;
      max-width: 100%;
    }

    .aa-cell-offset-sm-0 {
      margin-left: 0;
    }

    .aa-cell-offset-sm-1 {
      margin-left: 8.3333333333%;
    }

    .aa-cell-offset-sm-2 {
      margin-left: 16.6666666667%;
    }

    .aa-cell-offset-sm-3 {
      margin-left: 25%;
    }

    .aa-cell-offset-sm-4 {
      margin-left: 33.3333333333%;
    }

    .aa-cell-offset-sm-5 {
      margin-left: 41.6666666667%;
    }

    .aa-cell-offset-sm-6 {
      margin-left: 50%;
    }

    .aa-cell-offset-sm-7 {
      margin-left: 58.3333333333%;
    }

    .aa-cell-offset-sm-8 {
      margin-left: 66.6666666667%;
    }

    .aa-cell-offset-sm-9 {
      margin-left: 75%;
    }

    .aa-cell-offset-sm-10 {
      margin-left: 83.3333333333%;
    }

    .aa-cell-offset-sm-11 {
      margin-left: 91.6666666667%;
    }
  }
  @media (min-width: 1024px) {
    .aa-cell-md {
      flex-basis: 0;
      flex-grow: 1;
      max-width: 100%;
    }

    .aa-cell-md-auto {
      flex: 0 0 auto;
      width: auto;
      max-width: 100%;
    }

    .aa-cell-md-1 {
      flex: 0 0 8.3333333333%;
      max-width: 8.3333333333%;
    }

    .aa-cell-md-2 {
      flex: 0 0 16.6666666667%;
      max-width: 16.6666666667%;
    }

    .aa-cell-md-3 {
      flex: 0 0 25%;
      max-width: 25%;
    }

    .aa-cell-md-4 {
      flex: 0 0 33.3333333333%;
      max-width: 33.3333333333%;
    }

    .aa-cell-md-5 {
      flex: 0 0 41.6666666667%;
      max-width: 41.6666666667%;
    }

    .aa-cell-md-6 {
      flex: 0 0 50%;
      max-width: 50%;
    }

    .aa-cell-md-7 {
      flex: 0 0 58.3333333333%;
      max-width: 58.3333333333%;
    }

    .aa-cell-md-8 {
      flex: 0 0 66.6666666667%;
      max-width: 66.6666666667%;
    }

    .aa-cell-md-9 {
      flex: 0 0 75%;
      max-width: 75%;
    }

    .aa-cell-md-10 {
      flex: 0 0 83.3333333333%;
      max-width: 83.3333333333%;
    }

    .aa-cell-md-11 {
      flex: 0 0 91.6666666667%;
      max-width: 91.6666666667%;
    }

    .aa-cell-md-12 {
      flex: 0 0 100%;
      max-width: 100%;
    }

    .aa-cell-offset-md-0 {
      margin-left: 0;
    }

    .aa-cell-offset-md-1 {
      margin-left: 8.3333333333%;
    }

    .aa-cell-offset-md-2 {
      margin-left: 16.6666666667%;
    }

    .aa-cell-offset-md-3 {
      margin-left: 25%;
    }

    .aa-cell-offset-md-4 {
      margin-left: 33.3333333333%;
    }

    .aa-cell-offset-md-5 {
      margin-left: 41.6666666667%;
    }

    .aa-cell-offset-md-6 {
      margin-left: 50%;
    }

    .aa-cell-offset-md-7 {
      margin-left: 58.3333333333%;
    }

    .aa-cell-offset-md-8 {
      margin-left: 66.6666666667%;
    }

    .aa-cell-offset-md-9 {
      margin-left: 75%;
    }

    .aa-cell-offset-md-10 {
      margin-left: 83.3333333333%;
    }

    .aa-cell-offset-md-11 {
      margin-left: 91.6666666667%;
    }
  }
  @media (min-width: 1280px) {
    .aa-cell-lg {
      flex-basis: 0;
      flex-grow: 1;
      max-width: 100%;
    }

    .aa-cell-lg-auto {
      flex: 0 0 auto;
      width: auto;
      max-width: 100%;
    }

    .aa-cell-lg-1 {
      flex: 0 0 8.3333333333%;
      max-width: 8.3333333333%;
    }

    .aa-cell-lg-2 {
      flex: 0 0 16.6666666667%;
      max-width: 16.6666666667%;
    }

    .aa-cell-lg-3 {
      flex: 0 0 25%;
      max-width: 25%;
    }

    .aa-cell-lg-4 {
      flex: 0 0 33.3333333333%;
      max-width: 33.3333333333%;
    }

    .aa-cell-lg-5 {
      flex: 0 0 41.6666666667%;
      max-width: 41.6666666667%;
    }

    .aa-cell-lg-6 {
      flex: 0 0 50%;
      max-width: 50%;
    }

    .aa-cell-lg-7 {
      flex: 0 0 58.3333333333%;
      max-width: 58.3333333333%;
    }

    .aa-cell-lg-8 {
      flex: 0 0 66.6666666667%;
      max-width: 66.6666666667%;
    }

    .aa-cell-lg-9 {
      flex: 0 0 75%;
      max-width: 75%;
    }

    .aa-cell-lg-10 {
      flex: 0 0 83.3333333333%;
      max-width: 83.3333333333%;
    }

    .aa-cell-lg-11 {
      flex: 0 0 91.6666666667%;
      max-width: 91.6666666667%;
    }

    .aa-cell-lg-12 {
      flex: 0 0 100%;
      max-width: 100%;
    }

    .aa-cell-offset-lg-0 {
      margin-left: 0;
    }

    .aa-cell-offset-lg-1 {
      margin-left: 8.3333333333%;
    }

    .aa-cell-offset-lg-2 {
      margin-left: 16.6666666667%;
    }

    .aa-cell-offset-lg-3 {
      margin-left: 25%;
    }

    .aa-cell-offset-lg-4 {
      margin-left: 33.3333333333%;
    }

    .aa-cell-offset-lg-5 {
      margin-left: 41.6666666667%;
    }

    .aa-cell-offset-lg-6 {
      margin-left: 50%;
    }

    .aa-cell-offset-lg-7 {
      margin-left: 58.3333333333%;
    }

    .aa-cell-offset-lg-8 {
      margin-left: 66.6666666667%;
    }

    .aa-cell-offset-lg-9 {
      margin-left: 75%;
    }

    .aa-cell-offset-lg-10 {
      margin-left: 83.3333333333%;
    }

    .aa-cell-offset-lg-11 {
      margin-left: 91.6666666667%;
    }
  }
  @media (min-width: 1920px) {
    .aa-cell-xl {
      flex-basis: 0;
      flex-grow: 1;
      max-width: 100%;
    }

    .aa-cell-xl-auto {
      flex: 0 0 auto;
      width: auto;
      max-width: 100%;
    }

    .aa-cell-xl-1 {
      flex: 0 0 8.3333333333%;
      max-width: 8.3333333333%;
    }

    .aa-cell-xl-2 {
      flex: 0 0 16.6666666667%;
      max-width: 16.6666666667%;
    }

    .aa-cell-xl-3 {
      flex: 0 0 25%;
      max-width: 25%;
    }

    .aa-cell-xl-4 {
      flex: 0 0 33.3333333333%;
      max-width: 33.3333333333%;
    }

    .aa-cell-xl-5 {
      flex: 0 0 41.6666666667%;
      max-width: 41.6666666667%;
    }

    .aa-cell-xl-6 {
      flex: 0 0 50%;
      max-width: 50%;
    }

    .aa-cell-xl-7 {
      flex: 0 0 58.3333333333%;
      max-width: 58.3333333333%;
    }

    .aa-cell-xl-8 {
      flex: 0 0 66.6666666667%;
      max-width: 66.6666666667%;
    }

    .aa-cell-xl-9 {
      flex: 0 0 75%;
      max-width: 75%;
    }

    .aa-cell-xl-10 {
      flex: 0 0 83.3333333333%;
      max-width: 83.3333333333%;
    }

    .aa-cell-xl-11 {
      flex: 0 0 91.6666666667%;
      max-width: 91.6666666667%;
    }

    .aa-cell-xl-12 {
      flex: 0 0 100%;
      max-width: 100%;
    }

    .aa-cell-offset-xl-0 {
      margin-left: 0;
    }

    .aa-cell-offset-xl-1 {
      margin-left: 8.3333333333%;
    }

    .aa-cell-offset-xl-2 {
      margin-left: 16.6666666667%;
    }

    .aa-cell-offset-xl-3 {
      margin-left: 25%;
    }

    .aa-cell-offset-xl-4 {
      margin-left: 33.3333333333%;
    }

    .aa-cell-offset-xl-5 {
      margin-left: 41.6666666667%;
    }

    .aa-cell-offset-xl-6 {
      margin-left: 50%;
    }

    .aa-cell-offset-xl-7 {
      margin-left: 58.3333333333%;
    }

    .aa-cell-offset-xl-8 {
      margin-left: 66.6666666667%;
    }

    .aa-cell-offset-xl-9 {
      margin-left: 75%;
    }

    .aa-cell-offset-xl-10 {
      margin-left: 83.3333333333%;
    }

    .aa-cell-offset-xl-11 {
      margin-left: 91.6666666667%;
    }
  }
  @media (max-width: 768px) {
    .aa-cell-xs-hidden {
      display: none;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    .aa-cell-sm-hidden {
      display: none;
    }
  }

  @media screen and (min-width: 1024px) and (max-width: 1280px) {
    .aa-cell-md-hidden {
      display: none;
    }
  }

  @media screen and (min-width: 1280px) and (max-width: 1920px) {
    .aa-cell-lg-hidden {
      display: none;
    }
  }

  @media (min-width: 1920px) {
    .aa-cell-xl-hidden {
      display: none;
    }
  }
</style>
