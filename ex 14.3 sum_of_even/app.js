



function getSumOfEven(arr) {
  return arr[1] + arr[3] + arr[5] + arr[7] + arr[9];
}


console.log(getSumOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));


// What is wrong with this code?
// 1. First find the line that contains the problem. Write it down.
// the issues are in line six. index two of the array is not even and arr in index 10 is undifined since the index is until nine.


// 2. Which debug method did you use to find the bug?
//

// 3. Explain the bug in your own words.
// 4. Fix the code and submit it all