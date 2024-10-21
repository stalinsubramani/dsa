/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {

    if (digits.length == 0) return []

    let hash = {
        0: [],
        1: [],
        2: ['a','b','c'],
        3: ['d','e','f'],
        4: ['g','h','i'],
        5: ['j','k','l'],
        6: ['m','n','o'],
        7: ['p','q','r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    }

    let res = []
    const dfs = (pos, word) => {

        if (word.length == digits.length) {
            res.push(word)
            return
        }

        let letters = hash[parseInt(digits[pos])]
        for (let j = 0; j < letters.length; j++)
            dfs(pos+1, word+letters[j])
    }

    dfs( 0, "")

    return res
    
};