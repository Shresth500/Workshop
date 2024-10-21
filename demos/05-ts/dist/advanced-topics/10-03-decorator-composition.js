"use strict";
// /**
//  * Decorators can be composed (i.e. one decorator applied to the result of another decorator). Notice the order in which the decorators fiunctions are called when the method they decorate is called - first g() decorator, then f() decorator
//  */
// (function () {
//     function f() {
//         console.log("f() decorator factory called");
//         return function (
//             target,
//             propertyKey: string,
//             descriptor: PropertyDescriptor
//         ) {
//             console.log("f() called");
//         };
//     }
//     function g() {
//         console.log("g() decorator factory called");
//         return function (
//             target,
//             propertyKey: string,
//             descriptor: PropertyDescriptor
//         ) {
//             console.log("g() decorator called");
//         };
//     }
//     class C {
//         @f()
//         @g()
//         method() {
//             console.log("method() called");
//         }
//     }
//     setTimeout(() => {
//         let c = new C();
//         c.method();
//     }, 3000);
// })();
