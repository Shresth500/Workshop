namespace Logger {
    // an "ambient declaration" of the Utils namespace (which exists under the Logger namespace)
    declare namespace Logger.Utils {
        function sendToServer(data: object, endpoint: string): any;
    }

    export namespace Errors {
        export function sendError(error: Error): void {
            console.log(error.message);
            Utils.sendToServer(error, "/errors");
        }
    }
}
