// function funcA() {
//   //decler verebaly so you can enter to them from the window
//   console.log(a);// undifind
//   console.log(foo()); //hoisting=will log foo, becous the function foo() move to top;
//   var a = 1; // scoop:atach to global scope;global verebal=attach to the window;
//   // hoisting: consul the var- created it, but not attach to it the value;

//   function foo() {
//     return 2; 
//     // moving it to the top, befor console.log.
//   }
// }

// funcA();
//************************************************************************* */
//block2 


// var fullName = 'John Doe';
// var obj = {
//  fullName: 'Colin Ihrig',
//  prop: {
//  fullName: 'Aurelio De Rosa',

//  getFullName: function () {
//  return this.fullName;
//  }
//  }
// };
// console.log(obj.prop.getFullName());// print the name in the block scoop=>this=prop
// var test = obj.prop.getFullName;// var not deafind; 
// console.log(test()); //undefined

// ********************************************************
// Block 3

// function funcB() {
//   let a = b = 0;
//   a++;
//   return a;
//  }
//  funcB();
//  console.log(typeof a);// difind in the scope with let 

//  console.log(typeof b);// will print - not assined
// ***************************************************************************
// Block 4

// function funcC() {
//  console.log("1");//print 2 
// }
// funcC();
// function funcC() {
//  console.log("2");// the one who will print- getting the priorety
// }
// funcC();
// **************************************************************************

// function funcD1() {
//  d = 1;//global avelebal
// }
// funcD1();
// console.log(d); //print 1

// function funcD2() {
//  var e = 1;//declerd insid the function
// }
// funcD2(); // no use just assining 
// console.log(e);// just decleard

// ********************************************************************

// function funcE() {
//   console.log("Value of f in local scope: ", f);
//  }
//  console.log("Value of f in global scope: ", f);
//  var f = 1;
//  funcE();

// 




