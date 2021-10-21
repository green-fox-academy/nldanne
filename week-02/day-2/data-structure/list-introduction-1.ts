'use strict';

//Create an empty list which will contain names (strings)
//Print out the number of elements in the list
//Add "William" to the list
//Print out whether the list is empty or not
//Add "John" to the list
//Add "Amanda" to the list
//Print out the number of elements in the list
//Print out the 3rd element
//Iterate through the list and print out each name 

let nameList: string[] = [];
console.log(nameList.length);  //0

nameList[0] = 'William';
console.log('The list is empty? ' + (nameList.length === 0));  //false

nameList[1] = 'John';
nameList[2] = 'Amanda';

console.log(nameList.length);   //3
console.log(nameList[2]);  // Amanda
//console.log(nameList.forEach(element => console.log(element)));

for (let i: number = 0; i < nameList.length; i++) {
    console.log(nameList[i]);
}

for (let j: number = 0; j < nameList.length; j++) {
    console.log(`${j+1}. ${nameList[j]}`)
}

nameList.splice(1,1);
console.log(nameList.reverse());

nameList.splice(0, 2);
console.log(nameList);