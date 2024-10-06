/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {

    let prefix = new Array(nums.length).fill(0), sufix = new Array(nums.length).fill(0)
    let prev = 1
    let results = []
    for (let i = 0; i < nums.length; i++) {
        prefix[i] = prev * nums[i]
        prev = prefix[i]
    }

    prev = 1
    for (let i = nums.length - 1; i >= 0; i--) {
        sufix[i] = nums[i] * prev
        prev = sufix[i]
    }

    for (let i = 0; i < nums.length; i++) {

        let prefixProduct = i > 0? prefix[i - 1] : 1
        let suffixProduct = i < nums.length - 1? sufix[i + 1] : 1

        results.push(prefixProduct * suffixProduct)
    }
    
    return results
};