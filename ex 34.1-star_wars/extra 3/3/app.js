// let sum= (arr)=>{
//  let sumNum =0;
//   for (let i=0; i<arr.length;i++){
//    sumNum +=  arr[i];
//   }
//   return sumNum;
// }

// console.log(sum([1,2,3]));

// const sum= (arr)=>{
//   let sumNum=0;
//   arr.forEach(element => {
//     sumNum +=element;
//   });
//   return sumNum;
//  }

//  console.log(sum([1,2,3]));


// const sum= (arr)=>{
//   let sumNum=0;
//   arr.map(element => {
//     sumNum +=element;
//   });
//   return sumNum;
//  }

//  console.log(sum([1,2,3]));


// const sum= (arr)=>{
//   let reduser= arr.reduce((acc,curr)=>{
//   return acc+curr;
//  })
//  console.log(reduser);
// }

// sum([1,2,3]);

//  }

//  console.log(sum([1,2,3]));


// for (let i=0;i<users.length;i++){
//   console.log (users[i]);
// }


// users.map((user)=>console.log(user));

// users.forEach((myobjArr));
// function myobjArr(item) {
//   console.log(item);
// }

// const newArr= users.map(x=>x);
// const usersObj= (arr)=>{
//   arr.map((el)=>console.log(el));
// }

// usersObj(users);

// const avreg = (arr) => {
//   let total = 0;
//   let length = arr.length;
//   arr.forEach(({ math }) =>
//     total = (total + math) / length

//   );
//   return total;
// }
///////////////////////////////////////////////////////////////////////////////////////
// const users = [
//   { name: 'yana', age: 34, math: 100, comput: 20, fizics: 20 },
//   { name: 'itay', age: 20, math: 100, comput: 100, fizics: 100 },
//   { name: 'evgeny', age: 10, math: 100, comput: 50, fizics: 20 }
// ]


// let myFunction = (arr) => {
//   let newArr = [];
//   arr.forEach((user) => {
//   newArr.push({name:user.name, averge:(user.comput + user.fizics) / 2});
//   })
//   return newArr;
// }

// console.log(myFunction(users));

// let strArr= ['yana','and', 'shai',];

// let sumStr= (arr)=>{
// newStrArr=[];
// arr.forEach(string => {
//  newStrArr.push( string.length);
// });
// return newStrArr;

// for(let i=0;i<arr.length;i++){
//   arr[i]= arr[i].length
// }
// return arr;

//   let newStr= arr.map(element=>{
//    return element.length
//   })
//   return newStr
// }

// console.log(sumStr(strArr));
///////////////////////////////////////////////////////////////////////////////////////////////////////////

const vical = [
  { company: 'toyota', id: 'corola', type: 'privet', year: 2019, price: 60000, owener: ['yana', 'shai', 'moshe'] },
  { company: 'honda', id: 'sivick', type: 'bissnes', year: 2010, price: 120000, owener: ['ya', 'sh', 'mo','lo', 'pp'] },
  { company: 'mazda', id: '3', type: 'privet', year: 2021, price: 20000, owener: ['y', 's', 'm', 'l'] }
]

const old = (arr) => {
//   let newOld = [];
//   arr.forEach(element => {
//     newOld.push(element.year)
//   })
//   let x= newOld.reduce((acc, val) => {
//     return acc < val ? acc : val;
//   })
//  return x;

return arr.map((elm)=>{
  return {name:elm.company, owner: arr.map((elm)=> {
  return elm.owener.length
}).sort().pop().filter((el)=>{
 
})}
})


// return { company:arr[1].company, owner: arr.map((elm)=> {
//   return elm.owener.length
//   }).sort().pop()};


}
console.log(old(vical));


//////////////////////////////////////////////////////////////////////////
// let x =
//   {
//     company: arr.company, owner:
//       arr.map((elm) => {
//         return elm.owener.length
//       }).sort()
//         .pop()
//   }; 
//   /// Does not work. Need either to connect the x array with the arr and 
//   /// then remove items in both arrays together or to 
//   ///
//   return x; 






