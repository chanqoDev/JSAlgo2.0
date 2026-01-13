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
// console.log(palindrome('racecar')); 
// "racecar" → true
// "A man, a plan, a canal: Panama" → true
// "hello" → false

function isPalindrome(str) {
  if (!str) return true;

  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    // Skip non-alphanumeric on the left
    while (left < right && !isAlphaNum(str[left])) {
      left++;
    }
    // Skip non-alphanumeric on the right
    while (left < right && !isAlphaNum(str[right])) {
      right--;
    }
    if (str[left].toLowerCase() !== str[right].toLowerCase()) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

function isAlphaNum(char) {
  return /^[a-z0-9]$/i.test(char);
}
