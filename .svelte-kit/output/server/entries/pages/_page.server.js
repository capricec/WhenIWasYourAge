const IncomePercent = [
  {
    Year: "1901",
    Food: "0.2318259439",
    "Alcohol & Tobacco": "0.00927578762",
    Housing: "",
    "Apparel ": "0.06445170406",
    Healthcare: "",
    Insurance: "",
    Entertainment: "",
    "Reading and Education": "",
    Misc: "",
    "Religion and Charity": "",
    "Personal care": "",
    Transportation: ""
  },
  {
    Year: "1919",
    Food: "0.1985983756",
    "Alcohol & Tobacco": "",
    Housing: "",
    "Apparel ": "0.08600957142",
    Healthcare: "",
    Insurance: "",
    Entertainment: "",
    "Reading and Education": "",
    Misc: "",
    "Religion and Charity": "",
    "Personal care": "",
    Transportation: ""
  },
  {
    Year: "1936",
    Food: "0.1535983756",
    "Alcohol & Tobacco": "",
    Housing: "0.007609090517",
    "Apparel ": "0.03300957142",
    Healthcare: "",
    Insurance: "",
    Entertainment: "",
    "Reading and Education": "",
    Misc: "",
    "Religion and Charity": "",
    "Personal care": "",
    Transportation: ""
  },
  {
    Year: "1944",
    Food: "0.1561389575",
    "Alcohol & Tobacco": "",
    Housing: "",
    "Apparel ": "0.06336638612",
    Healthcare: "",
    Insurance: "",
    Entertainment: "",
    "Reading and Education": "",
    Misc: "",
    "Religion and Charity": "0.009571976936",
    "Personal care": "0.008288201649",
    Transportation: ""
  },
  {
    Year: "1950",
    Food: "0.07861561235",
    "Alcohol & Tobacco": "0.02003473844",
    Housing: "",
    "Apparel ": "0.02473674621",
    Healthcare: "0.002795150954",
    Insurance: "",
    Entertainment: "",
    "Reading and Education": "",
    Misc: "",
    "Religion and Charity": "0.01168336571",
    "Personal care": "0.007855963443",
    Transportation: ""
  },
  {
    Year: "1961",
    Food: "0.02566459255",
    "Alcohol & Tobacco": "0.009368590181",
    Housing: "",
    "Apparel ": "0.01596767545",
    Healthcare: "0.005787740743",
    Insurance: "",
    Entertainment: "",
    "Reading and Education": "",
    Misc: "",
    "Religion and Charity": "0.01372010154",
    "Personal care": "0.01258985981",
    Transportation: ""
  },
  {
    Year: "1973",
    Food: "",
    "Alcohol & Tobacco": "0.004632969487",
    Housing: "",
    "Apparel ": "",
    Healthcare: "0.0008887378686",
    Insurance: "",
    Entertainment: "0.03141990689",
    "Reading and Education": "0.00001499263109",
    Misc: "",
    "Religion and Charity": "0.01738269743",
    "Personal care": "0.004216676195",
    Transportation: "0.004131173506"
  },
  {
    Year: "1984",
    Food: "",
    "Alcohol & Tobacco": "0.002256462254",
    Housing: "0.01786165024",
    "Apparel ": "",
    Healthcare: "",
    Insurance: "0.009143438498",
    Entertainment: "0.005004550626",
    "Reading and Education": "0.003700596746",
    Misc: "",
    "Religion and Charity": "",
    "Personal care": "",
    Transportation: "0.0320859208"
  },
  {
    Year: "1995",
    Food: "",
    "Alcohol & Tobacco": "",
    Housing: "0.04126616961",
    "Apparel ": "",
    Healthcare: "",
    Insurance: "0.01468516521",
    Entertainment: "0.006958256218",
    "Reading and Education": "0.003524764936",
    Misc: "",
    "Religion and Charity": "",
    "Personal care": "",
    Transportation: "0.02262669265"
  },
  {
    Year: "2005",
    Food: "",
    "Alcohol & Tobacco": "",
    Housing: "0.04201129699",
    "Apparel ": "",
    Healthcare: "0.002831798609",
    Insurance: "",
    Entertainment: "0.06912887177",
    "Reading and Education": "0.006875057508",
    Misc: "",
    "Religion and Charity": "",
    "Personal care": "",
    Transportation: "0.01601970282"
  },
  {
    Year: "2013",
    Food: "",
    "Alcohol & Tobacco": "",
    Housing: "0.05118638993",
    "Apparel ": "",
    Healthcare: "0.01648589111",
    Insurance: "0.0309981079",
    Entertainment: "0.005566877946",
    "Reading and Education": "0.008171519717",
    Misc: "",
    "Religion and Charity": "",
    "Personal care": "",
    Transportation: "0.0124305127"
  },
  {
    Year: "2021",
    Food: "",
    "Alcohol & Tobacco": "",
    Housing: "0.05362905227",
    "Apparel ": "",
    Healthcare: "0.0268898138",
    Insurance: "0.04045194397",
    Entertainment: "0.01030647017",
    "Reading and Education": "0.003926890562",
    Misc: "",
    "Religion and Charity": "0.0000965707577",
    "Personal care": "",
    Transportation: ""
  }
];
const RawPercentage = [
  {
    Year: "1901",
    Food: "0.4252275683",
    "Alcohol & Tobacco": "0.02990897269",
    Housing: "0.2327698309",
    "Apparel ": "0.1404421326",
    Healthcare: "0.05201560468",
    Insurance: "",
    Entertainment: "0.0156046814",
    "Reading and Education": "0.01040312094",
    Misc: "0.08062418726",
    "Religion and Charity": "0.01300390117",
    "Personal care": "",
    Transportation: ""
  },
  {
    Year: "1919",
    Food: "0.392",
    "Alcohol & Tobacco": "",
    Housing: "0.229",
    "Apparel ": "0.162",
    Healthcare: "0.045",
    Insurance: "",
    Entertainment: "0.032",
    "Reading and Education": "0.004",
    Misc: "0.106",
    "Religion and Charity": "",
    "Personal care": "",
    Transportation: "0.03"
  },
  {
    Year: "1936",
    Food: "0.347",
    "Alcohol & Tobacco": "",
    Housing: "0.292",
    "Apparel ": "0.109",
    Healthcare: "0.04",
    Insurance: "",
    Entertainment: "0.035",
    "Reading and Education": "0.005",
    Misc: "0.087",
    "Religion and Charity": "",
    "Personal care": "",
    Transportation: "0.085"
  },
  {
    Year: "1944",
    Food: "0.3495405819",
    "Alcohol & Tobacco": "0.01837672282",
    Housing: "0.2404287902",
    "Apparel ": "0.1393568147",
    Healthcare: "0.04709035222",
    Insurance: "0.03177641654",
    Entertainment: "0.0241194487",
    "Reading and Education": "0.01607963247",
    Misc: "0.006508422665",
    "Religion and Charity": "0.04555895865",
    "Personal care": "0.02143950995",
    Transportation: "0.05972434916"
  },
  {
    Year: "1950",
    Food: "0.2720172367",
    "Alcohol & Tobacco": "0.04066792351",
    Housing: "0.2418529491",
    "Apparel ": "0.1007271748",
    Healthcare: "0.05736601131",
    Insurance: "0.05278750337",
    Entertainment: "0.022",
    "Reading and Education": "0.014",
    Misc: "0.009695663884",
    "Religion and Charity": "0.04767034743",
    "Personal care": "0.02100727175",
    Transportation: "0.1203878266"
  },
  {
    Year: "1961",
    Food: "0.2190662169",
    "Alcohol & Tobacco": "0.03000177525",
    Housing: "0.2604296112",
    "Apparel ": "0.09195810403",
    Healthcare: "0.0603586011",
    Insurance: "0.05308006391",
    Entertainment: "0.038",
    "Reading and Education": "0.015",
    Misc: "0.01970530801",
    "Religion and Charity": "0.04970708326",
    "Personal care": "0.02574116812",
    Transportation: "0.136694479"
  },
  {
    Year: "1973",
    Food: "0.1677370318",
    "Alcohol & Tobacco": "0.02526615456",
    Housing: "0.276781819",
    "Apparel ": "0.05943549057",
    Healthcare: "0.05545959823",
    Insurance: "0.07718193124",
    Entertainment: "0.07442445752",
    "Reading and Education": "0.01610961773",
    Misc: "0.008959949876",
    "Religion and Charity": "0.05336967914",
    "Personal care": "0.0173679845",
    Transportation: "0.1679041833"
  },
  {
    Year: "1984",
    Food: "0.1497155859",
    "Alcohol & Tobacco": "0.02288964733",
    Housing: "0.3022525597",
    "Apparel ": "0.06002275313",
    Healthcare: "0.04773606371",
    Insurance: "0.08632536974",
    Entertainment: "0.04800910125",
    "Reading and Education": "0.01979522184",
    Misc: "0.02052332196",
    "Religion and Charity": "0.03212741752",
    "Personal care": "0.0131513083",
    Transportation: "0.1958589306"
  },
  {
    Year: "1995",
    Food: "0.1367158443",
    "Alcohol & Tobacco": "0.01695388049",
    Housing: "0.3256570791",
    "Apparel ": "0.05281428217",
    Healthcare: "0.05368212249",
    Insurance: "0.09186709645",
    Entertainment: "0.04996280684",
    "Reading and Education": "0.01961939003",
    Misc: "0.02374163154",
    "Religion and Charity": "0.02866972477",
    "Personal care": "0.01249070171",
    Transportation: "0.1863997025"
  },
  {
    Year: "2005",
    Food: "0.1277984874",
    "Alcohol & Tobacco": "0.01605292077",
    Housing: "0.3264022065",
    "Apparel ": "0.04063866922",
    Healthcare: "0.05740265897",
    Insurance: "0.05145553664",
    Entertainment: "0.1121334224",
    "Reading and Education": "0.0229696826",
    Misc: "0.01741041608",
    "Religion and Charity": "0.03583356677",
    "Personal care": "0.01165722166",
    Transportation: "0.1797927126"
  },
  {
    Year: "2013",
    Food: "0.1291976517",
    "Alcohol & Tobacco": "0.01516634051",
    Housing: "0.3355772994",
    "Apparel ": "0.03138943249",
    Healthcare: "0.07105675147",
    Insurance: "0.1081800391",
    Entertainment: "0.04857142857",
    "Reading and Education": "0.02426614481",
    Misc: "0.0126223092",
    "Religion and Charity": "0.03589041096",
    "Personal care": "0.01189823875",
    Transportation: "0.1762035225"
  },
  {
    Year: "2021",
    Food: "0.1238495099",
    "Alcohol & Tobacco": "0.01337257949",
    Housing: "0.3380199617",
    "Apparel ": "0.02620726751",
    Healthcare: "0.08146067416",
    Insurance: "0.1176338752",
    Entertainment: "0.0533110208",
    "Reading and Education": "0.02002151566",
    Misc: "0.01473224958",
    "Religion and Charity": "0.03608355247",
    "Personal care": "0.01151984222",
    Transportation: "0.1637730098"
  }
];
const ZScores = [
  {
    Year: "1901",
    Food: "2.02",
    "Alcohol & Tobacco": "1.07",
    Housing: "-1.23",
    "Apparel ": "1.40",
    Healthcare: "-0.22",
    Insurance: "-2.66",
    Entertainment: "-1.04",
    "Reading and Education": "-0.88",
    Misc: "1.76",
    "Religion and Charity": "-1.93",
    "Personal care": "-2.47",
    Transportation: "-2.93"
  },
  {
    Year: "1919",
    Food: "1.73",
    "Alcohol & Tobacco": "-2.38",
    Housing: "-1.32",
    "Apparel ": "1.86",
    Healthcare: "-0.84",
    Insurance: "-2.66",
    Entertainment: "-0.42",
    "Reading and Education": "-1.87",
    Misc: "2.47",
    "Religion and Charity": "-3.01",
    "Personal care": "-2.47",
    Transportation: "-2.39"
  },
  {
    Year: "1936",
    Food: "1.34",
    "Alcohol & Tobacco": "-2.38",
    Housing: "0.18",
    "Apparel ": "0.72",
    Healthcare: "-1.27",
    Insurance: "-2.66",
    Entertainment: "-0.30",
    "Reading and Education": "-1.72",
    Misc: "1.94",
    "Religion and Charity": "-3.01",
    "Personal care": "-2.47",
    Transportation: "-1.41"
  },
  {
    Year: "1944",
    Food: "1.36",
    "Alcohol & Tobacco": "-0.26",
    Housing: "-1.05",
    "Apparel ": "1.37",
    Healthcare: "-0.65",
    Insurance: "-1.57",
    Entertainment: "-0.72",
    "Reading and Education": "0.00",
    Misc: "-0.34",
    "Religion and Charity": "0.80",
    "Personal care": "1.56",
    Transportation: "-1.86"
  },
  {
    Year: "1950",
    Food: "0.69",
    "Alcohol & Tobacco": "2.31",
    Housing: "-1.01",
    "Apparel ": "0.54",
    Healthcare: "0.24",
    Insurance: "-0.84",
    Entertainment: "-0.80",
    "Reading and Education": "-0.32",
    Misc: "-0.25",
    "Religion and Charity": "0.98",
    "Personal care": "1.47",
    Transportation: "-0.77"
  },
  {
    Year: "1961",
    Food: "0.22",
    "Alcohol & Tobacco": "1.08",
    Housing: "-0.57",
    "Apparel ": "0.35",
    Healthcare: "0.51",
    Insurance: "-0.83",
    Entertainment: "-0.19",
    "Reading and Education": "-0.17",
    Misc: "0.03",
    "Religion and Charity": "1.15",
    "Personal care": "2.36",
    Transportation: "-0.48"
  },
  {
    Year: "1973",
    Food: "-0.22",
    "Alcohol & Tobacco": "0.54",
    Housing: "-0.18",
    "Apparel ": "-0.36",
    Healthcare: "0.08",
    Insurance: "0.00",
    Entertainment: "1.19",
    "Reading and Education": "0.00",
    Misc: "-0.27",
    "Religion and Charity": "1.46",
    "Personal care": "0.79",
    Transportation: "0.07"
  },
  {
    Year: "1984",
    Food: "-0.38",
    "Alcohol & Tobacco": "0.26",
    Housing: "0.42",
    "Apparel ": "-0.35",
    Healthcare: "-0.60",
    Insurance: "0.32",
    Entertainment: "0.19",
    "Reading and Education": "0.57",
    Misc: "0.06",
    "Religion and Charity": "-0.32",
    "Personal care": "0.00",
    Transportation: "0.57"
  },
  {
    Year: "1995",
    Food: "-0.49",
    "Alcohol & Tobacco": "-0.43",
    Housing: "0.98",
    "Apparel ": "-0.50",
    Healthcare: "-0.08",
    Insurance: "0.51",
    Entertainment: "0.26",
    "Reading and Education": "0.55",
    Misc: "0.15",
    "Religion and Charity": "-0.61",
    "Personal care": "-0.12",
    Transportation: "0.40"
  },
  {
    Year: "2005",
    Food: "-0.57",
    "Alcohol & Tobacco": "-0.53",
    Housing: "1.00",
    "Apparel ": "-0.77",
    Healthcare: "0.25",
    Insurance: "-0.89",
    Entertainment: "2.63",
    "Reading and Education": "1.06",
    Misc: "-0.03",
    "Religion and Charity": "-0.01",
    "Personal care": "-0.28",
    Transportation: "0.29"
  },
  {
    Year: "2013",
    Food: "-0.56",
    "Alcohol & Tobacco": "-0.63",
    Housing: "1.22",
    "Apparel ": "-0.97",
    Healthcare: "1.44",
    Insurance: "1.07",
    Entertainment: "0.21",
    "Reading and Education": "1.26",
    Misc: "-0.17",
    "Religion and Charity": "-0.01",
    "Personal care": "-0.24",
    Transportation: "0.22"
  },
  {
    Year: "2021",
    Food: "-0.61",
    "Alcohol & Tobacco": "-0.84",
    Housing: "1.28",
    "Apparel ": "-1.08",
    Healthcare: "2.35",
    Insurance: "1.39",
    Entertainment: "0.39",
    "Reading and Education": "0.61",
    Misc: "-0.11",
    "Religion and Charity": "0.01",
    "Personal care": "-0.31",
    Transportation: "0.00"
  }
];
async function load() {
  const data = ["a", "b", "c"];
  const genData = [
    {
      name: "Lost Generation",
      startYear: "1883",
      endYear: "1900"
    },
    {
      name: "Greatest Generation",
      startYear: "1901",
      endYear: "1927"
    },
    {
      name: "Silent Generation",
      startYear: "1928",
      endYear: "1945"
    },
    {
      name: "Baby Boomers",
      startYear: "1946",
      endYear: "1964"
    },
    {
      name: "Generation X",
      startYear: "1965",
      endYear: "1980"
    },
    {
      name: "Millenial",
      startYear: "1981",
      endYear: "1996"
    },
    {
      name: "Generation Z",
      startYear: "1997",
      endYear: "2009"
    },
    {
      name: "Generation Alpha",
      startYear: "2010",
      endYear: "2023"
    }
  ];
  const yearData = [
    {
      name: "1900",
      startYear: "1900",
      endYear: "1910"
    },
    {
      name: "1910",
      startYear: "1910",
      endYear: "1920"
    },
    {
      name: "1920",
      startYear: "1920",
      endYear: "1930"
    },
    {
      name: "1930",
      startYear: "1930",
      endYear: "1940"
    },
    {
      name: "1940",
      startYear: "1940",
      endYear: "1950"
    },
    {
      name: "1950",
      startYear: "1950",
      endYear: "1960"
    },
    {
      name: "1960",
      startYear: "1960",
      endYear: "1970"
    },
    {
      name: "1970",
      startYear: "1970",
      endYear: "1980"
    },
    {
      name: "1970",
      startYear: "1970",
      endYear: "1980"
    },
    {
      name: "1980",
      startYear: "1980",
      endYear: "1990"
    },
    {
      name: "1990",
      startYear: "1990",
      endYear: "2000"
    },
    {
      name: "2000",
      startYear: "2000",
      endYear: "2010"
    },
    {
      name: "2010",
      startYear: "2010",
      endYear: "2020"
    },
    {
      name: "2020",
      startYear: "2020",
      endYear: "2030"
    }
  ];
  return { data, IncomePercent, RawPercentage, ZScores, genData, yearData };
}
export {
  load
};
