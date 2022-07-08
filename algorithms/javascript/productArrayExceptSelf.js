/** Given an array nums of n integers where n > 1, return an array output such
 * that output[i] is equal to the product of all the elements of nums except nums[i].
 * NOTE: Solve it without division and in O(n).
 * 
 * Example: Input [1,2,3,4] // output: [24,12,8,6]
 * 
 * Could you solve it with constant space complexity? (Output array does not count
 * as extra space for the purpose of space complexity analysis)
 */

const productExceptSelf = (nums) => {

    // create a new array, sized to input array.
    // Filled array with static integer of first index position of original array. 
    let len = nums.length
    let output = new Array(len).fill(nums[0]);
    let cache = nums[len - 1];

    for(let i = 1; i < len; i++) {
        output[i] = output[i - 1] * nums[i];
    }

    output[nums.length-1] = output[output.length-2];
    for (let j = len; j > 0; j--) {
        output[j] = output[j - 1] * cache;
        cache = cache * nums[j];
    }
    output[0] = cache;

    return output;
};

// Testing

input = [1,2,3,4];

console.log(productExceptSelf(input));