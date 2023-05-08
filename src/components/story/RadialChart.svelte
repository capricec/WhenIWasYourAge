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
  let RawPercentage2021 = RawPercentage.slice().filter(f => f.Year == '2021');
  let newYear = JSON.parse(JSON.stringify(RawPercentage2021[0]));
  RawPercentage2021.push(newYear);
  RawPercentage2021[1].Year = '2015';

  console.log(RawPercentage);

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

  //let justHousingCategories = ["Housing"];

  const iconsScaleLine = d3.scaleOrdinal().domain(categories)
  .range([ "utensils","home", "shirt","car","ticket", "file-text", "cross", "shower-head", "heart-handshake", "library", "wine", "grip-horizontal"])


  //// STATE MANAGEMENT 
  function changeState(scrollPosition){

    if (scrollPosition == 0){
      addAreas()
    }

    if (scrollPosition == 1){
       addSmallMultipleAreas()
    }

    if (scrollPosition == 4){
       addHousingRadial()
    }

    if (scrollPosition == 6){
       addRadial()
    }

    if (scrollPosition == 5){
      addGenerations()
    }

    if (scrollPosition == 9){
      addZScores()
      addDots()
    }

    if (scrollPosition == 12){
      sizeDots()
      centerDotsonGeneration()
    }

    

  }

  function changeAge(value){
    console.log("changing age", value)
    if(value == "increase"){
      setAge.update(n => n + 1);
      addGenerations();
      if(scrollPosition > 11 || scrollPosition == undefined){
        centerDotsonGeneration()
      }
    } else {
      setAge.update(n => n - 1);
      addGenerations();
      if(scrollPosition > 11 || scrollPosition == undefined){
        centerDotsonGeneration()
      }
    }
  }



  //// CHART MANAGEMENT 
  
  let svg;
  let innerWidth = window.innerWidth;
  let innerHeight = window.innerHeight;
  let size = Math.min(innerWidth, innerHeight);
  let innerRadius = 120;
  let outerRadius = size/2;


  //// COLORS

  const colourScaleLine = d3.scaleOrdinal().domain(categories)
  .range([ '#DC050C','#E8601C', '#F4A736', '#F7F056', '#CAE0AB', '#4EB265', '#7BAFDE', '#437DBF', '#994F88', '#BA8DB4', '#D9CCE3', '#777777'])


  //// RADIAL PLOT
  let areaRadialPlot = d3.areaRadial()
    .curve(curveNatural)
    .angle(d => xRadial(+d.Year))
    .innerRadius(d => yRadial(0))
    .outerRadius(d => yRadial(+d.Food))

   let xRadial = d3.scaleLinear()
    .domain([1895, 2021])
    .range([0, 2 * Math.PI])

   let yRadial = d3.scaleLinear()
    .domain([0 , .50])
    .range([innerRadius, outerRadius])

 //// INITAL BARS 
 let xInitial = d3.scaleLinear()
    .domain([1895, 2025])
    .range([-innerWidth/2 + 30 , innerWidth/2 - 130])


  //// SMALL MULTIPLES
   let areaPlot = d3.area()
    .curve(curveNatural)
    .x(d => x(+d.Year))
    .y0(d => y(0))
    .y1(d => y(+d.Food))

    let x = d3.scaleLinear()
    .domain([1895, 2025])
    .range([-innerWidth/2 + 50, innerWidth/2 - 130])

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


 //// POINTS RADIAL PLOT
  

  // This is the function where you pass in the value to calculate the correct radius of the bubble.
  function radius(value){
     return (Math.sqrt((value * Math.pow(size/8,2)) / .4));
  }

  function midYear(start,end){
    let endYear = Math.min(end, 2021)
    return start+ (endYear - start)/2;
  }

  function dotsOutOfRange(mid, zscores, cat){
    if(mid < 2021){
      return  d3.pointRadial(xRadial(mid), yRadialLine(zscores.reduce((total, next) => total + Number(next[cat]), 0) / zscores.length))
    } else {
      return [0,0]
    }
  }

  function dotSizeOutOfRange(incomeValues, cat){
    if (incomeValues.length >0){
     return  radius(incomeValues.reduce((total, next) => total + Number(next[cat]), 0) / incomeValues.length)
   } else {
    return 0;
   }
  }

  
  //// PATH AND TWEENING FUNCTIONS
  const tweenOptions = {
    interpolate: interpolate,
    duration: 2000,
    easing: cubicOut,
  };

  let tweenedPath = tweened(
    //categories.map((cat, index) => areaPlotPlain.y0(+d[cat]).y1(d => y(+d[cat]))(RawPercentage2021)),
    categories.map((cat, index) => areaPlot.x(d => xInitial(+d.Year)).y0(d=>ySmallMultiples(index*0.4)).y1(d => ySmallMultiples(+d[cat]+index*0.4))(RawPercentage2021)),
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

  let tweenedOpacity = tweened(
    categories.map((cat, index) => 1),
    tweenOptions
  );

  function makePath(start){
    if(start >= 2021){ start = 2021 }
    return "M"+ d3.pointRadial(xRadial(start), innerRadius) + "L" + d3.pointRadial(xRadial(start), outerRadius - 30)
  }

  function makeHREFPath(start, end, shift){
    if(end >= 2023){ end= 2023; }
    if(start >= 2023){ start = 2023 }
    if(start <= 1900){ start = 1900 }
    /*return "M" + d3.pointRadial(xRadial(start), innerRadius-shift)+ "A" + (innerRadius-shift) +"," + (innerRadius-shift)+ " 0,0,1 "+ d3.pointRadial(xRadial(end), innerRadius-shift)*/
  return "M" + d3.pointRadial(xRadial(start), outerRadius-shift)+ "A" + (outerRadius-shift) +"," + (outerRadius-shift)+ " 0,0,1 "+ d3.pointRadial(xRadial(end), outerRadius-shift)
  }

  function tagCurrentGeneration(start, end){
    if (start < 2023 && end >= 2023){
      return true;
    } else {
      return false;
    } 
  }

  function makeHREFArc(start, end, shift){
    if(end >= 2021){ end= 2021; }
    if(start >= 2021){ start = 2021 }
    if(start <= 1900){ start = 1900 }
    /*return "M" + d3.pointRadial(xRadial(start), innerRadius-shift)+ "A" + (innerRadius-shift) +"," + (innerRadius-shift)+ " 0,0,1 "+ d3.pointRadial(xRadial(end), innerRadius-shift)*/
  return "M" + d3.pointRadial(xRadial(start), outerRadius-shift)+ "A" + (outerRadius-shift) +"," + (outerRadius-shift)+ " 0,0,1 "+ d3.pointRadial(xRadial(end), outerRadius-shift) + "L 0, 0 L" + d3.pointRadial(xRadial(start), outerRadius-shift) +", Z" 

  }

  function makeStraightHREFPath(start, end){
    if(end >= 2021){ end= 2025; }
    if(start >= 2021){ start = 2025 }
    return "M" + x(start) +", " + (innerHeight/2 -80) + " h " + (x(end)-x(start))
  }




//// INITIALIZING DATA SETS
  $: pathData = categories.map((d, index) => ({
    category: d,
    path: $tweenedPath[index],
    fill: $tweenedColor[index],
    stroke: $tweenedStroke[index],
    opacity: $tweenedOpacity[index],
    color: colourScaleLine(d),
    y: ySmallMultiples(index*0.4)
  }));

 $: yearVals = [];

 $: xGenVals = [];

 $: medianCircle = [];

 $: pointData = [];

 $: circleAxis = [];

 $: multipleLabels = [];

 $: areaLabels = [];


//// CHART BUILDING FUNCTIONS

 function addAreas(){

  tweenedPath.set(categories.map((cat, index) => areaPlot.x(d => xInitial(+d.Year)).y0(d=>ySmallMultiples(index*0.4)).y1(d => ySmallMultiples(+d[cat]+index*0.4))(RawPercentage2021)))

 yearVals = [{
    value: 2019,
    path: makePath(2019),
    pathhref: makeStraightHREFPath(2016, 2022)

  }]

  multipleLabels = RawPercentage2021[0];

  multipleLabels = categories.map((d, index) => ({
    category: d,
    x: xInitial(2014),
    y: ySmallMultiples(index*0.4),
    value: Number(+RawPercentage2021[0][d]).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:0})
  }));
        
} 
 

