"use strict";
var Logger;
(function (Logger_1) {
    let Errors;
    (function (Errors) {
        function sendError(error) {
            console.log(error.message);
            Logger_1.Utils.sendToServer(error, "/errors");
        }
        Errors.sendError = sendError;
    })(Errors = Logger_1.Errors || (Logger_1.Errors = {}));
})(Logger || (Logger = {}));
