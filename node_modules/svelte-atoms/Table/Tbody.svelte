<tbody class="aa-tbody">
  <slot />
</tbody>

<style>
  .aa-tbody {
    border-radius: 8px;
    box-shadow: 6px 6px 18px 0 rgba(54, 71, 79, 0.08);
  }
  .aa-tbody :global(tr) {
    border-bottom: 1px solid var(--palette-noactive-6);
  }

  .aa-tbody :global(tr:first-child td:first-child) {
    border-top-left-radius: 8px;
  }
  .aa-tbody :global(tr:first-child td:last-child) {
    border-top-right-radius: 8px;
  }
  .aa-tbody :global(tr:last-child) {
    border-bottom: none;
  }
  .aa-tbody :global(tr:last-child td:first-child) {
    border-bottom-left-radius: 8px;
  }
  .aa-tbody :global(tr:last-child td:last-child) {
    border-bottom-right-radius: 8px;
  }
  .aa-tbody :global(td) {
    vertical-align: top;
    padding: 8px;
    background: var(--palette-white);
  }
  .aa-tbody :global(tr td:first-child) {
    padding-left: 16px;
  }
  .aa-tbody :global(tr td:last-child) {
    padding-right: 16px;
  }
</style>
