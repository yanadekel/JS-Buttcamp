// Write a function that calculates the circle area by a given radius as an
// argument. Print the area as it is calculated and then print it rounded to two
// decimal places

function circleArea(radius) {
  let area = Math.PI * Math.pow(radius,2);
  return area.toFixed(2);

}

console.log(circleArea(8));