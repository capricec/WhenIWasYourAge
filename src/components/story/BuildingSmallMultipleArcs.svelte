<script>
  export let value;
  import { scalePoint, scaleLinear, scaleOrdinal } from "d3-scale";
  import { linkVertical } from "d3-shape";
  import {getContext } from "svelte";

  let link = [];
  let node = [];
  let label = [];
  let nodeData, linkData, seasonData, allNodesNames, xScale;

  const SinglesData = getContext("singlesData");
  const CouplesData = getContext("couplesData");
  
  
  let d3 = {
    scaleLinear,
    scaleOrdinal,
    scalePoint,
    linkVertical
  };
  let svg;
  let width = 200;
  let height = 180;
  //console.log(value);
  
  const colourScale = d3.scaleLinear().domain([0, 5, 9, 40])
    .range([100, 100, 10, 0]);
  const colourScaleWinner = d3.scaleOrdinal().domain(["Winner", "Runner-Up", "Third Place", "Fourth Place", "Dumped", "Walked"])
    .range(["#8f2d56", "white", "white", "white", "white", "white"]);
  const colourScaleGender = d3.scaleOrdinal().domain(["M", "F"])
    .range(["#218380", "#d81159"]);

  const opacityLine = d3.scaleOrdinal().domain(["Before", "After", "Winner"])
    .range([50, 5, 100]);

  const colourScaleLine = d3.scaleOrdinal().domain(["None","Less", "More", "Winner", "Surprise"])
    .range(["black","lightgrey", "#d81159", "#8f2d56", "#254e70"]);


  let season = value.Season_Name;

  seasonData=value
  
  nodeData = SinglesData.filter(function(d){ return d.Season == season});
  linkData = CouplesData.filter(function(d){ return d.Season == season });

  linkData.forEach( function(d){
    if(d. FinalStatus == 1 && (d.FirstCouplingDay > seasonData.Second_Recouple || d.TotalDays <= 14 && d.TotalTimesChosen < 2 || ( +d.Part1Entered > 9 || +d.Part2Entered > 9))){
      d.FinalStatus = "Surprise";

    }
  })


  nodeData.sort(function(a, b) {
    if (a.Gender != b.Gender) { return a.Gender < b.Gender ? 1 : -1; }
    if ((a.Gender == b.Gender) && a.Gender == 'M' && +a.Entered != +b.Entered) {
      return +a.Entered > +b.Entered ? 1 : -1;
    } 
    if ((a.Gender == b.Gender) && a.Gender == 'F'  && +a.Entered != +b.Entered) {
      return +a.Entered < +b.Entered ? 1 : -1;
    } 
  });

   allNodesNames = nodeData.map(function(d){return d.First_Name});
   xScale = d3.scalePoint()
       .domain(allNodesNames)
       .range([11,width- 20]);

  showWinners()


  function showWinners(){

    node = nodeData.map(d => {
      return {
        Gender: d.Gender,
        Entered: d.Status == "Winner" ? 1 : d.Entered,
        Status: d.Status,
        First_Name: d.First_Name,
        Num_Couples: +d.Num_Couples
      };
  });

    link = linkData.map(d => {
    return {
      source: d.Part1,
      target: d.Part2,
      chosen: d.TotalTimesChosen,
      firstcouple: +d.FinalStatus == 1 || d.FinalStatus == "Surprise" ? "Winner"  : d.FirstCouplingDay < seasonData.Second_Recouple ? "Before" : "After",
      totaldays: +d.FinalStatus == 1 ? "Winner" : d.FinalStatus == "Surprise"? "Surprise": d.TotalDays < 7 ? "Less" : "More"
    };
  });

   addLinks(link);

  }

  function addLinks(dataset){
    dataset.forEach(function(d){
     var index1 = nodeData.findIndex(x => x.First_Name === d.source);
     var index2 = nodeData.findIndex(x => x.First_Name === d.target);
     if(index1 < index2){
      d.index1 = index2;
      d.index2 = index1;
     } else{
      d.index2 = index2;
      d.index1 = index1;
     }
     var radius = 7.5*(d.index1-d.index2)

     d.arcPath = buildArc(d)
    })

  }

  function buildArc (d) {
    //console.log(d.index1, d.index2);
     let start = xScale(nodeData[d.index2].First_Name);
     let end = xScale(nodeData[d.index1].First_Name);
     let curve = (start - end)/(1+ (51/35));
     //curve = (start - end)/2;

     const arcPath = ['M',            // start the path
              start, height-75,       // declare the (x,y) of where to start
             'A',                     // specify an eliptical curve
             curve, ',',    // xradius: height of arc is proportional to start - end
             (start - end)/2,         // yradius 
              0, 0, ",",              // rotation of ellipse is 0 along x and y; 
              start < end ? 1: 0,     // make all arcs curve above the nodes;
              end, height-75]         // declare (x,y) of endpoint
           .join(' ');                // convert the bracketed array into a string
     return arcPath;
  };


  
  
  function resize() {
    ({ width, height } = svg.getBoundingClientRect());
  }
</script>

<svelte:window on:resize={resize} />

<svg bind:this={svg} {width} {height}>
  {#each link as arc}
    <g>
      <path
        d={arc.arcPath}
        fill={"none"}
        opacity = {opacityLine(arc.firstcouple)+ "%"}
        stroke={colourScaleLine(arc.totaldays)}
        stroke-width={arc.chosen/2}
      />
    </g>
  {/each}
  
  {#each node as point,i}
    <circle
      class="node"
      r={(width/node.length/3)-1+point.Num_Couples}
      fill={colourScaleGender(point.Gender)}
      opacity = {colourScale(point.Entered) + "%"}
      stroke = {colourScaleWinner(point.Status)}
      stroke-width ={'0.5'}
      cx={xScale(point.First_Name)}
      cy={height - 70}
    >
    </circle>

    <g
      class="name-holder"
      transform={"translate(" +(xScale(point.First_Name)+4) + "," + (height-60) + ") rotate(-90)"}>
    <text
      class="name"
      text-anchor="end"
      opacity = {colourScale(point.Entered) + "%"}
    >{point.First_Name}</text>
  </g>

  {/each}

</svg>

<style>
  svg {
    float: left;
  }
  circle {
  }


  text{
    padding-top:5px;
    font-size: 9px;
  }
</style>
