

let reversedWords = 'Christian Elena in Alabama bama!';

let s = reversedWords.split('').reverse().join(''); 
// console.log(s); 

function reverseStr(words){
    let word = words.reverse();
    return word;  
}
const r = reverseStr(reversedWords).join(); 
console.log(r); 
