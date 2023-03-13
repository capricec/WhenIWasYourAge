<script>
	import { LayerCake, Svg } from "layercake";
	import BuildingArcs from "$components/story/BuildingArcs.svelte";
 
 
</script>
	<figure>
		<LayerCake >
			<Svg>
				<BuildingArcs/>
			</Svg>
		</LayerCake>
	</figure>

<style>
	figure {
		width: 650px;
		height: 500px;
	}

	@media (max-width: 600px) {
	 figure {
	 	margin-left:10px;
		width: 250px;
		height: 250px;
		}
	}
</style>
