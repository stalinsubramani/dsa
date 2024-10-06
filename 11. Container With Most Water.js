/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {

    let max = 0

    let l = 0, r = height.length - 1

    while ( l < r ) {

        let width = r - l
        let minHeight = Math.min(height[l], height[r])
        max = Math.max(max, width * minHeight)

        if (height[l] < height[r]) {
            l++
        }
        else {
            r--
        }
    }

    return max


    
};