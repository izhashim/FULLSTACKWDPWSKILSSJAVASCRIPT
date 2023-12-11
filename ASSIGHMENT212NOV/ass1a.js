// Conditional statements in programming are used to make decisions and execute different code blocks based on specified conditions
// In JavaScript, there are two main types of conditional statements: if statements and switch statements.
// The if statement is a fundamental conditional statement. It evaluates a specified condition, and if the condition is true, it executes a block of code.
if (condition) {
    // Code to be executed if the condition is true
  } else {
    // Code to be executed if the condition is false
  }

//   EXAMPLE
  let x = 10;

  if (x > 5) {
    console.log("x is greater than 5");
  } else {
    console.log("x is not greater than 5");
  }
//The else if statement allows you to check multiple conditions in sequence. If the previous if or else if conditions are false, it moves on to the next one.
if (condition1) {
    // Code to be executed if condition1 is true
  } else if (condition2) {
    // Code to be executed if condition2 is true
  } else {
    // Code to be executed if no conditions are true
  }
  //EXAMPLE
  let num = 0;

  if (num > 0) {
    console.log("Positive number");
  } else if (num < 0) {
    console.log("Negative number");
  } else {
    console.log("Zero");
  }

  
//The switch statement is used to perform different actions based on different conditions. It is often a more concise alternative to long chains of if and else if statements.
switch (expression) {
    case value1:
      // Code to be executed if expression === value1
      break;
    case value2:
      // Code to be executed if expression === value2
      break;
    // Additional cases as needed
    default:
      // Code to be executed if none of the cases match
  }

  //EXAMPLE
  let day = "Monday";

switch (day) {
  case "Monday":
    console.log("It's the start of the week");
    break;
  case "Friday":
    console.log("Weekend is near");
    break;
  default:
    console.log("It's a regular day");
}
