/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {

    let map = new Map()

    if (nums.length == 0) return 0

    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], 1)
    }

    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < nums.length; i++) {

        let val = nums[i];
        let count = 1;
        if (map.get(val - 1) == undefined) {
            while (map.get(val + 1) != undefined) {                
                map.set(val + 1, map.get(val) + 1)
                val++
            }

            max = Math.max(map.get(val), max)
        }
    }

    return max
};