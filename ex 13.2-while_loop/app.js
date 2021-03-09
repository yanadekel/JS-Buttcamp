


// Write a function that will receive an array of strings and will return a new
// array containing all the lengths of all the strings in the array it got as a
// parameter.
// So that if you call this function with this array for example:
// ["boo", "doooo", "hoo","ro"]
// it will return this array: [3, 5, 3, 2]






// let strArr = (array) => {
//   let newStr = [];
//   for (let i = 0; i < array.length; i++) {
//     newStr.push(array[i].length);
//   }
//   console.log(strArr(myArray));
// };

let myArr = ["boo", "doooo", "hoo", "ro"];


let strArr = (arr) => {
  let i = 0;
  let newNumArr = [];
  while (i < arr.length) {
    newNumArr.push(arr[i].length);
    i++;
  }
  return newNumArr;
}


console.log(strArr(myArr));









