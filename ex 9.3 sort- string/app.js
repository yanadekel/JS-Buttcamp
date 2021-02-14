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



let strSplit = words.split(' ');
let maxWord = 0;
let longestW = '';



for (let i = 0; i < strSplit.length; i++) {
    if (strSplit[i].length > maxWord) {
        maxWord = strSplit[i].length
        longestW = strSplit[i];
    }
}

console.log(longestW);