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

// Pattern: Frequency Map (HashMap)
// Time: O(n)
// Space: O(n)

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

console.log(mostFrequentString(["dog", "cat", "dog", "cat", "dog"])); 

