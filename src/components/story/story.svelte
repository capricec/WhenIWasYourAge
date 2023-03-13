<script>
	import StoryScrolly from "$components/story/Story.Scrolly.svelte";
	import copy from "$data/copy.json"
	import BuildingChart from "$components/story/BuildingChart.svelte";
	import SeasonSelect from "$components/story/SeasonSelect.svelte";
	import BuildingSmallMultipleArcs from "$components/story/BuildingSmallMultipleArcs.svelte";
	import SeasonsData from "$data/SeasonsData.csv";
	import inView from "$actions/inView.js";
	import { LayerCake, Svg } from "layercake";

</script>

<div id="Intro" class = "ontop" >
	<h1><span class = "boldheader">love</span>island </h1>
	<h1>by the numbers </h1>
	<p class = "subtitle">A data driven look at why we choose the couples that win Love Island</p>
</div>
<div id = "Content" >
		<div class = "ontop">
			<div class = "content-holder">
				<p>{copy.Intro} </p>
				<p>{copy.Intro2}</p>
				<p>{copy.Intro3}</p>
			</div>
		</div>
		<div class = "content-holder">
			<div class = "stickyChart">
				<SeasonSelect/>
				<BuildingChart/>
			</div>
			<StoryScrolly/>
			<div class="spacer" />
		</div>
		<div class = "ontop">
			<div class = "content-holder end">
				<p>{copy.Multiples} </p>
				<div class = "multipleBox">
					{#each SeasonsData as season}
					<div class = "seasonSmallMultiple">
					<p class = "seasonHeader">{season.Season_Name}</p>
						<figure>
							<LayerCake >
								<Svg>
									<BuildingSmallMultipleArcs value={season}/>
								</Svg>
							</LayerCake>
						</figure>
					</div>
					{/each}
				</div>
				<p>{copy.Outro1} </p>
				<p>{copy.Outro2}</p>
			</div>
		</div>
</div>

<style>


	h1{
		text-align:center;
		margin-top: -30px;
	}

	.subtitle{
		text-align:center;
		margin-bottom: 0;
		padding-bottom: 0;
		height: auto;
	}

	.boldheader{
		font-weight: 600;
	}

	.content-holder{
		width: 40em;
		padding: auto;
		margin: auto;
		padding-bottom: 80px;
	}

	.content-holder.end{
		padding-top: 80px;
	}

	#Content, #Intro {
		font-family: "Tiempos Text Web";
		padding: 16px;
		margin: 0;
		padding: 0;
	}

	#Intro{
		padding-top: 100px;
		padding-bottom: 80px;
		margin-bottom: -30px;
	}

	:global(#Content section) {
		/*margin: 32px auto;*/
		padding-top: 32px;
	}

	:global(#Content h2 span) {
		background: var(--color-mark);
		padding: 0 8px;
	}

	figure {
		width: 200px;
		height: 180px;
		
	}

	.seasonHeader{
		font-size: 12px;
		text-align: center;

	}

	.seasonSmallMultiple{
		display: inline-block;
		margin-bottom: 80px;
	}


	.stickyChart {
		position: sticky;
		z-index: 0;
		top: 1em;
	}

	.spacer {
		height: 80vh;
	}

	@media (max-width: 600px) {
		.content-holder{
				width: calc(100% - 20px);
				padding: 20px 10px;
				margin: auto;
				padding-bottom: 80px;
			}

		.subtitle{
			padding: 20px 20px;
		}

		.seasonSmallMultiple{
			display: inline-block;
		    margin: auto;
		    margin-left: calc(50% - 100px);
		}


	}

</style>
