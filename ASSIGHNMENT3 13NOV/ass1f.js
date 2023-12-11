function curry(func) {
    const arity = func.length;
  // Curried function
    return function curried(...args) {
      // If enough arguments are provided, execute the original function
      if (args.length >= arity) {
        return func(...args);
      }
    // If not enough arguments are provided, return a new curried function
      return function(...nextArgs) {
        return curried((nextArgs));
      };
    };
  }
  // Test the curry function with a function that adds two numbers
  const add = (a, b) => a + b;
  const curriedAdd = curry(add);
  // Test the curried function
  console.log(curriedAdd(2)(3)); // Output: 5
  console.log(curriedAdd(2, 3)); // Output: 5
  console.log(curriedAdd(2)(3, 4)); // Output: 9
  console.log(curriedAdd(2)(3)(4)); // Output: 9
  