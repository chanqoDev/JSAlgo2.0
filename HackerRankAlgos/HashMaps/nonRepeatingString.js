// First Non-Repeating Character
// Prompt : Given a string, return the first character that does not repeat.
// If none exists, return null.

const nonRepeatingChar = (str) => {
// Map solution 
// if (!str) return null; 
// const freq = new Map();

// for (const char of str) {
//     freq.set(char, (freq.get(char) || 0) + 1); 
// }
// for (const [char, count] of freq) {
//     if (count === 1) {
//         return char;
//     } 
// }
// return null; 
if (!str) return null; 
let freq = {}; 
for (const char of str) {
    freq[char] = (freq[char] || 0) + 1; 
}
// first found repeated letter
for (const key in freq) {
    if (freq[key] === 1) {
        return key; 
    }
}
return null; 
}  
console.log(nonRepeatingChar("stress")) // 't'
console.log(nonRepeatingChar("aabbcc")) // null
console.log(nonRepeatingChar("nachocheese")) // 'n'
