function sumAsync(x, y) {
    return new Promise(
        (resolve, reject) => { // f
            // console.log('f called');

            setTimeout(
                () => {
                    // Hey Promise object! I completed my task, and here is the result
                    resolve(x + y);
                },
                3000
            );
        }
    );
}

const p = sumAsync(12, 13)

// Hey Promise object! When you get the result, give me the result
// g will be called when the promise gets the result
p
    .then(
        (result1) => { // g
            console.log('result1 = ', result1);

            // sumAsync(result1, 14).then(
            //     (result2) => {
            //         console.log('result2 =', result2);
            //     }
            // )

            return sumAsync(result1, 14); // q
        }
    ) // r (when q completes with the result, r will also complete with the same result)
    .then(
        result2 => {
            console.log('result2 =', result2);

            return sumAsync(result2, 15); // s
        }
    ) // t
    .then(
        result3 => {
            console.log('result3 =', result3);
        }
    )

// class Promise {
//     constructor( setupFunction ) {
//         function resolve( result ) {

//         }

//         function reject() {

//         }

//         setupFunction( resolve, reject )
//     }
// }