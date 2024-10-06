/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {

    nums = nums.sort((a,b) => a - b)
    let result = [], map = {}
    
    for (let i = 0; i < nums.length; i++) {

        let l = i+1, r = nums.length - 1
        let target = nums[i] * -1

        if (i > 0 && nums[i-1] == nums[i]) continue

        while(l < r) {

            if (l == i) {l++; continue}
            if (r == i) {r--; continue}

            let threeSum = nums[i] + nums[l] + nums[r]
            
            if ( threeSum == 0 ) {

                let re = [nums[i], nums[l], nums[r]]
                result.push(re)
                l++
                while (l < r && nums[l] == nums[l-1]) {
                    l++
                }
            }
            else if ( threeSum < 0 ) {
                l++
            }
            else {
                r--
            }
        }
    }

    return result


};