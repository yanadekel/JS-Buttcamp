function findSmallest(a, b, c) {
  if (a > b > c) {
    return c;
  } else if (a > c > b) {
    return a;
  } else {
    return b;
  }
}
findSmallest(52, 66, 2);

//  . First find the line that contains the problem. Write it down.:
//  in line ten, where we call the fuction, the funtion name is different than the one declared
//  *** ReferenceError: findSmalest is not defined
//  
