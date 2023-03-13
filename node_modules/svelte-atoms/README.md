# svelte-atoms

Svelte UI kit based on [Atol](https://www.atol.ru/) design

[Demo and docs](https://svelte-atoms.web.app/)

## Install

```
npm install -D svelte-atoms
```

Include variables in your project files

```
<script>
    import Variables from 'svelte-atoms/Varialbes.svelte'
</script>
<Variables />
```

## Use

```
<script>
    import Button from 'svelte-atoms/Button.svelte'
</script>
<Button>Enjoy</Button>
```

## Features

All components supports class prop. String will be added to component classes list.
```
<script>
 import Typography from "svelte-atoms/Typography";
</script>

<style>
  :global(.redLink) {
    border-bottom: 1px solid red;
  }
</style>

<Typography class="redLink">With class</Typography>
```

Export from root also supported.
```
<script>
    import {Chip} from "svelte-atoms";
</script>

<Chip text="Enjoy" iconLeft="check" />
```
