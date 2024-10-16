// execute this in the browser
console.log(window);

// old style global variables are simply properties of the window object - so window is called the global object
var x = 100; // old style global variable

window.x;

console.log(window.location);
console.log(window.history); // go back, forward, maintains browser history
console.log(window.navigator); // details of the browser
console.log(window.document);