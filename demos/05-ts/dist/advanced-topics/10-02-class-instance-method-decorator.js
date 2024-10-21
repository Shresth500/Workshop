"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Source of demo: https://stackoverflow.com/questions/29775830/how-to-implement-a-typescript-decorator
 * Another reference: http://blog.wolksoftware.com/decorators-reflection-javascript-typescript
 *
 * Decrators can be defined using "decorator factories" - these are functions that wrap and return the actual decorator function in order to add some variables to their closure (so that the decorator can be customized)
 */
(function () {
    function log(str) {
        return function (target, propertyKey, descriptor) {
            console.log("str = ", str);
            console.log("target = ", target);
            console.log("propertyKey = ", propertyKey);
            const originalMethod = descriptor.value; // save a reference to the original method
            // NOTE: Do not use arrow syntax here. Use a function expression in
            // order to use the correct value of `this` in this method (see notes below)
            descriptor.value = function (...args) {
                // pre
                console.log("The method args are: " + JSON.stringify(args));
                // run and store result
                const result = originalMethod.apply(this, args);
                // post
                console.log("The return value is: " + result);
                // return the result of the original method (or modify it before returning)
                return result;
            };
            return descriptor;
        };
    }
    class Person {
        constructor(_name, _age) {
            this._name = _name;
            this._age = _age;
        }
        increaseAge(incr) {
            this._age += incr;
            return this._age;
        }
    }
    __decorate([
        log("hello")
    ], Person.prototype, "increaseAge", null);
    let salim = new Person("Salim Shaikh", 41);
    salim.increaseAge(2);
})();
