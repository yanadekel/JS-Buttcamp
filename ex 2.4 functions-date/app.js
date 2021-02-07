// 1. Name of the current day e.g. Sunday
// 2. Current day of the month e.g. 31
// 3. Current month e.g January
// 5. Current Year e.g 2021
// Create a function that will return a string in the following
// format:
// `Today is Sunday the 31 of January, 2021’

function getMyDay(){
  let d = new Date();
  let days= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let month =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] 
  return `Today is ${days[d.getDay()]} the ${d.getDate()} of ${month[d.getMonth()]}, ${d.getFullYear()}`;
}

console.log(getMyDay());