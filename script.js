//Problem 1: RETURN NEGATIVE

function posToNeg(num) {
  return -Math.abs(num);
}

console.log(posToNeg(1));

//------------------------------------------------//

function makeNegative(num) {
  if ( num > 0 ) {
        return -num;
    }
    else {
        return num;
    }
}

console.log(makeNegative(1))

//---------------------------------------------//

//Problem 2: SUM OF POSITIVE

arr = [1,2,3,-15,10]

function positiveSum(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}

//---------------------------------------------//

//Problem 3: SQUARING AN ARGUMENT

function square(number) {
  return number ** 2;
}

console.log(square(3));

//---------------------------------------------//

//Problem 4: SUM ARRAYS
//Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// Sum Numbers
function sum(numbers) {
  "use strict";
  if (numbers.length === 0) return 0;
  //in (total, currentValue) <- total is our accumulator and we're taking the currentValue and adding it up across the array which then because our new interator for the array.
  return numbers.reduce((total, currentValue) => total + currentValue);
}

//---------------------------------------------//

//Problem 5: REVERSED STRING

function solution(str) {
  return str.split("").reverse().join("");
}

//---------------------------------------------//
