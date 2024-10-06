/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    let i = 0, j = 1;

    while ( j < nums.length ) {

        if (nums[i] === nums[j]) {
            j++;
            continue
        }
        i++
        nums[i] = nums[j]
    }

    return i+1
    
};