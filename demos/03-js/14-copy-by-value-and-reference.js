// primitives are copied by value
let x = 1;
let y = x; // value of x is copied to y (copy by value)
++y;

console.log(x);

// non-primitives like arrays, objects are copied by reference
let arr1 = [1, 2, 3];
let arr2 = arr1; // arrays are copied by reference -> newarray is not created, arr1, arr2 refer to only 1 array in memory
arr2.push(4);

console.log(arr1);

function change(x, arr) {
    ++x;
    arr.push('new value');
}

let a = 100;
let someArray = [1, 2, 3, 4, 5, 6];

// a (being a primitive) is copied by value to x. Changes in x will not affect a.
// someArray (being a non-primitve) is copied by reference to arr. Changes in arr will affect someArray.
change(a, someArray); // x = a; arr = someArray;

console.log(a, someArray);