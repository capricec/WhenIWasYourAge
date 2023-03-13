<script>
  import { onMount, getContext } from "svelte";
  import { scalePoint, scaleLinear, scaleOrdinal } from "d3-scale";
  import { arc, linkVertical } from "d3-shape";
  import SeasonsData from "$data/SeasonsData.csv";
  import { scrollState, chosenSeason } from "$stores/misc";

  let innerWidth = window.innerWidth;

  let scrollPosition;
  let link = [];
  let node = [];
  let label = [];
  let nodeData, linkData, seasonData, allNodesNames, xScale;
  
  const SinglesData = getContext("singlesData");
  const CouplesData = getContext("couplesData");

  
  let d3 = {
    scaleLinear,
    scaleOrdinal,
    arc,
    scalePoint,
    linkVertical
  };

  let svg;

  let width = 650;
  let height = 480;


    if (innerWidth < 800) {
      console.log(innerWidth);
         width = innerWidth-50;
         height = innerWidth-100;
    } 


  chosenSeason.subscribe(value => {
    UpdateSeason(value);
  })

  function changeState(scrollPosition){

    if (scrollPosition == 0){
      addNodes()
      addSinglesLabel()
    }

    if (scrollPosition == 1){
      colorNodes()
      addSinglesOpacityLabel()
    }

    if (scrollPosition == 2){
      addAllLinksNoShading()
      addCouplesLabel()
    }

    if (scrollPosition == 3){
      addAllLinks()
      addCouplesOpacityLabel()
    }

    if (scrollPosition == 5){
    sizeNodes()
    addNumCouplesLabel()
    }

    if(scrollPosition == 7){
      showRecouplings()
      addLineWeightLabel()
    }

    if(scrollPosition == 9){
      showNumberofDays()
      addLineOpacityLabel()
    }

    if(scrollPosition == 10){
      showWinners()
      removeLabel()
    }

  }


  scrollState.subscribe(value => {
    scrollPosition = value;
    changeState(scrollPosition);

  });

  
  
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

  const diagonal = d3.linkVertical()
                .source(function(d) {
                    return [d.source[0], d.source[1]];
                })
                .target(function(d) {
                    return [d.target[0], d.target[1]];
                });



