<script>
  import { onMount, getContext } from "svelte";
  import { scalePoint, scaleLinear, scaleOrdinal } from "d3-scale";
  import { areaRadial, curveNatural, area} from "d3-shape";
  import { scrollState} from "$stores/misc";
  import { Skull } from 'lucide-svelte';
  import LucideIcon from '$components/story/LucideIcon';

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
    area
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
    .range([-innerWidth/2, innerWidth/2])

   let y = d3.scaleLinear()
    .domain([0 , 5.0])
    .range([innerHeight/2 -100, -innerHeight/2 ])

  let categories = Object.keys(RawPercentage[0]);
  categories.shift();

  categories = ['Misc', 'Alcohol & Tobacco',    'Reading and Education',  'Religion and Charity', 'Personal care', 'Healthcare', 'Insurance', 'Entertainment', 'Transportation','Apparel ','Housing', 'Food'];

  let icons = ["grip-dots","wine-glass", "books","hand-holding-heart","pump-soap", "heart-pulse", "memo-circle-check", "popcorn", "car-side", "clothes-hanger", "house"]

  const colourScaleLine = d3.scaleOrdinal().domain(categories)
 /* .range(["grey", "lightgreen", "palegoldenrod", "pink", "orchid", "lightblue", "green", "yellow", "orange", "red", "purple", "blue"]);
  .range(['#222255', '#225555', '#225522', '#666633', '#663333', '#555555', '#BBCCEE', '#CCEEFF', '#CCDDAA', '#EEEEBB', '#FFCCCC', '#DDDDDD'])*/
  .range(['#CC6677', '#0077BB', '#DDCC77', '#117733', '#88CCEE', '#882255', '#44AA99', '#999933', '#AA4499'])

  let cleanData = categories.map((cat, index)  => {
      return { 
          category: cat,
          //path: areaRadialPlot.outerRadius(d => yRadial(+d[cat]))(RawPercentage),
          path:areaPlot.y0(d=>y(index*0.4)).y1(d => y(+d[cat]+index*0.4))(RawPercentage),
          fill: colourScaleLine(cat)
        }
    });
  let svg;


  function changeState(scrollPosition){
    console.log(scrollPosition)

    if (scrollPosition == 0){
      addAreas()

    }

  }


  scrollState.subscribe(value => {
    scrollPosition = value;
    changeState(scrollPosition);
  });

  
 


function addAreas(){


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
    <LucideIcon name="Skull" />
    {#each cleanData as path}
      <path
        d={path.path}
        fill={path.fill}
        fill-opacity = {1}
      />
    {/each}
  </g>
  <!--{#each node as point,i}
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

  {/each}-->

  <!--{#each label as drawnLabel}
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

  {/each}-->
</svg>

<style>
  svg {
    float: left;
  }

  @media (max-width: 600px) {
  }
</style>
