/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {

    let r = s.length - 1
    let end = r;

    while (r > 0 && s.charAt(r) == ' ') {
       r--
    }

    end = r;
    while (r >= 0 && s.charAt(r) != ' ') {
        r--
    }

    return end - r
};