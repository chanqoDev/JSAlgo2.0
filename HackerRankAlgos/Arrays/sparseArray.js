/**
 * There is a collection of input strings and a collection of query strings. 
 * For each query string, determine how many times it occurs in the list of input strings.
 *  Return an array of the results.
 * 
 *  * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY stringList
 *  2. STRING_ARRAY queries
 * 
 */

function matchingStrings(stringList, queries) {
let freq = new Map();

//1. Iterate stringList build word count
//- build frequency Map
stringList.forEach((w) => {
    const curr = freq.get(w) || 0;
    freq.set(w, curr + 1);
})

//2. Iterate queries
//   - lookup each query in Map
//   - push count or 0
let res = queries.map(w => {
    let c = freq.get(w) || 0;
    return c;
})

//3. Return results
return res;
}
const stringList = ["aba", "baba", "aba", "xzxb"];
const queries = ["aba", "xzxb", "ab"];
console.log(matchingStrings(stringList,queries))