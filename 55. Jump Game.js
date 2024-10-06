/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    

    let i = nums.length - 2;
    let dp = new Array(nums.length).fill(false);
    dp[nums.length - 1] = true;

    while (i >= 0) {

        for (let k = 1; k <= nums[i]; k++) {
            if (dp[i + k]) {
                dp[i] = true;
                break;
            }
        }

        i--
    }

    return dp[0]

};