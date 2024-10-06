/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {

    let res = []

    let sr = 0, sc = 0, er = matrix.length - 1, ec = matrix[0].length - 1
    let r = 0, c = 0

    while (sr <= er && sc <= ec) {

        for (let i = sc; i <= ec; i++) {
            res.push(matrix[sr][i])
        }
        sr++

        for (let i = sr; i <= er; i++) {
            res.push(matrix[i][ec])
        }
        ec--

        if (sr <= er)
            for (let i = ec; i >= sc; i--) {
                res.push(matrix[er][i])
            }
        er--

        if (sc <= ec)
            for (let i = er; i >= sr; i--) {
                res.push(matrix[i][sc])
            }
        sc++

    }



    return res

};