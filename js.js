const array = [5, 12, 8, 130, 44];
// Return the second number that is greater than 10.
// If there is no second match, return undefined.
 function secondfoundItem(array) {
  // if the array is found and we want to find the next one we can 
  let r = array.filter(item => item > 10)[1]
  console.log(r)
}
// secondfoundItem(array); 


//Input:  "abca"
// Output: "a"
// Input:  "abcdef"
// Output: null

function firstRepeatingChar(str) {
    if (!str) return; 
    let seen = {}; 

    for (const char of str) {
       if (seen[char]){
        return char; 
       } 
       seen[char] = 1; 
    }
    return null; 
}

// console.log(firstRepeatingChar("abcaba")); 

const n = [1, 3, 2, 5]; 
//[1, 2, 3, 4]      → true
// [1, 2, 2, 3]      → true
// [1, 3, 2]         → false
// []                → true
// [5]               → true

function isSortedAscending(arr) {
    if (arr.length < 2) return true; 

    for (let i = 0;  i < arr.length - 1; i++) {
        //[1, 3,> 2, 5
        if (arr[i] > arr[i + 1]){
            return false; 
        } 
    }
    return true; 
}
// console.log(isSortedAscending(n))

// ✅ Challenge
// You are given an array of strings.

// Instructions
// Return the string that appears most frequently in the array.
// If there is a tie, return any one of the most frequent strings.
// If the array is empty, return null.
// ["apple", "banana", "apple", "orange", "banana", "apple"]
// → "apple"
// ["dog", "cat", "dog", "cat"]
// → "dog" OR "cat
// []
// → null
function mostFrequentString(arr) {
 if (!arr.length) return null; 
 let count = {}; 

    for (let i = 0; i < arr.length; i++) {
        let word = arr[i]; 

        if (count[word] === undefined) {
            count[word] = 1; 
        }else {
            count[word]++; 
        }
    }
    let max = 0; 
    let result = null; 

    for (let key in count) {
        if (count[key] > max) {
            max = count[key]; 
            result = key; 
        }
    }
    return result; 
}

// console.log(mostFrequentString(["dog", "cat", "dog", "cat", "dog"])); 




// Challenge:
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
const seen = new Set(); 
// for each number in the array:
//     calculate complement = target - number
//     if seen contains complement:
//         return true
//     add number to seen
// return false
// .has() . .add()
let arr = [2, 4, 6, 8, 20];
let target = 6;

function targetSum (arr, target) {
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



// Valid palindrome 
// Return true if a string is a palindrome, otherwise false.
// Rules (important):
// Ignore non-alphanumeric characters
// Ignore case
// Empty string → true
function palindrome(str){
    if (!str) return true;  
    let left = 0; 
    let right = str.length-1; 

    while(left < right) {
    // Skip non-alphanumeric on the left
        while(left < right && !isAlphaNum(str[left])){
            left++; 
        }
        while(left > right && !isAlphaNum(str[right])){
            right++; 
        }
    if (str[left].toLowerCase() !== str[right].toLowerCase()) {
            return false; 
        } 
        left++; 
        right++; 
    }
}
function isAlphaNum(char) {
  return /^[a-z0-9]$/i.test(char);
}
// console.log(palindrome('racecar')); 
// "racecar" → true
// "A man, a plan, a canal: Panama" → true
// "hello" → false


// function isPalindrome(str) {
//   if (!str) return true;

//   let left = 0;
//   let right = str.length - 1;

//   while (left < right) {
//     // Skip non-alphanumeric on the left
//     while (left < right && !isAlphaNum(str[left])) {
//       left++;
//     }

//     // Skip non-alphanumeric on the right
//     while (left < right && !isAlphaNum(str[right])) {
//       right--;
//     }

//     if (str[left].toLowerCase() !== str[right].toLowerCase()) {
//       return false;
//     }

//     left++;
//     right--;
//   }

//   return true;
// }

// function isAlphaNum(char) {
//   return /^[a-z0-9]$/i.test(char);
// }


// let reversedWords = 'Christian Elena in Alabama bama!';

// let s = reversedWords.split('').reverse().join(''); 
// console.log(s); 

// function reverseStr(words){
//     let word = words.reverse();
//     return word;  
// }
// const r = reverseStr(reversedWords).join(); 
// console.log(r); 


// You are given a string of n characters, with n varying from 1 to 1000, inclusive. Your task is to write a JS function that takes this string as input, applies the following operations, and finally returns the resulting string.
// Split the given string into individual words, using a space as the separator.
// Convert each word into a list of its constituent characters, and shift each list of characters once to the right (with the last element moving to the first position).
// After the rotations, reassemble each word from its list of characters.
// Join all the words into a single string, separating adjacent words with a single space.
// Return this final string as the function's output.

// The constraints for the problem are as follows:
// The input string will neither start nor end with a space, nor will it have multiple consecutive spaces.
// Each word will contain only alphabets and digits, and its length will range from 1 to 10.
// The words are case-sensitive; for example, 'word' and 'Word' are considered distinct.
// Your program should output a single string with the words rotated by their lengths while preserving their original order.

// As an illustration, consider the input string "abc 123 def". Applying the stated operations results in the output "cab 312 fde".

function rotateByLengthPreserveOrder(s) {
    return words = s.split(' ').map((word)=> {
        let lastWord = word.slice(-1); 
        return lastWord + word.slice(0, -1); 
    })
}

let string = "abc 123 def"; 
console.log(rotateByLengthPreserveOrder(string)); // output "cab 312 fde" 