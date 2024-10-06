/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {

    let hash = {}
    let bucket = {}

    let i = 0;


    while (i < strs.length) {

        let letterHash = new Array(26).fill('')
        let w = strs[i]
        for (let l = 0; l < w.length; l++) {
            if (letterHash[w.charCodeAt(l) - 97] == '') {
                letterHash[w.charCodeAt(l) - 97] = 1
            }
            else 
                letterHash[w.charCodeAt(l) - 97]++
        }

        let key = letterHash.join("-")

        if (bucket[key] == undefined) {
            bucket[key] = [w]
        }
        else {
            (bucket[key]).push(w)
        }
        i++
    }

    let res = []
    let keys = Object.keys(bucket)
    for (let i = 0; i < keys.length; i++) {

        res.push(bucket[keys[i]])
    }

    return res
};