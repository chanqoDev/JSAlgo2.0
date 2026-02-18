// First Non-Repeating Character
// Prompt : Given a string, return the first character that does not repeat.
// If none exists, return null.

const nonRepeatingChar = (str) => {
    if (!str) return null; 
    // let freq = new Map();
    const freq = {};

    for (const char of str) {
        // freq.set(char, (freq.get(char) || 0) + 1); 
        freq[char] = (freq[char] || 0) + 1;
    }
    
    for (const char in freq){
        if (freq[char]===1) return char;
    }
    // for ( const [char, count] of freq) {
    //     if ( count === 1) {
    //         return char
    //     } 
    // }
    return null; 
}  


console.log(nonRepeatingChar("stress")) // 't'
console.log(nonRepeatingChar("aabbcc")) // null
console.log(nonRepeatingChar("nachocheese")) // 'n'
