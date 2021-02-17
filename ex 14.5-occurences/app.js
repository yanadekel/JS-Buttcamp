


function countOccurrences(str, char) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      counter += 1;
    }
  }
  return counter;
}
countOccurrences("ini mini miny moe", "n");
//  I realised that the value of the counter is still 0 although it went through 3 "n" . 
//  Following, I found that the counter does not update itself.
