// Instructions
// Write a function that takes one argument n, an integer.
// Print out all the numbers between 1 to n.
// If the number is only divisible by 7 print “BOOM”
// If the number is divisible by 7 and also includes the digit 7 print “BOOMBOOM”
// If either of the above cases print the number.
// Example of numbers between 1 to 18:
// 1,2,3,4,5,6, BOOM-BOOM,8,9,10,11,12,13,BOOM,15,16,17,18
// Hint:
// Use the includes method to find out if the number includes a 7.

let n = (Math.random() * 99) + 1;
// for (i = 1; i <= n; i++) {
//   console.log(i);

  if (i % 7 === 0) {
    console.log("boom");
  } else if (i.toString().includes('7')) {
    console.log("BOOM BOOM");
  } else {
    console.log(i);
  }
}

// or other way 

for (let i = 1; i <=n; i++) {
  if (i % 7 === 0) {

      console.log("boom");

  } else if ( Math.floor(i / 10) === 7 || i % 10 === 7) {
      console.log("BOOM BOOM");
  }else {
    console.log (i);
  }

}