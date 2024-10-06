/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

    const isAlphaNumbericChar = (a) => {
        if ((a.toLowerCase() >= 'a' && a.toLowerCase() <= 'z') || (a >= '0' && a <= '9')) {
            return true
        }

        return false;
    }

    const isEqual = (a, b) => {

        if (a.toLowerCase() === b.toLowerCase()) {
            return true
        }

        return false;
    }


    let i = 0, j = s.length - 1

    while (i < j) {

        if (!isAlphaNumbericChar(s.charAt(i))) {
            i++;
            continue
        }
        if (!isAlphaNumbericChar(s.charAt(j))) {
            j--
            continue
        }
        if (isEqual(s.charAt(i), s.charAt(j))) {
            i++
            j--
        }
        else {
            return false
        }
        
    }


    return true
    
};