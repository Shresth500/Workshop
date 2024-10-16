function sumAsync(x, y) {
    // the Promise constructor which is called, in turns calls f(). It passes it 2 argument
    // initially The Promise object is in "PENDING" state
    // When the result is passed to resolve(), the Promise object is in "RESOLVED" state, and the operation is considered completed, and the Promise object maintains the result
    return new Promise(
        (resolve, reject) => { // f
            console.log(resolve, reject);

            setTimeout(
                () => {
                    // do the calculation and generate the result...
                    resolve(x + y);
                },
                3000
            )
        }
    );
}

const p = sumAsync(12, 13);

// then() and catch() are 2 methods of Promise objects
// When we call then, this is what we are doing - Hey promise! Please call f() and pass it the resule when you get it.
p.then(
    (result) => { // f
        console.log('result = ', result);
    }
)