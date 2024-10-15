// setTimeout will hand over the function f to the environment (browser / Node JS). After 3 seconds the environment will execute the function
setTimeout(
    () => { // f
        console.log(1);
    },
    3000 // 3000 ms = 3 seconds
);

console.log(2);

// 2 prints immediately
// 1 prints after 3 seconds