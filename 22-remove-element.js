/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {

    let i = 0, j = nums.length - 1

    while (i <= j) {

        if (nums[j] == val) {
            j--;
            continue
        }

        while(i <= j && nums[i] != val) 
            i++

        if (i < j && nums[i] == val && nums[j] != val) {
            nums[i] = nums[j]
            j--;
            i++
        }

    }

    return j + 1
    
};