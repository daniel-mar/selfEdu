/** Best Time to Buy and Sell Stock
 * 
 * Say  you have an array for which the i-th element is the price of a given stock on day i.
 * 
 * If you were only permitted to complete at most one transaction 
 *      (ie, buy one and sell one share of the stock),
 *      design an algorithm to find the maximum profit.
 * 
 * Ex Input: [7,1,5,3,6,4]
 * Output: 5
 * Explanation: Buy on  day 2 (price = 1) and sell on day 5 (price = 6), max profit = 6 - 1 = 5.
 *      NOT 7 - 1 = 6, as selling price needs to be larger than buying price.
 * 
 * Ex Input: [7,6,4,3,1]
 * Output: 0
 * Explanation: In this case, no transaction is done, i.e max profit = 0. 
 * 
 * NOTE: Cannot sell a stock before you buy one.
 *      Can assume the price will be positive.
 *      The array may or may not be sorted, because price may change daily.
 */

// Dynamic programming? Storing possible values as you traverse the array.

const maxProfit = (prices) => {

    let maxProfit = 0;
    let buy = prices[0] // buy the first day possible, could 
    // Instead of manipulating the input array
    let cacheBought = [...prices ]; // store prices of where we have visited / bought

    for (let i = 1; i < cacheBought.length; i++) {
        if(buy > cacheBought[i]) {
            console.log(`current buy: ${buy} greater than, cache location = ${cacheBought[i]}`)
            buy = cacheBought[i];
            cacheBought[i] = 0;
        } else {
            maxProfit = Math.max(cacheBought[i] - buy, maxProfit);
            console.log(`buy is: ${buy}, cache location is: ${cacheBought[i]}, possible new maxProfit = ${maxProfit}.`)
        }
    }
    return maxProfit;
};

let input = [7,1,5,3,6,4] // expected output 5 (6-1=5)
let input2 = [7,6,4,3,1] // expected output 0 (no transaction done)

// Testing

console.time()
console.log(maxProfit(input))
console.timeEnd()
    /* current buy: 7 greater than, cache location = 1
    bestTimeBuySellStock.js: 34
    buy is: 1, cache location is: 5, possible new maxProfit = 4.
    bestTimeBuySellStock.js: 39
    buy is: 1, cache location is: 3, possible new maxProfit = 4.
    bestTimeBuySellStock.js: 39
    buy is: 1, cache location is: 6, possible new maxProfit = 5.
    bestTimeBuySellStock.js: 39
    buy is: 1, cache location is: 4, possible new maxProfit = 5.
    bestTimeBuySellStock.js: 39
    5 */


console.log(maxProfit(input2))

    /* current buy: 7 greater than, cache location = 6
    bestTimeBuySellStock.js:34
    current buy: 6 greater than, cache location = 4
    bestTimeBuySellStock.js:34
    current buy: 4 greater than, cache location = 3
    bestTimeBuySellStock.js:34
    current buy: 3 greater than, cache location = 1
    bestTimeBuySellStock.js:34
    0 */