import IncomePercent from "$data/CEX Historical Data - Income_Percent.csv";
import RawPercentage from "$data/CEX Historical Data - Percentage.csv";
import ZScores from "$data/CEX Historical Data - ZScores.csv";


export async function load() {
	const data = ["a", "b", "c"];

	return { data, IncomePercent, RawPercentage, ZScores };
}
