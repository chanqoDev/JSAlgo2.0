const array = [5, 12, 8, 130, 44];

function secondfoundItem(array) {
    let r = array.filter(item => item > 10)[1]
    console.log(r)
}
secondfoundItem(array); 

// Notes: Return the second number that is greater than 10.
    // If there is no second match, return undefined.
    // if the array is found and we want to find the next one we can 
