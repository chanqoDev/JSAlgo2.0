/*
 * Complete the 'rotateLeft' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER d
 *  2. INTEGER_ARRAY arr
 */

function rotateLeft(d, arr) {
    d = d % arr.length; 
    return arr.slice(d).concat(arr.slice(0, d)); 
}
const d = 4;
const arr = [1, 2, 3, 4, 5];
let r = rotateLeft(d, arr);
console.log(r);  // output: -> [ 5, 1, 2, 3, 4 ]