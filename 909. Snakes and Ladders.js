/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function (board) {


    const position = (pos) => {

        pos--

        let row = Math.floor(pos / board.length)
        let col = pos % board.length

        if (row % 2 == 0) {
            return [(board.length - 1) - row, col]
        }
        else {
            return [(board.length - 1) - row, (board.length - 1) - col]
        }
    }


    let q = [[1,0]];
    let moves = 0;
    let N = board.length;
    let visited = new Set()

    while (q.length > 0) {

        let [pos, moves] = q.shift()
        if (pos == N*N) return moves

        for (let i = 1; i <= 6; i++) {

            let newPos = pos + i
            if (newPos > N*N) break;
            let [r,c] = position(newPos)
            if (board[r][c] != -1) {
                newPos = board[r][c]
            }

            if (!visited.has(newPos)) {
                visited.add(newPos)
                q.push([newPos, moves+1])
            }            
        }
    }

    return -1

};