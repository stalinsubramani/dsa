/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {

    let totalCount = 0;
    let row = new Set()
    let col = new Set()
    let dia = new Set()

    let checkDiagonal = (placed, r, c) => {

        let i = r, j = c;
        while (i >= 0 && j >= 0 && i <= n - 1 && j <= n - 1) {

            let key = i + '-' + j
            if (placed.has(key)) return false
            i--
            j++
        }

        i = r, j = c;
        while (i >= 0 && j >= 0 && i <= n - 1 && j <= n - 1) {

            let key = i + '-' + j
            if (placed.has(key)) return false
            i++
            j--
        }

        i = r, j = c;
        while (i >= 0 && j >= 0 && i <= n - 1 && j <= n - 1) {

            let key = i + '-' + j
            if (placed.has(key)) return false
            i--
            j--
        }

        i = r, j = c;
        while (i >= 0 && j >= 0 && i <= n - 1 && j <= n - 1) {

            let key = i + '-' + j
            if (placed.has(key)) return false
            i++
            j++
        }

        return true
    }

    let check = (i, j) => {

        if (row.has(i)) return false
        if (col.has(j)) return false
        return checkDiagonal(dia, i, j)
    }



    const placeQueen = (count, i, j) => {

        if (count == n) {
            totalCount++
            return
        }

        if (i < 0 || j < 0 || i == n || j == n) return

        for (let k = 0; k < n; k++) {

            if (check(i, k)) {

                row.add(i)
                col.add(k)
                dia.add(i + "-" + k)
                placeQueen(count + 1, i + 1, 0)
                dia.delete(i + "-" + k)
                row.delete(i)
                col.delete(k)
            }
        }
    }


    placeQueen(0, 0, 0)

    return totalCount
};