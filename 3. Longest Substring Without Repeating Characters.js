/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

    let map = {}
    let l = 0, r = 0
    let max = 1;
    if (s.length == 0) return 0
    while ( r < s.length && l <= r ) {

        if (map[s.charAt(r)] == undefined) {

            max = Math.max(max, r-l+1)
            map[s.charAt(r)] = r
            r++

        }
        else {
            l = map[s.charAt(r)] + 1
            r = l
            map = {}
        }
    }

    return max
    
};