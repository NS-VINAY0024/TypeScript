let greetings: string = "Hello world!"
console.log(greetings);

// 1.   Type Inference ==> The TypeScript compiler will automatically infer the type of the variables based on the values assigned to them Ex: let userID= 1243;
// 2.   Type annotation in TypeScript involves explicitly specifying the data type of variables, function parameters, and return values  EX: let userID: number = 1243;

// Number

let userID1: number = 1234;
let UserID2=1235;

// Boolean

let isUserLoggedIn: boolean = true;

// String

let userName: string = "John Doe";

// any
// we should avoid using or indirectly make a variable as a 'any' datatype
let myVariable;  // any datatype
myVariable = "Hello";
console.log(myVariable);


export{}