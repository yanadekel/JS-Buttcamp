const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];

console.log('Sorted:', foods.sort());
console.log('Sorted:', foods.sort().reverse());

// b. Lets sort an array of words that includes a word with an
// uppercase:
const foodB = ["falafel", "Sabich", "hummus", "pizza with extra pineapple"];
foodB.sort( (a, b) => a.localeCompare(b, {ignorePunctuation: true}));






// c.1. Sort the array of strings from the longest word to the
// shortest word only using the sort function


const words = ["apple", "supercalifragilisticexpialidocious",
"hi", "zoo"];

words.sort( (a, b) =>b.length-a.length);
console.log(words)
