/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {

    let intervals = points
    if (intervals.length == 1) return intervals.length

    intervals = intervals.sort((a, b) => a[0] - b[0])

    let leftInterval = intervals[0], currInterval
    let i = 1;
    let res = new Set();
    while (i < intervals.length) {
        currInterval = intervals[i]
        //overlapping
        if (leftInterval[1] >= currInterval[0] && currInterval[1] >= leftInterval[0]) {
            let first = Math.max(leftInterval[0], currInterval[0])
            let second = Math.min(leftInterval[1], currInterval[1])
            leftInterval = [first, second]
        }
        else { // not overlapping
            res.add(leftInterval[0] + '-' + leftInterval[1])
            leftInterval = currInterval
        }
        i++

    }
    res.add(leftInterval[0] + '-' + leftInterval[1])

    return res.size
}