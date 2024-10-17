import type { NS } from "./07-type-alias";

// an array of ( number | string ) items (NS items)
let chequeAmounts: NS[] = [];

chequeAmounts.push("Twenty thousand");
chequeAmounts.push(30000);
// chequeAmounts.push(true); // error

// distance is either a number or an array of string
let distances: number | string[] = [];
// distances.push( 10 ); // error

let distances2: (number | string)[] = [];
distances2.push(10);
distances2.push("Twenty");
// distances2.push(true); // error

// type assertion (same as type casting in other languages)
let distances3: number[] | string[] = [] as number[];
distances3.push(10);
// distances3.push("Twenty"); // error

distances3 = ["Twenty"];
// distances3.push( 40 ); // error
