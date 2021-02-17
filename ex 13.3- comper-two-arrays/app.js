const food = ["Noodle", "Pasta", "Meat", "Cucumber", "Olives", "Ice-cream"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Hamburgers", "Olives"];

let comper = (arr1, arr2) => {
  let newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        newArr.push(arr2[j]);
      }
    }
  }
  if (newArr.length===0) {
    return false;
  }
};

console.log(comper(food, food1));
