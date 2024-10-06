/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {

    let r = ['IV', 'IX', 'XL', 'XC', 'CD', 'CM', 'M', 'D', 'C', 'L', 'X', 'V', 'I']
    let map = {
        'IV': 4, 'IX': 9, 'XL': 40, 'XC': 90, 'CD': 400, 'CM':900, 'M':1000, 'D':500, 'C':100, 'L':50, 'X':10, 'V':5, 'I':1
    }

    let i = 0, val = 0
    while(i < s.length) {

        if (i+1 < s.length && map[s.charAt(i)+s.charAt(i+1)]) {
            val += map[s.charAt(i)+s.charAt(i+1)]
            i+=2
        }
        else {
            val += map[s.charAt(i)]
            i++
        }
    }
    
    return val
};