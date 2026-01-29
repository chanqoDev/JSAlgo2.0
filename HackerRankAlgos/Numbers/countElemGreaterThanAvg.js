/*
 * Complete the 'countResponseTimeRegressions' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY responseTimes as parameter.
 * 
 * Count Elements Greater Than Previous Average
Given an array of positive integers, 
return the number of elements that are strictly greater than the average of all previous elements.
Skip the first element.
- Day 0: 100 (no previous days, skip) 
- Day 1: 200 > average(100) = 100 → count = 1 
- Day 2: 150 vs average(100, 200) = 150 → not greater → count = 1 
- Day 3: 300 > average(100, 200, 150) = 150 → count = 2 Return 2.
Input Format

The first line contains an integer n (0 ≤ n ≤ 1000), the number of days.
If n > 0, the next n lines contains an integer representing responseTimes[i].
If n = 0, the second line is omitted or empty.
 */

function countResponseTimeRegressions(responseTimes) {
    let sum = responseTimes[0]; 
    let count = 0; 
    for (let i = 1; i < responseTimes.length; i++) {
        let avg = sum / i; 

        if (responseTimes[i] > avg) { 
            count++; 
        }
        sum += responseTimes[i]; 
    }
    return count; 
}

let responseTimes = [100, 200, 150, 300]
let r = countResponseTimeRegressions(responseTimes);
console.log(r); 