function sumAsync(x, y) {
    return new Promise(
        (resolve, reject) => { // f
            console.log('f called');

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
p.then(
    (result) => { // g
        console.log('result = ', result);
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