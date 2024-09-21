"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = "Hello world!";
console.log(greetings);
// 1.   Type Inference ==> The TypeScript compiler will automatically infer the type of the variables based on the values assigned to them Ex: let userID= 1243;
// 2.   Type annotation in TypeScript involves explicitly specifying the data type of variables, function parameters, and return values  EX: let userID: number = 1243;
// Number
var userID1 = 1234;
var UserID2 = 1235;
// Boolean
var isUserLoggedIn = true;
// String
var userName = "John Doe";
// any
var myVariable = 10;
myVariable = "Hello";
console.log(myVariable);
