'use strict';

//Create a list with the following items:
//"eggs", "milk", "fish", "apples", "bread" and "chicken"

let shopList: string[] = ["eggs", "milk", "fish", "apples", "bread", "chicken"];
let stuff1: string = 'milk';
let stuff2: string = 'banana';


//Create an application which prints out the answers to the following questions:
//    Do we have milk on the list?
 //   Do we have bananas on the list?


 function answer(array: string[], string1: string, string2: string): string {
    let str1: string = '';
    let str2: string = '';

        if (array.includes(string1) === true){
            str1 += `We have ${string1} on the list.`;

        } else {
            str1 += `We don\t have ${string1} on the list.`;
        }

        if (array.includes(string2) === true) {
            str2 += `We have ${string2} on the list.`;

        } else {
            str2 += `We do not have ${string2} on the list.`;
        }

     return str1 + '\n' + str2;
 }

console.log(answer(shopList, stuff1, stuff2));