// Block 1

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
var b = 1;
function someFunction(number) {
 function otherFunction(input) {
 return b;// not assigned  taking the vlue from perent fun and making closer:
 }
 b = 5;// making assign to inner function;
 return otherFunction;
}
var firstResult = someFunction(9);// always will be 5 becuse the cluser .
var result = firstResult(2);// always will return 5 becuse of the closer with child fun!


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var a = 1;
function b2() {
 a = 10;
 return;//even we adding a to the return it in the scoop and run of inner function an not the global scoop.
 function a() { }
}
b2();// undifind function the return is "undifind"; even we add "a" to the return it still on the inner scoop=fun scoop;
console.log(a);// it refers the global scoop so always be eqel to a on the global scoop=1;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let i;
for ( i = 0; i < 3; i++) {
 const log = () => {
 console.log(i);
 }
 setTimeout(log, 100);
}
//will be 3 times 3=> i*3 becouse it's makin another round and then stops;
//the (i) on global. if we add 'let' to 'i' the then we make it to local scoop;
 ///////////////////////////////////////////////////////


