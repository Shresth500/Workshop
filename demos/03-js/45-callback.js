function sumAsync(x, y, callback) {

    setTimeout(
        () => {
            // returning the value is useless - because this function is called by the environment (Node JS / browser)
            // return x + y;
            callback(x + y);
        },
        3000
    );

    // return undefined;
}

// for (let i = 0; i < 10e9; ++i) {
//     ;
// }

/*const result = */sumAsync(12, 13, ( result ) => {
    console.log('result=', result);
});
// console.log('result=', result);