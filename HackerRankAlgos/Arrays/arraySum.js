// The first line contains an integer, , denoting the size of the array.
// The second line contains  space-separated integers representing the array's elements.
// Given an array of integers, find the sum of its elements.
// For example, if the array [1, 2, 3] => 6 


const simpleArraySum = (arr)  => arr.reduce((a, b) => a + b, 0); 
let arrN = [1, 2, 4]; // 7 
let r = simpleArraySum(arrN); 
console.log(r); 

