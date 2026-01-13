// LeetCode #9 – Palindrome Number 
// with number to string conversion
/**
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
