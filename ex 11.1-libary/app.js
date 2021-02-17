var library = [
  {
  author: "Bill Gates",
  title: "The Road Ahead",
  readingStatus: true
  },
  {
  author: "Steve Jobs",
  title: "Walter Isaacson",
  readingStatus: true
  },
  {
  author: "Suzanne Collins",
  title: "Mockingjay: The Final Book of The Hunger Games",
  readingStatus: false
  }
  ];


  const read = library.filter(book=>book.readingStatus===true);
  console.table(read);






  
  // const read = library.filter(book=>{
  //   if( book.readingStatus===true) {
  //     return {
  //       title: book.title,
  //       read: book.readingStatus,
  //     }
  //   }
   