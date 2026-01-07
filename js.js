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

// LeetCode #9 – Palindrome Number 
// with number to string conversion
/**
 * @param {number} x
 * @return {boolean}
 */
let isPalindromeToString = function(x) {
    return (x.toString().split('').reverse().join('') == x)
};

/**
 * @param {number} x
 * @return {boolean}
 *  core logic is half-reversal 
 * 1. Take the last digit using (%) 
 * 2. Build a reverse number
 * 3. Remove the last digit using Math.floor(x / 10)
 * 4. Stop once reversed >= remaining number
 */
var isPalindrome = function(x) {
    let reverseHalf = 0; 
    // edge cases 
    if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

    while (x > reverseHalf) {
        reverseHalf = reverseHalf * 10 + (x % 10); 
        x = Math.floor(x / 10); 
    }
     // For even digits: x === reversedHalf
    // For odd digits: x === Math.floor(reversedHalf / 10)
    return x === reverseHalf || x === Math.floor(reverseHalf / 10);
};



// Valid palindrome 
// Return true if a string is a palindrome, otherwise false.
// Rules (important):
// Ignore non-alphanumeric characters
// Ignore case
// Empty string → true
function palindromeStr(str){
    if (!str) return true;  
    let left = 0; 
    let right = str.length-1; 

    while(left < right) {
    // Skip non-alphanumeric on the left
        while(left < right && !isAlphaNum(str[left])){
            left++; 
        }
        while(left > right && !isAlphaNum(str[right])){
            right--; 
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
    return words = s.split(' ').map(word => word.slice(-1) + word.slice(0, -1)).join(' ');
}

let string = "abc 123 def"; 
// console.log(rotateByLengthPreserveOrder(string)); // output "cab 312 fde" 


// letter-substitution cipher, specifically the Atbash cipher
// -Apply Atbash cipher to all letters (you already do this)
// -Preserve case 
// -Preserve non-letters 
function atBashCipher(s) {
    let transformed = ''; 
    for (let char of s) {
        // ASCII: 'a' = 97, 'z' = 122
        if(char >= 'a' && char <= 'z') {
            transformed += String.fromCharCode(219 - char.charCodeAt(0));
        } else if (char >= 'A' && char <= 'Z'){
            transformed += String.fromCharCode(155 - char.charCodeAt(0));
        } else {
            transformed += char; 
        }
    }
    // rotate  (last -> front)
    let words = transformed.split(' '); 
    if (words.length <= 1) return transformed; 
    let lastElem = words.pop(); 
    words.unshift(lastElem);

    return words.join(' ');
}

// using Map{}
// function atBashCipherMap(s){
//   const lower = 'abcdefghijklmnopqrstuvwxyz';
//   const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// }

function CapitalizerStr(inputStr) {
    let words = inputStr.split(' ');
    let transformed = []; 
    
    for(const word of words) {
        let fw = word[0].toUpperCase(); 
        transformed.push(fw + word.slice(1).toLowerCase());  
    }
    return transformed.join(' '); 
}
// console.log(CapitalizerStr('hola como estas?')); 

function solution(inputStr) {
    return inputStr.split(' ').map(w => w[0].toUpperCase() + w.slice(1).toLowerCase()).join(' ');
}

// input:  input a string seperated by hyphen('-') ex: "1-a-3-c-5"
// each word in the string can be a lowercase
// output: return a new string with converted words and rejoined with hyphens
            // output example: "a-1-c-3-e"

function LetterNumberMappings(s) {
        const alphaBet = 'abcdefghijklmnopqrstuvwxyz';
        s = s.toLowerCase().split('-');
        let transformed = [];
        for (const token of s) {
            // if token is a number  -> convert it to a letter
                if (!isNaN(token)) {
                    let n = Number(token); 
                    transformed.push(alphaBet[n - 1]); 
                } else {
                    // else if a token is a letter -> convert to a number 
                    transformed.push(alphaBet.indexOf(token) + 1); 
                }
        } 
        return transformed.join('-'); 
}

function LetterNumberMapping(s) {
        const alphaBet = 'abcdefghijklmnopqrstuvwxyz';
        // return s.split('-').map(l => !isNaN(l) ?  alphaBet[Number(l) - 1] : alphaBet.indexOf(l) + 1).join('-'); 
    }
// module.exports = { solution };

// console.log(LetterNumberMapping("1-a-3-c-5")); 

// .replace(/\D/g,''); //  → removes all non-digit chars  
// /\D/g is a regular expression:
// \D → matches any non-digit character (letters, punctuation, spaces, etc.)
// g → global flag, meaning “replace all matches in the string”
function parseAndSumScores1(s) {
    return s.split(' ').reduce((acc, word) => {
        word = word.replace(/\D/g,''); 
        if (!isNaN(word) && word !== ''){
            acc += Number(word); 
        }
        return acc; 
    }, 0); 
}

/** This Regex version considers punctation that is next to a num in order to match the string. 
s.match(/\d+/g)
\d matches any digit (0-9).
+ means "one or more" of the preceding (so it matches numbers with multiple digits, like 10 or 100).
/g is the "global" flag, so it finds all matches in the string, not just the first one.
*/ 
function parseAndSumScores(s) {
    return s.split(' ').reduce((acc, word) => {
        let n = word.match(/\d+/g)
        if (!isNaN(n) && n !== '') {
            acc += Number(n);
        }
        return acc; 
    }, 0) ; 
}

let r = "joe scored 5 points, while adam scored 10 points and bob scored 2, with an extra 1 point scored by joe";
// console.log(parseAndSumScores(r)); // 18
// let s = parseAndSumScores('Someone scored 4 and the other person scored 21'); // 25 
// console.log(s); 




//  *** “Move Letter Before Number in String” *** 
// alphanumeric characters
// each num is always followed by at least one alphabetic character before the next num appears
// return a transformed version of the string where first alpha char following each num is moved to a new position with the string and char in between ad removed 
// input: 
function NumberLetterReordering(input) {
    // keep track 3 things 
    let output = '';  
    let tempHolder = '';
    let lookingForLetter = false; 

    for (let i = 0; i < input.length; i++) {
        let c = input[i]; 

        if (!lookingForLetter){
            // not waiting for letter mode 
        if (c >= '0' && c <= '9'){
            tempHolder += c; // temp hold our number
            lookingForLetter = true; // set it to start looking for letter mode. 
        } else {
            output += c; 
        } 
        
        } else {
            // waiting for letter mode 
            if (c >= 'a' && c <= 'z') {
                output += c + tempHolder; 
                tempHolder = '';  
                lookingForLetter = false; 
            } else {
                lookingForLetter = true;
            }
        }
    }
    return output; 
}

let test2 = '4 foxes are chasing 1 rabbit.'; 
// console.log(NumberLetterReordering(test2)); // 'f4oxes are chasing r1abbit.'


/*
Mental shortcut to remember
3600 = seconds in an hour
86400 = seconds in a day (24 × 3600)
Why modulo is the magic % means:
“Keep the remainder after a full day passes.”

It automatically handles:
crossing midnight
adding 1 day
adding 2 days
adding exactly 24 hours
*/ 
function addSeconds(timeStamps, addedSeconds) {
    let timeParts = timeStamps.split(':');
    let hh = parseInt(timeParts[0]); 
    let mm = parseInt(timeParts[1]); 
    let ss = parseInt(timeParts[2]);  

    let secondToStart = hh * 3600 + mm * 60 + ss; 
    let totalSeconds = (secondToStart + addedSeconds) % (24 * 3600); 
    let newHours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600; 
    let newMinutes = Math.floor(totalSeconds / 60); 
    let newSeconds = totalSeconds % 60; 

    return `${String(newHours).padStart(2, "0")}:${String(newMinutes).padStart(2, "0")}:${String(newSeconds).padStart(2, "0")}`; 
}
console.log(addSeconds("05:10:30", 123)); 



/**
 * 
 * You are given two input arguments: a list of strings timePoints and an integer addedSeconds. 
 * Each string in timePoints is in the format "HH:MM:SS", 
 * representing a valid time from "00:00:00" to "23:59:59" inclusive. 
 * The integer addedSeconds represents a number of seconds, ranging from 1 to 86,400. 
 * Your task is to create a new function, addSecondsToTimes(timePoints, addedSeconds), 
 * which takes these two arguments and returns a new list of strings.
 * Each string in the returned list is the new time,
 * calculated by adding the provided addedSeconds to the corresponding time in timePoints, 
 * formatted in HH:MM:SS.
 */

// "HH:MM:SS" "00:00:00" to "23:59:59"
function addSecondsToTimes(timePoints, addedSeconds) { 

return timePoints.map((t, i)=> {
        let s = t.split(':');
        let hh = parseInt(s[0]); 
        let mm = parseInt(s[1]); 
        let ss = parseInt(s[2]); 
    
        let secondsSinceStart = hh * 3600 + mm * 60 + ss;
        let totalSec = (secondsSinceStart + addedSeconds) % (24 * 3600); 

        let newHours = Math.floor(totalSec / 3600); 
        totalSec %= 3600; 
        let newMin = Math.floor(totalSec / 60); 
        let newSec = totalSec % 60; 

        return `${String(newHours).padStart(2, '0')}:${String(newMin).padStart(2, '0')}:${String(newSec).padStart(2, '0')}`; 
    }
);

}
let timePoints = ['10:00:00', '23:30:00']; 
let addedSeconds = 3600; 
// console.log(addSecondsToTimes(timePoints, addedSeconds)); 
// output: ['11:00:00', '00:30:00'];
