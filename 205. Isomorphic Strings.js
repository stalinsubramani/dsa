/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {

    let sMap = {}, tMap = {}
    let i = 0;

    while (i < s.length) {

        (sMap[s.charAt(i)] = sMap[s.charAt(i)] || []).push(i);
        (tMap[t.charAt(i)] = tMap[t.charAt(i)] || []).push(i);
        i++
    }

    let map = {}

    i = 0;
    let keys = Object.keys(sMap)
    while (i < keys.length) {
        let key = sMap[keys[i]].join('-')
        map[key] = true
        i++
    }

    keys = Object.keys(tMap)
    i = 0;
    while (i < keys.length) {
        let key = tMap[keys[i]].join('-')
        if (map[key] == undefined) return false
        i++
    }

    return true




};