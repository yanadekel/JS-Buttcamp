function calcAverage(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(calcAverage([85, 90, 92]));

// the sum is not a number because it is not defined but only declared without being assigned a number.

