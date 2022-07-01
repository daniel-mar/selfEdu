/** Palindrome Number
 * 
 * Determine whether an integer is a palindrome. An integer is a palindrome when
 * it reads the same backward as forward.
 * 
 * Example 1: Input: 121 // expected output: true
 * 
 * Example 2: Input: -121 // expected output: false
 * Explanation: From left to right, it reads -121. From right to left,
 * it becomes 121-, Therefore it is not a palindrome.
 * 
 * Example 3: Input: 10 // expected output: false
 * Explanation: Read 01 from right to left. Therefore it is not a palindrome.
 * 
 * Could you solve it without converting the integer to a string?
 * Note: I interpret this as if you MAY solve by converting, but consider
 * another solution that does not convert int to string.
 * 
 * PSUEDOCODE
 * lastInt = Integer % 10
 *      Divides the integer by 10, storing with the last digit for use * 10. (Which was 
 *      seen as a decimal).
 * notLastInt = Math.floor(Integer/10), will drop the decimal place or last value.  
 * 
 */

const isPalindrome = (x) => {
    // must be negative
    if(x < 0) return false;

    // reverse will be to add on the current (i) iterations last digit.
    let reverse = 0;

    // i is updated from equaling x, to the rounded down version of
    for(let i = x; i >= 1; i = Math.floor(i / 10)) {
        reverse = reverse * 10 + i % 10;
    }
    // return true if it is a palindrome.
    return reverse === x;
}

// Testing + Walkthrough of operations
// ex: i = 121 : i/10 (rounded down), i = (121/10) = 12.1(12), then i = (12/10) = 1.2(1),
    // then i = (1/10) = .1(0) when rounded down, then 0 !>= 1, END FOR LOOP
// reverse = 0 : reverse = 0 * 10 + .1 = 1, reverse = 1 * 10 + .2 = 12, 
    // reverse = 12 * 10 + .1 = 121
let input = 121;
let input1 = -121;

console.time();
console.log(isPalindrome(input));
console.timeEnd();
console.time();
console.log(isPalindrome(input1));
console.timeEnd();