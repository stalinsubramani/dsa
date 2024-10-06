/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {


    let dp = new Array(nums.length).fill(Number.MAX_SAFE_INTEGER)
    dp[nums.length - 1] = 0
    let i = nums.length - 2

    while ( i >= 0 ) {

        let minValue = Number.MAX_SAFE_INTEGER
         for (let j = 1; j <= nums[i] && j + i < nums.length ; j++) {

            minValue = Math.min(dp[i+j], minValue)
        }

        dp[i] = 1 + minValue
        i--
    }

    return dp[0]
    
};