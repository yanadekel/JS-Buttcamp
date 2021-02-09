// Instructions
// Create a simple password validation function that takes a
// password string as an argument.
// If the passwords length is more than 7 characters return
// “Strong”. If it is less than 7 characters long return “Weak.
// 1) Create a function that uses a if/else conditional
// expression.
// 2. Create a function that uses a ternary conditional
// expression.
// 3. Create a function that uses a && logical operator.
// 4. Create an “advanced” password validation function that
// takes a password string as an argument.
// If the password length is more than 7 characters long and
// has at least one capital letter return “Very Strong”.

let simple = (password) => {
  if (password.length > 7) {
    return "strong";
  } else {
    return "weak";
  }
};

let simple = (password) => {
 return (password.length>7? "strong":"weak");
}


const hasCapital = str => {
  for (let i = 0; i <= str.length; i++) {
    if (65 <= str[i] <= 90) {
      return true;
    }
  }
  return false;
}

//5.4 Create an “advanced” password
const advancedPassword = password => {
  return ((hasCapital(password) && password.length > 7) ? "Very Strong" :
    (password.length > 7) ? "Strong" : "Weak");
}


console.log(simple("565658878"));
console.log(simple("G5K3"));
