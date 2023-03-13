import SinglesData from "$data/SinglesData.csv";
import CouplesData from "$data/CouplesData.json";

export async function load() {
	const data = ["a", "b", "c"];

	return { data, SinglesData, CouplesData };
}
