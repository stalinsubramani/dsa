/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */


function TrieNode() {
    this.childrens = {}
    this.isEnd = false
}

var findWords = function (board, words) {

    this.root = new TrieNode()
    let set = new Set()
    let res = new Set()

    const addWord = function (word) {

        set.add(word.charAt(0))

        let i = 0
        let node = this.root;
        while (i < word.length) {

            let ch = word.charAt(i)
            if (node.childrens[ch] == undefined) {
                node.childrens[ch] = new TrieNode()
            }

            node = node.childrens[ch]
            i++
        }

        node.isEnd = true;
    };

    const search = function (word) {

        let node = this.root

        let i = 0
        while (i < word.length) {

            let ch = word.charAt(i)
            if (node.childrens[ch] == undefined) return false
            node = node.childrens[ch]
            i++
        }

        if (node.isEnd) return true
        return false
    };

    let ROWS = board.length
    let COLS = board[0].length
    let visited = new Set()


    const traverse = function (node, word, r, c) {

        if (r < 0 || r == ROWS || c < 0 || c == COLS || visited.has(r + '-' + c) ) return


        let n = node.childrens[board[r][c]]
        if (n == undefined) return;

        visited.add(r + '-' + c)

        if (n.isEnd) {
            res.add(word + board[r][c])
        }

        traverse(n, word + board[r][c], r, c + 1)
        traverse(n, word + board[r][c], r + 1, c)
        traverse(n, word + board[r][c], r, c - 1)
        traverse(n, word + board[r][c], r - 1, c)

        visited.delete(r + '-' + c)

        if (Object.keys(n.childrens).length == 0) {
            delete node.childrens[board[r][c]]
        }
    }


    for (let i = 0; i < words.length; i++) {
        addWord(words[i])

    }



    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {

            if (set.has(board[i][j])) {

                traverse(this.root, "", i, j)
            }
        }
    }

    return [...res]

};