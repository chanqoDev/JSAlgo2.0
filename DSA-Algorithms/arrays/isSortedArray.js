function isSortedAscending(arr) {
    if (arr.length < 2) return true; 

    for (let i = 0;  i < arr.length - 1; i++) {
        //[1, 3, > 2, 5]
        if (arr[i] > arr[i + 1]){
            return false; 
        } 
    }
    return true; 
}
const n = [1, 3, 2, 5]; 
console.log(isSortedAscending(n)); // false
console.log(isSortedAscending([1, 2, 2, 3]));  // true 

//[1, 2, 3, 4]      → true
// [1, 2, 2, 3]      → true
// [1, 3, 2]         → false
// []                → true
// [5]               → true