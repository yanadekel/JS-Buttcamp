// Question 1:
// In your own words what will this point to and why?(Note
// this is the global scope)
//////////////////////////////////////////////////////
// console.log(this);
// console.log(this === window)
// Alone, this refers to the global object. {}

////////////////////////////////////////


// Question 2:
// a. In your own words what will this point to and why.
// b. How can you fix this code.
// const myObj = {
//  name: "Timmy",
//  greet: () => {
//  console.log(`Hello ${this.name}`);
//  },
// };
// myObj.greet();// this === window or global object
// arrow functions don't bind their own scope, but inherit it from the parent one,
// which in this case is window or the global object.



/////////////////////////////////////////////////////////////////////////


// Question 3:
// In your own words what will this point to and why?
// const myFuncDec = function () {
//   console.log(this);
// };

//to myFuncDec. becouse myFuncDec is global so this reffers to global.
//// Call myFuncDec/this without setting this, would normally default
// to the global object or undefined in strict mode.

////////////////////////////////////////////////////////////////////////////

// Question 4:
// In your own words what will this point to and why?
// const myFuncArrow = () => {
//  console.log(this);
// };
// myFuncArrow();

//With normal functions the scoped is bound to the global one by default,
// arrows functions, do not have their own this but they 
//inherit it from the parent scope, in this case the global one.
//What would happen if we add "use strict"? Nothing, it will be the same result, 
//since the scope comes from the parent one.

//the 
///////////////////////////////////////////////////////////////////////////////////////





// Question 5:
// a. In your own words what will this point to and why.
// b. How can you fix this code.
// document.querySelector(".element").addEventListener(() => {
//  console.log(this);
// });


//a. when we use arrow functions instead of them then this value will be the window object
//The reason is this in an arrow function has the same value as the context in which the arrow function was created.

//b.// If we are using functions which have been defined using function keyword as an event handler, then that event handler function executes in the context of the element on which event was binded.
//if in this case, this value inside callback fun will be  element.