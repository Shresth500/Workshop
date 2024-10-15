// t = 3
setTimeout(
    () => {
        console.log(1);

        setTimeout(
            () => {
                console.log(2)
            },
            0
        );
    },
    3000
);

setTimeout(
    () => {
        console.log(3);
    },
    3000
);

// OUTPUT
// t =