
function TrieNode() {
    this.childrens = {}
    this.isEnd = false
}

var WordDictionary = function () {
    this.root = new TrieNode()

};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
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

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {

    let n = this.root

    const searchInWords = (w, node) => {

        if (!node) return false
        if (!w && node.isEnd) return true

        let i = 0
        while (i < w.length && node) {

            let ch = w.charAt(i)
            if (ch == '.') {

                let childrens = Object.keys(node.childrens)
                for (let j = 0; j < childrens.length; j++) {
                    if (searchInWords(w.slice(i+1), node.childrens[childrens[j]])) {
                        return true
                    }
                }

                return false
            }
            else {

                if (node.childrens[ch] == undefined) return false
                node = node.childrens[ch]
            }
            i++
        }

        if (node && node.isEnd) return true
        return false
    }

    return searchInWords(word, n)
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */