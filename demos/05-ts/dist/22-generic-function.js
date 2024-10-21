"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function map(arr, mapperFunction) {
    const result = [];
    for (let i = 0; i < arr.length; ++i) {
        result.push(mapperFunction(arr[i]));
    }
    return result;
}
// TypeScript "infers" the types T and S when the function is called byb comparing the passed values to the generic function signature
const mappedDays = map([1, 2, 3, 4, 0, 4, 6, 5], (dayNumber) => {
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    return days[dayNumber];
});
const mappedResult = map([1, 2, 3, 4, 0, 4, 6, 5], (item) => {
    return item * item;
});
// --------
// type MapperFunction<T, S> = (x: T) => S;
// function map<T, S>(arr: T[], mapperFunction: MapperFunction<T, S>) {
//     const result = [] as S[];
//     for (let i = 0; i < arr.length; ++i) {
//         result.push(mapperFunction(arr[i]));
//     }
//     return result;
// }
// const mappedResult = map([1, 2, 3, 4, 0, 4, 6, 5], (item) => {
//     return item * item;
// });
// EXERCISE: Create a generic version of contains() function that we worked on earlier
function contains(arr, value) {
    return arr.includes(value);
}
console.log(contains([1, "hello", 3, true], 3)); // prints true
console.log(contains([1, "hello", 3, true], 5)); // prints false
console.log(contains([1, "hello", 3, true], "hello")); // prints false
console.log(contains([1, "hello", 3, true], "world")); // prints false
