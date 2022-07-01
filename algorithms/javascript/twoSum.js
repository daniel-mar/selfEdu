/** Two Sum
 * Given an array of intergers (nums) and integer (target),
 * return indices of the two numbers such that they add up to target.
 * 
 * You may assume that each input would have exactly one solution,
 * and you may not use the same element twice.
 * 
 * You can return the answer in any order and if no answer found
 * return [], OR -1.
 * 
 * @param {*} nums 
 * @param {*} target 
 * @returns [map[nums[i]], i]
 * else []
 * 
 * instead of storing each iteration the currentNum = nums[i]
 * I decided to do the compliment math as well as insertion into map
 * if the compliment does not exist in the map at current interation.
 */

const twoSum = (nums, target) => {

    // establish map and length (to save on time complexity in For).
    let map = {};
    let length = nums.length;

    // edge case === if null
    if(!nums) return;
    // edge case === if an array size of 1 is target
    if(length === 1 && nums[0] === target) return [nums[0]];


    for(let i = 0; i < length; i++) {
        // establish current compliment, to check in map
        let compliment = target - nums[i];
        // current iteration + it's compliment is found in map
        if(map[compliment] !== undefined)
            return [map[compliment], i];
        // else, store current compliment iteration in map [value, index].
        else 
            map[nums[i]] = i;
    }

    return [];
}


// Testing arrays, array with 1 index that matches target / not matching.
// Using console.time()/.timeEnd() to view run-time performance. 
let input = [2, 7, 11, 15];
let target = 9;
console.time()
console.log(twoSum(input, target)); // expected: [0,1]
console.timeEnd();

console.log(`============================`)

let input2 = [12, 27, 111, 154];
let target2 = 138;
console.time()
console.log(twoSum(input2, target2)); // expected: [1,2]
console.timeEnd();

console.log(`============================`)

let input3 = [5, 4, 11, 15];
let target3 = 19;
console.time()
console.log(twoSum(input3, target3)); // expected: [1,3]
console.timeEnd();

console.log(`============================`)

let input4 = [9];
let target4 = 9;
console.time()
console.log(twoSum(input4, target4)); // expected: [0]
console.timeEnd();

let input5 = [6];
let target5 = 3;
console.time()
console.log(twoSum(input5, target5)); // expected: []
console.timeEnd();

