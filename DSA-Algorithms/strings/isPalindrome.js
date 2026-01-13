//  * @param {number} x
//  * @return {boolean}
//  */

let isPalindromeToString = function(x) {
    return (x.toString().split('').reverse().join('') == x)
};