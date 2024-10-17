"use strict";
// syntax 1
function sum(x, y) {
    return x + y;
}
console.log(sum(12, 13));
// const add1: (a: number, b: number) => number = function (x, y) {
const add1 = function (x, y) {
    return x + y;
};
const add2 = (x, y) => x + y;
