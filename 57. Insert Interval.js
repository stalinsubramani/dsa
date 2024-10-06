/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {


    if (intervals.length == 0) return [newInterval]
    let i = 0;
    let res = []
    while (i < intervals.length) {
        let interval = intervals[i]
        //not overlapping
        if (interval[1] < newInterval[0] || newInterval[1] < interval[0]) {

            if (interval[0] < newInterval[0]) {

                res.push(interval)
            }
            else {

                break;
            }
        }
        else {

            let first = Math.min(interval[0], newInterval[0])
            let second = Math.max(interval[1], newInterval[1])

            newInterval = [first, second]
        }

        i++
    }

    res.push(newInterval)
    for (; i < intervals.length; i++) {
        res.push(intervals[i])
    }

    return res

};