function UpdateSeason(newSeason){
  let season = newSeason;

  seasonData=SeasonsData.filter(function(d){ return d.Season_Name == season});

  
  nodeData = SinglesData.filter(function(d){ return d.Season == season});
  linkData = CouplesData.filter(function(d){ return d.Season == season });

  //console.log(nodeData, linkData);

   linkData.forEach( function(d){
    if(d. FinalStatus == 1 && (d.FirstCouplingDay > seasonData[0].Second_Recouple || d.TotalDays <= 14 && d.TotalTimesChosen < 2 || ( +d.Part1Entered > 9 || +d.Part2Entered > 9))){
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
       .range([10,width- 20]);

  colorNodes()
  changeState(scrollPosition);

}


function addNodes(){


 node = nodeData.map(d => {
      return {
        Gender: d.Gender,
        Entered: 1,
        Status: "Dumped",
        First_Name: d.First_Name,
        Num_Couples: 1
      };
  });
 link = [];

}

function colorNodes(){

 node = nodeData.map(d => {
      return {
        Gender: d.Gender,
        Entered: d.Entered,
        Status: "Dumped",
        First_Name: d.First_Name,
        Num_Couples: 1
      };
  });
 link = [];

}

function sizeNodes(){

 node = nodeData.map(d => {
      return {
        Gender: d.Gender,
        Entered: d.Entered,
        Status: "Dumped",
        First_Name: d.First_Name,
        Num_Couples: +d.Num_Couples
      };
  });
 

}


  function addAllLinks(){
  link = linkData.map(d => {
      return {
        source: d.Part1,
        target: d.Part2,
        chosen: 1,
        firstcouple: d.FirstCouplingDay < seasonData[0].Second_Recouple ? "Before" : "After",
        totaldays: "None"
      };
  });

   addLinks(link);
  }

  function addAllLinksNoShading(){
  link = linkData.map(d => {
      return {
        source: d.Part1,
        target: d.Part2,
        chosen: 1,
        firstcouple: "Before",
        totaldays: "None"
      };
  });

   addLinks(link);

  }

  function showRecouplings(){

    link = linkData.map(d => {
    return {
      source: d.Part1,
      target: d.Part2,
      chosen: d.TotalTimesChosen,
      firstcouple: d.FirstCouplingDay < seasonData[0].Second_Recouple ? "Before" : "After",
      totaldays:"None"
    };
  });

   addLinks(link);

  }


function showNumberofDays(){

    link = linkData.map(d => {
    return {
      source: d.Part1,
      target: d.Part2,
      chosen: d.TotalTimesChosen,
      firstcouple: d.FirstCouplingDay < seasonData[0].Second_Recouple ? "Before" : "After",
      totaldays: d.TotalDays < 7 ? "Less" : "More"
    };
  });

   addLinks(link);

  }

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
      firstcouple: +d.FinalStatus == 1 || d.FinalStatus == "Surprise" ? "Winner"  : d.FirstCouplingDay < seasonData[0].Second_Recouple ? "Before" : "After",
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


  function addSinglesLabel(){

     label = [{
      path: {source: [width-100,height-150], target:[width*2/3,height-85]},
      text: "The singles"
     }];

  }

  function addSinglesOpacityLabel(){

     label = [{
      path: {source: [width-150,height-150], target:[width-70,height-85]},
      text: "Singles in before day 9"
     }];

  }

  function addCouplesLabel(){

     label = [{
      path: {source: [width-80,50], target:[width-120,105]},
      text: "The couples"
     }];

  }

  function addCouplesOpacityLabel(){

     label = [{
      path: {source: [width-110,50], target:[width-150,90]},
      text: "Couples made by 2nd recoupling"
     }];

  }

  function addNumCouplesLabel(){

     label = [{
      path: {source: [width-230,height-150], target:[width-130,height-85]},
      text: "Circles grow with each partner"
     }];

  }

  function addLineWeightLabel(){

     label = [{
      path: {source: [width-110,50], target:[width-150,110]},
      text: "Lines thicken every recoupling"
     }];

  }

  function addLineOpacityLabel(){

     label = [{
      path: {source: [width-110,50], target:[width-150,110]},
      text: "Couples together more than 7 days "
     }];

  }

  function removeLabel(){
     label = [];
  }
  
  function resize() {
    console.log("resize", width, height);
    
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
        stroke-width={arc.chosen*1.5}
      />
    </g>
  {/each}
  
  {#each node as point,i}
    <circle
      class="node"
      r={(width/node.length/3)-2+point.Num_Couples*2}
      fill={colourScaleGender(point.Gender)}
      opacity = {colourScale(point.Entered) + "%"}
      stroke = {colourScaleWinner(point.Status)}
      stroke-width ={'1'}
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

  {#each label as drawnLabel}
    <g>
      <path
        d={diagonal(drawnLabel.path)}
        fill={"none"}
        stroke={"black"}
        stroke-width={1}
      />
    </g>

    <g
      class="label-holder"
      >
    <text
      class="label"
      text-anchor="middle"
      transform={"translate(" +(drawnLabel.path.source[0]) + "," + (drawnLabel.path.source[1]-5) + ")"}>
    {drawnLabel.text}</text>

    <text
      class="label-arrow"
      text-anchor="end"
      font-size="30px"
      transform={"translate(" +(drawnLabel.path.target[0]+6) + "," + (drawnLabel.path.target[1]+5) + ")"}>
     &#8744</text>
  </g>

  {/each}
</svg>

<style>
  svg {
    float: left;
  }
  circle {
  }

  .label-arrow{
    font-size: 20px;
  }

  text{
    padding-top:5px;
    font-size: 12px;
  }

  @media (max-width: 600px) {
    text{
      font-size: 10px;
    }
  }
</style>
