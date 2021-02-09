// 1. The world population is 7900 million people. Create a
// function declaration called 'percentageOfWorld1' which
// receives a 'population' value, and returns the percentage of
// the world population that the given population represents.
// For example, China has 1441 million people, so it's about
// 18.2% of the world population.
// 2. To calculate the percentage, divide the given 'population'
// value by 7900 and then multiply by 100
// 3. Call 'percentageOfWorld1' for 3 populations of countries
// of your choice, store the results into variables, and log
// them to the console
// 4. Create a function expression which does the exact same
// thing, called 'percentageOfWorld2', and also call it with 3
// country populations (can be the same populations)

(function () {
  function percentageOfWorld1(population) {
    return (population / 7900) * 100;
  }

  let israelPopulition = percentageOfWorld1(9.053);
  let italyPopulition = percentageOfWorld1(60.36);
  let usaPopulition = percentageOfWorld1(328.2);

  console.log(israelPopulition);
  console.log(italyPopulition);
  console.log(usaPopulition);


let percentageOfWorld2= population=>(population / 7900) * 100;


console.log (percentageOfWorld2(9.053));
console.log (percentageOfWorld2(60.36));
console.log (percentageOfWorld2(328.2));



})();


