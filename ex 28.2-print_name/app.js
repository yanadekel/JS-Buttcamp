(function () {

  const person = {
      name: 'yana',
      printName () {
          console.log(this.name);
      },

      printNameAfter () {
          setTimeout(function() {
              console.log(this.name);
          }, 1000);
          
      },
  }

  person.printName();
  person.printNameAfter();

})();