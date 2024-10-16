function sumAsync(x, y, callback) {
    setTimeout(
        () => {
            callback(x + y);
        },
        3000
    );
}

// christmas tree
sumAsync(12, 13, (result1) => {
    console.log('result1 = ', result1);

    sumAsync(result1, 14, (result2) => {
        console.log('result2 = ', result2);

        sumAsync(result2, 15, (result3) => {
            console.log('result3 =', result3);
        })
    })
})
