<script>
	import Scrolly from "$components/helpers/Scrolly.svelte";
	import copy from "$data/copy.json"
	import { scrollState } from "$stores/misc";
	
</script>

<div id="scrolly" >
	<Scrolly bind:value={$scrollState}>
		{#each ['TA1a', 'TA1b', 'TA2a', 'TA2b', 'TA3a', 'TA3b','TA4a', 'TA4b', 'TA5a', 'TA5b', 'TA6a'] as text, i}
			{@const active = $scrollState === i}
			<div class="step scrollyLeft" class:active>
				<p>{copy[text].plain} <span class="tagline"> {copy[text].tagline} </span> {copy[text].plain2}</p>
			</div>
		{/each}
	</Scrolly>
</div>

<style>

	.tagline{
		background-color: #8f2d56;
		color: white;
		padding-left: 0px;
	}

	.step {
		height: 80vh;
		background: none;
		text-align: center;
	}

	.scrollyLeft{
		height: auto;
		margin-bottom: 80vh;
		position: relative;
		width: 60%;
		right: 0;
		background: white;
		border: 1px solid pink;
		padding: 20px;
		z-index: 10;
		box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
	}


	.step p {
		padding: 1rem;
	}

	@media (max-width: 600px) {
	  .scrollyLeft{
		height: auto;
		margin-bottom: 80vh;
		width: auto;
		background: white;
		padding: 10px;
		box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
	}
	}

</style>
