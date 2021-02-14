// 1. Write a a function called ‘isString’ that receives 2
// arguments, a string and a callback function.
// The function checks that the string is indeed a string.
// If the string is a string, pass the string to a callback
// function which logs that string to the console.

let print = (word) => {
  console.log(word);
};

let isString = (word, callback) => {
  if (typeof word === "string") {
    callback(word);
  }
};

// isString ("yana",print);
// isString(4,print);

// Create a function called ‘firstWordUpperCase’ that
// receives 2 arguments, a string and a callback function.
// The function will capitalize the first word in the sentence
// and pass the string to a callback function which will create
// dashes between the words

let firstWordUpperCase = (str, callback) => {
  let [first, ...others] = str.split(" ");
   console.log(first);
   console.log(...others);
 
  return  callback([first.toUpperCase(), ...others]);
};


let dashes = (str)=> {
return str.join('-');
}

let oneWord= (str)=> {
  
return str.join(' ').replace(/ /g, '').toLowerCase();

};

console.log(firstWordUpperCase("my name is yana",oneWord));
