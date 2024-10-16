function sumAsync(x, y) {
    return new Promise(
        (resolve, reject) => {
            setTimeout(
                () => {
                    if (typeof x !== 'number' || typeof y !== 'number') {
                        reject(new Error('at least one argument was not a number'));
                        return;
                    }

                    resolve(x + y);
                },
                3000
            );
        }
    );
}

sumAsync(12, 13)
    .then(
        result => { // called in case of success
            console.log('result =', result);

            return sumAsync(result, 'hello'); // throws an error
        }
    )
    .then(
        result => {
            console.log('result =', result);

            return sumAsync(result, 15);
        }
    )
    .catch(
        error => { // called in case of failure
            // to do different things for different types of errors check the error type using instanceof operator
            // error instanceof TypeError
            // error instanceof RangeError

            console.log(error.message);
        }
    );