/**
 * Complete the factorial function in the editor below. Be sure to use recursion.
factorial has the following paramter:
int n: an integer
Returns
int: the factorial of n
Note: If you fail to use recursion or fail to name your recursive function factorial or Factorial,
you will get a score of 0.
Input Format
A single integer,  (the argument to pass to factorial).
 * 
 * 
 */

function factorial(n) { 
    //base case 
    if (n <= 0) return 1; 
    // recurisve case
    return n * factorial(n - 1)
}

console.log(factorial(5));  // 120 
console.log(factorial(3));  // 6 