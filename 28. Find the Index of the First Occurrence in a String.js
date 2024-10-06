/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {

    let i = 0, j = 0; 
    let prevSI = -1
    while ( i < haystack.length && j < needle.length ) {

        if (haystack[i] == needle[j]) {
            j++
            if (prevSI == -1 && j != 0 && needle[0] == haystack[i]) {
                prevSI = i
            }
        }
        else {
            j = 0
            i = prevSI != -1? prevSI : i
            prevSI = -1
        }
        if (j == needle.length) return i - (needle.length - 1)
        i++

      
    }

    return -1
    
};