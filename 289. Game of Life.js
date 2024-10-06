/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (matrix) {

    let COLS = matrix[0].length
    let ROWS = matrix.length

    const getWeight = (r, c) => {

        if (matrix[r][c] == 3) return 1
        if (matrix[r][c] == 2) return 0

        return matrix[r][c]
    }

    const getValue = (r, c) => {

        let count = 0

        if (r - 1 >= 0)
            count += getWeight(r - 1, c)

        if (r - 1 >= 0 && c + 1 < COLS)
            count += getWeight(r - 1, c + 1)

        if (c + 1 < COLS)
            count += getWeight(r, c + 1)

        if (r + 1 < ROWS && c + 1 < COLS)
            count += getWeight(r + 1, c + 1)

        if (r + 1 < ROWS)
            count += getWeight(r + 1, c)

        if (r + 1 < ROWS && c - 1 >= 0)
            count += getWeight(r + 1, c - 1)

        if (c - 1 >= 0)
            count += getWeight(r, c - 1)

        if (r - 1 >= 0 && c - 1 >= 0)
            count += getWeight(r - 1, c - 1)

        return count
    }

    for (let r = 0; r < ROWS; r++)
        for (let c = 0; c < COLS; c++) {

            let pop = getValue(r, c)

            if (pop < 2 && matrix[r][c] == 1) matrix[r][c] = 1 // 1 => 0 
            if (pop >= 2 && pop <= 3 && matrix[r][c] == 1) matrix[r][c] = 3 // 1 => 1 
            if (pop > 3 && matrix[r][c] == 1) matrix[r][c] = 1 // 1 => 0 
            if (pop == 3 && matrix[r][c] == 0) matrix[r][c] = 2 // 2 -> 1

        }

    for (let r = 0; r < ROWS; r++)
        for (let c = 0; c < COLS; c++) {


            switch (matrix[r][c]) {
                case 1: matrix[r][c] = 0
                    break;

                case 2:
                case 3: matrix[r][c] = 1
                    break;

            }


        }

};