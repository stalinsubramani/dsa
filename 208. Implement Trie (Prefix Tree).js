
function TrieNode() {
    this.childrens = {}
    this.isEnd = false
}

var Trie = function() {

    this.root = new TrieNode()
    
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    
    let i = 0
    let node = this.root;
    while ( i < word.length ) {

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
Trie.prototype.search = function(word) {
    
    let node = this.root

    let i = 0
    while(i < word.length ) {

        let ch = word.charAt(i)
        if (node.childrens[ch] == undefined) return false
        node = node.childrens[ch]
        i++
    }

    if (node.isEnd) return true
    return false
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    
     let node = this.root

    let i = 0
    while(i < prefix.length ) {

        let ch = prefix.charAt(i)
        if (node.childrens[ch] == undefined) return false
        node = node.childrens[ch]
        i++
    }

    return true
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */