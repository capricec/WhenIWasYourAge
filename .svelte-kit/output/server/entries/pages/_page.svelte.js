import { c as create_ssr_component, e as escape, d as add_attribute, f as each, b as subscribe, v as validate_component, h as set_store_value, s as setContext, j as add_styles, g as getContext, k as assign, l as now, o as loop, p as identity$1 } from "../../chunks/index2.js";
import { w as writable, d as derived } from "../../chunks/index.js";
import { scaleLinear, scaleSqrt, scaleOrdinal, scalePoint } from "d3-scale";
import { curveNatural, areaRadial, area, pointRadial, lineRadial } from "d3-shape";
import { interpolate } from "d3-interpolate";
const Meta = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "When I Was Your Age" } = $$props;
  let { description = "A data driven look at what it was really like back then" } = $$props;
  let { url = "https://originaldatum.com/" } = $$props;
  let { keywords = "Generations" } = $$props;
  let { preloadFont = [] } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.keywords === void 0 && $$bindings.keywords && keywords !== void 0)
    $$bindings.keywords(keywords);
  if ($$props.preloadFont === void 0 && $$bindings.preloadFont && preloadFont !== void 0)
    $$bindings.preloadFont(preloadFont);
  return `${$$result.head += `<!-- HEAD_svelte-s0ep91_START -->${$$result.title = `<title>${escape(title)}</title>`, ""}<meta name="${"description"}"${add_attribute("content", description, 0)}><meta name="${"author"}" content="${"Caprice Carstensen"}"><meta name="${"news_keywords"}"${add_attribute("content", keywords, 0)}><meta property="${"og:title"}"${add_attribute("content", title, 0)}><meta property="${"og:site_name"}" content="${"Original Datum"}"><meta property="${"og:url"}"${add_attribute("content", url, 0)}><meta property="${"og:description"}"${add_attribute("content", description, 0)}><meta property="${"og:type"}" content="${"article"}"><meta property="${"og:locale"}" content="${"en_US"}"><meta property="${"og:image"}" content="${escape(url, true) + "/assets/social-facebook.jpg"}"><meta property="${"og:image:type"}" content="${"image/jpeg"}"><meta property="${"og:image:width"}" content="${"1200"}"><meta property="${"og:image:height"}" content="${"600"}"><meta name="${"twitter:card"}" content="${"summary_large_image"}"><meta name="${"twitter:site"}" content="${"https://originaldatum.com/"}"><meta name="${"twitter:creator"}" content="${"@capricelaine"}"><meta name="${"twitter:title"}"${add_attribute("content", title, 0)}><meta name="${"twitter:description"}"${add_attribute("content", description, 0)}><meta name="${"twitter:image:src"}" content="${escape(url, true) + "/assets/social-twitter.jpg"}"><meta name="${"robots"}" content="${"max-image-preview:large"}"><link rel="${"canonical"}" href="${escape(url, true) + "/"}">${each(preloadFont, (href) => {
    return `<link rel="${"preload"}"${add_attribute("href", href, 0)} as="${"font"}" type="${"font/woff2"}" crossorigin>`;
  })}<!-- HEAD_svelte-s0ep91_END -->`, ""}`;
});
const Scrolly$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { root = null } = $$props;
  let { top = 0 } = $$props;
  let { bottom = 0 } = $$props;
  let { increments = 100 } = $$props;
  let { value = void 0 } = $$props;
  const steps = [];
  const threshold = [];
  let nodes = [];
  let intersectionObservers = [];
  let container;
  const update = () => {
    if (!nodes.length)
      return;
    nodes.forEach(createObserver);
  };
  const mostInView = () => {
    let maxRatio = 0;
    let maxIndex = 0;
    for (let i = 0; i < steps.length; i++) {
      if (steps[i] > maxRatio) {
        maxRatio = steps[i];
        maxIndex = i;
      }
    }
    if (maxRatio > 0)
      value = maxIndex;
    else
      value = void 0;
  };
  const createObserver = (node, index) => {
    const handleIntersect = (e) => {
      e[0].isIntersecting;
      const ratio = e[0].intersectionRatio;
      steps[index] = ratio;
      mostInView();
    };
    const marginTop = top ? top * -1 : 0;
    const marginBottom = bottom ? bottom * -1 : 0;
    const rootMargin = `${marginTop}px 0px ${marginBottom}px 0px`;
    const options = { root, rootMargin, threshold };
    if (intersectionObservers[index])
      intersectionObservers[index].disconnect();
    const io = new IntersectionObserver(handleIntersect, options);
    io.observe(node);
    intersectionObservers[index] = io;
  };
  if ($$props.root === void 0 && $$bindings.root && root !== void 0)
    $$bindings.root(root);
  if ($$props.top === void 0 && $$bindings.top && top !== void 0)
    $$bindings.top(top);
  if ($$props.bottom === void 0 && $$bindings.bottom && bottom !== void 0)
    $$bindings.bottom(bottom);
  if ($$props.increments === void 0 && $$bindings.increments && increments !== void 0)
    $$bindings.increments(increments);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  {
    update();
  }
  return `<div${add_attribute("this", container, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});
const List = "I had to walk fifteen miles to school in the snow! Barefoot! Uphill! Both ways! ?television was called books?my mom sent me to the store with a quarter and I came back with a loaf of bread, a bottle of milk, and a newspaper. ?we didn't have hair dryers. If you wanted to blow dry your hair you stood outside during a hurricane. ?we did all our coding in 1's and in 0's, and sometimes we ran out of 1's!  ?the Internet had only four pages.";
const Intro1 = "When my husband and I purchased our first house I couldn’t tell you the number of times family members commented on the type, the size, or the price of the house comparing it to the first house that they purchased.";
const Intro2 = "No matter our personal considerations, we knew that any sentence that started with ‘when I was your age’ was going to come with some unsaid musing on how easy life is now and how hard life was then.";
const Intro3 = "Nowadays, we hear those of different generations decry the laziness, the entitlement, and the narcissism of the next generation. It is a phenomenon that also happened to our parents and to our grandparents.";
const Intro4 = "But what was it really like back then?  When did people move out of their parents house?  How difficult was it to buy a house?  What was the price of milk?  What did people spend on their education?";
const Intro5 = "To answer all those questions we’ve analyzed historical consumer expenditure surveys, nationwide household surveys conducted by the U.S. Bureau of Labor Statistics, to identify once and for all what each generation actually gets to complain about.";
const Intro6 = "The surveys, taken since 1888, track the share of household income and expenses for 12 main categories.";
const Scrolly = {
  Scroll1: "There are some clear patterns we can see just by looking at this data.  Food and apparel share of expenses have decreased substantially over the past century, while transportation and housing’s share have increased.",
  Scroll2: "But how can we compare these expenses across generations? “When I was your age” implies that we know your age and the age of the person musing.",
  Scroll3: "Starting with the US median age of 38, we’ve partitioned the chart by generation, highlighting the years in which that generation was also 38.  The chart is adjustable should you want to personalize the experience to your age from here on out.",
  Scroll4: "Now that we can see the generations, we still need to see what expenses are relatively larger across the generations from another.",
  Scroll5: "One approach is to look at the average value for each category over time and compare how far away each generations’ expenses are from that median value.",
  Scroll6: "The values above the median for each time period are the expense categories that were the most burdensome relative to the other generations. The further they are from the center circle, the more burdensome they were for that time period.",
  Scroll7: "But this method can only show that a category was relatively more expensive, not the actual economic burden that category creates. To do that, we can calculate the % of income that is tied up in these top burdens.",
  Scroll8: "The largest values here are the categories that are statistically more burdensome AND have the largest economic cost for each generation.  These are the items that can officially be complained about!"
};
const Outro1 = "Now I’m sure there are plenty of other things outside of economics that can be relayed ‘when I was your age’ style. And there is no denying that quality of life on a variety of measures has increased every generation.";
const Outro2 = "But now, officially, you know what you (and your musing family members) can complain about!";
const copy = {
  List,
  Intro1,
  Intro2,
  Intro3,
  Intro4,
  Intro5,
  Intro6,
  Scrolly,
  Outro1,
  Outro2
};
const scrollState = writable(void 0);
const setAge = writable(38);
const Story_Scrolly_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".step.svelte-1qxq74x.svelte-1qxq74x{height:80vh;background:none;text-align:center}.scrollyLeft.svelte-1qxq74x.svelte-1qxq74x{height:auto;margin-bottom:80vh;position:relative;width:60%;margin-left:calc(40%);background:black;border:1px solid white;padding:20px;z-index:10;text-align:left}.step.svelte-1qxq74x p.svelte-1qxq74x{padding:1rem}@media(max-width: 600px){.scrollyLeft.svelte-1qxq74x.svelte-1qxq74x{height:auto;margin-bottom:80vh;width:auto;background:black;padding:10px}}",
  map: null
};
const Story_Scrolly = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $scrollState, $$unsubscribe_scrollState;
  $$unsubscribe_scrollState = subscribe(scrollState, (value) => $scrollState = value);
  $$result.css.add(css$5);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div id="${"scrolly"}">${validate_component(Scrolly$1, "Scrolly").$$render(
      $$result,
      { value: $scrollState },
      {
        value: ($$value) => {
          $scrollState = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${each(
            [
              "Scroll1",
              "Scroll2",
              "Scroll3",
              "Scroll4",
              "Scroll5",
              "Scroll6",
              "Scroll7",
              "Scroll8"
            ],
            (text, i) => {
              let active = $scrollState === i;
              return `
			<div class="${["step scrollyLeft svelte-1qxq74x", active ? "active" : ""].join(" ").trim()}"><p class="${"svelte-1qxq74x"}">${escape(copy.Scrolly[text])}</p>
			</div>`;
            }
          )}`;
        }
      }
    )}
</div>`;
  } while (!$$settled);
  $$unsubscribe_scrollState();
  return $$rendered;
});
function canBeZero(val) {
  if (val === 0) {
    return true;
  }
  return val;
}
function makeAccessor(acc) {
  if (!canBeZero(acc))
    return null;
  if (Array.isArray(acc)) {
    return (d) => acc.map((k) => {
      return typeof k !== "function" ? d[k] : k(d);
    });
  } else if (typeof acc !== "function") {
    return (d) => d[acc];
  }
  return acc;
}
function fromEntries(iter) {
  const obj = {};
  for (const pair of iter) {
    if (Object(pair) !== pair) {
      throw new TypeError("iterable for fromEntries should yield objects");
    }
    const { "0": key, "1": val } = pair;
    Object.defineProperty(obj, key, {
      configurable: true,
      enumerable: true,
      writable: true,
      value: val
    });
  }
  return obj;
}
function filterObject(obj, comparisonObj = {}) {
  return fromEntries(Object.entries(obj).filter(([key, value]) => {
    return value !== void 0 && comparisonObj[key] === void 0;
  }));
}
function calcUniques(data, fields, { sort = false } = {}) {
  if (!Array.isArray(data)) {
    throw new TypeError(`The first argument of calcUniques() must be an array. You passed in a ${typeof data}. If you got this error using the <LayerCake> component, consider passing a flat array to the \`flatData\` prop. More info: https://layercake.graphics/guide/#flatdata`);
  }
  if (Array.isArray(fields) || fields === void 0 || fields === null) {
    throw new TypeError("The second argument of calcUniques() must be an object with field names as keys as accessor functions as values.");
  }
  const uniques = {};
  const keys = Object.keys(fields);
  const kl = keys.length;
  let i;
  let j;
  let k;
  let s;
  let acc;
  let val;
  let set;
  const dl = data.length;
  for (i = 0; i < kl; i += 1) {
    set = /* @__PURE__ */ new Set();
    s = keys[i];
    acc = fields[s];
    for (j = 0; j < dl; j += 1) {
      val = acc(data[j]);
      if (Array.isArray(val)) {
        const vl = val.length;
        for (k = 0; k < vl; k += 1) {
          set.add(val[k]);
        }
      } else {
        set.add(val);
      }
    }
    const results = Array.from(set);
    uniques[s] = sort === true ? results.sort() : results;
  }
  return uniques;
}
function calcExtents(data, fields) {
  if (!Array.isArray(data)) {
    throw new TypeError(`The first argument of calcExtents() must be an array. You passed in a ${typeof data}. If you got this error using the <LayerCake> component, consider passing a flat array to the \`flatData\` prop. More info: https://layercake.graphics/guide/#flatdata`);
  }
  if (Array.isArray(fields) || fields === void 0 || fields === null) {
    throw new TypeError("The second argument of calcExtents() must be an object with field names as keys as accessor functions as values.");
  }
  const extents = {};
  const keys = Object.keys(fields);
  const kl = keys.length;
  let i;
  let j;
  let k;
  let s;
  let min;
  let max;
  let acc;
  let val;
  const dl = data.length;
  for (i = 0; i < kl; i += 1) {
    s = keys[i];
    acc = fields[s];
    min = null;
    max = null;
    for (j = 0; j < dl; j += 1) {
      val = acc(data[j]);
      if (Array.isArray(val)) {
        const vl = val.length;
        for (k = 0; k < vl; k += 1) {
          if (val[k] !== false && val[k] !== void 0 && val[k] !== null && Number.isNaN(val[k]) === false) {
            if (min === null || val[k] < min) {
              min = val[k];
            }
            if (max === null || val[k] > max) {
              max = val[k];
            }
          }
        }
      } else if (val !== false && val !== void 0 && val !== null && Number.isNaN(val) === false) {
        if (min === null || val < min) {
          min = val;
        }
        if (max === null || val > max) {
          max = val;
        }
      }
    }
    extents[s] = [min, max];
  }
  return extents;
}
function isOrdinalScale(scale) {
  if (typeof scale.bandwidth === "function") {
    return "ordinal";
  }
  if (arraysEqual(Object.keys(scale), ["domain", "range", "unknown", "copy"])) {
    return "ordinal";
  }
  return "other";
}
function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length)
    return false;
  return arr1.every((k) => {
    return arr2.includes(k);
  });
}
function calcScaleExtents(flatData, getters, activeScales) {
  const scaleGroups = Object.keys(activeScales).reduce((groups, k) => {
    const scaleType = isOrdinalScale(activeScales[k]);
    if (!groups[scaleType])
      groups[scaleType] = {};
    groups[scaleType][k] = getters[k];
    return groups;
  }, { ordinal: false, other: false });
  let extents = {};
  if (scaleGroups.ordinal) {
    extents = calcUniques(flatData, scaleGroups.ordinal);
  }
  if (scaleGroups.other) {
    extents = { ...extents, ...calcExtents(flatData, scaleGroups.other) };
  }
  return extents;
}
function partialDomain(domain = [], directive) {
  if (Array.isArray(directive) === true) {
    return directive.map((d, i) => {
      if (d === null) {
        return domain[i];
      }
      return d;
    });
  }
  return domain;
}
function calcDomain(s) {
  return function domainCalc([$extents, $domain]) {
    if (typeof $domain === "function") {
      $domain = $domain($extents[s]);
    }
    return $extents ? partialDomain($extents[s], $domain) : $domain;
  };
}
const defaultScales = {
  x: scaleLinear,
  y: scaleLinear,
  z: scaleLinear,
  r: scaleSqrt
};
function findScaleType(scale) {
  if (scale.constant) {
    return "symlog";
  }
  if (scale.base) {
    return "log";
  }
  if (scale.exponent) {
    if (scale.exponent() === 0.5) {
      return "sqrt";
    }
    return "pow";
  }
  return "other";
}
function identity(d) {
  return d;
}
function log(sign) {
  return (x) => Math.log(sign * x);
}
function exp(sign) {
  return (x) => sign * Math.exp(x);
}
function symlog(c) {
  return (x) => Math.sign(x) * Math.log1p(Math.abs(x / c));
}
function symexp(c) {
  return (x) => Math.sign(x) * Math.expm1(Math.abs(x)) * c;
}
function pow(exponent) {
  return function powFn(x) {
    return x < 0 ? -Math.pow(-x, exponent) : Math.pow(x, exponent);
  };
}
function getPadFunctions(scale) {
  const scaleType = findScaleType(scale);
  if (scaleType === "log") {
    const sign = Math.sign(scale.domain()[0]);
    return { lift: log(sign), ground: exp(sign), scaleType };
  }
  if (scaleType === "pow") {
    const exponent = 1;
    return { lift: pow(exponent), ground: pow(1 / exponent), scaleType };
  }
  if (scaleType === "sqrt") {
    const exponent = 0.5;
    return { lift: pow(exponent), ground: pow(1 / exponent), scaleType };
  }
  if (scaleType === "symlog") {
    const constant = 1;
    return { lift: symlog(constant), ground: symexp(constant), scaleType };
  }
  return { lift: identity, ground: identity, scaleType };
}
function padScale(scale, padding) {
  if (typeof scale.range !== "function") {
    throw new Error("Scale method `range` must be a function");
  }
  if (typeof scale.domain !== "function") {
    throw new Error("Scale method `domain` must be a function");
  }
  if (!Array.isArray(padding)) {
    return scale.domain();
  }
  if (scale.domain().length !== 2) {
    console.warn("[LayerCake] The scale is expected to have a domain of length 2 to use padding. Are you sure you want to use padding? Your scale's domain is:", scale.domain());
  }
  if (scale.range().length !== 2) {
    console.warn("[LayerCake] The scale is expected to have a range of length 2 to use padding. Are you sure you want to use padding? Your scale's range is:", scale.range());
  }
  const { lift, ground } = getPadFunctions(scale);
  const d0 = scale.domain()[0];
  const isTime = Object.prototype.toString.call(d0) === "[object Date]";
  const [d1, d2] = scale.domain().map((d) => {
    return isTime ? lift(d.getTime()) : lift(d);
  });
  const [r1, r2] = scale.range();
  const paddingLeft = padding[0] || 0;
  const paddingRight = padding[1] || 0;
  const step = (d2 - d1) / (Math.abs(r2 - r1) - paddingLeft - paddingRight);
  return [d1 - paddingLeft * step, paddingRight * step + d2].map((d) => {
    return isTime ? ground(new Date(d)) : ground(d);
  });
}
function calcBaseRange(s, width, height, reverse, percentRange) {
  let min;
  let max;
  if (percentRange === true) {
    min = 0;
    max = 100;
  } else {
    min = s === "r" ? 1 : 0;
    max = s === "y" ? height : s === "r" ? 25 : width;
  }
  return reverse === true ? [max, min] : [min, max];
}
function getDefaultRange(s, width, height, reverse, range, percentRange) {
  return !range ? calcBaseRange(s, width, height, reverse, percentRange) : typeof range === "function" ? range({ width, height }) : range;
}
function createScale(s) {
  return function scaleCreator([$scale, $extents, $domain, $padding, $nice, $reverse, $width, $height, $range, $percentScale]) {
    if ($extents === null) {
      return null;
    }
    const defaultRange = getDefaultRange(s, $width, $height, $reverse, $range, $percentScale);
    const scale = $scale === defaultScales[s] ? $scale() : $scale.copy();
    scale.domain($domain);
    if (!scale.interpolator || typeof scale.interpolator === "function" && scale.interpolator().name.startsWith("identity")) {
      scale.range(defaultRange);
    }
    if ($padding) {
      scale.domain(padScale(scale, $padding));
    }
    if ($nice === true || typeof $nice === "number") {
      if (typeof scale.nice === "function") {
        scale.nice(typeof $nice === "number" ? $nice : void 0);
      } else {
        console.error(`[Layer Cake] You set \`${s}Nice: true\` but the ${s}Scale does not have a \`.nice\` method. Ignoring...`);
      }
    }
    return scale;
  };
}
function createGetter([$acc, $scale]) {
  return (d) => {
    const val = $acc(d);
    if (Array.isArray(val)) {
      return val.map((v) => $scale(v));
    }
    return $scale(val);
  };
}
function getRange([$scale]) {
  if (typeof $scale === "function") {
    if (typeof $scale.range === "function") {
      return $scale.range();
    }
    console.error("[LayerCake] Your scale doesn't have a `.range` method?");
  }
  return null;
}
const LayerCake_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".layercake-container.svelte-w5m4wa,.layercake-container.svelte-w5m4wa *{-webkit-box-sizing:border-box;box-sizing:border-box}.layercake-container.svelte-w5m4wa{width:100%;height:100%}",
  map: null
};
const LayerCake = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let context;
  let $_config, $$unsubscribe__config;
  let $_custom, $$unsubscribe__custom;
  let $_rScale, $$unsubscribe__rScale;
  let $_zScale, $$unsubscribe__zScale;
  let $_yScale, $$unsubscribe__yScale;
  let $_xScale, $$unsubscribe__xScale;
  let $_rRange, $$unsubscribe__rRange;
  let $_zRange, $$unsubscribe__zRange;
  let $_yRange, $$unsubscribe__yRange;
  let $_xRange, $$unsubscribe__xRange;
  let $_rPadding, $$unsubscribe__rPadding;
  let $_zPadding, $$unsubscribe__zPadding;
  let $_yPadding, $$unsubscribe__yPadding;
  let $_xPadding, $$unsubscribe__xPadding;
  let $_rReverse, $$unsubscribe__rReverse;
  let $_zReverse, $$unsubscribe__zReverse;
  let $_yReverse, $$unsubscribe__yReverse;
  let $_xReverse, $$unsubscribe__xReverse;
  let $_rNice, $$unsubscribe__rNice;
  let $_zNice, $$unsubscribe__zNice;
  let $_yNice, $$unsubscribe__yNice;
  let $_xNice, $$unsubscribe__xNice;
  let $_rDomain, $$unsubscribe__rDomain;
  let $_zDomain, $$unsubscribe__zDomain;
  let $_yDomain, $$unsubscribe__yDomain;
  let $_xDomain, $$unsubscribe__xDomain;
  let $_r, $$unsubscribe__r;
  let $_z, $$unsubscribe__z;
  let $_y, $$unsubscribe__y;
  let $_x, $$unsubscribe__x;
  let $_padding, $$unsubscribe__padding;
  let $_flatData, $$unsubscribe__flatData;
  let $_data, $$unsubscribe__data;
  let $_extents, $$unsubscribe__extents;
  let $_containerHeight, $$unsubscribe__containerHeight;
  let $_containerWidth, $$unsubscribe__containerWidth;
  let $_percentRange, $$unsubscribe__percentRange;
  let $width_d, $$unsubscribe_width_d;
  let $height_d, $$unsubscribe_height_d;
  let $aspectRatio_d, $$unsubscribe_aspectRatio_d;
  let { ssr = false } = $$props;
  let { pointerEvents = true } = $$props;
  let { position = "relative" } = $$props;
  let { percentRange = false } = $$props;
  let { width = void 0 } = $$props;
  let { height = void 0 } = $$props;
  let { containerWidth = width || 100 } = $$props;
  let { containerHeight = height || 100 } = $$props;
  let { element = void 0 } = $$props;
  let { x = void 0 } = $$props;
  let { y: y2 = void 0 } = $$props;
  let { z = void 0 } = $$props;
  let { r = void 0 } = $$props;
  let { data = [] } = $$props;
  let { xDomain = void 0 } = $$props;
  let { yDomain = void 0 } = $$props;
  let { zDomain = void 0 } = $$props;
  let { rDomain = void 0 } = $$props;
  let { xNice = false } = $$props;
  let { yNice = false } = $$props;
  let { zNice = false } = $$props;
  let { rNice = false } = $$props;
  let { xPadding = void 0 } = $$props;
  let { yPadding = void 0 } = $$props;
  let { zPadding = void 0 } = $$props;
  let { rPadding = void 0 } = $$props;
  let { xScale = defaultScales.x } = $$props;
  let { yScale = defaultScales.y } = $$props;
  let { zScale = defaultScales.z } = $$props;
  let { rScale = defaultScales.r } = $$props;
  let { xRange = void 0 } = $$props;
  let { yRange = void 0 } = $$props;
  let { zRange = void 0 } = $$props;
  let { rRange = void 0 } = $$props;
  let { xReverse = false } = $$props;
  let { yReverse = typeof yScale.bandwidth === "function" ? false : true } = $$props;
  let { zReverse = false } = $$props;
  let { rReverse = false } = $$props;
  let { padding = {} } = $$props;
  let { extents = {} } = $$props;
  let { flatData = void 0 } = $$props;
  let { custom = {} } = $$props;
  let isMounted = false;
  const config = {};
  const _percentRange = writable(percentRange);
  $$unsubscribe__percentRange = subscribe(_percentRange, (value) => $_percentRange = value);
  const _containerWidth = writable(containerWidth);
  $$unsubscribe__containerWidth = subscribe(_containerWidth, (value) => $_containerWidth = value);
  const _containerHeight = writable(containerHeight);
  $$unsubscribe__containerHeight = subscribe(_containerHeight, (value) => $_containerHeight = value);
  const _extents = writable(filterObject(extents));
  $$unsubscribe__extents = subscribe(_extents, (value) => $_extents = value);
  const _data = writable(data);
  $$unsubscribe__data = subscribe(_data, (value) => $_data = value);
  const _flatData = writable(flatData || data);
  $$unsubscribe__flatData = subscribe(_flatData, (value) => $_flatData = value);
  const _padding = writable(padding);
  $$unsubscribe__padding = subscribe(_padding, (value) => $_padding = value);
  const _x = writable(makeAccessor(x));
  $$unsubscribe__x = subscribe(_x, (value) => $_x = value);
  const _y = writable(makeAccessor(y2));
  $$unsubscribe__y = subscribe(_y, (value) => $_y = value);
  const _z = writable(makeAccessor(z));
  $$unsubscribe__z = subscribe(_z, (value) => $_z = value);
  const _r = writable(makeAccessor(r));
  $$unsubscribe__r = subscribe(_r, (value) => $_r = value);
  const _xDomain = writable(xDomain);
  $$unsubscribe__xDomain = subscribe(_xDomain, (value) => $_xDomain = value);
  const _yDomain = writable(yDomain);
  $$unsubscribe__yDomain = subscribe(_yDomain, (value) => $_yDomain = value);
  const _zDomain = writable(zDomain);
  $$unsubscribe__zDomain = subscribe(_zDomain, (value) => $_zDomain = value);
  const _rDomain = writable(rDomain);
  $$unsubscribe__rDomain = subscribe(_rDomain, (value) => $_rDomain = value);
  const _xNice = writable(xNice);
  $$unsubscribe__xNice = subscribe(_xNice, (value) => $_xNice = value);
  const _yNice = writable(yNice);
  $$unsubscribe__yNice = subscribe(_yNice, (value) => $_yNice = value);
  const _zNice = writable(zNice);
  $$unsubscribe__zNice = subscribe(_zNice, (value) => $_zNice = value);
  const _rNice = writable(rNice);
  $$unsubscribe__rNice = subscribe(_rNice, (value) => $_rNice = value);
  const _xReverse = writable(xReverse);
  $$unsubscribe__xReverse = subscribe(_xReverse, (value) => $_xReverse = value);
  const _yReverse = writable(yReverse);
  $$unsubscribe__yReverse = subscribe(_yReverse, (value) => $_yReverse = value);
  const _zReverse = writable(zReverse);
  $$unsubscribe__zReverse = subscribe(_zReverse, (value) => $_zReverse = value);
  const _rReverse = writable(rReverse);
  $$unsubscribe__rReverse = subscribe(_rReverse, (value) => $_rReverse = value);
  const _xPadding = writable(xPadding);
  $$unsubscribe__xPadding = subscribe(_xPadding, (value) => $_xPadding = value);
  const _yPadding = writable(yPadding);
  $$unsubscribe__yPadding = subscribe(_yPadding, (value) => $_yPadding = value);
  const _zPadding = writable(zPadding);
  $$unsubscribe__zPadding = subscribe(_zPadding, (value) => $_zPadding = value);
  const _rPadding = writable(rPadding);
  $$unsubscribe__rPadding = subscribe(_rPadding, (value) => $_rPadding = value);
  const _xRange = writable(xRange);
  $$unsubscribe__xRange = subscribe(_xRange, (value) => $_xRange = value);
  const _yRange = writable(yRange);
  $$unsubscribe__yRange = subscribe(_yRange, (value) => $_yRange = value);
  const _zRange = writable(zRange);
  $$unsubscribe__zRange = subscribe(_zRange, (value) => $_zRange = value);
  const _rRange = writable(rRange);
  $$unsubscribe__rRange = subscribe(_rRange, (value) => $_rRange = value);
  const _xScale = writable(xScale);
  $$unsubscribe__xScale = subscribe(_xScale, (value) => $_xScale = value);
  const _yScale = writable(yScale);
  $$unsubscribe__yScale = subscribe(_yScale, (value) => $_yScale = value);
  const _zScale = writable(zScale);
  $$unsubscribe__zScale = subscribe(_zScale, (value) => $_zScale = value);
  const _rScale = writable(rScale);
  $$unsubscribe__rScale = subscribe(_rScale, (value) => $_rScale = value);
  const _config = writable(config);
  $$unsubscribe__config = subscribe(_config, (value) => $_config = value);
  const _custom = writable(custom);
  $$unsubscribe__custom = subscribe(_custom, (value) => $_custom = value);
  const activeGetters_d = derived([_x, _y, _z, _r], ([$x, $y, $z, $r]) => {
    const obj = {};
    if ($x) {
      obj.x = $x;
    }
    if ($y) {
      obj.y = $y;
    }
    if ($z) {
      obj.z = $z;
    }
    if ($r) {
      obj.r = $r;
    }
    return obj;
  });
  const padding_d = derived([_padding, _containerWidth, _containerHeight], ([$padding]) => {
    const defaultPadding = { top: 0, right: 0, bottom: 0, left: 0 };
    return Object.assign(defaultPadding, $padding);
  });
  const box_d = derived([_containerWidth, _containerHeight, padding_d], ([$containerWidth, $containerHeight, $padding]) => {
    const b = {};
    b.top = $padding.top;
    b.right = $containerWidth - $padding.right;
    b.bottom = $containerHeight - $padding.bottom;
    b.left = $padding.left;
    b.width = b.right - b.left;
    b.height = b.bottom - b.top;
    if (b.width <= 0 && isMounted === true) {
      console.warn("[LayerCake] Target div has zero or negative width. Did you forget to set an explicit width in CSS on the container?");
    }
    if (b.height <= 0 && isMounted === true) {
      console.warn("[LayerCake] Target div has zero or negative height. Did you forget to set an explicit height in CSS on the container?");
    }
    return b;
  });
  const width_d = derived([box_d], ([$box]) => {
    return $box.width;
  });
  $$unsubscribe_width_d = subscribe(width_d, (value) => $width_d = value);
  const height_d = derived([box_d], ([$box]) => {
    return $box.height;
  });
  $$unsubscribe_height_d = subscribe(height_d, (value) => $height_d = value);
  const extents_d = derived([_flatData, activeGetters_d, _extents, _xScale, _yScale, _rScale, _zScale], ([$flatData, $activeGetters, $extents, $_xScale2, $_yScale2, $_rScale2, $_zScale2]) => {
    const scaleLookup = {
      x: $_xScale2,
      y: $_yScale2,
      r: $_rScale2,
      z: $_zScale2
    };
    const getters = filterObject($activeGetters, $extents);
    const activeScales = Object.fromEntries(Object.keys(getters).map((k) => [k, scaleLookup[k]]));
    if (Object.keys(getters).length > 0) {
      const calculatedExtents = calcScaleExtents($flatData, getters, activeScales);
      return { ...calculatedExtents, ...$extents };
    } else {
      return {};
    }
  });
  const xDomain_d = derived([extents_d, _xDomain], calcDomain("x"));
  const yDomain_d = derived([extents_d, _yDomain], calcDomain("y"));
  const zDomain_d = derived([extents_d, _zDomain], calcDomain("z"));
  const rDomain_d = derived([extents_d, _rDomain], calcDomain("r"));
  const xScale_d = derived(
    [
      _xScale,
      extents_d,
      xDomain_d,
      _xPadding,
      _xNice,
      _xReverse,
      width_d,
      height_d,
      _xRange,
      _percentRange
    ],
    createScale("x")
  );
  const xGet_d = derived([_x, xScale_d], createGetter);
  const yScale_d = derived(
    [
      _yScale,
      extents_d,
      yDomain_d,
      _yPadding,
      _yNice,
      _yReverse,
      width_d,
      height_d,
      _yRange,
      _percentRange
    ],
    createScale("y")
  );
  const yGet_d = derived([_y, yScale_d], createGetter);
  const zScale_d = derived(
    [
      _zScale,
      extents_d,
      zDomain_d,
      _zPadding,
      _zNice,
      _zReverse,
      width_d,
      height_d,
      _zRange,
      _percentRange
    ],
    createScale("z")
  );
  const zGet_d = derived([_z, zScale_d], createGetter);
  const rScale_d = derived(
    [
      _rScale,
      extents_d,
      rDomain_d,
      _rPadding,
      _rNice,
      _rReverse,
      width_d,
      height_d,
      _rRange,
      _percentRange
    ],
    createScale("r")
  );
  const rGet_d = derived([_r, rScale_d], createGetter);
  const xRange_d = derived([xScale_d], getRange);
  const yRange_d = derived([yScale_d], getRange);
  const zRange_d = derived([zScale_d], getRange);
  const rRange_d = derived([rScale_d], getRange);
  const aspectRatio_d = derived([width_d, height_d], ([$width, $height]) => {
    return $width / $height;
  });
  $$unsubscribe_aspectRatio_d = subscribe(aspectRatio_d, (value) => $aspectRatio_d = value);
  if ($$props.ssr === void 0 && $$bindings.ssr && ssr !== void 0)
    $$bindings.ssr(ssr);
  if ($$props.pointerEvents === void 0 && $$bindings.pointerEvents && pointerEvents !== void 0)
    $$bindings.pointerEvents(pointerEvents);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.percentRange === void 0 && $$bindings.percentRange && percentRange !== void 0)
    $$bindings.percentRange(percentRange);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.containerWidth === void 0 && $$bindings.containerWidth && containerWidth !== void 0)
    $$bindings.containerWidth(containerWidth);
  if ($$props.containerHeight === void 0 && $$bindings.containerHeight && containerHeight !== void 0)
    $$bindings.containerHeight(containerHeight);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.x === void 0 && $$bindings.x && x !== void 0)
    $$bindings.x(x);
  if ($$props.y === void 0 && $$bindings.y && y2 !== void 0)
    $$bindings.y(y2);
  if ($$props.z === void 0 && $$bindings.z && z !== void 0)
    $$bindings.z(z);
  if ($$props.r === void 0 && $$bindings.r && r !== void 0)
    $$bindings.r(r);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.xDomain === void 0 && $$bindings.xDomain && xDomain !== void 0)
    $$bindings.xDomain(xDomain);
  if ($$props.yDomain === void 0 && $$bindings.yDomain && yDomain !== void 0)
    $$bindings.yDomain(yDomain);
  if ($$props.zDomain === void 0 && $$bindings.zDomain && zDomain !== void 0)
    $$bindings.zDomain(zDomain);
  if ($$props.rDomain === void 0 && $$bindings.rDomain && rDomain !== void 0)
    $$bindings.rDomain(rDomain);
  if ($$props.xNice === void 0 && $$bindings.xNice && xNice !== void 0)
    $$bindings.xNice(xNice);
  if ($$props.yNice === void 0 && $$bindings.yNice && yNice !== void 0)
    $$bindings.yNice(yNice);
  if ($$props.zNice === void 0 && $$bindings.zNice && zNice !== void 0)
    $$bindings.zNice(zNice);
  if ($$props.rNice === void 0 && $$bindings.rNice && rNice !== void 0)
    $$bindings.rNice(rNice);
  if ($$props.xPadding === void 0 && $$bindings.xPadding && xPadding !== void 0)
    $$bindings.xPadding(xPadding);
  if ($$props.yPadding === void 0 && $$bindings.yPadding && yPadding !== void 0)
    $$bindings.yPadding(yPadding);
  if ($$props.zPadding === void 0 && $$bindings.zPadding && zPadding !== void 0)
    $$bindings.zPadding(zPadding);
  if ($$props.rPadding === void 0 && $$bindings.rPadding && rPadding !== void 0)
    $$bindings.rPadding(rPadding);
  if ($$props.xScale === void 0 && $$bindings.xScale && xScale !== void 0)
    $$bindings.xScale(xScale);
  if ($$props.yScale === void 0 && $$bindings.yScale && yScale !== void 0)
    $$bindings.yScale(yScale);
  if ($$props.zScale === void 0 && $$bindings.zScale && zScale !== void 0)
    $$bindings.zScale(zScale);
  if ($$props.rScale === void 0 && $$bindings.rScale && rScale !== void 0)
    $$bindings.rScale(rScale);
  if ($$props.xRange === void 0 && $$bindings.xRange && xRange !== void 0)
    $$bindings.xRange(xRange);
  if ($$props.yRange === void 0 && $$bindings.yRange && yRange !== void 0)
    $$bindings.yRange(yRange);
  if ($$props.zRange === void 0 && $$bindings.zRange && zRange !== void 0)
    $$bindings.zRange(zRange);
  if ($$props.rRange === void 0 && $$bindings.rRange && rRange !== void 0)
    $$bindings.rRange(rRange);
  if ($$props.xReverse === void 0 && $$bindings.xReverse && xReverse !== void 0)
    $$bindings.xReverse(xReverse);
  if ($$props.yReverse === void 0 && $$bindings.yReverse && yReverse !== void 0)
    $$bindings.yReverse(yReverse);
  if ($$props.zReverse === void 0 && $$bindings.zReverse && zReverse !== void 0)
    $$bindings.zReverse(zReverse);
  if ($$props.rReverse === void 0 && $$bindings.rReverse && rReverse !== void 0)
    $$bindings.rReverse(rReverse);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.extents === void 0 && $$bindings.extents && extents !== void 0)
    $$bindings.extents(extents);
  if ($$props.flatData === void 0 && $$bindings.flatData && flatData !== void 0)
    $$bindings.flatData(flatData);
  if ($$props.custom === void 0 && $$bindings.custom && custom !== void 0)
    $$bindings.custom(custom);
  $$result.css.add(css$4);
  {
    if (x)
      config.x = x;
  }
  {
    if (y2)
      config.y = y2;
  }
  {
    if (z)
      config.z = z;
  }
  {
    if (r)
      config.r = r;
  }
  {
    if (xDomain)
      config.xDomain = xDomain;
  }
  {
    if (yDomain)
      config.yDomain = yDomain;
  }
  {
    if (zDomain)
      config.zDomain = zDomain;
  }
  {
    if (rDomain)
      config.rDomain = rDomain;
  }
  {
    if (xRange)
      config.xRange = xRange;
  }
  {
    if (yRange)
      config.yRange = yRange;
  }
  {
    if (zRange)
      config.zRange = zRange;
  }
  {
    if (rRange)
      config.rRange = rRange;
  }
  set_store_value(_percentRange, $_percentRange = percentRange, $_percentRange);
  set_store_value(_containerWidth, $_containerWidth = containerWidth, $_containerWidth);
  set_store_value(_containerHeight, $_containerHeight = containerHeight, $_containerHeight);
  set_store_value(_extents, $_extents = filterObject(extents), $_extents);
  set_store_value(_data, $_data = data, $_data);
  set_store_value(_flatData, $_flatData = flatData || data, $_flatData);
  set_store_value(_padding, $_padding = padding, $_padding);
  set_store_value(_x, $_x = makeAccessor(x), $_x);
  set_store_value(_y, $_y = makeAccessor(y2), $_y);
  set_store_value(_z, $_z = makeAccessor(z), $_z);
  set_store_value(_r, $_r = makeAccessor(r), $_r);
  set_store_value(_xDomain, $_xDomain = xDomain, $_xDomain);
  set_store_value(_yDomain, $_yDomain = yDomain, $_yDomain);
  set_store_value(_zDomain, $_zDomain = zDomain, $_zDomain);
  set_store_value(_rDomain, $_rDomain = rDomain, $_rDomain);
  set_store_value(_xNice, $_xNice = xNice, $_xNice);
  set_store_value(_yNice, $_yNice = yNice, $_yNice);
  set_store_value(_zNice, $_zNice = zNice, $_zNice);
  set_store_value(_rNice, $_rNice = rNice, $_rNice);
  set_store_value(_xReverse, $_xReverse = xReverse, $_xReverse);
  set_store_value(_yReverse, $_yReverse = yReverse, $_yReverse);
  set_store_value(_zReverse, $_zReverse = zReverse, $_zReverse);
  set_store_value(_rReverse, $_rReverse = rReverse, $_rReverse);
  set_store_value(_xPadding, $_xPadding = xPadding, $_xPadding);
  set_store_value(_yPadding, $_yPadding = yPadding, $_yPadding);
  set_store_value(_zPadding, $_zPadding = zPadding, $_zPadding);
  set_store_value(_rPadding, $_rPadding = rPadding, $_rPadding);
  set_store_value(_xRange, $_xRange = xRange, $_xRange);
  set_store_value(_yRange, $_yRange = yRange, $_yRange);
  set_store_value(_zRange, $_zRange = zRange, $_zRange);
  set_store_value(_rRange, $_rRange = rRange, $_rRange);
  set_store_value(_xScale, $_xScale = xScale, $_xScale);
  set_store_value(_yScale, $_yScale = yScale, $_yScale);
  set_store_value(_zScale, $_zScale = zScale, $_zScale);
  set_store_value(_rScale, $_rScale = rScale, $_rScale);
  set_store_value(_custom, $_custom = custom, $_custom);
  set_store_value(_config, $_config = config, $_config);
  context = {
    activeGetters: activeGetters_d,
    width: width_d,
    height: height_d,
    percentRange: _percentRange,
    aspectRatio: aspectRatio_d,
    containerWidth: _containerWidth,
    containerHeight: _containerHeight,
    x: _x,
    y: _y,
    z: _z,
    r: _r,
    custom: _custom,
    data: _data,
    xNice: _xNice,
    yNice: _yNice,
    zNice: _zNice,
    rNice: _rNice,
    xReverse: _xReverse,
    yReverse: _yReverse,
    zReverse: _zReverse,
    rReverse: _rReverse,
    xPadding: _xPadding,
    yPadding: _yPadding,
    zPadding: _zPadding,
    rPadding: _rPadding,
    padding: padding_d,
    flatData: _flatData,
    extents: extents_d,
    xDomain: xDomain_d,
    yDomain: yDomain_d,
    zDomain: zDomain_d,
    rDomain: rDomain_d,
    xRange: xRange_d,
    yRange: yRange_d,
    zRange: zRange_d,
    rRange: rRange_d,
    config: _config,
    xScale: xScale_d,
    xGet: xGet_d,
    yScale: yScale_d,
    yGet: yGet_d,
    zScale: zScale_d,
    zGet: zGet_d,
    rScale: rScale_d,
    rGet: rGet_d
  };
  {
    setContext("LayerCake", context);
  }
  $$unsubscribe__config();
  $$unsubscribe__custom();
  $$unsubscribe__rScale();
  $$unsubscribe__zScale();
  $$unsubscribe__yScale();
  $$unsubscribe__xScale();
  $$unsubscribe__rRange();
  $$unsubscribe__zRange();
  $$unsubscribe__yRange();
  $$unsubscribe__xRange();
  $$unsubscribe__rPadding();
  $$unsubscribe__zPadding();
  $$unsubscribe__yPadding();
  $$unsubscribe__xPadding();
  $$unsubscribe__rReverse();
  $$unsubscribe__zReverse();
  $$unsubscribe__yReverse();
  $$unsubscribe__xReverse();
  $$unsubscribe__rNice();
  $$unsubscribe__zNice();
  $$unsubscribe__yNice();
  $$unsubscribe__xNice();
  $$unsubscribe__rDomain();
  $$unsubscribe__zDomain();
  $$unsubscribe__yDomain();
  $$unsubscribe__xDomain();
  $$unsubscribe__r();
  $$unsubscribe__z();
  $$unsubscribe__y();
  $$unsubscribe__x();
  $$unsubscribe__padding();
  $$unsubscribe__flatData();
  $$unsubscribe__data();
  $$unsubscribe__extents();
  $$unsubscribe__containerHeight();
  $$unsubscribe__containerWidth();
  $$unsubscribe__percentRange();
  $$unsubscribe_width_d();
  $$unsubscribe_height_d();
  $$unsubscribe_aspectRatio_d();
  return `


${ssr === true || typeof window !== "undefined" ? `<div class="${"layercake-container svelte-w5m4wa"}"${add_styles({
    position,
    "top": position === "absolute" ? "0" : null,
    "right": position === "absolute" ? "0" : null,
    "bottom": position === "absolute" ? "0" : null,
    "left": position === "absolute" ? "0" : null,
    "pointer-events": pointerEvents === false ? "none" : null
  })}${add_attribute("this", element, 0)}>${slots.default ? slots.default({
    element,
    width: $width_d,
    height: $height_d,
    aspectRatio: $aspectRatio_d,
    containerWidth: $_containerWidth,
    containerHeight: $_containerHeight
  }) : ``}</div>` : ``}`;
});
const Html_svelte_svelte_type_style_lang = "";
const Svg_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "svg.svelte-17l4rdd{position:absolute;top:0;left:0;overflow:visible}",
  map: null
};
const Svg = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $containerWidth, $$unsubscribe_containerWidth;
  let $containerHeight, $$unsubscribe_containerHeight;
  let $padding, $$unsubscribe_padding;
  let { element = void 0 } = $$props;
  let { innerElement = void 0 } = $$props;
  let { zIndex = void 0 } = $$props;
  let { pointerEvents = void 0 } = $$props;
  let { viewBox = void 0 } = $$props;
  const { containerWidth, containerHeight, padding } = getContext("LayerCake");
  $$unsubscribe_containerWidth = subscribe(containerWidth, (value) => $containerWidth = value);
  $$unsubscribe_containerHeight = subscribe(containerHeight, (value) => $containerHeight = value);
  $$unsubscribe_padding = subscribe(padding, (value) => $padding = value);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.innerElement === void 0 && $$bindings.innerElement && innerElement !== void 0)
    $$bindings.innerElement(innerElement);
  if ($$props.zIndex === void 0 && $$bindings.zIndex && zIndex !== void 0)
    $$bindings.zIndex(zIndex);
  if ($$props.pointerEvents === void 0 && $$bindings.pointerEvents && pointerEvents !== void 0)
    $$bindings.pointerEvents(pointerEvents);
  if ($$props.viewBox === void 0 && $$bindings.viewBox && viewBox !== void 0)
    $$bindings.viewBox(viewBox);
  $$result.css.add(css$3);
  $$unsubscribe_containerWidth();
  $$unsubscribe_containerHeight();
  $$unsubscribe_padding();
  return `

<svg class="${"layercake-layout-svg svelte-17l4rdd"}"${add_attribute("viewBox", viewBox, 0)}${add_attribute("width", $containerWidth, 0)}${add_attribute("height", $containerHeight, 0)}${add_styles({
    "z-index": zIndex,
    "pointer-events": pointerEvents === false ? "none" : null
  })}${add_attribute("this", element, 0)}><defs>${slots.defs ? slots.defs({ element }) : ``}</defs><g class="${"layercake-layout-svg_g"}" transform="${"translate(" + escape($padding.left, true) + ", " + escape($padding.top, true) + ")"}"${add_attribute("this", innerElement, 0)}>${slots.default ? slots.default({ element }) : ``}</g></svg>`;
});
const ScaledSvg_svelte_svelte_type_style_lang = "";
const LucideIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const directions = ["n", "ne", "e", "se", "s", "sw", "w", "nw"];
  let { name } = $$props;
  let { direction = "n" } = $$props;
  let { size = "1em" } = $$props;
  let { color = void 0 } = $$props;
  let { strokeWidth = void 0 } = $$props;
  let { x = void 0 } = $$props;
  let { y: y2 = void 0 } = $$props;
  if ($$props.directions === void 0 && $$bindings.directions && directions !== void 0)
    $$bindings.directions(directions);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.direction === void 0 && $$bindings.direction && direction !== void 0)
    $$bindings.direction(direction);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.x === void 0 && $$bindings.x && x !== void 0)
    $$bindings.x(x);
  if ($$props.y === void 0 && $$bindings.y && y2 !== void 0)
    $$bindings.y(y2);
  directions.indexOf(direction) * 45;
  return `${``}`;
});
function cubicOut(t) {
  const f = t - 1;
  return f * f * f + 1;
}
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function get_interpolator(a, b) {
  if (a === b || a !== a)
    return () => a;
  const type = typeof a;
  if (type !== typeof b || Array.isArray(a) !== Array.isArray(b)) {
    throw new Error("Cannot interpolate values of different type");
  }
  if (Array.isArray(a)) {
    const arr = b.map((bi, i) => {
      return get_interpolator(a[i], bi);
    });
    return (t) => arr.map((fn) => fn(t));
  }
  if (type === "object") {
    if (!a || !b)
      throw new Error("Object cannot be null");
    if (is_date(a) && is_date(b)) {
      a = a.getTime();
      b = b.getTime();
      const delta = b - a;
      return (t) => new Date(a + t * delta);
    }
    const keys = Object.keys(b);
    const interpolators = {};
    keys.forEach((key) => {
      interpolators[key] = get_interpolator(a[key], b[key]);
    });
    return (t) => {
      const result = {};
      keys.forEach((key) => {
        result[key] = interpolators[key](t);
      });
      return result;
    };
  }
  if (type === "number") {
    const delta = b - a;
    return (t) => a + t * delta;
  }
  throw new Error(`Cannot interpolate ${type} values`);
}
function tweened(value, defaults = {}) {
  const store = writable(value);
  let task;
  let target_value = value;
  function set(new_value, opts) {
    if (value == null) {
      store.set(value = new_value);
      return Promise.resolve();
    }
    target_value = new_value;
    let previous_task = task;
    let started = false;
    let { delay = 0, duration = 400, easing = identity$1, interpolate: interpolate2 = get_interpolator } = assign(assign({}, defaults), opts);
    if (duration === 0) {
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      store.set(value = target_value);
      return Promise.resolve();
    }
    const start = now() + delay;
    let fn;
    task = loop((now2) => {
      if (now2 < start)
        return true;
      if (!started) {
        fn = interpolate2(value, new_value);
        if (typeof duration === "function")
          duration = duration(value, new_value);
        started = true;
      }
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      const elapsed = now2 - start;
      if (elapsed > duration) {
        store.set(value = new_value);
        return false;
      }
      store.set(value = fn(easing(elapsed / duration)));
      return true;
    });
    return task.promise;
  }
  return {
    set,
    update: (fn, opts) => set(fn(target_value, value), opts),
    subscribe: store.subscribe
  };
}
const RadialChart_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "svg.svelte-q13yx{float:left}.label.svelte-q13yx,.ticklabel.svelte-q13yx{fill:white;font-size:10px;word-wrap:break-word;width:20px}.ticklabel.svelte-q13yx{font-size:14px}.ticklabelyear.svelte-q13yx{fill:white;opacity:0.6;font-size:10px}.ageLabel.svelte-q13yx{font-size:65px;fill:white;letter-spacing:-5px}.ageLabeltext.svelte-q13yx{font-size:10px;fill:white}.clickButton.svelte-q13yx{font-size:10px;fill:white;cursor:pointer}@media(max-width: 600px){}",
  map: null
};
let innerRadius = 120;
function midYear(start, end) {
  let endYear = Math.min(end, 2025);
  return start + (endYear - start) / 2;
}
const RadialChart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pathData;
  let yearVals;
  let xGenVals;
  let medianCircle;
  let pointData;
  let $tweenedOpacity, $$unsubscribe_tweenedOpacity;
  let $tweenedStroke, $$unsubscribe_tweenedStroke;
  let $tweenedColor, $$unsubscribe_tweenedColor;
  let $tweenedPath, $$unsubscribe_tweenedPath;
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
  const IncomePercent = getContext("IncomePercent");
  const RawPercentage = getContext("RawPercentage");
  const ZScores = getContext("ZScores");
  const genData = getContext("genData");
  const yearData = getContext("yearData");
  let scrollPosition;
  let currentAge;
  scrollState.subscribe((value) => {
    console.log("scroll", value);
    scrollPosition = value;
    changeState(scrollPosition);
  });
  setAge.subscribe((value) => {
    currentAge = value;
    console.log("age", value);
  });
  let clickVals = [];
  let categories = [
    "Misc",
    "Alcohol & Tobacco",
    "Reading and Education",
    "Religion and Charity",
    "Personal care",
    "Healthcare",
    "Insurance",
    "Entertainment",
    "Transportation",
    "Apparel ",
    "Housing",
    "Food"
  ];
  categories = categories.slice().reverse();
  const iconsScaleLine = d3.scaleOrdinal().domain(categories).range([
    "utensils",
    "home",
    "shirt",
    "car",
    "ticket",
    "file-text",
    "cross",
    "shower-head",
    "heart-handshake",
    "library",
    "wine",
    "grip-horizontal"
  ]);
  function changeState(scrollPosition2) {
    if (scrollPosition2 == 0) {
      addSmallMultipleAreas();
    }
    if (scrollPosition2 == 1) {
      addRadial();
    }
    if (scrollPosition2 == 2) {
      addGenerations();
    }
    if (scrollPosition2 == 4) {
      addZScores();
    }
    if (scrollPosition2 == 5) {
      addDots();
    }
    if (scrollPosition2 == 7) {
      sizeDots();
      centerDotsonGeneration();
    }
  }
  let svg;
  let innerWidth = window.innerWidth;
  let innerHeight = window.innerHeight;
  let size = Math.min(innerWidth, innerHeight);
  let outerRadius = size / 2;
  const colourScaleLine = d3.scaleOrdinal().domain(categories).range([
    "#DC050C",
    "#E8601C",
    "#F4A736",
    "#F7F056",
    "#CAE0AB",
    "#4EB265",
    "#7BAFDE",
    "#437DBF",
    "#994F88",
    "#BA8DB4",
    "#D9CCE3",
    "#777777"
  ]);
  let areaRadialPlot = d3.areaRadial().curve(curveNatural).angle((d) => xRadial(+d.Year)).innerRadius((d) => yRadial(0)).outerRadius((d) => yRadial(+d.Food));
  let xRadial = d3.scaleLinear().domain([1895, 2025]).range([0, 2 * Math.PI]);
  let yRadial = d3.scaleLinear().domain([0, 0.5]).range([innerRadius, outerRadius]);
  let areaPlot = d3.area().curve(curveNatural).x((d) => x(+d.Year)).y0((d) => y(0)).y1((d) => y(+d.Food));
  let x = d3.scaleLinear().domain([1895, 2025]).range([-innerWidth / 2 + 65, innerWidth / 2 - 50]);
  let ySmallMultiples = d3.scaleLinear().domain([0, 5]).range([innerHeight / 2 - 100, -innerHeight / 2]);
  let lineRadialPlot = d3.lineRadial().curve(curveNatural).angle((d) => xRadial(+d.Year)).radius((d) => yRadialLine(+d.Food));
  let yRadialLine = d3.scaleLinear().domain([0, 4]).range([innerRadius, outerRadius]);
  function radius(value) {
    return Math.sqrt(value * Math.pow(size / 8, 2) / 0.4);
  }
  function dotsOutOfRange(mid, zscores, cat) {
    if (mid < 2025) {
      return d3.pointRadial(xRadial(mid), yRadialLine(zscores.reduce((total, next) => total + Number(next[cat]), 0) / zscores.length));
    } else {
      return [0, 0];
    }
  }
  function dotSizeOutOfRange(incomeValues, cat) {
    if (incomeValues.length > 0) {
      return radius(incomeValues.reduce((total, next) => total + Number(next[cat]), 0) / incomeValues.length);
    } else {
      return 0;
    }
  }
  const tweenOptions = {
    interpolate,
    duration: 2e3,
    easing: cubicOut
  };
  let tweenedPath = tweened(categories.map((cat, index) => areaPlot.y0((d) => ySmallMultiples(index * 0.4)).y1((d) => ySmallMultiples(+d[cat] + index * 0.4))(RawPercentage)), tweenOptions);
  $$unsubscribe_tweenedPath = subscribe(tweenedPath, (value) => $tweenedPath = value);
  let tweenedColor = tweened(categories.map((cat, index) => colourScaleLine(cat)), tweenOptions);
  $$unsubscribe_tweenedColor = subscribe(tweenedColor, (value) => $tweenedColor = value);
  let tweenedStroke = tweened(categories.map((cat, index) => "transparent"), tweenOptions);
  $$unsubscribe_tweenedStroke = subscribe(tweenedStroke, (value) => $tweenedStroke = value);
  let tweenedOpacity = tweened(categories.map((cat, index) => 1), tweenOptions);
  $$unsubscribe_tweenedOpacity = subscribe(tweenedOpacity, (value) => $tweenedOpacity = value);
  function makePath(start) {
    if (start >= 2021) {
      start = 2025;
    }
    return "M" + d3.pointRadial(xRadial(start), innerRadius) + "L" + d3.pointRadial(xRadial(start), outerRadius - 30);
  }
  function makeHREFPath(start, end, shift) {
    if (end >= 2021) {
      end = 2025;
    }
    if (start >= 2021) {
      start = 2025;
    }
    if (start <= 1900) {
      start = 1900;
    }
    return "M" + d3.pointRadial(xRadial(start), outerRadius - shift) + "A" + (outerRadius - shift) + "," + (outerRadius - shift) + " 0,0,1 " + d3.pointRadial(xRadial(end), outerRadius - shift);
  }
  function makeStraightHREFPath(start, end) {
    if (end >= 2021) {
      end = 2025;
    }
    if (start >= 2021) {
      start = 2025;
    }
    return "M" + x(start) + ", " + (innerHeight / 2 - 80) + " h " + (x(end) - x(start));
  }
  function addSmallMultipleAreas() {
    tweenedPath.set(categories.map((cat, index) => areaPlot.y0((d) => ySmallMultiples(index * 0.4)).y1((d) => ySmallMultiples(+d[cat] + index * 0.4))(RawPercentage)));
    yearVals = yearData.map((d, index) => ({
      value: d.name,
      path: makePath(+d.startYear),
      pathhref: makeStraightHREFPath(+d.startYear, +d.endYear)
    }));
    xGenVals = [];
    clickVals = [];
    medianCircle = [];
    tweenedOpacity.set(categories.map((cat, index) => 1));
    console.log(pointData);
  }
  function addRadial() {
    tweenedPath.set(categories.map((cat, index) => areaRadialPlot.outerRadius((d) => yRadial(+d[cat]))(RawPercentage)));
    tweenedStroke.set(categories.map((cat, index) => "transparent"));
    tweenedColor.set(categories.map((cat, index) => colourScaleLine(cat)));
    tweenedOpacity.set(categories.map((cat, index) => 0.8));
    yearVals = yearData.map((d, index) => ({
      value: d.name,
      path: makePath(+d.startYear),
      pathhref: makeHREFPath(+d.startYear, +d.endYear, 15)
    }));
    xGenVals = [];
    clickVals = [];
    medianCircle = [
      {
        radius: innerRadius - 1,
        width: 1,
        stroke: "grey"
      }
    ];
  }
  function addGenerations() {
    xGenVals = genData.map((d, index) => ({
      value: d.name,
      path: makePath(+d.startYear + currentAge),
      pathhref: makeHREFPath(+d.startYear + currentAge, +d.endYear + currentAge, 40)
    }));
    clickVals = [currentAge];
  }
  function addZScores() {
    tweenedPath.set(categories.map((cat, index) => lineRadialPlot.radius((d) => yRadialLine(+d[cat]))(ZScores)));
    tweenedColor.set(categories.map((cat, index) => "transparent"));
    tweenedStroke.set(categories.map((cat, index) => colourScaleLine(cat)));
    tweenedOpacity.set(categories.map((cat, index) => 1));
    medianCircle = [
      {
        radius: innerRadius + 1,
        width: 3,
        stroke: "white"
      }
    ];
    pointData = [];
  }
  function addDots() {
    pointData = ZScores.map((d, i) => {
      return [
        categories.map((cat) => {
          return {
            year: d.Year,
            category: cat,
            zscore: +d[cat],
            percent: 5,
            point: d3.pointRadial(xRadial(+d.Year), yRadialLine(+d[cat])),
            color: colourScaleLine(cat),
            lucidcolor: "transparent"
          };
        })
      ];
    });
    console.log(pointData);
  }
  function sizeDots() {
    tweenedStroke.set(categories.map((cat, index) => "transparent"));
    pointData = ZScores.map((d, i) => {
      return [
        categories.map((cat) => {
          return {
            year: d.Year,
            category: cat,
            zscore: +d[cat],
            percent: radius(IncomePercent[i][cat]),
            point: d3.pointRadial(xRadial(+d.Year), yRadialLine(+d[cat])),
            color: colourScaleLine(cat),
            lucidcolor: "black"
          };
        })
      ];
    });
    console.log(pointData);
  }
  function centerDotsonGeneration() {
    let genDots = genData.map((d, index) => ({
      generation: d.name,
      startYear: +d.startYear + currentAge,
      endYear: +d.endYear + currentAge,
      midPoint: midYear(+d.startYear + currentAge, +d.endYear + currentAge),
      ZScorevalues: ZScores.filter((f) => f.Year >= +d.startYear + currentAge && f.Year < +d.endYear + currentAge),
      Incomevalues: IncomePercent.filter((f) => f.Year >= +d.startYear + currentAge && f.Year < +d.endYear + currentAge)
    }));
    pointData = genDots.map((d, i) => {
      return [
        categories.map((cat) => {
          return {
            generation: d.generation,
            category: cat,
            zscore: d.ZScorevalues.reduce((total, next) => total + Number(next[cat]), 0) / d.ZScorevalues.length,
            percent: dotSizeOutOfRange(d.Incomevalues, cat),
            point: dotsOutOfRange(+d.midPoint, d.ZScorevalues, cat),
            color: colourScaleLine(cat),
            lucidcolor: "black"
          };
        })
      ];
    });
    console.log(genDots, pointData);
  }
  $$result.css.add(css$2);
  pathData = categories.map((d, index) => ({
    category: d,
    path: $tweenedPath[index],
    fill: $tweenedColor[index],
    stroke: $tweenedStroke[index],
    opacity: $tweenedOpacity[index],
    color: colourScaleLine(d),
    y: ySmallMultiples(index * 0.4)
  }));
  yearVals = yearData.map((d, index) => ({
    value: d.name,
    path: makePath(+d.startYear),
    pathhref: makeStraightHREFPath(+d.startYear, +d.endYear)
  }));
  xGenVals = [];
  medianCircle = [];
  pointData = [];
  $$unsubscribe_tweenedOpacity();
  $$unsubscribe_tweenedStroke();
  $$unsubscribe_tweenedColor();
  $$unsubscribe_tweenedPath();
  return `

<svg${add_attribute("innerwidth", innerWidth, 0)}${add_attribute("innerheight", innerHeight, 0)}${add_attribute("viewBox", [-innerWidth / 2 - 50, -innerHeight / 2 + 30, innerWidth, innerHeight], 0)} class="${"svelte-q13yx"}"${add_attribute("this", svg, 0)}><g class="${"Areas"}">${each(pathData, (path, i) => {
    return `<circle${add_attribute("cx", -innerWidth / 2 - 35, 0)}${add_attribute("cy", path.y - 8, 0)}${add_attribute("r", 15, 0)}${add_attribute("fill", path.color, 0)}></circle>
      ${validate_component(LucideIcon, "LucideIcon").$$render(
      $$result,
      {
        name: iconsScaleLine(path.category),
        size: "20px",
        color: "black",
        strokeWidth: "1px",
        x: -innerWidth / 2 - 45,
        y: path.y - 18
      },
      {},
      {}
    )}
      <text class="${"label svelte-q13yx"}"${add_attribute("x", -innerWidth / 2 - 15, 0)}${add_attribute("y", path.y - 4, 0)}>${escape(path.category)}</text>
      
      <path${add_attribute("d", path.path, 0)}${add_attribute("stroke", path.stroke, 0)}${add_attribute("stroke-width", 3, 0)}${add_attribute("fill", path.fill, 0)}${add_attribute("fill-opacity", path.opacity, 0)}></path>`;
  })}</g><g class="${"Dots"}">${each(pointData, (year, j) => {
    return `${each(year[0], (dot, k) => {
      return `<circle${add_attribute("cx", dot.point[0], 0)}${add_attribute("cy", dot.point[1], 0)}${add_attribute("r", dot.percent, 0)}${add_attribute("fill", dot.color, 0)}></circle>
        ${validate_component(LucideIcon, "LucideIcon").$$render(
        $$result,
        {
          name: iconsScaleLine(dot.category),
          size: dot.percent + "px",
          color: dot.lucidcolor,
          strokeWidth: "1px",
          x: dot.point[0] - dot.percent / 2,
          y: dot.point[1] - dot.percent / 2
        },
        {},
        {}
      )}`;
    })}`;
  })}</g><g class="${"background circle"}">${each(medianCircle, (circle, i) => {
    return `<circle cx="${"0"}" cy="${"0"}"${add_attribute("r", circle.radius, 0)}${add_attribute("stroke", circle.stroke, 0)}${add_attribute("stroke-width", circle.width, 0)}></circle>`;
  })}</g><g class="${"axis x-axis year"}">${each(yearVals, (tick, i) => {
    return `<path${add_attribute("d", tick.pathhref, 0)}${add_attribute("id", tick.value, 0)}${add_attribute("fill", "none", 0)}></path>
      <text><textPath class="${"ticklabelyear svelte-q13yx"}"${add_attribute("startOffset", 10, 0)} text-anchor="${"middle"}"${add_attribute("href", "#" + tick.value, 0)}>${escape(tick.value)}</textPath></text>`;
  })}</g><g class="${"axis x-axis generations"}">${each(xGenVals, (tick, i) => {
    return `<path${add_attribute("d", tick.path, 0)}${add_attribute("stroke", "#ffffff", 0)} stroke-width="${"3"}"${add_attribute("stroke-opacity", 0.8, 0)}></path>
      <path${add_attribute("d", tick.pathhref, 0)}${add_attribute("id", tick.value, 0)}${add_attribute("fill", "none", 0)}></path>
      <text><textPath class="${"ticklabel svelte-q13yx"}" text-anchor="${"middle"}"${add_attribute("startOffset", "50%", 0)}${add_attribute("href", "#" + tick.value, 0)}>${escape(tick.value)}</textPath></text>`;
  })}</g><g class="${"ageSelector"}">${each(clickVals, (click) => {
    return `<text class="${"clickButton svelte-q13yx"}"${add_attribute("x", -40, 0)}${add_attribute("y", 5, 0)} text-anchor="${"middle"}">${escape("◀")}</text>
    <text class="${"ageLabeltext svelte-q13yx"}"${add_attribute("x", 0, 0)}${add_attribute("y", -30, 0)} text-anchor="${"middle"}">${escape("Your Age")}</text>
    <text class="${"ageLabel svelte-q13yx"}"${add_attribute("x", 0, 0)}${add_attribute("y", 25, 0)} text-anchor="${"middle"}">${escape(currentAge)}</text>
    <text class="${"clickButton svelte-q13yx"}"${add_attribute("x", 45, 0)}${add_attribute("y", 5, 0)} text-anchor="${"middle"}">${escape("▶")}</text>`;
  })}</g></svg>`;
});
const BuildingChart_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "figure.svelte-bqoryn{height:700px}@media(max-width: 600px){figure.svelte-bqoryn{margin-left:0px;width:350px;height:600px}}",
  map: null
};
const BuildingChart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<figure class="${"svelte-bqoryn"}">${validate_component(LayerCake, "LayerCake").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Svg, "Svg").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(RadialChart, "RadialChart").$$render($$result, {}, {}, {})}`;
        }
      })}`;
    }
  })}
	</figure>`;
});
const story_svelte_svelte_type_style_lang = "";
const css = {
  code: 'h1.svelte-1nmklh6.svelte-1nmklh6{text-align:left;margin-top:-20px;margin-left:40px}.gallery.svelte-1nmklh6.svelte-1nmklh6{margin-top:-20px;padding:1rem;display:grid;grid-template-columns:repeat(6, 100vw);grid-template-rows:1fr;grid-row-gap:1rem;overflow:scroll;scroll-snap-type:both mandatory;color:white;overflow-x:hidden}li.svelte-1nmklh6.svelte-1nmklh6{scroll-snap-align:center;display:inline-block;border-radius:3px;font-size:20px;padding:0px 100px;padding-left:40px;padding-right:calc(50% - 200px);text-align:left}.stickyChart.svelte-1nmklh6.svelte-1nmklh6{position:sticky;z-index:0;top:1em}.content-holder.svelte-1nmklh6.svelte-1nmklh6{padding:auto;margin:0px 40px;padding-bottom:40px}.content-text.svelte-1nmklh6.svelte-1nmklh6{width:40em}.content-holder.svelte-1nmklh6 p.svelte-1nmklh6{margin-bottom:20px}#Content.svelte-1nmklh6.svelte-1nmklh6,#Intro.svelte-1nmklh6.svelte-1nmklh6{padding:16px;margin:0;padding:0}#Intro.svelte-1nmklh6.svelte-1nmklh6{font-family:"Tiempos Text Web";padding-top:calc(50vh - 150px);padding-bottom:80px;margin-bottom:-30px;height:100vh}.spacer.svelte-1nmklh6.svelte-1nmklh6{height:80vh}@media(max-width: 600px){.content-holder.svelte-1nmklh6.svelte-1nmklh6{width:calc(100% - 20px);padding:20px 10px;margin:auto;padding-bottom:80px}}',
  map: null
};
const Story = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var array = copy.List.split("?");
  let scrollbox;
  setInterval(
    () => {
    },
    5e3
  );
  $$result.css.add(css);
  return `<div id="${"Intro"}" class="${"ontop svelte-1nmklh6"}"><h1 class="${"svelte-1nmklh6"}">When I Was Your Age...</h1>
	<ul class="${"gallery svelte-1nmklh6"}"${add_attribute("this", scrollbox, 0)}>${each(array, (whenIwas) => {
    return `<li class="${"svelte-1nmklh6"}">${escape(whenIwas)}</li>`;
  })}</ul></div>