function addSmallMultipleAreas(){

   tweenedPath.set(categories.map((cat, index) => areaPlot.x(d => x(+d.Year)).y0(d=>ySmallMultiples(index*0.4)).y1(d => ySmallMultiples(+d[cat]+index*0.4))(RawPercentage)));

   yearVals = yearData.map((d,index) => ({
    value: d.name,
    path: makePath(+d.startYear),
    pathhref: makeStraightHREFPath(+d.startYear, +d.endYear)

  }))

   xGenVals = [];
   clickVals = [];
   medianCircle = [];
   circleAxis = [];

   tweenedOpacity.set(categories.map((cat, index) => 1));
   multipleLabels = [];

   areaLabels = [
    {
    x: x(1900),
    y: ySmallMultiples(0),
    value: Number(0).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:0})
    },
    {
    x: x(1900),
    y: ySmallMultiples(0.4),
    value: Number(0.4).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:0})
   }
   ];

   //console.log(pointData);

}

function addRadial(){

   tweenedPath.set(categories.map((cat, index) => areaRadialPlot.outerRadius(d => yRadial(+d[cat]))(RawPercentage)));

   tweenedStroke.set(categories.map((cat, index) => "transparent"))

   tweenedColor.set(categories.map((cat, index) => colourScaleLine(cat)))

   tweenedOpacity.set(categories.map((cat, index) => 0.8))  

   pointData = [];
   areaLabels = [];

  
}

