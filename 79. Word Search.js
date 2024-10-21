/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {

    let visited = new Set()
    const dfs = (path, r, c, pos) => {

        if (path.length == word.length && path == word)
            return true

        if (r < 0 || c < 0 || r == board.length || c == board[0].length || visited.has(r + "-" + c)) {
            return false
        }

        if (word.charAt(pos) == board[r][c]) {
            pos++;
            visited.add(r + "-" + c);
            let res = dfs(path + board[r][c], r + 1, c, pos) ||
                dfs(path + board[r][c], r - 1, c, pos) ||
                dfs(path + board[r][c], r, c + 1, pos) ||
                dfs(path + board[r][c], r, c - 1, pos)
            visited.delete(r + "-" + c)

            return res
        }

        return false
    }


    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (word.charAt(0) == board[i][j]) {
                visited = new Set()
                if (dfs("", i, j, 0)) return true

            }
        }
    }



    return false

};