let myArray = [8, 50, 7, 0, 5, 51, 4];

// let maxNum = (arr) => {
//   return arr.reduce((max, correntVlue) => {
//     console.log(max, correntVlue)
//     if (correntVlue > max) {
//       return (max = correntVlue);
//     } else {return max};
//   }, 0);
// };

// console.log(maxNum(myArray));

// const avg= (arr) => {
//   let sum = arr.reduce((total, val)=>{
//     return total+val;
//   })/arr.length;
//   return sum;
// }

// console.log(avg(myArray));

const even= (arr) =>{
  let onlyEven=arr.filter(n=>{
    return n%2===0;
  }).reduce((accumulator, currentValue)=>{
    return accumulator+currentValue;
  })
}

console.log(even(myArray));