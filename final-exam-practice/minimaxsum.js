/*
Given five positive integers, find the minimum and maximum values 
that can be calculated by summing exactly four of the five integers. 
Then print the respective minimum and maximum values 
as a single line of two space-separated long integers. 
*/


/*
Example:
arr = [1, 3, 5, 7, 9]
minimum sum is 1+3+5+7 = 16
maximum sum is 3+5+7+9 = 24

OUTPUT
16  24
*/

function miniMaxSum(array) {
  let sortedArr = array.sort((a, b) => a - b);  //sorts the array in ascending order
  let minimum = 0;
  let maximum = 0;

  for(let i = 0; i < sortedArr.length-1; i++) {
    minimum += sortedArr[i];
  }

  for (let j = 1; j < sortedArr.length; j++) {
    maximum += sortedArr[j];
  }

  console.log(minimum + '  ' + maximum);
}

miniMaxSum([1, 2, 3, 4, 5]);  //expected output: 10  14
miniMaxSum([1, 3, 5, 7, 9]);  //expected output: 16  24
miniMaxSum([1, 5, 9, 3, 7]);  //expected output: 16  24

let myarr = [3, 4, 5, 9, 1];
console.log(myarr.sort());