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
    3000
);

// OUTPUT
// t = 0 -> 2
// t = 3 -> 1
// t = 3 -> 3