// 1. create 2 book objects with properties: name, author, year.
// 2. create an empty object bookUtils (utils = short for utilities).
// 3. add to to the bookUtils object a function getFirstPublished, that recieves 2
// books and returns the book with the smaller year.
// 4. add to to the bookUtils object a function setNewEdition, that recieves a
// book and an edition year and sets a new property latestEdition with the
// edition year, or updates an existing one.
// 5. add to to the bookUtils object a setLanguage function, that recieves a book
// and a language and sets a new property language with the languahe, or
// updates an existing one.
// 6. add to to the bookUtils object a setTranslation function, that recieves a
// book a language and a translator, and sets a new property of translation,
// which is an object that contains the translator and the language.
// 7. add to to the bookUtils object a setPublisher function, that recieves a book
// a name and a location, and sets a new property named publisher, which is an
// object that contains the name and location.
// 8. add to to the bookUtils object a function isSamePublisher, that recieves 2
// books and checks if the publisher name and location are identical in the 2
// books.

let book1 = {
  name: "yana",
  author: "shmuel",
  year: 2015,
};

let book2 = {
  name: "shai",
  author: "Haim",
  year: 2020,
};

// 3. add to to the bookUtils object a function getFirstPublished, that recieves 2
// books and returns the book with the smaller year.

// 4. add to to the bookUtils object a function setNewEdition, that recieves a
// // book and an edition year and sets a new property latestEdition with the
// // edition year, or updates an existing one.

bookUtils = {
  setoldEdition: function (books1, books2) {
    return books1.year < books2.year ? book1 : book2;
  },

  setNewEdition: function (book, year) {
    if (book.latestEdition) {
      book.latestEdition = year;
    } else {
      book.latestEdition = year;
    }
  },

  setLanguage: function (book, language) {
    if (book.language) {
      book.language = language;
    } else {
      book.language = language;
    }
  },

  setTranslation: function (book, language, translator) {
    book.translation = {
      language: language,
      translator: translator,
    };
  },

  setPublisher: function (book, name, location) {
    book.Publisher = {
      Name: name,
      Location: location,
    };
  },

  isSamePublisher: function (bookA, bookB) {
    if (
      bookA.publisher.Name === bookB.publisher.Name &&
      bookA.publisher.Location === bookB.publisher.Location
    ) {
      return true;
    } else {
      return false;
    }
  },
};
console.log(bookUtils.setoldEdition(book1, book2));

bookUtils.setTranslation(book1, "HB", "Yana");
console.log(book1);

// 8. add to to the bookUtils object a function isSamePublisher, that recieves 2
// books and checks if the publisher name and location are identical in the 2
// books.
