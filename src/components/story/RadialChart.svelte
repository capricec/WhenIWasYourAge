<script>

  //// IMPORT MANAGEMENT 
  import { onMount, getContext } from "svelte";
  import { scalePoint, scaleLinear, scaleOrdinal } from "d3-scale";
  import { areaRadial, curveNatural, area, pointRadial, lineRadial} from "d3-shape";
  import { scrollState, setAge} from "$stores/misc";
  import LucideIcon from '$components/story/LucideIcon.svelte';
  import { draw } from "svelte/transition";
  import { tweened } from 'svelte/motion'
  import { interpolate } from 'd3-interpolate';
  import { cubicOut } from "svelte/easing";

    let d3 = {
    scaleLinear,
    scaleOrdinal,
    scalePoint,
    areaRadial,
    curveNatural,
    area,
    interpolate,
    pointRadial,
    lineRadial
  };

 
  
  ////  DATA MANAGEMENT 
  const IncomePercent = getContext("IncomePercent");
  const RawPercentage = getContext("RawPercentage");
  const ZScores = getContext("ZScores");
  const genData = getContext("genData");
  const yearData = getContext("yearData")

  let scrollPosition;
  let currentAge;
  scrollState.subscribe(value => {
    console.log("scroll", value);
    scrollPosition = value;
    changeState(scrollPosition);
  });

  setAge.subscribe(value => {
    currentAge = value;
    console.log("age", value);
  });

  let clickVals = [];

  let categories = ['Misc', 'Alcohol & Tobacco',    'Reading and Education',  'Religion and Charity', 'Personal care', 'Healthcare', 'Insurance', 'Entertainment', 'Transportation','Apparel ','Housing', 'Food'];

   categories = categories.slice().reverse();

  let icons = ["grip-horizontal","wine", "library","heart-handshake","shower-head", "cross", "file-text", "ticket", "car", "shirt", "home", "utensils"]

  let iconsreversed = icons.slice().reverse();




  //// STATE MANAGEMENT 
  function changeState(scrollPosition){

    if (scrollPosition == 0){
      addSmallMultipleAreas()
    }

    if (scrollPosition == 1){
       addRadial()
    }

    if (scrollPosition == 2){
      addGenerations()
    }

    if (scrollPosition == 4){
      addZScores()
    }

  }

  function changeAge(value){
    console.log("changing age", value)
    if(value == "increase"){
      setAge.update(n => n + 1);
      addGenerations();
    } else {
      setAge.update(n => n - 1);
      addGenerations();
    }
  }



  //// CHART MANAGEMENT 
  
  let svg;
  let innerWidth = window.innerWidth;
  let innerHeight = window.innerHeight;
  let size = Math.min(innerWidth, innerHeight);
  let innerRadius = 160;
  let outerRadius = size/1.5;


  //// COLORS

  const colourScaleLine = d3.scaleOrdinal().domain(categories)
 /* .range(["grey", "lightgreen", "palegoldenrod", "pink", "orchid", "lightblue", "green", "yellow", "orange", "red", "purple", "blue"]);
  .range(['#222255', '#225555', '#225522', '#666633', '#663333', '#555555', '#BBCCEE', '#CCEEFF', '#CCDDAA', '#EEEEBB', '#FFCCCC', '#DDDDDD'])
  .range([ '#E8ECFB', '#D9CCE3','#BA8DB4', '#994F88', '#437DBF', '#7BAFDE', '#4EB265', '#CAE0AB', '#F7F056', '#F6C141', '#F4A736', '#E8601C', '#777777'])*/

  .range([ '#DC050C','#E8601C', '#F4A736', '#F7F056', '#CAE0AB', '#4EB265', '#7BAFDE', '#437DBF', '#994F88', '#BA8DB4', '#D9CCE3', '#777777'])


  //// RADIAL PLOT
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

 
  //// SMALL MULTIPLES
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



  //// LINE RADIAL PLOT
  let lineRadialPlot = d3.lineRadial()
    .curve(curveNatural)
    .angle(d => xRadial(+d.Year))
    .radius(d => yRadialLine(+d.Food))

  let yRadialLine = d3.scaleLinear()
    .domain([0, 4])
    .range([innerRadius, outerRadius])
  

  
  //// PATH AND TWEENING FUNCTIONS
  const tweenOptions = {
    interpolate: interpolate,
    duration: 2000,
    easing: cubicOut,
  };

  let tweenedPath = tweened(
    categories.map((cat, index) => areaPlot.y0(d=>ySmallMultiples(index*0.4)).y1(d => ySmallMultiples(+d[cat]+index*0.4))(RawPercentage)),
    tweenOptions
  );

  let tweenedColor = tweened(
    categories.map((cat, index) => colourScaleLine(cat)),
    tweenOptions
  );

  let tweenedStroke = tweened(
    categories.map((cat, index) => "transparent"),
    tweenOptions
  );

  function makePath(start){
    if(start >= 2021){ start = 2021 }
    return "M"+ d3.pointRadial(xRadial(start), innerRadius-20) + "L" + d3.pointRadial(xRadial(start), outerRadius - 50)
  }

  function makeHREFPath(start, end, shift){
    if(end >= 2021){ end= 2021; }
    if(start >= 2021){ start = 2021 }
    if(start <= 1900){ start = 1900 }
    return "M" + d3.pointRadial(xRadial(start), innerRadius-shift)+ "A" + (innerRadius-shift) +"," + (innerRadius-shift)+ " 0,0,1 "+ d3.pointRadial(xRadial(end), innerRadius-shift)
  }

  function makeStraightHREFPath(start, end){
    if(end >= 2021){ end= 2021; }
    if(start >= 2021){ start = 2021 }
    return "M" + x(start) +", " + (innerHeight/2 -80) + " h " + (x(end)-x(start))
  }




