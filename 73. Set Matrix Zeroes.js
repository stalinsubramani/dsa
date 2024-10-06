/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    
    let row = 1;
    for (let r = 0; r < matrix.length; r++) 
        for (let c = 0; c < matrix[0].length; c++)
            if (matrix[r][c] == 0) {
                matrix[0][c] = 0
                if (r == 0) {
                    row = 0
                }
                else {
                    matrix[r][0] = 0
                }
            }

    for (let r = 1; r < matrix.length; r++) {
        for (let c = 1; c < matrix[0].length; c++) {

            if (matrix[r][0] == 0 || matrix[0][c] == 0) {
                matrix[r][c] = 0
            }
        }
    }


    if (matrix[0][0] == 0) {
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][0] = 0
        }
    }

    if (row == 0) {
        for (let i = 0; i < matrix[0].length; i++) {
            matrix[0][i] = 0
        }
    }




    
};