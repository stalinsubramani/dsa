/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {

    let res = []

    if (nums.length == 0) return []

    let r = 1
    let l = 0
    while (r < nums.length) {

        if (nums[r - 1] + 1 != nums[r]) {
            let diff = r - l
            res.push(diff == 1 ? "" + nums[l] : nums[l] + '->' + nums[r - 1])
            l = r
        }
        r++

    }

    res.push((r - l) == 1 ? "" + nums[l] : nums[l] + '->' + nums[r - 1])
    return res
};