//// INITIALIZING DATA SETS
  $: pathData = categories.map((d, index) => ({
    category: d,
    path: $tweenedPath[index],
    fill: $tweenedColor[index],
    stroke: $tweenedStroke[index],
    opacity: 1,
    y: ySmallMultiples(index*0.4)
  }));
 

 $: yearVals = yearData.map((d,index) => ({
    value: d.name,
    path: makePath(+d.startYear),
    pathhref: makeStraightHREFPath(+d.startYear, +d.endYear)

  }))

 $: xGenVals = [];

 $: medianCircle = [];



//// CHART BUILDING FUNCTIONS

/* function addAreas(){

          path:areaPlot.y0(d=>y(0)).y1(d => y(+d[cat]))(RawPercentage),
        
} */
 

function addSmallMultipleAreas(){

   tweenedPath.set(categories.map((cat, index) => areaPlot.y0(d=>ySmallMultiples(index*0.4)).y1(d => ySmallMultiples(+d[cat]+index*0.4))(RawPercentage)));

   yearVals = yearData.map((d,index) => ({
    value: d.name,
    path: makePath(+d.startYear),
    pathhref: makeStraightHREFPath(+d.startYear, +d.endYear)

  }))

   xGenVals = [];
   clickVals = [];
   medianCircle = [];

}

function addRadial(){

   tweenedPath.set(categories.map((cat, index) => areaRadialPlot.outerRadius(d => yRadial(+d[cat]))(RawPercentage)));

   tweenedStroke.set(categories.map((cat, index) => "transparent"))

   tweenedColor.set(categories.map((cat, index) => colourScaleLine(cat)))

   yearVals = yearData.map((d,index) => ({
    value: d.name,
    path: makePath(+d.startYear),
    pathhref: makeHREFPath(+d.startYear, +d.endYear, 15)

  }))

   xGenVals = [];
   clickVals = [];
   medianCircle = [{
    radius: innerRadius + 1,
    width: 1,
    stroke: "grey"
   }];

  
}

