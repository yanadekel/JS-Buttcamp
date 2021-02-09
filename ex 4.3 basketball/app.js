// Instructions
// John and Mike both play basketball in different teams. In the latest 3 games,
// John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94
// and 123 points.
// 1. Calculate the average score for each team
// 2. Decide which teams wins in average (highest average score), and print the
// winner to the console. Also include the average score in the output.
// 3. Then change the scores to show different winners. Don't forget to take into
// account there might be a draw (the same average score)
// 4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105
// points. Like before, log the average winner to the console.
// 5. Like before, change the scores to generate different winners, keeping in
// mind there might be draws.

let averageScore = (score1,score2,score3) =>{
  return (score1+score2+score3)/3;
}


let teamJohn= averageScore(89,120,123);
let teamMike= averageScore(89,120,123);
let teamMary= averageScore(0,56,105);


if (teamJohn>teamMike && teamJohn>teamMary){
  console.log ("Team John the winner with averege score of "+teamJohn);
} else if (teamMike>teamJohn && teamMike>teamMary){
  console.log ("Team mike the winner with averege score of "+teamMik);
}else if (teamMary>teamMike && teamMary>teamJohn) {
  console.log ("Team Mary the winner with averege score of "+teamMary);
}else {
  console.log ("there is no winner, you eqeal"); 
}

