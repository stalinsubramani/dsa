/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {

    let l = r = 0
    let sum = nums[0]
    let min = Number.MAX_SAFE_INTEGER

    while(r < nums.length && l <= r) {

        if (sum >= target) {
            min = Math.min(r - l + 1, min)
            sum -= nums[l]
            l++
        }
        else {
            r++
            sum += nums[r]            
        }
    }

    return min % Number.MAX_SAFE_INTEGER
    
};