<div id="${"Content"}" class="${"svelte-1nmklh6"}"><div class="${"ontop"}"><div class="${"content-holder content-text svelte-1nmklh6"}"><p class="${"svelte-1nmklh6"}">${escape(copy.Intro1)}</p>
				<p class="${"svelte-1nmklh6"}">${escape(copy.Intro2)}</p>
				<p class="${"svelte-1nmklh6"}">${escape(copy.Intro3)}</p>
				<p class="${"svelte-1nmklh6"}">${escape(copy.Intro4)}</p>
				<p class="${"svelte-1nmklh6"}">${escape(copy.Intro5)}</p>
				<p class="${"svelte-1nmklh6"}">${escape(copy.Intro6)}</p></div></div>
		<div class="${"content-holder svelte-1nmklh6"}"><div class="${"stickyChart svelte-1nmklh6"}">${validate_component(BuildingChart, "BuildingChart").$$render($$result, {}, {}, {})}</div>
			${validate_component(Story_Scrolly, "StoryScrolly").$$render($$result, {}, {}, {})}
			<div class="${"spacer svelte-1nmklh6"}"></div></div>
		<div class="${"ontop"}"><div class="${"content-holder content-text svelte-1nmklh6"}"><p class="${"svelte-1nmklh6"}">${escape(copy.Outro1)}</p>
				<p class="${"svelte-1nmklh6"}">${escape(copy.Outro2)}</p></div></div>
</div>`;
});
const Index = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Story, "Story").$$render($$result, {}, {}, {})}`;
});
function version() {
  console.log("--- --- --- --- --- ---");
  console.log(`svelte-starter: ${"5.0.9"}`);
  console.log(`build: ${"2023-04-27-08:12"}`);
  console.log("--- --- --- --- --- ---");
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  version();
  const preloadFont = [];
  const { title, description, url, keywords } = copy;
  setContext("copy", copy);
  setContext("IncomePercent", data.IncomePercent);
  setContext("RawPercentage", data.RawPercentage);
  setContext("ZScores", data.ZScores);
  setContext("genData", data.genData);
  setContext("yearData", data.yearData);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Meta, "Meta").$$render(
    $$result,
    {
      title,
      description,
      url,
      preloadFont,
      keywords
    },
    {},
    {}
  )}
${validate_component(Index, "Index").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
