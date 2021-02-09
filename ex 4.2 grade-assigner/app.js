// Instructions
// Create a function that takes 1 argument, a number score.
// Returns either “A”, ”B”, “C”, “D”, “F”.
// score of:
// 0-64 is a “F”
// 65-69 is a “D”
// 70-79 is a “C”
// 80-89 is a “B”
// 90-100 is an “A

score= function(num){
  if (num <65) {
    return "F";
  } else if (num >= 65 && num <= 69) {
    return "D";
  } else if (num >=70 && num <= 79) {
    return "C";
  } else if (num >= 80 && num <= 89) {
    return "B";
  } else {
    return "A";
  }
}

console.log(score(30));
