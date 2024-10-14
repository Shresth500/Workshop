let x = 1; // global
console.log('x in global scope =', x);

function f() {
    let y = 2;

    // const john = {
    //     name: 'John'
    // }

    // just like we create objects within function, we can create function within function
    // g is available inside f function only
    function g() {
        let z = 3;
        console.log('y in g function scope =', y);
        console.log('z in g function scope =', z);
    }

    g();

    console.log('x in f function scope =', x);
    console.log('y in f function scope =', y);
    // console.log('z in g function scope =', z); // error
}

f();
// console.log('y in global scope =', y); // error
g(); // error