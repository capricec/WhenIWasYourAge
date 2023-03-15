<script>
	import StoryScrolly from "$components/story/Story.Scrolly.svelte";
	import copy from "$data/copy.json"
	import inView from "$actions/inView.js";
	import { LayerCake, Svg } from "layercake";

	var array = copy.List.split("?");
	let scrollbox;

	let startX = 0;
	let count = 0;

	 setInterval(() => {
	 	if(scrollbox){
	 		count ++;
	 		if(count < 6){
		    	const x = scrollbox.offsetWidth*count;
			    scrollbox.scroll({
			        left: x,
			        top: 0,
			        behavior: 'smooth'
			    })
			} else {
				count = 0;
				scrollbox.scroll({
			        left: 0,
			        top: 0,
			        behavior: 'smooth'
			    })
			}
		}
	    
	  }, 5000);


</script>

<div id="Intro" class = "ontop" >
	<h1>When I Was Your Age...</h1>
	<ul class="gallery" bind:this={scrollbox}>
		{#each array as whenIwas}
		<li>{whenIwas}</li>
		{/each}
	</ul>
</div>
<div id = "Content" >
		<div class = "ontop">
			<div class = "content-holder">
				<p>{copy.Intro1} </p>
				<p>{copy.Intro2}</p>
				<p>{copy.Intro3}</p>
				<p>{copy.Intro4}</p>
				<p>{copy.Intro5}</p>
			</div>
		</div>
		<div class = "content-holder">
			<StoryScrolly/>
			<div class="spacer" />
		</div>
</div>

<style>


	h1{
		text-align:center;
		margin-top: -30px;
	}

	.gallery {
	padding: 1rem;
	display: grid;
	grid-template-columns: repeat(6, 100vw);
	grid-template-rows: 1fr;
	grid-row-gap: 1rem;
	overflow: scroll;
	scroll-snap-type: both mandatory;
	color: white;
	overflow-x: hidden;
	}

	li {
		scroll-snap-align: center;
		display: inline-block;
		border-radius: 3px;
		font-size: 20px;
		padding: 0px 100px;
		padding-left: calc(50% - 200px);
		padding-right: calc(50% - 200px);
		text-align: center;
	}



	.content-holder{
		width: 40em;
		padding: auto;
		margin: auto;
		padding-bottom: 80px;
	}

	.content-holder p {
		margin-bottom: 20px;
	}

	.content-holder.end{
		padding-top: 80px;
	}

	#Content, #Intro {
		padding: 16px;
		margin: 0;
		padding: 0;
	}

	#Intro{
		font-family: "Tiempos Text Web";
		padding-top: calc(50vh - 150px);
		padding-bottom: 80px;
		margin-bottom: -30px;
		height: 100vh;
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


	}

</style>
