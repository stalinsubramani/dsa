/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {

    let row = {0: {}, 1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {}, 8: {}}
    let col = {0: {}, 1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {}, 8: {}}
    let square = {'0-0': {}, '0-1': {}, '0-2': {}, '1-0': {}, '1-1': {}, '1-2': {}, '2-0': {}, '2-1': {}, '2-2': {}}

    const squreKey = (i, j) => {
        return Math.floor(i/3)+"-"+Math.floor(j/3)
    }

    for (let i = 0; i < 9; i++)
        for(let j = 0; j< 9; j++) {
            if (board[i][j] == '.') continue

            let v = board[i][j]
            if ((row[i])[v] || (col[j])[v] || (square[squreKey(i,j)])[v]) 
                return false

            row[i][v] = true
            col[j][v] = true
            square[squreKey(i,j)][v] = true
        }

    return true

};