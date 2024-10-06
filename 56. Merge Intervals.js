/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {

    if (intervals.length == 1) return intervals

    intervals = intervals.sort((a, b) => a[0] - b[0])

    let leftInterval = intervals[0], currInterval
    let i = 1;
    let res = []
    while (i < intervals.length) {
        currInterval = intervals[i]
        //overlapping
        if (leftInterval[1] >= currInterval[0] && currInterval[1] >= leftInterval[0]) {
            let first = Math.min(leftInterval[0], currInterval[0])
            let second = Math.max(leftInterval[1], currInterval[1])
            leftInterval = [first, second]
        }
        else { // not overlapping
            res.push(leftInterval)
            leftInterval = currInterval
        }
        i++
    }
    let first = Math.min(leftInterval[0], currInterval[0])
    let second = Math.max(leftInterval[1], currInterval[1])

    res.push([first, second])



    return res

};