function factorial(n) {
    //factorial of 0 is 1
    if (n === 0) {
      return 1;
    }
   // n! = n * (n-1)!
    return n * factorial(n - 1);
  }
  console.log(`Factorial of 0: ${factorial(0)}`);
  console.log(`Factorial of 5: ${factorial(5)}`);
  console.log(`Factorial of 8: ${factorial(8)}`);
  