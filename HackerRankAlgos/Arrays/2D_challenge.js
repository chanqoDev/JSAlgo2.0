// 2D Array - DS
// Given a  2D array 6 x 6 , an hourglass is a subset of values with indices falling in the following pattern:

/** 
There are 16 hourglasses in a 6x6 array. 
The Hourglass sum is the sum of the values in an hourglass.
Calculate the hourglass sum for every hourglass in arr, then print the maximum hourglass sum.

hour glass: 
2 4 4
  2
1 2 4

*/

function hourglassSum(arr) {
    let rows = arr.length;
    let cols = arr[0].length; 
    let maxHourSum = Number.MIN_SAFE_INTEGER; 

    for (let i = 0; i <= rows - 3; i++) {
        for (let j = 0; j <= cols - 3; j++) {
            let sum = arr[i][j] + arr[i][j+ 1] + arr[i][j + 2]
                + arr[i + 1][j + 1] + 
                arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2]; 
            
            maxHourSum = Math.max(maxHourSum, sum); 
        }
    }
    return maxHourSum; 
}

const arr = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0]
];

console.log(hourglassSum(arr)) // → 19
