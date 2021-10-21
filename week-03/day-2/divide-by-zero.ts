'use strict';

// Create a function that divides number 10
// by a number that's passed as a paramater and prints the result.
// It should print "fail" if the parameter is 0

try {

    function divide10(number: number){
        let ten: number = 10;
        let divideBy: number = number;
    
        console.log(ten/divideBy);
    }

    divide10(0);
    throw ('fail');
} catch (error) {
    console.log(error);
}
/*
function divide10(number: number){
    let ten: number = 10;
    let divideBy: number = number;

    return ten/divideBy;
}
*/
//let myResult = divide10(5);
//console.log(myResult);

//let myResult2 = divide10(0);
//console.log(myResult2);


//console.log(divide10(0));