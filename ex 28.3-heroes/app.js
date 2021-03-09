


const wonderWoman = {
  name: "Diana Prince"
}
const batman = {
  name: "Bruce Wayne"
}

const superHeroes = [wonderWoman, batman];

function printName() {
  console.log(`my name is ${this.name}`);
}



function printHeroes(heroes, printFunc) {
  //add your code here

  for (let i = 0; i < heroes.length; i++) {
    const printheroename = printFunc.bind(heroes[i]);
    printheroename();
  }

};

printHeroes(superHeroes, printName);