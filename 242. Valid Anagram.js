/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    let map = {}

    let i = 0;

    if ( s.length != t.length ) return false

    while (i < s.length) {

        if (map[s[i]] == undefined) {
            map[s[i]] = 1
        }
        else {
            map[s[i]]++
        }
        i++        
    }

    i = 0; 

    while (i < t.length) {

        if (map[t[i]] != undefined && map[t[i]] > 0) {
            map[t[i]]--
        }
        else {
            return false;
        }
        i++
    }

    return true;
    
};