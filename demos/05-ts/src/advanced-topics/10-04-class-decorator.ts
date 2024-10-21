// /**
//  * The class decorator is applied to the constructor of the class and can be used to observe, modify, or replace a class definition.
//  * The class decorator will be called with the constructor of the decorated class as its only argument.
//  *
//  * If the class decorator returns a value, it will replace the class declaration with the provided constructor function (else it does not replace).
//  */
// import axios from "axios";

// (function () {
//     // Note that this seals a class, not an object of the class
//     function freeze(constructor: Function) {
//         // freezes static methods and properties - no changes can be made on them
//         Object.freeze(constructor);

//         // freezes instance methods and properties - no changes can be made on them
//         Object.freeze(constructor.prototype);
//     }

//     @freeze
//     class SessionsService {
//         sessions: object[];
//         private baseUrl: string;
//         private error: Error;

//         constructor(baseUrl: string) {
//             this.baseUrl = baseUrl;
//         }

//         async getSessions(workshopId: number) {
//             if (workshopId !== null && workshopId !== undefined) {
//                 try {
//                     const response = await axios.get(
//                         `${this.baseUrl}/workshops/${workshopId}/sessions`
//                     );
//                     this.sessions = response.data;
//                     console.log(this.sessions);
//                 } catch (error) {
//                     this.error = error;
//                     console.log(error.message);
//                 }
//             }
//         }
//     }

//     const sessionsService = new SessionsService(
//         "https://workshops-server.onrender.com"
//     );
//     sessionsService.getSessions(1);

//     // such assignments will now result in an error
//     SessionsService.prototype.getSessions = async function () {
//         console.log(this.sessions);
//     };
// })();
