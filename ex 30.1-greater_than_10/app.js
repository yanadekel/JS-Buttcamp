// Write a function that takes a number as an argument and returns a Promise
// that tests if the value is less than or greater than the value 10.
// If it is greater than 10 it is resolved, if it is less than 10 it is rejected.
// Call the function and print the resolve and reject in a .then, .catch.


function ten(num) {
 return new Promise ((resolve,reject)=>{
   if (num > 10) {
     
     resolve(`right ${num} greater then 10`);
   } else {
     reject (`wrong, ${num} less then ten`);
   }
 }); 
}


ten(9).then((data)=>{
  console.log (data);
}).catch( (err)=> {
  console.log(err);
});