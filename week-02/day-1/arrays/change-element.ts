

// -  Create an array named `numbers` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the value of the fourth element (8) to 4 with the `.map` method 
// -  Print the fourth element as a test

import { arrayBuffer } from "stream/consumers";

let numbers3: number[] = [1, 2, 3, 8, 5, 6];

numbers3.map(function changeValue(){
    numbers3[3] = 4;
})
console.log(numbers3);