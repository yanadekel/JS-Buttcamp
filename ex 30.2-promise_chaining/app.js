// Write two functions that use Promises that you can chain.
// The first function, makeAllCaps(), will take in an array of words and capitalize
// them, and then the second function, sortWords(), will sort the words in
// alphabetical order. If the array contains anything but strings, it should throw
// an error.
// Call the functions once with an array of words and call it once with an array
// that includes at least one item that is not a word. Print the resolve and reject
// in a .then, .catch.


let words = ['yana', 'blabla', 'boom'];

function makeAllCaps(arr) {
  return new Promise((resolve, reject) => {
    if (arr.length !== 0) {
      let result = arr.filter((str) => {
        return typeof str === "string";
      })

      if (result.length !== 0) {
        reject('NOT ALL STRING')
      }
      resolve(arr.map((word) => {
        return word.toUpperCase();
      })
      )
    } else {
      reject('emty arrey');
    }

  });

}

function sortWords(arr) {
  return new Promise((resolve, reject) => {
    if (arr.length > 0) {
      resolve(arr.sort());
    } else {
      reject('no arrey of words');
    }

  })

}


makeAllCaps(words)
  .then(sortWords)
  .then((data) => {
    console.log(data);
  }).catch((err) => {
    console.log(err);
  });