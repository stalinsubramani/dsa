/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {

    let graph = new Map()
    let wordSet = new Set()

    wordSet.add(beginWord)
    for (let i = 0; i < wordList.length; i++) {
        wordSet.add(wordList[i])
    }

    wordList.push(beginWord)
    for (let i = 0; i < wordList.length; i++) {

        let j = 0
        let word = wordList[i]
        while (j < beginWord.length) {

            let key = word.slice(0, j) + '*' + word.slice(j + 1)
            if (graph.has(key)) {
                graph.get(key).push(word)
            }
            else {
                graph.set(key, [word])
            }
            j++
        }
    }

    let AL = new Map()
    for (let i = 0; i < wordList.length; i++) {

        let j = 0
        let word = wordList[i]
        AL.set(word, new Set())
        while (j < beginWord.length) {

            let key = word.slice(0, j) + '*' + word.slice(j + 1)
            if (graph.has(key)) {
                for (let val of graph.get(key)) {
                    AL.get(word).add(val)
                }
            }
            j++
        }
    }



    let visited = new Set()
    let q = [[beginWord, 1]]
    visited.add(beginWord)
    while (q.length > 0) {

        let [word, count] = q.shift()
        if (word === endWord) {
            return count
        }

        let nei = AL.get(word)
        for (let w of nei) {
            if (!visited.has(w)) {
                q.push([w, count + 1])
                visited.add(w)
            }
        }
    }

    return 0
};