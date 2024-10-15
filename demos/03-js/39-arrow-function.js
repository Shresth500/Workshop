// Run in the browser

console.log(this); // window object in browser

function outer() {
    console.log('outer this', this);

    const innerOld = function () {
        console.log('innerOld this', this);
    };

    // arrow functions do not have their own context
    const innerArrow = () => {
        console.log('innerArrow this', this);
    };

    innerOld();
    innerArrow();
}

outer();
outer.call({ name: 'John' });