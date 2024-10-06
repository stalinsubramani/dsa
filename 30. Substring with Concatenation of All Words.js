/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {

    let map = {}
    let f = {}
    let frequency = {}
    let wLen = words[0].length

    words.forEach(word => {
        let firstChar = word.charAt(0);
        map[firstChar] = (map[firstChar] || 0) + 1;
    });


    words.forEach(word => {
        f[word] = (f[word] || 0) + 1;
    });

    frequency = { ...f }

    let l = 0, r = 0
    let res = []
    while (l <= r && r < s.length) {

        if (map[s.charAt(r)] == undefined) {
            l++
            r = l
            continue
        }

        if (l == r) {
            f = { ...frequency }
        }

        let ss = s.substr(r, wLen)
        if (f[ss] != undefined && f[ss] > 0) {
            f[ss]--
            r += wLen

            if (r - l == wLen * words.length) {
                res.push(l)
                f[s.substr(l, wLen)] += frequency[s.substr(l, wLen)]
                l = l + 1
                r = l

            }
        }
        else {
            l = l + 1
            r = l
        }

    }

    return res

};