/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {

    let leftWallHeight = height[0]
    let left = new Array(height.length).fill(0), right = new Array(height.length).fill(0)

    for (let i = 1; i < height.length; i++) {

        if (height[i] < leftWallHeight) {
            left[i] = leftWallHeight - height[i]
        }
        else {
            leftWallHeight = height[i]
        }
    }

    let total = 0
    let rightWallHeight = height[height.length - 1]
    for (let i = height.length - 1; i >= 0; i--) {

        if (height[i] < rightWallHeight) {
            right[i] = rightWallHeight - height[i]
        }
        else {
            rightWallHeight = height[i]
        }

        total += Math.min(left[i], right[i])
    }

    return total;
    
};