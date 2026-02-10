// First Non-Repeating Character
// Prompt : Given a string, return the first character that does not repeat.
// If none exists, return null.

const nonRepeatingChar = (str) => {
if (!str) return null; 
// const freq = new Map(); 

// for (const char of str) {
//     if (freq.set(char, (freq.get(char) || 0) + 1)); 
// }
 
// for (const [c, count] of freq.entries()) {
//     if (count === 1){
//        return c; 
//     }
// } 

const freq = {}; 
for (const char of str) {
    freq[char] = (freq[char] || 0 ) + 1
}

for (const c in freq) {
   if (freq[c] === 1) return c; 
}
}  
console.log(nonRepeatingChar("stress")) 
console.log(nonRepeatingChar("aabbcc"))
console.log(nonRepeatingChar("nachocheese"))
/*
"stress"       → "t"
"aabbcc"       → null
"nachocheese"  → "n"
*/ 