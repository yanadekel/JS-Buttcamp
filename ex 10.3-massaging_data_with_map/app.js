const data = [
  {
  name: "John",
  birthday: "1-1-1995",
  favoriteFoods: {
  meats: ["hamburgers", "sausages"],
  fish: ["salmon", "pike"],
  },
  },
  {
  name: "Mark",
  birthday: "10-5-1980",
  favoriteFoods: {
  meats: ["hamburgers", "steak", "lamb"],
  fish: ["tuna", "salmon", "barracuda"],
  },
  },
  {
  name: "Mary",
  birthday: "1-10-1977",
  favoriteFoods: {
  meats: ["ham", "chicken"],
  fish: ["pike"],
  },
  },
  {
  name: "Thomas",
  birthday: "1-10-1990",
  favoriteFoods: {
  meats: ["bird", "rooster"],
  fish: ["salmon"],
  },
  },
  {
  name: "Mary",
  birthday: "1-10-1977",
  favoriteFoods: {
  meats: ["hamburgers", "lamb"],
  fish: ["anchovies", "tuna"],
  },
  },
 ];

 let getName= (arr)=>{
    return arr.map(value=>{
      return value.name;
    })
 }
console.log(getName(data));


let yang= (arr)=>{
  return arr.filter (value=>{
    if(Number (value.birthday.split('-')[2]<1990)){
      return value;
    }
  })
}


console.log(yang(data));


// Create a function that returns an object of all the different foods from all
// the objects as the key and the number of times that food is present in all the
// objects as the value.


//NEED HELP//

let food= (f)=> {
  let foodJect={};
}


