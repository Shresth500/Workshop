/**
 * Source of demo: https://stackoverflow.com/questions/29775830/how-to-implement-a-typescript-decorator
 * Another reference: http://blog.wolksoftware.com/decorators-reflection-javascript-typescript
 *
 * Decrators can be defined using "decorator factories" - these are functions that wrap and return the actual decorator function in order to add some variables to their closure (so that the decorator can be customized)
 */
(function () {
    function log(str: string) {
        return function (
            target: Object,
            propertyKey: string,
            descriptor: TypedPropertyDescriptor<any>
        ): TypedPropertyDescriptor<any> | void {
            console.log("str = ", str);
            console.log("target = ", target);
            console.log("propertyKey = ", propertyKey);

            const originalMethod = descriptor.value; // save a reference to the original method

            // NOTE: Do not use arrow syntax here. Use a function expression in
            // order to use the correct value of `this` in this method (see notes below)
            descriptor.value = function (...args: any[]) {
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
        constructor(private _name: string, private _age: number) {}

        @log("hello")
        increaseAge(incr: number) {
            this._age += incr;
            return this._age;
        }
    }

    let salim = new Person("Salim Shaikh", 41);
    salim.increaseAge(2);
})();
