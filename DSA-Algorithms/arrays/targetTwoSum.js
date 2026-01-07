// Pattern: Hash Set (Complement)
// Input: Array
// Time: O(n)
// Space: O(n)
//
// Return true if any two different numbers add up to the target.
let arr = [2, 4, 6, 8, 20];
let target = 6;

function targetSum (arr, target) {
    const seen = new Set(); 
for (let i = 0; i < arr.length; i++) {
    let complement = target - arr[i]; 

    if (seen.has(complement)) {
        return true;
    }
    seen.add(arr[i]);  
} 
return false; 
}
// console.log(targetSum(arr, target)); 



// Notes: Challenge:
// You are given:
// an array of numbers
// a target number
// Instructions
// Return true if any two different numbers in the array add up to the target.
// Otherwise, return false.
// You may not use the same element twice.
// Order does not matter.
// Assume the array contains only numbers.


// create an empty set called seen
// for each number in the array:
//     calculate complement = target - number
//     if seen contains complement:
//         return true
//     add number to seen
// return false
// .has() . .add()
