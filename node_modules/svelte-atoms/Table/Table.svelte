<script>
  export let rowPadding = 0;
</script>

<table
  class="aa-table"
  class:rowPadding
  style={`border-spacing: 0 ${rowPadding}px`}>
  <slot />
</table>

<style>
  .aa-table {
    border-collapse: collapse;
    width: 100%;
  }
  .rowPadding {
    border-collapse: separate;
  }

  .aa-table.rowPadding :global(.aa-tbody) {
    box-shadow: none;
  }
  .aa-table.rowPadding :global(.aa-tbody tr) {
    box-shadow: 6px 6px 18px 0 rgba(54, 71, 79, 0.08);
  }
  .aa-table.rowPadding :global(.aa-tbody td:first-child) {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  .aa-table.rowPadding :global(.aa-tbody td:last-child) {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
  .aa-table.rowPadding :global(.aa-thead th) {
    padding-bottom: 0;
  }
</style>
