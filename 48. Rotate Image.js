/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {

    let left = 0, right = matrix.length - 1
    let top = 0, bottom = right;

    while (left < right) {
        for (let i = 0; i < right - left; i++) {

            let topLeft = matrix[top][left + i]
            matrix[top][left + i] = matrix[bottom - i][left]
            matrix[bottom - i][left] = matrix[bottom][right - i]
            matrix[bottom][right - i] = matrix[top + i][right]
            matrix[top + i][right] = topLeft


        }
        left++
        right--
        bottom--
        top++

    }


};