/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {

    let ps = []
    let i = 0, j = 0
    ps.push(words[0].length)
    for (i = 1; i < words.length; i++) {
        ps.push(ps[i - 1] + words[i].length)
    }
    const fillSpace = (res, count) => {
        let i = 0;
        while (i < count && res.length < maxWidth) {
            res += ' '
            i++
        }
        return res
    }

    

    i = j = 0
    let result = []
    let prevSum = 0

    const lastLine = () => {
        let res = ''
        while (i <= j) {
            res += words[i];
            if (i != j)
                res = fillSpace(res, 1)
            i++
        }
        result.push(fillSpace(res, maxWidth));
    }

    const getSpaceDistributionWindow = (noOfWords) => {

        if (noOfWords == 1) return 1;
        return noOfWords - 1
    }

    while (j < ps.length) {
        
        let res = ""
        if (maxWidth - ((ps[j] - prevSum) + (j - i)) >= 0 && j == ps.length - 1) {
                lastLine()
                break;
        }

        if (maxWidth - ((ps[j] - prevSum) + (j - i)) < 0) {

            let noOfWords = j - i <= 0 ? 1 : j - i
            totalCharCount = (ps[j - 1] - prevSum)
            spaceDistribution = Math.floor((maxWidth - totalCharCount) / getSpaceDistributionWindow(noOfWords))
            extraSpace = (maxWidth - totalCharCount) % getSpaceDistributionWindow(noOfWords)
            let l = 0
            while (l < noOfWords) {
                res += words[i + l]
                res = fillSpace(res, spaceDistribution)
                if (extraSpace > 0) {
                    res = fillSpace(res, 1)
                    extraSpace--;
                }
                l++
            }
            prevSum = ps[j - 1]
            i = j
            result.push(fillSpace(res, maxWidth))

        }
        else {
            j++
        }
    }
    return result
};