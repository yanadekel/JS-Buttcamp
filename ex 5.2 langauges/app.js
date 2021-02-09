// 1. Create a function that takes one parameter, a language.
// 2. Use a switch statement to log the following string for the
// given 'language':
// mandarin: 'MOST number of native speakers!'
// spanish: '2nd place in number of native speakers'
// english: '3rd place'
// hindi: 'Number 4'
// arabic: '5th most spoken language'
// for all other simply log 'Not in the top 5

let len= lenguage =>{
  switch (lenguage) {
    case 'mandarin':
      console.log("MOST number of native speakers!");
      break;
    case 'spanish':
      console.log("2nd place in number of native speakers");
      break;
    case 'english':
      console.log("3nd place in number of native speakers");
      break;
    case 'hindi':
      console.log("4nd place in number of native speakers");
      break;
    case 'arabic':
      console.log("5nd place in number of native speakers");
      break;
    default:
      console.log("Not in the top 5");
  }
}
 

len('mandarin');
len('hindi');
len('hebrow');




