/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    let stock = prices[0]
    let i = 1;
    let maxProfit = 0
    while( i < prices.length ) {

        let currProfit = prices[i] - stock
        maxProfit = Math.max(currProfit, maxProfit)
        stock = Math.min(prices[i], stock)
        i++
    }
    
    return maxProfit;
};