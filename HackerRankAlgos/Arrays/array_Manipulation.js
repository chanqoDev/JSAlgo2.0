/**
 * Challnege: Array Manipulation
 * Range updates using a difference array
 * Starting with a 1-indexed array of zeros and a list of operations, 
 * for each operation add a value to each array element between two given indices, inclusive. 
 * Once all operations have been performed, return the maximum value in the array.
 * 
 * We use a difference array where:
diff[a] += k → “from here on, values go up by k”
diff[b + 1] -= k → “from here on, stop adding k”
 */

const n = 10;
const queries = [
  [1, 5, 3],
  [4, 8, 7],
  [6, 9, 1]
];

// Each query says:
// Add k to every element from index a to index b (inclusive).
// create the diff array and place markers 
// We use a difference array where:
// diff[a] += k → “from here on, values go up by k”
// diff[b + 1] -= k → “from here on, stop adding k”
function arrayManipulation(n, queries) {
const diff = new Array(n + 2).fill(0); 
let running = 0; 
let max = 0;

for (const [a, b, k] of queries){
diff[a] += k; 
diff[b + 1] -= k; 
}

for (let i = 1; i <= n; i++) {
      running += diff[i];
      if (running > max) max = running; 
 }
return max; 
}

console.log(arrayManipulation(n, queries)); // 10
