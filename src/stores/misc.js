import { writable, derived } from "svelte/store";

export const scrollState = writable(undefined);
export const chosenSeason = writable("Love Island USA (Season 4)");