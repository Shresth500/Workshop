setTimeout(
    () => {
        console.log(1);
    },
    3000
);

console.log(2);

setTimeout(
    () => {
        console.log(3);
    },
    2000
);

// OUTPUT
// t = 0 -> 2
// t = 2 -> 3
// t = 3 -> 1