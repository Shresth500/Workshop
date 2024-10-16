function sumAsync(x, y, f) {

    setTimeout(
        () => {
            // return x + y;
            f(x + y);
        },
        3000
    );

}

sumAsync(12, 13, (result) => {
    console.log('result =', result);
});

