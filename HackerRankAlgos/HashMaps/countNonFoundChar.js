// Given a string, return the number of characters that appear only once
function countUniqueChar(str) {
if (!str ) return 0; 
// let freq = {}; 
// for (const char of str) {
//    freq[char] = (freq[char] || 0) + 1;    
// }
let freq = new Map(); 
let mostFound = []; 
for (const char of str) {
    freq.set(char, (freq.get(char) || 0) + 1);
}
for (const val of freq.entries()) {
if(val[1] > 2){
    mostFound=val;
}
}
return mostFound; 
}


const str = 'NachoCheese Burrito'; 
let r = countUniqueChar(str); 
let s = countUniqueChar(); 
console.log(r);
// console.log(s); 