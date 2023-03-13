<script>
  import Typography from "./Typography.svelte";
  import Button from "./Button.svelte";
  import Dropdown from "./Dropdown.svelte";
  import { createEventDispatcher } from "svelte";

  export let totalRecords = 0;
  export let pageSize = 10;
  export let limits = [10, 20, 50, 100];
  export let offset = 0;
  export let forwardButtonText = "Вперед";
  export let backButtonText = "Назад";
  export let totalRecordText = "Всего:";
  export let pageSizeText = "Показывать по:";

  const dispatch = createEventDispatcher();

  let pages = [];
  $: currentPage = Math.ceil((offset + 1) / pageSize);
  $: pageQnty = Math.ceil(totalRecords / pageSize);
  $: {
    pages = [];
    for (let i = 1; i <= pageQnty; i += 1) {
      if (Math.abs(i - currentPage) < 3) pages.push(i);
    }
  }

  const pageSizeChange = limit => {
    pageSize = limit;
    dispatch("pageSizeChange", limit);
  };
  const pageChange = page => {
    offset = page;
    dispatch("pageChange", page);
  };
  const changeLimit = limit => {
    pageSizeChange(limit);
    pageChange(Math.floor(offset / limit) * limit);
  };
</script>

<div class={`aa-pagination ${$$props.class || ''}`}>
  <div>
    <Typography>
      {totalRecordText}
      <b>{totalRecords}</b>
    </Typography>
  </div>

  {#if totalRecords > 0}
    <div class="controls">
      {#if currentPage !== 1}
        <Button
          iconLeft="arrow-left"
          type="flat"
          on:click={() => pageChange((currentPage - 2) * pageSize)}>
          {backButtonText}
        </Button>
      {/if}
      {#if pageQnty > 1}
        <div class="pager">
          {#each pages as pageNumber}
            <button
              type="button"
              class="pageButton"
              on:click={() => pageChange((pageNumber - 1) * pageSize)}>
              <Typography type={currentPage === pageNumber ? 'body2' : 'link'}>
                {pageNumber}
              </Typography>
            </button>
          {/each}

        </div>
      {/if}
      {#if currentPage !== pageQnty}
        <Button
          iconRight="arrow-right"
          type="flat"
          on:click={() => pageChange(currentPage * pageSize)}>
          {forwardButtonText}
        </Button>
      {/if}

    </div>
  {/if}
  <div>
    {#if totalRecords > limits[0] || totalRecords > pageSize}
      <Typography>{pageSizeText}</Typography>
      <Dropdown closeOnClick={true}>
        <Button iconRight="chevron-down" type="primary">{pageSize}</Button>
        <div slot="dropdown">
          {#each limits as limit}
            <div class="item" on:click={() => changeLimit(limit)}>{limit}</div>
          {/each}
        </div>
      </Dropdown>
    {/if}

  </div>

</div>

<style>
  .pager {
    margin: 0 16px;
    display: flex;
    align-items: center;
    padding: 0 24px;
    border-radius: 58px;
    box-shadow: 3px 3px 17px 0 #eaeced;
    background-color: var(--palette-white);
    font-size: 14px;
  }
  .item {
    font-family: var(--preferred-font);
    font-size: 18px;
    line-height: 1.33;
    color: var(--palette-main-1);
    padding: 8px 16px;
    cursor: pointer;
  }
  .item:hover {
    background-image: linear-gradient(
      271deg,
      rgba(101, 193, 237, 0) 2%,
      rgba(53, 142, 215, 0.1) 100%
    );
  }
  .aa-pagination {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 0;
  }
  .controls {
    display: flex;
  }
  .pageButton {
    font-size: 14px;
    background: none;
    outline: none;
    border: none;
    font-weight: bold;
    margin-right: 8px;
    cursor: pointer;
  }
  .pageButton:hover {
    text-decoration: underline;
  }
</style>
