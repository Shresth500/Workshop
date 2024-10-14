// 3 main syntaxes create function

console.log(sum1(12, 13));

// function declaration syntax - created before the script executes
function sum1(x, y) {
    const result = x + y;
    return result;
}

// console.log(sum2(12, 13)); // error

// function expression syntax - this function is created when this line of code runs
const sum2 = function (x, y) {
    const result = x + y;
    return result;
};

console.log(sum2(12, 13)); // no error

// arrow function syntax (ES2015)
const sum3 = (x, y) => {
    // const result = x + y;
    return x + y;
};

console.log(sum3(12, 13)); // no error

// for single line return functions
const sum4 = (x, y) => x + y;

console.log(sum4(12, 13));

// for single argument functions, you can mit the parenthesis
// const square = (x) => x * x;
const square = x => x * x;