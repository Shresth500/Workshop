namespace Logger {
    // this is not exported - only the parent module (Logger) can use it
    export namespace Utils {
        // this must be exported in order for it to be used (within Logger)
        export function sendToServer( data : object, endpoint : string ) {
            console.log( 'sendToServer' );
            makeAjaxCall( data, endpoint );
        }

        function makeAjaxCall( data : object, endpoint : string ) {
            console.log( 'makeAjaxCall', data, endpoint );
        }
    }
}