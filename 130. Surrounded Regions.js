/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (grid) {


    const region = (r, c) => {

        if (r < 0 || c < 0 || r == grid.length || c == grid[0].length || grid[r][c] != 'O')
            return

        grid[r][c] = 'S'
        region(r + 1, c)
        region(r, c + 1)
        region(r - 1, c)
        region(r, c - 1)
    }

    for (let i = 0; i < grid.length; i++)
        for (let j = 0; j < grid[0].length; j++)
            if (i == 0 || j == 0 || i == grid.length - 1 || j == grid[0].length - 1)
                region(i, j)

    for (let i = 0; i < grid.length; i++)
        for (let j = 0; j < grid[0].length; j++)
            if (grid[i][j] == 'O') {
                grid[i][j] = 'X'
            }

    for (let i = 0; i < grid.length; i++)
        for (let j = 0; j < grid[0].length; j++)
            if (grid[i][j] == 'S') {
                grid[i][j] = 'O'
            }

};