/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {

    let str = []
    let r = s.length - 1

    s = s.trim()

    for (let i = s.length - 1; i >= 0; i--) {

        // i + 1 character will be the start of the new word
        while(i >= 0 && s.charAt(i) != ' ') {
            i--
        }

        let k = i + 1

        while(k < s.length && s.charAt(k) != ' ') {
            str.push(s.charAt(k))
            k++
        }

        if (i+1 != k) str.push(' ')
    }
    
    return str.join('').trim()
};