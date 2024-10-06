/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    let profit = 0;
    let i = 1;
    while (i < prices.length) {

        if (prices[i] - prices[i-1] > 0) {
            profit += prices[i] - prices[i-1]
        }
        i++
    }

    return profit;
    
};