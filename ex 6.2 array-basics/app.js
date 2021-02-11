// For each of the questions below, answer the question’s with this array:
// const people = ["Greg", "Mary", "Devon", "James"];



// 1. Using a loop, iterate through this array and console.log all of the people.


// for(let i=0;i<people.length;i++) {
//   console.log (people[i]);
// }



// 2. Write the command to remove "Greg" from the array.

// let first= people.shift;


// // 3. Write the command to remove "James" from the array.
// let last =people.pop;


// // 4. Write the command to add "Matt" to the front of the array.
// let newLngth=people.unshift('Matt');
// console.log(people);

// // 5. Write the command to add your name to the end of the array.
// let arrLngth=people.push('Yana');


// 6. Using a loop, iterate through this array and after console.log-ing "Mary",
// exit from the loop.
// i=0;
// while (people[i-1]!== 'Mary') {
//   console.log(people[i]);
//   i++;

// }



// 7. Write the command to make a copy of the array using slice. The copy
// should NOT include "Mary" or "Matt".
const people = ["Matt","Greg", "Mary", "Devon", "James"];

const MaryIndex= people.findIndex(name=>  name==='Mary');

const MattIndex=people.findIndex(name=>  name==='Matt');

console.log(MattMaryIndex,MattIndex); 

let newPeople= [...people.slice()


// 8. Write the command that gives the indexOf where "Mary" is located.
// 9. Write the command that gives the indexOf where "Foo" is located (this
// should return -1).
// 10. Redefine the people variable with the value you started with. Using the
// splice command, remove "Devon" from the array and add "Elizabeth"
// const people = ["Greg", "Mary", "Devon", "James"];
// and "Artie". Your array should look like this when you are done ["Greg",
// "Mary", "Elizabeth", "Artie", "James"].
// 11. Create a new variable called withBob and set it equal to the people
// array concatenated with the string of "Bob".
// let arrBob= ['Bob'];
// let withBob = people.concat(arrBob);
// console.log (withBob);

// let arrBob= [...people,'BOB'];
// console.log (arrBob);