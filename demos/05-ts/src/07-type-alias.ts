import { chequeAmount } from "./06-union";

type NS = number | string;

// let distance : number | string = "Thousand Two Hundred";
let distance: NS = "Thousand Two Hundred";
distance = 1200;

// NOTE: Type alias works with primitives and non-primitives

export type { NS };
export { distance };
