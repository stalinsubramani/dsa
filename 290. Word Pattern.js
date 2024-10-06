/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {

    let words = s.split(' ')
    let map = {}
    let wordUsed = new Set()

    if (pattern.length != words.length) return false

    let i = 0, len = words.length

    while (i < len) {

        if (map[pattern.charAt(i)] == undefined && !wordUsed.has(words[i])) {
            map[pattern.charAt(i)] = words[i]
            wordUsed.add(words[i])
        }
        else if (map[pattern.charAt(i)] != words[i]) {
            return false
        }
        i++
    }

    return true
};