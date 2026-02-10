// Given a string, return the number of characters that appear only once
function countUniqueChar(str) {
if (!str ) return 0; 
let freq = {}; 
for (const char of str) {
   freq[char] = (freq[char] || 0) + 1;    
}
return freq; 
}


const str = 'NachoCheese Burrito'; 
let r = countUniqueChar(str); 
let s = countUniqueChar(); 
console.log(r);
console.log(s); 