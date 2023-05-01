<script>
	import Scrolly from "$components/helpers/Scrolly.svelte";
	import copy from "$data/copy.json"
	import { scrollState } from "$stores/misc";
	
</script>

<div id="scrolly" >
	<Scrolly bind:value={$scrollState}>
		{#each ['Scroll1', 'Scroll2', 'Scroll3', 'Scroll4', 'Scroll5', 'Scroll6', 'Scroll7', 'Scroll8', 'Scroll9', 'Scroll10', 'Scroll11'] as text, i}
			{@const active = $scrollState === i}
			<div class="step scrollyLeft" class:active>
				<p>{copy.Scrolly[text]}</p>
			</div>
		{/each}
	</Scrolly>
</div>

<style>


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
		margin-right: calc(40%);
		background: black;
		border: 1px solid white;
		padding: 20px;
		z-index: 10;
		text-align: left;
		/*box-shadow: 0 3px 10px rgb(255 255 255 / 0.2);*/
	}


	.step p {
		padding: 1rem;
	}

	@media (max-width: 600px) {
	  .scrollyLeft{
		height: auto;
		margin-bottom: 80vh;
		width: auto;
		background: black;
		padding: 10px;
		/*box-shadow: 0 3px 10px rgb(255 255 255 / 0.2);*/
	}
	}

</style>
