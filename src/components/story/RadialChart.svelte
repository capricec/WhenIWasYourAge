<script>
  import { onMount, getContext } from "svelte";
  import { scalePoint, scaleLinear, scaleOrdinal } from "d3-scale";
  import { areaRadial, curveNatural, area} from "d3-shape";
  import { scrollState} from "$stores/misc";
  import LucideIcon from '$components/story/LucideIcon.svelte';

  import { draw } from "svelte/transition";
  import { tweened } from 'svelte/motion'
  import { interpolate } from 'd3-interpolate';
  import { cubicOut } from "svelte/easing";

  let innerWidth = window.innerWidth;
  let innerHeight = window.innerHeight;
  let size = Math.min(innerWidth, innerHeight);

  let innerRadius = size / 6;
  let outerRadius = size/1.5;

  let scrollPosition;
  let xScale;
  
  const IncomePercent = getContext("IncomePercent");
  const RawPercentage = getContext("RawPercentage");
  const ZScores = getContext("ZScores");

  let d3 = {
    scaleLinear,
    scaleOrdinal,
    scalePoint,
    areaRadial,
    curveNatural,
    area,
    interpolate
  };


  let areaRadialPlot = d3.areaRadial()
    .curve(curveNatural)
    .angle(d => xRadial(+d.Year))
    .innerRadius(d => yRadial(0))
    .outerRadius(d => yRadial(+d.Food))

   let xRadial = d3.scaleLinear()
    .domain([1900, 2022])
    .range([0, 2 * Math.PI])

   let yRadial = d3.scaleLinear()
    .domain([0 , .50])
    .range([innerRadius, outerRadius])

    let areaPlot = d3.area()
    .curve(curveNatural)
    .x(d => x(+d.Year))
    .y0(d => y(0))
    .y1(d => y(+d.Food))

    let x = d3.scaleLinear()
    .domain([1900, 2022])
    .range([-innerWidth/2 + 115, innerWidth/2])

   let ySmallMultiples = d3.scaleLinear()
    .domain([0 , 5.0])
    .range([innerHeight/2 -100, -innerHeight/2 ])

    let y = d3.scaleLinear()
    .domain([0 , 0.5])
    .range([innerHeight/2 -100, -innerHeight/2 ])

  let categories = Object.keys(RawPercentage[0]);
  categories.shift();

  let categoriesreversed = ['Misc', 'Alcohol & Tobacco',    'Reading and Education',  'Religion and Charity', 'Personal care', 'Healthcare', 'Insurance', 'Entertainment', 'Transportation','Apparel ','Housing', 'Food'];

   categories = categoriesreversed.slice().reverse();

  let icons = ["grip-horizontal","wine", "library","heart-handshake","shower-head", "cross", "file-text", "ticket", "car", "shirt", "home", "utensils"]

  let iconsreversed = icons.slice().reverse();

  const colourScaleLine = d3.scaleOrdinal().domain(categories)
 /* .range(["grey", "lightgreen", "palegoldenrod", "pink", "orchid", "lightblue", "green", "yellow", "orange", "red", "purple", "blue"]);
  .range(['#222255', '#225555', '#225522', '#666633', '#663333', '#555555', '#BBCCEE', '#CCEEFF', '#CCDDAA', '#EEEEBB', '#FFCCCC', '#DDDDDD'])*/
  .range(['#CC6677', '#0077BB', '#DDCC77', '#117733', '#88CCEE', '#882255', '#44AA99', '#999933', '#AA4499'])

  let cleanData = [];

   const tweenOptions = {
    interpolate: interpolate,
    duration: 2000,
    easing: cubicOut,
  };

  let tweenedPath = tweened(
    categories.map((cat, index) => areaPlot.y0(d=>ySmallMultiples(index*0.4)).y1(d => ySmallMultiples(index*0.4))(RawPercentage)),
    tweenOptions
  );

  $: pathData = categories.map((d, index) => ({
    category: d,
    path: $tweenedPath[index],
    fill: colourScaleLine(d),
    opacity: 1,
    y: ySmallMultiples(index*0.4)
  }));
  
  let svg;

  function changeState(scrollPosition){
    //console.log(scrollPosition, cleanData)

    if (scrollPosition == 0){
      addSmallMultipleAreas()

    }

    if (scrollPosition == 1){
     // addAreas()

    }

    if (scrollPosition == 2){
      addRadial()

    }

  }


  scrollState.subscribe(value => {
    scrollPosition = value;
    changeState(scrollPosition);
  });

 function addAreas(){

  cleanData = categoriesreversed.map((cat, index)  => {

      return { 
          category: cat,
          path:areaPlot.y0(d=>y(0)).y1(d => y(+d[cat]))(RawPercentage),
          y: y(0),
          opacity: 0.7,
           fill: colourScaleLine(cat),
          icon: icons[index],
        }
    });

} 
 


function addSmallMultipleAreas(){

   tweenedPath.set(categories.map((cat, index) => areaPlot.y0(d=>ySmallMultiples(index*0.4)).y1(d => ySmallMultiples(+d[cat]+index*0.4))(RawPercentage)));

  cleanData = categories.map((cat, index)  => {

      return { 
          category: cat,
          //path: areaRadialPlot.outerRadius(d => yRadial(+d[cat]))(RawPercentage),
          path:areaPlot.y0(d=>ySmallMultiples(index*0.4)).y1(d => ySmallMultiples(+d[cat]+index*0.4))(RawPercentage),
          fill: colourScaleLine(cat),
          icon: icons[index],
          y: ySmallMultiples(index*0.4),
          opacity: 1
        }
    });

}

function addRadial(){

  pathData = pathData.reverse();

   tweenedPath.set(categories.map((cat, index) => areaRadialPlot.outerRadius(d => yRadial(+d[cat]))(RawPercentage)));

  cleanData = categoriesreversed.map((cat, index)  => {
      return { 
          category: cat,
          path: areaRadialPlot.outerRadius(d => yRadial(+d[cat]))(RawPercentage),
          //path:areaPlot.y0(d=>y(index*0.4)).y1(d => y(+d[cat]+index*0.4))(RawPercentage),
          fill: colourScaleLine(cat),
          icon: icons[index],
          y: y(index*0.4),
          opacity: 0.7
        }
    });

}
  
  function resize() {
    //console.log("resize", width, height);
  }

</script>

<svelte:window on:resize={resize} />

<svg bind:this={svg} {innerWidth} {innerHeight}
viewBox = {[-innerWidth/2, -innerHeight/2, innerWidth, innerHeight]}
>
  <g class = "Areas" >
    
    {#each pathData as path, i}
      <LucideIcon name ={iconsreversed[i]} size ={"20px"} color={"white"} strokeWidth={"1px"} x = {-innerWidth/2 + 5 } y = {path.y - 28}/>
      <text
      class="label"
      x = {-innerWidth/2 + 5 } 
      y = {path.y}>
      {path.category}
    </text>
      
      <path
       transition:draw={{duration: 2000}}
        d={path.path}
        fill={path.fill}
        fill-opacity = {path.opacity}
      />
    {/each}
  </g>

</svg>

<style>
  svg {
    float: left;
  }

  .label{
    fill: white;
    font-size: 10px;
    word-wrap: break-word;
    width: 20px;
  }

  @media (max-width: 600px) {
  }
</style>
