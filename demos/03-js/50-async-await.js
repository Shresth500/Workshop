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

// async function doSomething() {
//     await sumAsync(12, 13);
// }

// async function ALWAYS returns a Promise object
const doSomething = async () => {
    console.log(2);

    // gives up control here - anything else waiting to execute will execute
    try {
        // let result = await sumAsync(12, 'hello');
        let result = await sumAsync(12, 13); // pause of 3 seconds (at the first pause it returns a Promise object p)
        console.log('result = ', result);

        result = await sumAsync(result, 14); // pause of 3 seconds
        console.log('result =', result);

        result = await sumAsync(result, 15); // pause of 3 seconds
        console.log('result =', result);

        console.log(3);

        return result; // the Promise p will resolve now and g() will execute
    } catch (error) {
        console.log(error.message);
    }
};

console.log(1);
/*const result = */doSomething().then(
    result => { // g
        console.log('result =', result);
    }
);
console.log(4);
