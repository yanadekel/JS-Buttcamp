// 1. Write a function called doubleValues which accepts an
// array and returns a new array with all the values in the
// array passed to the function doubled.
itArr = [2, 4, 3, 9, 5, 3, 3];

// let doubleValues=(arr)=>{
//   return arr.map((num)=>{
//     return num*2
//   })
// }

// console.log (doubleValues(itArr));

// let doubleValues=(arr)=>{
//   let newArr=[];
//   arr.forEach(element => {
//     newArr.push(element*2);
//   });
//   return newArr;
// }

// console.log(doubleValues(itArr));

// 2. Write a function called onlyEvenValues which accepts an
// array and returns a new array with only the even values in
// the array passed to the function.

// let onlyEvenValues= (array)=> {
//    return array.filter ((j)=>{
//     return j%2===0;
//   })
// }
// console.log(onlyEvenValues(itArr));

// let onlyEvenValues = (arr) =>{
//   return arr.map ((num) => {
//     if (num%2===0){
//       return num;
//     }
//   })
// }

// console.log(onlyEvenValues(itArr));

// let onlyEvenValues = (arr) => {
//   let newArr = [];
//   arr.forEach((element) => {
//     if (element % 2 === 0) {
//       newArr.push(element);
//     }
//   });
//   return newArr;
// };

// console.log(onlyEvenValues(itArr));
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 3. Write a function called showFirstAndLast which accepts
// an array as an argument and returns a new array with only
// the first and last elements from the function’s argument
// array. The returned array should only contain elements that
// are strings.

// let go = [3, "l", 9, "dekel", "haim", 9, "shai"];

// let showFirstAndLast = (array) => {
//   let newFl = [];
//   let temp = array.filter((element) => {
//     return typeof element === "string";
//   });
//   newFl.push(temp.shift());
//   newFl.push(temp.pop());
//   return newFl;
// };

// console.log(showFirstAndLast(go));

// let showFirstAndLast = (array) => {
//   let coolArr = [];
//   let temp = [];
//   array.filter((n) => {
//     if (typeof n === "string") {
//       temp.push(n);
//     }
//   });
//   coolArr.push(temp.shift());
//   coolArr.push(temp.pop());
//   return coolArr;
// };

// console.log(showFirstAndLast(go));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 4. Write a function called vowelCount which accepts a
// string as an argument. The function should return an object
// which has the count of the number of vowel’s that are in
// the string. The key should be the vowel and the value
// should be the count. e.g. {a:3, o:2,u:4}.
// Should not be case sensitive.

// let vowelCount= (str)=> {
//

// let vowel={ a:0, e:0, u:0 ,i:0, o:0};
// str.toLowerCase().split('').filter((char)=>{
//  if (char==='a' || char==='e'|| char==='u'|| char==='i'||char==='o')
// vowel[char]++;

// })
// console.log(vowel);
// }

// vowelCount("ldskdakcd");

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 5. Write a function capitalize that takes a string as an
// argument and will return the whole string capitalized.

// let capitalize = (str)=>{

//   return str.toUpperCase();

// }

let capitalize = (str) => {
  return str
    .split("")
    .map((char) => {
      if (97 <= char.charCodeAt(0) && char.charCodeAt(0) <= 122) {
        return String.fromCharCode(char.charCodeAt(0) - 32);
      } else {
        return char;
      }
    })
    .join("");
};

// console.log(capitalize("Yana"));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 6. Write a function called shiftLetters that takes a string as
// an argument and return’s an encoded string with each
// letter shifted down the alphabet by one.

// let shiftLetters = (str) => {
//   return str.split("").map((char) => {
//     return String.fromCharCode(char.charCodeAt(0) - 1);
//   });
// };

// console.log(shiftLetters("abcdefg"));

//////////////////////////////////////////////////////////////////////////////////////////////
// 7. Create a function called swapCase that takes a string as
// an argument and returns a string that every other word is
// capitalized. (you can use the fifth’s exercise's function to
// keep it dry)

let swapCase = (str) => {
  return str
    .split(" ")
    .map((j, i) => {
      if (i % 2 === 0) {
        return capitalize(j);
      } else {
        return j;
      }
    })
    .join(" ");
};

console.log(swapCase("yana and shai forever"));
