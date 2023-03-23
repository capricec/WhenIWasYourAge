import IncomePercent from "$data/CEX Historical Data - Income_Percent.csv";
import RawPercentage from "$data/CEX Historical Data - Percentage.csv";
import ZScores from "$data/CEX Historical Data - ZScores.csv";


export async function load() {
	const data = ["a", "b", "c"];

	const genData = [
	{
		name: "Lost Generation",
		startYear: "1883",
		endYear:"1900"
	},
	{
		name: "Greatest Generation",
		startYear: "1901",
		endYear:"1927"
	},
	{
		name: "Silent Generation",
		startYear: "1928",
		endYear:"1945"
	},
	{
		name: "Baby Boomers",
		startYear: "1946",
		endYear:"1964"
	},
	{
		name: "Generation X",
		startYear: "1965",
		endYear:"1980"
	},
	{
		name: "Millenial",
		startYear: "1981",
		endYear:"1996"
	},
	{
		name: "Generation Z",
		startYear: "1997",
		endYear:"2009"
	},
	{
		name: "Generation Alpha",
		startYear: "2010",
		endYear:"2023"
	},
	]

	const yearData = [
	{
		name: "1900",
		startYear: "1900",
		endYear:"1910"
	},
	{
		name: "1910",
		startYear: "1910",
		endYear:"1920"
	},
	{
		name: "1920",
		startYear: "1920",
		endYear:"1930"
	},
	{
		name: "1930",
		startYear: "1930",
		endYear:"1940"
	},
	{
		name: "1940",
		startYear: "1940",
		endYear:"1950"
	},
	{
		name: "1950",
		startYear: "1950",
		endYear:"1960"
	},
	{
		name: "1960",
		startYear: "1960",
		endYear:"1970"
	},
	{
		name: "1970",
		startYear: "1970",
		endYear:"1980"
	},
	{
		name: "1970",
		startYear: "1970",
		endYear:"1980"
	},
	{
		name: "1980",
		startYear: "1980",
		endYear:"1990"
	},
	{
		name: "1990",
		startYear: "1990",
		endYear:"2000"
	},
	{
		name: "2000",
		startYear: "2000",
		endYear:"2010"
	},
	{
		name: "2010",
		startYear: "2010",
		endYear:"2020"
	},
	]

	return { data, IncomePercent, RawPercentage, ZScores, genData, yearData };
}
