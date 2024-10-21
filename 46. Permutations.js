/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {

    if (nums.length == 1) 
        return [nums]

    let res = []

    for (let i = 0; i < nums.length; i++) {

        let fixed = nums[i]
        let remaining = nums.slice(0, i).concat(nums.slice(i + 1))
        let permutations = permute(remaining)

        for (let p of permutations) {

            res.push([fixed, ...p])
        }
    }

    return res;
};