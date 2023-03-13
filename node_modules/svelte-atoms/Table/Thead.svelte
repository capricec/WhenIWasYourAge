<thead class={`aa-thead`}>
  <slot />
</thead>

<style>
  .aa-thead :global(th) {
    padding: 8px;
    text-align: left;
    white-space: nowrap;
    font-size: 11px;
    color:var(--palette-main-2);
    text-align: left;
    font-weight: normal;
  }
  .aa-thead :global(tr th:first-child) {
    padding-left: 16px;
  }
  .aa-thead :global(tr th:last-child) {
    padding-right: 16px;
  }
</style>
