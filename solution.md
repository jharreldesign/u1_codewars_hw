## Return Negative
## Included two ways to solve:

```js
function posToNeg(num) {
  return -Math.abs(num);
}

console.log(posToNeg(1));


function makeNegative(num) {
  if ( num > 0 ) {
        return -num;
    }
    else {
        return num;
    }
}

console.log(makeNegative(1))
```

## Sum of Positive

```js
function positiveSum(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}
```

## Function 2

```js
function square(number) {
  return number ** 2;
}

console.log(square(3));
```

## Sum Arrays

```js
function sum(numbers) {
  "use strict";
  if (numbers.length === 0) return 0;
  return numbers.reduce((total, currentValue) => total + currentValue);
}
```

## Reversed Strings

```js
function solution(str) {
  return str.split("").reverse().join("");
}
```
