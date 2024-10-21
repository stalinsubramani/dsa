/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {

    let size = Math.floor(nums.length / 2) + 1
    let num = 0
    for (let i = 0; i < 32; i++) {

        let count = 0;
       
        let val = 1 << i
        for (let j = 0; j < nums.length; j++) {
            if ((nums[j] & val) != 0) {
                count++
            }
        }

        if (count >= size) {
            num += (1 << i)
        }
    }

    return num
}