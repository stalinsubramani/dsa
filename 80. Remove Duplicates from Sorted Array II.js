/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  
    // move the J to end of the current character and count the duplicate character
    
  
      let i = 0, j = 0;
  
      while (j < nums.length) {
  
          let count = 1
          while( j+1 < nums.length && nums[j] == nums[j+1]) {
              j++
              count++
          }
  
          let range = Math.min(2, count)
  
          let k = 0;
          while(k < range) {
              nums[i] = nums[j]
              i++
              k++
          }
          j++
      }
  
      return i;
  
  
  };