// 1. Create 3 separate objects that their key is called name
// and their value is a string. Store them in separate
// variables.
// 2. Create a new Map object that sets each object as a key
// and assign an id number as the value.
// 3. Iterate over the Map object with the for..of loop.
// - log the name and id


let firstobj={name:"yana"};
let secoobj={name:"gaia"};
let thirdobj={name:"roy"};

const nameid= new Map();

nameid.set(firstobj,24);
nameid.set(secoobj,6);
nameid.set(thirdobj,3)
console.log (nameid);


    for (let [key, value] of nameid) {
      console.log (key +'='+value);
    }