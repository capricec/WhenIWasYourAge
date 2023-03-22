<script>
	import { LayerCake, Svg } from "layercake";
	import RadialChart from "$components/story/RadialChart.svelte";
 
 
</script>
	

	<figure>
		<LayerCake >
			<Svg>
				<RadialChart/>
			</Svg>
		</LayerCake>
	</figure>

<style>
	figure {
		width: 1000px;
		height: 700px;
	}

	@media (max-width: 600px) {
	 figure {
	 	margin-left: 0px;
		width: 350px;
		height: 600px;
		}
	}
</style>
