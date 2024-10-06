/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    
    let h = new Array(1001).fill(0)

    for (let i = 0; i < citations.length; i++) {

        if ( citations[i] != 0 )
            h[citations[i]]++
    
    }

    for (let i = 999; i >= 0; i--) {

        h[i] += h[i + 1]
    }

    for (let i = 1000; i >= 0; i--) {

        if (h[i] >= i) return i
    }

    return 1
};