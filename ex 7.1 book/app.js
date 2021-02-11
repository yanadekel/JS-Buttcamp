// Instructions
// 1. Create an object that represents a book. It should have
// 4-5 properties that make sense for a book to have.

let book ={
  name: "yolo",
  auter:"yana dekel",
  year:2021,
  chapters:10,
  length:600,
}

console.log(book);

// 2. Then write a function that has one argument, a book,
// that will return the following description from your book
// object:
// `The book <book name> was written by <author name> in
// the year <publishing year.



let bookfun = book=> {
  console.log (`The book ${book.name} was written by ${book.auter} in
   the year ${book.year}`);
}


bookfun(book);