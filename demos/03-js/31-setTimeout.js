// 1. timer will be set. When the timer expires (in this case it will happen immediately, the function f will be put in a queue - "Event Queue")
// The environment goes through till the last line of code in the script, and only then (it has nothing to do and the function call stack is empty), it picks up the function f and executes it
setTimeout(
    () => { // f
        console.log(1);
    },
    0
);

// 2. f is waiting in the Queue
console.log(2);

// 3. the function f is picked up and executed

// OUTPUT
// t = 0 -> 2
// t = 0 -> 1