function addGenerations(){

   /*tweenedPath.set(categories.map((cat, index) => areaRadialPlot.outerRadius(d => yRadial(+d[cat]))(RawPercentage)));

   tweenedStroke.set(categories.map((cat, index) => "transparent"))

   tweenedColor.set(categories.map((cat, index) => colourScaleLine(cat)))*/

   xGenVals = genData.map((d,index) => ({
    value: d.name,
    path: makePath(+d.startYear +currentAge),
    pathhref: makeHREFPath(+d.startYear+currentAge, +d.endYear+currentAge, 35)
    }))

   clickVals = [currentAge];

}

function addZScores(){

  pathData = categories.map((d, index) => ({
      category: d,
      path: tweenedPath[index],
      fill: tweenedColor[index],
      stroke: tweenedStroke[index],
      opacity: 1,
      y: ySmallMultiples(index*0.4)
    }));

   tweenedPath.set(categories.map((cat, index) => lineRadialPlot.radius(d => yRadialLine(+d[cat]))(ZScores)))

   tweenedColor.set(categories.map((cat, index) => "transparent"))

   tweenedStroke.set(categories.map((cat, index) => colourScaleLine(cat)))

   medianCircle = [{
    radius: innerRadius + 1,
    width: 3,
    stroke: "white"
   }];

   
}
  
  function resize() {
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
        stroke = {path.stroke}
        stroke-width = {3}
        fill={path.fill}
        fill-opacity = {path.opacity}
      />
    {/each}
  </g>
  <g class="background circle">
  {#each medianCircle as circle, i}
  <circle 
  cx="0" 
  cy="0" 
  r={circle.radius}
  stroke ={circle.stroke}
  stroke-width = {circle.width} />

  {/each}
</g>
  <g class="axis x-axis year">
  {#each yearVals as tick, i}
      <path
        d={tick.pathhref}
        id = {tick.value}
        fill={"none"}
      />
      <text>
        <textPath
        class="ticklabelyear"
        startOffset = {10} 
        href = {"#"+tick.value}>
      {tick.value}
      </textPath>
    </text>
  {/each}
</g>
  <g class="axis x-axis generations">
  {#each xGenVals as tick, i}
    <path
       transition:draw={{duration: 2000}}
        d={tick.path}
        stroke={"#ffffff"}
        stroke-opacity = {0.8}
      />
      <path
        d={tick.pathhref}
        id = {tick.value}
        fill={"none"}
      />
      <text>
        <textPath
        class="ticklabel"
        startOffset = {10} 
        href = {"#"+tick.value}>
      {tick.value}
      </textPath>
    </text>
  {/each}
</g>

 <g class="ageSelector">
 {#each clickVals as click}
  <text
      class="clickButton"
      x = {-55} 
      y = {10}
      on:click = {() => changeAge("decrease")}>
      {"<"}
    </text>
    <text
      class="ageLabeltext"
      x = {-12} 
      y = {-30}>
      {"Age"}
    </text>
    <text
      class="ageLabel"
      x = {-40} 
      y = {25}>
      {currentAge}
    </text>
    <text
      class="clickButton"
      x = {35} 
      y = {10}
      on:click = {() =>changeAge("increase")}>
      {">"}
    </text>
  {/each}
</g>


</svg>

<style>
  svg {
    float: left;
  }

  .label, .ticklabel{
    fill: white;
    font-size: 10px;
    word-wrap: break-word;
    width: 20px;
  }

  .ticklabel{
    font-size: 12px;
  }

  .ticklabelyear{
    fill: white;
    opacity: 0.6;
    font-size: 10px;
  }

  .ageLabel{
    font-size: 65px;
    fill: white;
    letter-spacing: -5px;
  }
  .ageLabeltext{
    font-size: 10px;
    fill: white;

  }

  .clickButton{
    font-size: 20px;
    fill: white;
    cursor: pointer;
  }

  @media (max-width: 600px) {
  }
</style>
