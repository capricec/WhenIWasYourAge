<script>
  import { slide } from "svelte/transition";
  import Input from "./Input.svelte";
  import Icon from "./Icon.svelte";
  import Dropdown from "./Dropdown.svelte";
  import { createEventDispatcher } from "svelte";

  export let value = "";
  export let options = [];
  export let title = null;
  export let placeholder = "";
  export let size = "big";
  export let error = null;
  export let disabled = false;
  export let required = false;
  export let isLoading = false;

  let isActive = false;
  const dispatch = createEventDispatcher();
  
  
  const selectItem = val => {
    value = val;
    // TEMPRORARY SOLLUTION, NEEDS TO FORWARD EVENTS
    dispatch("change", val);
  };
  $: inputValue = options.find(item => item.value === value);
</script>

<div class={`aa-select ${$$props.class || ''}`}>
  <Dropdown
    class="dropdownWrapper"
    closeOnClick
    {disabled}
    on:open={() => (isActive = true)}
    on:close={() => (isActive = false)}>
    <Input
      {title}
      {placeholder}
      {size}
      {error}
      {disabled}
      {required}
      {isLoading}
      value={inputValue ? inputValue.label : ''}>
      <div class="icon" class:iconOpen={isActive}>
        <Icon icon="chevron-down" status="primary" />
      </div>
    </Input>
    <div slot="dropdown">
      {#each options as option}
        <div class="item" on:click={() => selectItem(option.value)}>
          {option.label}
        </div>
      {/each}
    </div>
  </Dropdown>

</div>

<style>
  .aa-select :global(.dropdownWrapper) {
    width: 100%;
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
  .iconOpen {
    transform: rotate(180deg);
  }
  .icon {
    display: flex;
    transition: transform 0.2s ease-in;
  }
</style>
