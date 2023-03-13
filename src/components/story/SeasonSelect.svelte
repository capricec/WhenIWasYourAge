<script>
	import Select from "$components/helpers/Select.svelte";
	import { chosenSeason } from "$stores/misc";

	const options = [
		{value: "Love Island Australia (Season 1)"},
		{value: "Love Island Australia (Season 2)"},
		{value: "Love Island Australia (Season 3)"},
		{value: "Love Island Austrailia (Season 4)"},
		{value: "Love Island France (Season 1)"},
		{value: "Love Island Germany (Season 1)"},
		{value: "Love Island Germany (Season 2)"},
		{value: "Love Island Germany (Season 3)"},
		{value: "Love Island Greece (Season 1)"},
		{ value: "Love Island Netherlands" },
		{ value: "Love Island Norway (Season 1)" },
		{ value: "Love Island Norway (Season 2)" },
		{ value: "Love Island Poland (Season 6)" },
		{ value: "Love Island Sweden (Season 2)" },
		{ value: "Love Island UK (Season 1)" },
		{ value: "Love Island UK (Season 2)" },
		{ value: "Love Island UK (Season 3)" },
		{ value: "Love Island UK (Season 4)" },
		{ value: "Love Island UK (Season 5)" },
		{ value: "Love Island UK (Season 6)" },
		{ value: "Love Island UK (Season 7)" },
		{ value: "Love Island UK (Season 8)" },
		{ value: "Love Island USA (Season 1)" },
		{ value: "Love Island USA (Season 2)" },
		{ value: "Love Island USA (Season 3)" },
		{ value: "Love Island USA (Season 4)" }
	];

</script>

<section id="season-select" >
	<Select label={"Select a season"} {options} bind:value={$chosenSeason}/>
</section>

<style>
#season-select{
	z-index: 100;
	position: relative;
}
</style>
