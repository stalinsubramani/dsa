/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    let smallestStringLen = 201;

    for (let i = 0; i < strs.length; i++) {

        smallestStringLen = Math.min(strs[i].length, smallestStringLen)
    }

    let i = 0
    for(; i < smallestStringLen; i++) {

        let ch = strs[0].charAt(i)
        let isSame = true;
        for (let j = 0; j < strs.length; j++) {

            if (strs[j].charAt(i) !== ch) {
                isSame = false
                break;
            }
        }

        if (isSame == false) break;
    }

    return strs[0].substr(0, i)
};