function addHousingRadial(){

   tweenedPath.set(categories.map((cat, index) => cat == "Housing" ? areaRadialPlot.outerRadius(d => yRadial(+d[cat]))(RawPercentage) : areaRadialPlot.outerRadius(d => yRadial(0))(RawPercentage) ));

   tweenedStroke.set(categories.map((cat, index) => "transparent"))

   tweenedColor.set(categories.map((cat, index) => colourScaleLine(cat)))

   tweenedOpacity.set(categories.map((cat, index) => 0.8))


  yearVals = yearData.map((d,index) => ({
    value: d.name,
    path: makePath(+d.startYear),
    pathhref: makeHREFPath(+d.startYear, +d.endYear, 15)

  }))

  areaLabels = [];


  medianCircle = [{
    radius: innerRadius - 1,
    width: 1,
    stroke: "grey"
   }];

   circleAxis = [{
    radius: yRadial(0.2),
    labelLocation: d3.pointRadial(xRadial(1898), yRadial(0.2)),
    label: "20%"
   },
   {
    radius: yRadial(0.1),
    labelLocation: d3.pointRadial(xRadial(1898), yRadial(0.1)),
    label: "10%"
   },
   {
    radius: yRadial(0.3),
    labelLocation: d3.pointRadial(xRadial(1898), yRadial(0.3)),
    label: "30%"
   }];

}

function addGenerations(){


   xGenVals = genData.map((d,index) => ({
    value: d.name,
    path: makeHREFArc(+d.startYear+currentAge -1, +d.endYear+currentAge, 0),
    pathhref: makeHREFPath(+d.startYear+currentAge-3, +d.endYear+currentAge+2, 40),
    CurrentGeneration: tagCurrentGeneration(+d.startYear+currentAge, +d.endYear+currentAge)
    }))

   clickVals = [currentAge];

}

function addZScores(){

   tweenedPath.set(categories.map((cat, index) => lineRadialPlot.radius(d => yRadialLine(+d[cat]))(ZScores)))

   tweenedColor.set(categories.map((cat, index) => "transparent"))

   tweenedStroke.set(categories.map((cat, index) => colourScaleLine(cat)))

   tweenedOpacity.set(categories.map((cat, index) => 1))

   medianCircle = [{
    radius: innerRadius + 1,
    width: 3,
    stroke: "white"
   }];

   $: pointData = [];

   circleAxis = [{
    radius: yRadialLine(1),
    labelLocation: d3.pointRadial(xRadial(1898), yRadialLine(1)),
    label: "+1 SD"
   },
   {
    radius: yRadialLine(2),
    labelLocation: d3.pointRadial(xRadial(1898), yRadialLine(2)),
    label: "+2 SD"
   },
   {
    radius: yRadialLine(3),
    labelLocation: d3.pointRadial(xRadial(1898), yRadialLine(3)),
    label: "+3 SD"
   }];

   
}

function addDots(){

  pointData = ZScores.map((d,i) => {
      return [
        categories.map(cat => {
            return {
              year: d.Year,
              category: cat,
              zscore: +d[cat],
              percent: 5,
              point: d3.pointRadial(xRadial(+d.Year), yRadialLine(+d[cat])),
              color: colourScaleLine(cat),
              lucidcolor: "transparent"
           }
          })
        ]
      })

  //console.log(pointData);
}

function sizeDots(){

  tweenedStroke.set(categories.map((cat, index) => "transparent"))

  pointData = ZScores.map((d,i) => {
      return [
        categories.map(cat => {
            return {
              year: d.Year,
              category: cat,
              zscore: +d[cat],
              percent: radius(IncomePercent[i][cat]),
              point: d3.pointRadial(xRadial(+d.Year), yRadialLine(+d[cat])),
              color: colourScaleLine(cat),
              lucidcolor: "black"
           }
          })
        ]
      })

  //console.log(pointData);
}

function centerDotsonGeneration(){

  let genDots = genData.map((d,index) => ({
    generation: d.name,
    startYear:+d.startYear+currentAge,
    endYear: +d.endYear+currentAge,
    midPoint: midYear(+d.startYear +currentAge, +d.endYear +currentAge),
    ZScorevalues: ZScores.filter(f => f.Year >= +d.startYear+currentAge && f.Year < +d.endYear+currentAge),
    Incomevalues: IncomePercent.filter(f => f.Year >= +d.startYear+currentAge && f.Year < +d.endYear+currentAge)
    }))

  pointData = genDots.map((d,i) => {
      return [
        categories.map(cat => {
            return {
              generation: d.generation,
              category: cat,
              zscore: d.ZScorevalues.reduce((total, next) => total + Number(next[cat]), 0) / d.ZScorevalues.length,
              percent: dotSizeOutOfRange(d.Incomevalues, cat),
              point: dotsOutOfRange(+d.midPoint, d.ZScorevalues, cat),
              color: colourScaleLine(cat),
              lucidcolor: "black"
           }
          })
        ]
    })

  //console.log(genDots,pointData);
}
  
  function resize() {
  }

