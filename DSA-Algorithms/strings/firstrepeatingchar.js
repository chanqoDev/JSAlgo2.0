
// Pattern: Hash Set / Frequency Map
// Input: String
// Time: O(n)
// Space: O(n)

function firstRepeatingChar(str) {
    if (!str || str.length === 0) return null;
    let seen = {}; 

    for (const char of str) {
    if (seen[char]) return char; 
    
        seen[char] = true; 
    }
    return null; 
}

console.log(firstRepeatingChar("abcaba")); 

//Input:  "abca"
// Output: "a"
// Input:  "abcdef"
// Output: null
