'use strict';

// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

function printParams(input1: string, input2: string, input3: number) {
    console.log(`${input1} ${input2} will be ${input3} years old next year.`)
}

printParams("Henrick", "Schniztle", 35);