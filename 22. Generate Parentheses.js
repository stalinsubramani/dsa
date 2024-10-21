/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {

    let res = []
    const generate = (open, close, str) => {

        if (str.length == n+n) {
            res.push(str)
            return
        }

        if (open > 0) {
            generate(open - 1, close, str+'(')
        }

        if (open < close) {
            generate(open, close-1, str+')')
        }
    }

    generate(n,n,"")

    return res
    
};