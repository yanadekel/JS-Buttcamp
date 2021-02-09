// The Exercise
// 1. Declare a variable 'numSiblings' based on a prompt input
// like this:
// prompt('How many siblings do you have?');
// 2. If you have one sibling, log to the console '1 sibling!'
// (use loose equality == for now)
// 3. Use an else-if block to log 'More than 1 sibling' in case
// 'numSiblings' is greater than 1
// 4. Use an else block to log 'No siblings' (this block will be
// executed when 'numSiblings' is 0 or any other value)
// 5. Test the code with different values of 'numSiblings',
// including 1 and 0.
// 6. Change == to ===, and test the code again, with the
// same values of 'numSiblings'. Notice what happens when
// there is exactly 1 sibling! Why is this happening?
// 7. Finally, convert 'numSibling' to a number, and watch
// what happens now when you input 1.
// 8. Reflect on why we should use the === operator and
// type conversion in this situation.

const numSiblings ='1';

if (numSiblings=== 1) {
  console.log('1 sibling!');
} else if (numSiblings>1) {
  console.log ('More than 1 sibling');
}else {
  console.log('No siblings')
}

//if you using (===) insted of (==), it's Tests whether the left and right values are identical to one anothe. not just eqele.
//if both sides is a num so it's will work, but if you use (==) so you can comper string with num.                          
