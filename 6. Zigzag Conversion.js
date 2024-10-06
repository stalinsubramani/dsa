/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {

    let jump = (numRows - 1) * 2
    let res = []
    let steps = 0;

    if (numRows == 1) return s

// Loop all the rows ( numRows )
    for (let i = 0; i < numRows; i++) {
        
        let alternater = 0
        steps = 0
        let ci = i
        while (ci < s.length) {
            res.push(s.charAt(ci))
            steps = jump

            if (i > 0 && i < numRows - 1) {
                if (alternater % 2 == 0) {
                    steps = (jump - i * 2)
                }
                else {
                    steps = i * 2 == 0? (jump - i * 2) : i * 2
    
                }

            }

            ci += steps
            alternater += 1
        }
    }

    return res.join('')

};