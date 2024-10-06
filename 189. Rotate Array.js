/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {

    let i = 0, size = nums.length - 1

    k = k % nums.length

    const reverse = (i, j) => {

        while ( i <= j) {
            let t = nums[i]
            nums[i] = nums[j]
            nums[j] = t
            i++
            j--
        }
    }

    reverse(0, size)
    reverse(0, k-1)
    reverse(k, size)

};