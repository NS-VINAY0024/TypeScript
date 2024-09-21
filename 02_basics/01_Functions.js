"use strict";
// If we not specify the datatype of the variables, it will be type Inferenced by the TS automatically. But in functions, it will automatically makes the Datatypes into 'Any' datatypa, which is not a good thing in TS
// So, we will use type annotation for the funtion's parameters
Object.defineProperty(exports, "__esModule", { value: true });
function sum(num1, num2) {
    return num1 + num2;
}
sum("2", "3");
function Add2Num(num1, num2) {
    return num1 + num2;
}
console.log(Add2Num(2, 3));
// functions with multi parameters
function User1Info(name, email, ispresent) { }
User1Info("Vinay", "Vinay@gmail.com", true);
// if we dont want to give any one parameter
function User2Info(name, email, ispresent) {
    if (ispresent === void 0) { ispresent = true; }
}
User2Info("Vinay", "Vinay@gmail.com");
// This is the another main problem of the Functions in TS
function Add2(num1) {
    return "Vinay"; // we are returning a string, which is not a accurate value
}
console.log(Add2Num(2, 3));