</script>

<svelte:window on:resize={resize} />

<svg bind:this={svg} {innerWidth} {innerHeight}
viewBox = {[-innerWidth/2 + 50, -innerHeight/2 +30, innerWidth, innerHeight]}
>
<g class="axis x-axis generations">
  {#each xGenVals as tick, i}
    <path
        d={tick.path}
        stroke="#ffffff"
        fill = "#ffffff"
        fill-opacity = {i % 2 == 0 ? 0.1 :0.05 }
        stroke-width = {tick.CurrentGeneration ? 1: 0}
      />
      <path
        d={tick.pathhref}
        id = {tick.value}
        fill={"none"}
      />
      <text>
        <textPath
        class="ticklabel"
        text-anchor= "middle"
        startOffset = {"50%"} 
        href = {"#"+tick.value}>
      {tick.value}
      </textPath>
    </text>
  {/each}
</g>
  <g class = "Areas" >
    {#each pathData as path, i}
      <circle 
      cx= {innerWidth/2 -115}
      cy= {path.y - 8}
      r={15}
      fill ={path.color}
      />
      <LucideIcon name ={iconsScaleLine(path.category)} size ={"20px"} color={"black"} strokeWidth={"1px"} x = {innerWidth/2 - 125 } y = {path.y - 18}/>
      <text
      class="label"
      x = {innerWidth/2 - 95 } 
      y = {path.y-4}>
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
  <g class = "areaLabels" >
    {#each areaLabels as label, i}
      <text
      class="areaLabel"
      x = {label.x + 4} 
      y = {label.y + 3}
      text-anchor = "end">
      {label.value + "   -"}
      </text> 
    {/each}

    {#each multipleLabels as label, i}
      <text
      class="areaLabel"
      x = {label.x } 
      y = {label.y}
      text-anchor = "end">
      {label.value}
      </text> 
    {/each}
  </g>
  <g class = "Dots" >
    {#each pointData as year, j}
      {#each year[0] as dot, k}
        <circle 
        cx= {dot.point[0]}
        cy= {dot.point[1]}
        r={dot.percent}
        fill ={dot.color}
        />
        <LucideIcon name ={iconsScaleLine(dot.category)} size ={dot.percent + "px"} color={dot.lucidcolor} strokeWidth={"1px"} x = {dot.point[0] - dot.percent / 2 } y = {dot.point[1] - dot.percent / 2}/>
      {/each}
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
  <g class="circleAxis">
    {#each circleAxis as circle, i}
      <circle 
      cx="0" 
      cy="0" 
      fill = "transparent"
      r={circle.radius}
      stroke = "#ffffff"
      stroke-width = "1"
      stroke-opacity = "0.8"
      stroke-dasharray="4"
        />
      <text
      class="circleAxisLabel"
      x = {0} 
      y = {-5}
      text-anchor = "middle"
      transform = {"translate(" + +circle.labelLocation[0] + "," + +circle.labelLocation[1] + ") rotate(10)"}
      >
      {circle.label}
    </text>
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
        dy = {"-0px"}
        text-anchor= "start"
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
      x = {-40} 
      y = {5}
      on:click = {() => changeAge("decrease")}
      text-anchor = "middle">
      {"\u25C0"}
    </text>
    <text
      class="ageLabeltext"
      x = {0} 
      y = {-30}
      text-anchor = "middle"
      >
      {"Your Age"}
    </text>
    <text
      class="ageLabel"
      x = {0} 
      y = {25}
      text-anchor = "middle"
      >

      {currentAge}
    </text>
    <text
      class="clickButton"
      x = {45} 
      y = {5}
      on:click = {() =>changeAge("increase")}
      text-anchor = "middle">
      {"\u25B6"}
    </text>
  {/each}
</g>


</svg>

<style>
  svg {
    float: left;
  }

  .label, .ticklabel, .areaLabel{
    fill: white;
    font-size: 10px;
    word-wrap: break-word;
    width: 20px;
  }

  .ticklabel{
    font-size: 14px;
  }

  .ticklabelyear{
    fill: white;
    opacity: 0.6;
    font-size: 10px;
  }

  .circleAxisLabel{
    fill: white;
    opacity: 1;
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
    font-size: 10px;
    fill: white;
    cursor: pointer;
  }

  @media (max-width: 600px) {
  }
</style>
