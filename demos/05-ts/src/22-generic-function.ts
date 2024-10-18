// type MapperFunction<InputItem, OutputItem> = (item: InputItem) => OutputItem;

// function map<InputItem, OutputItem>(
//     arr: InputItem[],
//     mapperFunction: MapperFunction<InputItem, OutputItem>
// ) {
//     const result: OutputItem[] = [];

//     for (let i = 0; i < arr.length; ++i) {
//         result.push(mapperFunction(arr[i]));
//     }

//     return result;
// }

// const mappedDays = map([1, 2, 3, 4, 0, 4, 6, 5], (dayNumber: number) => {
//     const days = [
//         "Sunday",
//         "Monday",
//         "Tuesday",
//         "Wednesday",
//         "Thursday",
//         "Friday",
//         "Saturday",
//     ];

//     return days[dayNumber];
// });

// const mappedResult = map([1, 2, 3, 4, 0, 4, 6, 5], (item: number) => {
//     return item * item;
// });

// --------
type MapperFunction<T, S> = (x: T) => S;

function map<T, S>(arr: T[], mapperFunction: MapperFunction<T, S>) {
    const result = [];

    for (let i = 0; i < arr.length; ++i) {
        result.push(mapperFunction(arr[i]));
    }

    return result;
}

const mappedResult = map([1, 2, 3, 4, 0, 4, 6, 5], (item) => {
    return item * item;
});
