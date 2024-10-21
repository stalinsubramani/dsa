/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    
    const isWaterOrLand = (r, c) => {
        let COLS = grid[0].length - 1
        let ROWS = grid.length - 1
        if (r < 0 || c < 0 || r > ROWS || c > COLS) 
            return 0
        return grid[r][c]
    }

    const island = (i, j, visited) => {
        
        if (isWaterOrLand(i, j) == 1 && visited.has(i+"-"+j) == false) {

            visited.add(i+"-"+j)
            island(i+1, j, visited)
            island(i, j+1, visited)
            island(i-1, j, visited)
            island(i, j-1, visited)
        }

    }

    let visited = new Set();
    let path = new Set();
    let count = 0
    for (let i = 0; i < grid.length; i++)
        for (let j = 0; j < grid[0].length; j++) {
            if (isWaterOrLand(i,j) == 1 && visited.has(i+"-"+j) == false) {
                island(i,j, visited)
                count++
            }
        }

    return count;
};