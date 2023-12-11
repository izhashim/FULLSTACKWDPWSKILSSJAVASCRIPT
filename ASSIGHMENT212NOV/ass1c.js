//Loops in programming are structures that allow a set of instructions to be repeatedly executed as long as a certain condition is true. They are used to automate repetitive tasks and iterate over a sequence of elements or a block of code. Loops are essential for improving code efficiency and reducing redundancy.
//The for loop is used when the number of iterations is known or can be determined in advance.
for (initialization; condition; update) {
    // Code to be executed in each iteration
  }
  //EX
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
//The while loop is used when the number of iterations is not known in advance, and the loop continues as long as the specified condition is true.
while (condition) {
    // Code to be executed in each iteration
  }
//EXAMPLE
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
//The do-while loop is similar to the while loop, but it guarantees that the code inside the loop will be executed at least once, even if the condition is false.
do {
    // Code to be executed in each iteration
  } while (condition);

//   EXAMPLE
let k = 0;
do {
  console.log(k);
  k++;
} while (k < 5);

//The for...in loop is used to iterate over the properties of an object.
for (variable in object) {
    // Code to be executed in each iteration
  }
//example
const person = { name: 'John', age: 30, gender: 'Male' };
for (let key in person) {
  console.log(key + ': ' + person[key]);
}

//The for...of loop is used to iterate over the values of an iterable object, such as an array or string.
for (variable of iterable) {
    // Code to be executed in each iteration
  }
//EXAMPLE
const numbers = [1, 2, 3, 4, 5];
for (let num of numbers) {
  console.log(num);
}
