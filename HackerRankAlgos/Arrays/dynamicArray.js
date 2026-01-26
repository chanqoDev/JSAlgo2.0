/*
 * Complete the 'dynamicArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 * 
 * “I store n independent sequences, track lastAnswer, and process each query in one pass.
 *  XOR mixes in previous state, modulo keeps indices in bounds, and only type-2 queries produce output. 
 * Overall time complexity is linear.”
 */

function dynamicArray(n, queries) {
    let arr = Array.from({length: n}, ()=>[]);
    let lastAnswer = 0;
    let answers = [];

    for(let q of queries){
        let type = q[0];
        let x = q[1];
        let y = q[2];
        let idx = (x ^ lastAnswer) % n;
        
        if(type === 1) {
            arr[idx].push(y);
        }else if(type === 2){
            let v = arr[idx][y % arr[idx].length]
            lastAnswer = v;
            answers.push(lastAnswer);
        }
    }
    return answers;
}

const n = 2;
const queries = [
  [1, 0, 5],
  [1, 1, 7],
  [2, 1, 0],
  [2, 1, 1]
];

console.log(dynamicArray(n,queries));
// Expected output:
// [7, 5]
