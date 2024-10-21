"use strict";
var Logger;
(function (Logger) {
    // this is not exported - only the parent module (Logger) can use it
    let Utils;
    (function (Utils) {
        // this must be exported in order for it to be used (within Logger)
        function sendToServer(data, endpoint) {
            console.log('sendToServer');
            makeAjaxCall(data, endpoint);
        }
        Utils.sendToServer = sendToServer;
        function makeAjaxCall(data, endpoint) {
            console.log('makeAjaxCall', data, endpoint);
        }
    })(Utils = Logger.Utils || (Logger.Utils = {}));
})(Logger || (Logger = {}));
