/*
A left rotation operation on an array shifts each of the array's elements unit 
to the left. For example, if left rotations are performed on array 
[1, 2, 3, 4, 5], 
then the array would become [3, 4, 5, 1, 2]
. Note that the lowest index item moves 
to the highest index in a rotation. This is called a circular array. 
*/

/* Sample input
 5 4
 1 2 3 4 5

 Sample output
 5 1 2 3 4
*/

/* Example for 4 left rotations 
[1, 2, 3, 4, 5] --> [2, 3, 4, 5, 1] --> [3, 4, 5, 1, 2] --> [4, 5, 1, 2, 3]

*/

function leftRotation(array, number) {
  for (let i = 0; i < number; i++) {
    let elementZero = array.shift();
    array.push(elementZero);
  }
  return array;
}

let myArray = [1, 2, 3, 4, 5];
console.log(leftRotation(myArray, 1));
//expected output for 1 rotation [ 2, 3, 4, 5, 1 ]

let myArray2 = [1, 2, 3, 4, 5];
console.log(leftRotation(myArray2, 2));
//expected output for 2 rotation [ 3, 4, 5, 1, 2 ]


