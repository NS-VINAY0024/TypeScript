// If we not specify the datatype of the variables, it will be type Inferenced by the TS automatically. But in functions, it will automatically makes the Datatypes into 'Any' datatypa, which is not a good thing in TS
// So, we will use type annotation for the funtion's parameters

function sum(num1,num2){        //Here parameters are 'any' Datatype
    return num1 + num2;
}
sum("2","3")

function Add2Num(num1: number,num2: number){        
    return num1 + num2;
}
console.log(Add2Num(2,3))

// functions with multi parameters

function User1Info(name: string,email: string,ispresent: boolean){}
User1Info("Vinay","Vinay@gmail.com", true)

// if we dont want to give any one parameter

function User2Info(name: string,email: string,ispresent: boolean = true){}
User2Info("Vinay","Vinay@gmail.com")

 // we are returning a string, which is not a accurate value. To avoid this we should give the type of the Function, which return the expected output

function Add2(num1: number): number{        
    // return "Vinay"
    return num1+2
}
console.log(Add2Num(2,3));
 







export{}