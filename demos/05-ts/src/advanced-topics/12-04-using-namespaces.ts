// The namespace methods can be imported and used
import sendError = Logger.Errors.sendError;
sendError( new Error( 'testing sendError() [1]' ) );

// Since global variables are created for namespaces they can be used directly too
Logger.Errors.sendError( new Error( 'testing sendError() [2]' ) );